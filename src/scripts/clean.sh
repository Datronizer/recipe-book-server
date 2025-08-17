docker kill "recipe-book-server" || true
docker rm "recipe-book-server" || true

docker kill "recipe-book-server-admin" || true
docker rm "recipe-book-server-admin" || true

docker network rm "recipe-book-network" || true
