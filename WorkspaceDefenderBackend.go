package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/http/httputil"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/kudinovdenis/iosmdm/mdmserver"
)

var devicesController mdmserver.DevicesControllerI = mdmserver.NewDevicesController()
var checkinProcessor mdmserver.CheckinProcessorI = mdmserver.NewProcessor(devicesController)
var mdmServer = mdmserver.NewServer(checkinProcessor)

// MDM handlers

func handleMDMServerRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	mdmServer.ProcessRequest(w, r)
}

// Backend (for frontend) handlers

func handleBackendServerRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	mdmServer.ProcessRequest(w, r)
}

func handleDevicesBackendServerRequest(w http.ResponseWriter, r *http.Request) {
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
	logRequest(r)
	w.WriteHeader(http.StatusForbidden)
}

// Main

func main() {
	// Waiting for Docker logs grabber to attach
	time.Sleep(1 * time.Second)

	rootRouter := mux.NewRouter()
	mdmRouter := rootRouter.PathPrefix("/server") // for MDM device
	mdmRouter.HandlerFunc(handleMDMServerRequest)

	backendRouter := rootRouter.PathPrefix("/backend") // for frontend
	backendRouter.HandlerFunc(handleBackendServerRequest)

	devicesRouter := backendRouter.PathPrefix("/devices")
	devicesRouter.HandlerFunc(handleDevicesBackendServerRequest).Methods("GET")

	unknownDestinationRouter := rootRouter.PathPrefix("/")
	unknownDestinationRouter.HandlerFunc(handleOther)

	// Where ORIGIN_ALLOWED is like `scheme://dns[:port]`, or `*` (insecure)
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(rootRouter)))
}
