cd web/ts; tsc --build --clean ./tsconfig.json;
tsc --build --force ./tsconfig.json;
cd ../../
printf '%s\n' y | docker compose rm
docker compose -f ./docker-compose.dev.yaml up --build
