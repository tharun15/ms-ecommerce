# E-Commerce Microservices: Docker, Kubernetes, and Istio Setup

## Docker

To build and run both microservices in Docker containers:

```bash
bash run-all-docker.sh
```
- Python service: exposed on port 5000
- Java service: exposed on port 8080

## Kubernetes & Istio

To deploy both microservices and Istio gateway to Kubernetes:

```bash
bash deploy-all-k8s.sh
```
- Python and Java services will be deployed as pods and services
- Istio gateway and virtual services will route traffic

## Requirements
- Docker installed and running
- Kubernetes cluster (e.g., minikube, kind, or cloud)
- Istio installed in your cluster

## React UI
- The React UI can be run locally and will connect to the services on the specified ports

## Notes
- For production, update image names and manifests as needed
- For local development, ensure ports 5000 and 8080 are accessible
