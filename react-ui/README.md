# Simple React UI for E-Commerce

This React app lets you browse products, add to cart, and place orders using the Python and Java microservices.

## How to Run

1. Install dependencies:
   ```bash
   cd react-ui
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- List products (from Python service)
- Add products to cart
- Place orders (sent to Java service)
- View order history

## Requirements
- Python service running on port 5000
- Java service running on port 8080

## Customization
Endpoints are hardcoded for local development. Update `API_BASE` in `src/App.js` if needed.
