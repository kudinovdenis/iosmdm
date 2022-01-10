package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

func main() {
	// Waiting for Docker logs grabber to attach
	log.Print("Web server is up.")
	time.Sleep(1 * time.Second)

	rootRouter := mux.NewRouter()
	rootRouter.PathPrefix("/").Handler(http.FileServer(http.Dir("wwwroot")))

	log.Fatal(http.ListenAndServe(":8081", rootRouter))
}
