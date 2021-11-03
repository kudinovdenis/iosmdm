package main

import (
	"github.com/gorilla/mux"
	"github.com/kudinovdenis/iosmdm/submodules/mdmserver"
	"log"
	"net/http"
	"net/http/httputil"
)

func handleOther(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	w.WriteHeader(http.StatusForbidden)
}

func handleMDMServer(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	log.Print(mdmserver.Some)

	w.WriteHeader(http.StatusOK)
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
	rootRouter := mux.NewRouter()
	mdmRouter := rootRouter.PathPrefix("/server")
	mdmRouter.HandlerFunc(handleMDMServer)

	unknownDestinationRouter := rootRouter.PathPrefix("/")
	unknownDestinationRouter.HandlerFunc(handleOther)

	log.Fatal(http.ListenAndServe(":8080", rootRouter))
}