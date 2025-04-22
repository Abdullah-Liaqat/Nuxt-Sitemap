<template>
    <nav class="navbar">
      <div class="logo">⚡ HYPERSTORE</div>
      <NuxtLink to="/cart" class="cart">🛒 Cart ({{ cart.cartCount }})</NuxtLink>
    </nav>
  </template>
  
  <script setup>
  const cart = useCartStore()
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px #0ff;
    border-bottom: 1px solid #0ff;
  }
  .logo {
    font-size: 1.8rem;
    color: #00f9ff;
  }
  .cart {
    background: #0ff;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-weight: bold;
    box-shadow: 0 0 10px #0ff;
    transition: 0.3s;
  }
  .cart:hover {
    background: #00f9ff;
    box-shadow: 0 0 20px #00f9ff;
  }
  </style>
  