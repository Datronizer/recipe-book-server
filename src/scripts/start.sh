



# Silly goose, you have to terminate containers before starting them again
echo "Stopping containers...";
docker stop recipe-book-server-admin;
docker stop recipe-book-server;


## Re-runs containers if they exist
echo "Starting containers...";
docker start recipe-book-server;
docker start recipe-book-server-admin;



## Apparently `run` creates containers, so this section is for creating
# Fire up container for Postgres first
create_postgres_container() {
  docker run \
    --name recipe-book-server \
      -e POSTGRES_USER=root \
      -e POSTGRES_PASSWORD=root \
      -e POSTGRES_DB=test \
    -p 5432:5432 \
    -d postgres;
}

# Fire up PGAdmin
create_pgadmin_container() {
  docker run \
    --name recipe-book-server-admin \
      -e PGADMIN_DEFAULT_EMAIL=admin@admin.com \
      -e PGADMIN_DEFAULT_PASSWORD=admin \
    -p 8080:80 \
    -d dpage/pgadmin4;
}


## If containers are already running, skip creation
if [ "$(docker ps -q -f name=recipe-book-server)" ]; 
then
    echo "Container recipe-book-server is already running. Skipping creation..."
else
    echo "Container recipe-book-server not found. Assuming user wants to create new."
    echo "Creating container recipe-book-server"
    create_postgres_container
fi


if [ "$(docker ps -q -f name=recipe-book-server-admin)" ]; 
then
    echo "Container recipe-book-server-admin is already running. Skipping creation..."
else
    echo "Container recipe-book-server-admin not found. Assuming user wants to create new."
    echo "Creating container recipe-book-server-admin" 
    create_pgadmin_container
fi


# npm run start:dev