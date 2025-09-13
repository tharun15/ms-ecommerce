import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products from Python service
  useEffect(() => {
    fetch(`${API_BASE}:5000/products`)
      .then(res => res.json())
      .then(setProducts);
    fetch(`${API_BASE}:5000/cart`)
      .then(res => res.json())
      .then(setCart);
    fetch(`${API_BASE}:8080/orders`)
      .then(res => res.json())
      .then(setOrders);
  }, []);

  // Add product to cart
  const addToCart = async (productId) => {
    setLoading(true);
    await fetch(`${API_BASE}:5000/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id: productId })
    });
    const res = await fetch(`${API_BASE}:5000/cart`);
    setCart(await res.json());
    setLoading(false);
  };

  // Place order
  const placeOrder = async () => {
    setLoading(true);
    await fetch(`${API_BASE}:8080/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart })
    });
    setCart([]);
    const res = await fetch(`${API_BASE}:8080/orders`);
    setOrders(await res.json());
    setLoading(false);
  };

  // Clear cart
  const clearCart = async () => {
    setLoading(true);
    await fetch(`${API_BASE}:5000/cart`, { method: 'DELETE' });
    setCart([]);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial' }}>
      <h1>Simple E-Commerce App</h1>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} (${p.price})
            <button onClick={() => addToCart(p.id)} disabled={loading} style={{ marginLeft: 10 }}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c.name} (${c.price})</li>
        ))}
      </ul>
      <button onClick={placeOrder} disabled={loading || cart.length === 0}>Place Order</button>
      <button onClick={clearCart} disabled={loading || cart.length === 0} style={{ marginLeft: 10 }}>Clear Cart</button>
      <h2>Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>Order #{o.id} - {o.status} - {Array.isArray(o.cart) ? o.cart.length : 0} items</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
