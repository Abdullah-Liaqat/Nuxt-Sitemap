<template>
    <div class="page">
      <h1 class="heading">🛍️ Our Products</h1>
      <div class="product-grid">
        <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductCard from '~/components/ProductCard.vue'
  
  const products = ref([
    {
      name: "Colorful Sneakers",
      image: "https://github.com/user-attachments/assets/9d6fbfeb-0f26-4e15-af71-60195925dddb",
      price: "$49.99",
      description: "Stylish and comfortable sneakers for everyday use."
    },
    {
      name: "Smart Watch",
      image: "https://via.placeholder.com/300x200?text=Smart+Watch",
      price: "$129.99",
      description: "Track your health and notifications on the go."
    },
    {
      name: "Bluetooth Headphones",
      image: "https://via.placeholder.com/300x200?text=Headphones",
      price: "$89.99",
      description: "High-quality sound with noise cancellation."
    },
    {
      name: "Leather Backpack",
      image: "https://via.placeholder.com/300x200?text=Backpack",
      price: "$69.99",
      description: "Spacious and stylish backpack for daily use."
    }
  ])
  </script>
  
  <style scoped>
  .page {
    padding: 2rem;
    text-align: center;
  }
  .heading {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  </style>
  