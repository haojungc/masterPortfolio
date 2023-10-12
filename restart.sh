#!/bin/bash

image=masterportfolio-sample
name=web

docker container stop "$name"
docker container rm "$name"
docker compose build
docker container run -t -d -p 3000:3000 --name "$name" "$image"
