FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
COPY Static ./

RUN go mod download

COPY *.go ./

RUN go build -o WorkspaceDefenderBackend

EXPOSE 8080

CMD ["./WorkspaceDefenderBackend"]