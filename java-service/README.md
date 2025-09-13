# Java Service

This directory contains the Java microservice for the ms-ecommerce project.

## Features
- Place orders
- List orders
- Dockerfile for containerization
- Ready for deployment in Kubernetes

## Getting Started
1. Build the project:
   ```bash
   mvn clean package
   ```
2. Run the service:
   ```bash
   java -jar target/java-service-0.0.1-SNAPSHOT.jar
   ```

## Docker
Build and run the Docker container:
```bash
docker build -t java-service .
docker run -p 8080:8080 java-service
```

## Kubernetes
See the `../k8s/` directory for manifests to deploy this service.

## Example Endpoints
- `/health` - Health check endpoint
- `/orders` (GET) - List orders
- `/orders` (POST) - Place order (`{"cart": [...]}`)

## Usage with React UI
This service should be running on port 8080 for the React UI to connect.

## License
MIT
