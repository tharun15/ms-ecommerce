#!/bin/bash
# Build and run Python and Java microservices with Docker

docker build -t python-service ./python-service

docker build -t java-service ./java-service

docker run -d -p 5000:5000 --name python-service python-service

docker run -d -p 8080:8080 --name java-service java-service

echo "Both microservices are running in Docker containers."
