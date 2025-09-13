# Python Service

This directory contains the Python microservice for the ms-ecommerce project.

## Features
- List products
- Add products to cart
- View and clear cart
- Dockerfile for containerization
- Ready for deployment in Kubernetes

## Getting Started
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the service:
   ```bash
   python app.py
   ```

## Docker
Build and run the Docker container:
```bash
docker build -t python-service .
docker run -p 5000:5000 python-service
```

## Kubernetes
See the `../k8s/` directory for manifests to deploy this service.

## Example Endpoints
- `/health` - Health check endpoint
- `/products` - List products
- `/cart` (GET) - View cart
- `/cart` (POST) - Add product to cart (`{"product_id": 1}`)
- `/cart` (DELETE) - Clear cart

## Usage with React UI
This service should be running on port 5000 for the React UI to connect.

## License
MIT
