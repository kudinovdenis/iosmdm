package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/http/httputil"
	"os"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/kudinovdenis/iosmdm/mdmserver"
)

var devicesController mdmserver.DevicesControllerI = mdmserver.NewDevicesController()
var checkinProcessor mdmserver.CheckinProcessorI = mdmserver.NewProcessor(devicesController)
var mdmMessageProcessor mdmserver.MdmMessageProcessorI = mdmserver.NewMdmMessageProcessor(devicesController)
var mdmServer = mdmserver.NewServer(checkinProcessor, mdmMessageProcessor)

// MDM handlers

func handleMDMServerRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	mdmServer.ProcessRequest(w, r)
}

// Backend (for frontend) handlers

func handleDevicesRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	devices := devicesController.AllDevices()

	w.WriteHeader(http.StatusOK)
	jsonData, err := json.Marshal(devices)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(jsonData)
}

func handleDeviceRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	params := mux.Vars(r)
	deviceId := params["id"]

	w.WriteHeader(http.StatusOK)
	jsonData, err := json.Marshal(deviceId)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(jsonData)
}

func handleDeviceApplicationsRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	params := mux.Vars(r)
	deviceId := params["id"]

	device := devicesController.DeviceWithUDID(deviceId)
	if device == nil {
		http.Error(w, "Device not found", http.StatusInternalServerError)
		return
	}

	devicesController.InstalledApplicationsList(*device, func(installedApplicationList []mdmserver.InstalledApplication) {
		log.Printf("Received applications: %+v", installedApplicationList)

		w.WriteHeader(http.StatusOK)
		jsonData, err := json.Marshal(installedApplicationList)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Write(jsonData)
	})
}

// Misc

func logRequest(r *http.Request) {
	dumpResult, err := httputil.DumpRequest(r, true)

	if err != nil {
		log.Print("Unable to dump request")
		return
	}

	log.Print(string(dumpResult))
}

func handleOther(w http.ResponseWriter, r *http.Request) {
	log.Print("Handling unknown path")
	logRequest(r)
	w.WriteHeader(http.StatusForbidden)
}

// Main

func main() {
	// Waiting for Docker logs grabber to attach
	time.Sleep(1 * time.Second)

	rootRouter := mux.NewRouter()
	// rootRouter.StrictSlash(false) -> this does not support Methods other than GET. So not using this.

	mdmRouter := rootRouter.PathPrefix("/server").Subrouter() // for MDM device
	mdmRouter.HandleFunc("", handleMDMServerRequest)
	mdmRouter.HandleFunc("/", handleMDMServerRequest)

	backendRouter := rootRouter.PathPrefix("/backend").Subrouter() // for frontend

	devicesRouter := backendRouter.PathPrefix("/devices").Subrouter()
	devicesRouter.HandleFunc("", handleDevicesRequest)
	devicesRouter.HandleFunc("/", handleDevicesRequest)
	devicesRouter.HandleFunc("/{id}", handleDeviceRequest)
	devicesRouter.HandleFunc("/{id}/", handleDeviceRequest)
	devicesRouter.HandleFunc("/{id}/applications", handleDeviceApplicationsRequest)
	devicesRouter.HandleFunc("/{id}/applications/", handleDeviceApplicationsRequest)

	rootRouter.NotFoundHandler = http.HandlerFunc(handleOther)

	isDebug := os.Getenv("DEBUG")
	log.Printf("isDebug: %+s. It is doing nothing for now.", isDebug)

	// Where ORIGIN_ALLOWED is like `scheme://dns[:port]`, or `*` (insecure)
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	log.Fatal(http.ListenAndServe(":8082", handlers.CORS(originsOk, headersOk, methodsOk)(rootRouter)))
}
