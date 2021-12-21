rm -r ./web/wwwroot/js
cd web/ts; tsc --build --clean; tsc; cd ../../
printf '%s\n' y | docker compose rm
docker compose -f ./docker-compose.dev.yaml up --build
