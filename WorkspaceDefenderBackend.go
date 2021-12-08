package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"time"

	"github.com/gorilla/mux"
	"github.com/kudinovdenis/iosmdm/mdmserver"
)

var mdmServer = mdmserver.NewServer()

func handleOther(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	w.WriteHeader(http.StatusForbidden)
}

func handleMDMServerRequest(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	mdmServer.ProcessRequest(w, r)
}

func logRequest(r *http.Request) {
	dumpResult, err := httputil.DumpRequest(r, true)

	if err != nil {
		log.Print("Unable to dump request")
		return
	}

	log.Print(string(dumpResult))
}

func main() {
	// Waiting for Docker logs grabber to attach
	time.Sleep(1 * time.Second)

	rootRouter := mux.NewRouter()
	mdmRouter := rootRouter.PathPrefix("/server")
	mdmRouter.HandlerFunc(handleMDMServerRequest)

	unknownDestinationRouter := rootRouter.PathPrefix("/")
	unknownDestinationRouter.HandlerFunc(handleOther)

	log.Fatal(http.ListenAndServe(":8080", rootRouter))
}
