package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

func handleKESInstallPage(w http.ResponseWriter, r *http.Request) {
	installToken := r.URL.Query().Get("installToken")

	if installToken == "" {
		w.Write([]byte("No installToken query parameter"))
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	log.Printf("Got installToken Query parameter: %+s", installToken)

	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	content := fmt.Sprintf(`<!DOCTYPE HTML>
	<html lang="en-US">
		<head>
			<meta charset="UTF-8">
			
			<script type="text/javascript">
				function onRedirectToAppStore() {
					navigator.clipboard.writeText('qr_install_token=%+s');
				}
	
				window.onload = function() {
					let appstoreButton = document.getElementById('appstorebtn')
					appstoreButton.click()
					window.location.replace('https://app.appsflyer.com/id666853180?pid=klmyk&amp;c=nogeo_0_link')
				}
			</script>
			<title>Page Redirection</title>
		</head>
		<body>
			If you are not redirected automatically, follow this <a href='https://app.appsflyer.com/id666853180?pid=klmyk&amp;c=nogeo_0_link'>link to appstore</a>.
	
			<div class="appstore" id="appstorebtn" onclick="onRedirectToAppStore()">
				<a href="https://app.appsflyer.com/id666853180?pid=klmyk&amp;c=nogeo_0_link">
					<img src="https://my.kaspersky.com/Frontend/assets/images/downloads/app-store/en.svg" alt="Apple" title="Apple">
				</a>
			</div>
		</body>
	</html>`, installToken)

	fmt.Fprint(w, content)
}

func main() {
	// Waiting for Docker logs grabber to attach
	log.Print("Web server is up.")
	time.Sleep(1 * time.Second)

	rootRouter := mux.NewRouter()
	rootRouter.PathPrefix("/").Handler(http.FileServer(http.Dir("wwwroot")))
	rootRouter.HandleFunc("/kes_ios", handleKESInstallPage)

	log.Fatal(http.ListenAndServe(":8081", rootRouter))
}
