package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
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
				window.onload = function() {
					navigator.clipboard.writeText('qr_install_token=%+s');
					window.location.replace('https://apps.apple.com/ru/app/testflight/id899247664')
				}
			</script>
			<title>Page Redirection</title>
		</head>
		<body>
			You are being redirected to Testflight...
		</body>
	</html>`, installToken)

	fmt.Fprint(w, content)
}

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
	w.WriteHeader(http.StatusForbidden)
}

func logMiddleWare(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		logRequest(r)
		next.ServeHTTP(rw, r)
	})
}

func main() {
	// Waiting for Docker logs grabber to attach
	log.Print("Web server is up.")
	time.Sleep(1 * time.Second)

	rootRouter := mux.NewRouter()

	rootRouter.Use(logMiddleWare)

	rootRouter.HandleFunc("/kes_ios", handleKESInstallPage)
	rootRouter.HandleFunc("/kes_ios/", handleKESInstallPage)
	// Should be last, otherwise will override previous routes
	rootRouter.PathPrefix("/").Handler(http.FileServer(http.Dir("wwwroot")))

	rootRouter.NotFoundHandler = http.HandlerFunc(handleOther)

	log.Fatal(http.ListenAndServe(":8081", rootRouter))
}
