FROM golang:1.16-alpine

WORKDIR /backend

COPY go.mod ./
COPY go.sum ./
COPY Static ./

# RUN apk add git

COPY . .

RUN go mod download

RUN go build -o defender

EXPOSE 8082

CMD [ "./defender" ]