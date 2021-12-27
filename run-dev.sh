cd web/ts; tsc --build --clean ./tsconfig.json;
tsc --build --force ./tsconfig.json;
cd ../../

cp -r web/ts/node_modules web/wwwroot/js

printf '%s\n' y | docker compose rm
docker compose -f ./docker-compose.dev.yaml up --build
