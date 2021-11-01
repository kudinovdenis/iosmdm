package main

import (
	"encoding/json"
	"log"
	"net"
	"net/http"
	"path"
	"strings"
)

type SimpleResponse struct {
	Title string
	Result []string
}

func handler(w http.ResponseWriter, r *http.Request) {
	log.Print("Access to " + r.URL.String())
	if strings.Contains(r.URL.Path, "profile") {
		// serve file
		w.Header().Set("Content-Disposition", "attachment; filename=WorkspaceDefender.mobileconfig")
		w.Header().Set("Content-Type", r.Header.Get("Content-Type"))
		filePath := path.Join("Static/Profile/WorkspaceDefender.mobileconfig")
		http.ServeFile(w, r, filePath)
	} else {
		response := SimpleResponse{Title: "Africa", Result: []string{"a", "b", r.URL.String()}}
		w.WriteHeader(http.StatusOK)

		jsonData, err := json.Marshal(response)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Write(jsonData)
	}
}

// Get preferred outbound ip of this machine
func GetOutboundIP() net.IP {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)

	return localAddr.IP
}

func main() {
	log.Print(GetOutboundIP())
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}