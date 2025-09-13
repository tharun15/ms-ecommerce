#!/bin/bash
# Deploy Python and Java microservices and Istio config to Kubernetes

kubectl apply -f k8s/python-service.yaml
kubectl apply -f k8s/java-service.yaml
kubectl apply -f k8s/istio.yaml

echo "Both microservices and Istio gateway are deployed to Kubernetes."
