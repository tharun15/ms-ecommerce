# ms-ecommerce Demo Project

This is a beginner-friendly microservices e-commerce demo using Python, Java, and React.

## Architecture
- **python-service**: Product catalog and cart (Flask)
- **java-service**: Order management (Spring Boot)
- **react-ui**: Simple web UI (React)

## How to Run Locally
1. Start both microservices:
   ```bash
   bash run-all-local.sh
   ```
   - Python: http://localhost:5000
   - Java: http://localhost:8080
2. Start the React UI:
   ```bash
   cd react-ui
   npm install
   npm start
   ```
   - UI: http://localhost:3000

## How to Run with Docker
```bash
bash run-all-docker.sh
```

## How to Deploy to Kubernetes & Istio
```bash
bash deploy-all-k8s.sh
```

## Features
- Browse products
- Add to cart
- Place orders
- View order history

## Tech Stack
- Python (Flask)
- Java (Spring Boot)
- React
- Docker, Kubernetes, Istio

## For Demo/Presentation
- Show separation of concerns (catalog/cart vs. orders)
- Show REST API integration with React UI
- Show how microservices communicate via HTTP

## License
MIT
