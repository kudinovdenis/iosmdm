docker-compose stop
printf '%s\n' y | docker-compose rm
docker-compose up --build
