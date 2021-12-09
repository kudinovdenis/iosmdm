cd web/ts; tsc; cd ../../;
printf '%s\n' y | docker compose rm
docker compose -f ./docker-compose.dev.yaml up --build
