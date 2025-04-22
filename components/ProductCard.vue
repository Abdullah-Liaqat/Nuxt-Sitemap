<script setup>
defineProps({ product: Object })
const cart = useCartStore()

const add = () => {
  cart.addToCart(product)
}
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" />
    <div class="card-content">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">{{ product.price }}</p>
      <button class="add-btn" @click="add">Add to Cart</button>
    </div>
  </div>
</template>

<style scoped>
.add-btn {
  margin-top: 10px;
  padding: 10px 20px;
  background: rgba(0, 217, 255, 0.2);
  border: 2px solid #00d9ff;
  color: #00d9ff;
  font-weight: bold;
  border-radius: 12px;
  transition: 0.3s;
  cursor: pointer;
  backdrop-filter: blur(5px);
}
.add-btn:hover {
  background: #00d9ff;
  color: black;
}
</style>
