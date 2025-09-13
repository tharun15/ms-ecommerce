
from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# In-memory data for demo purposes
products = [
    {'id': 1, 'name': 'Laptop', 'price': 999.99},
    {'id': 2, 'name': 'Phone', 'price': 499.99},
    {'id': 3, 'name': 'Headphones', 'price': 79.99}
]
cart = []

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/cart', methods=['GET'])
def get_cart():
    return jsonify(cart)

@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    product_id = data.get('product_id')
    product = next((p for p in products if p['id'] == product_id), None)
    if product:
        cart.append(product)
        return jsonify({'message': 'Added to cart', 'product': product}), 201
    else:
        return jsonify({'error': 'Product not found'}), 404

@app.route('/cart', methods=['DELETE'])
def clear_cart():
    cart.clear()
    return jsonify({'message': 'Cart cleared'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
