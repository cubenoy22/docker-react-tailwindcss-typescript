#\!/bin/sh
CONTAINER_NAME="cubenoy22/docker-react-tailwindcss-ts-template"
CONTAINER_PORT=3000
HOST_PORT=3000
docker build -t $CONTAINER_NAME .
docker run -v `pwd -P`/app:/app:delegated --rm -p $CONTAINER_PORT:$HOST_PORT -it $CONTAINER_NAME
