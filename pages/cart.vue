<template>
    <div class="page">
      <h1>Your Cart</h1>
      <div v-if="cart.items.length === 0">🛒 No items yet.</div>
      <div v-else class="cart-list">
        <div v-for="item in cart.items" :key="item.name" class="cart-item">
          <h3>{{ item.name }} (x{{ item.quantity }})</h3>
          <p>{{ item.price }}</p>
          <button @click="cart.removeFromCart(item.name)">❌ Remove</button>
        </div>
        <h2>Total: ${{ cart.cartTotal.toFixed(2) }}</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  const cart = useCartStore()
  </script>
  
  <style scoped>
  .page {
    padding: 2rem;
    color: #0ff;
    background: #111;
    min-height: 100vh;
  }
  .cart-item {
    background: rgba(255, 255, 255, 0.05);
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid #0ff;
  }
  button {
    margin-top: 0.5rem;
    background: transparent;
    border: 1px solid #0ff;
    padding: 0.3rem 0.7rem;
    color: #0ff;
    border-radius: 10px;
    cursor: pointer;
  }
  </style>
  