<template>
  <div class="products">
    <h2>Products</h2>
    <div v-for="product in products" :key="product.id" class="product">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Vue Course', price: 99.99 },
  { id: 2, name: 'Microfrontends Book', price: 49.99 },
  { id: 3, name: 'Vite Plugin', price: 39.99 }
])

const addToCart = (product) => {
  // Get existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem('shared-cart') || '[]')
  
  // Check if product already exists
  if (!cart.find(item => item.id === product.id)) {
    cart.push(product)
    localStorage.setItem('shared-cart', JSON.stringify(cart))
    
    // Dispatch event for any open tabs
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }))
    
    alert(`Added ${product.name} to cart!`)
  } else {
    alert('Product already in cart!')
  }
}
</script>

<style scoped>
.products {
  padding: 20px;
  border: 2px solid green;
}
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
button {
  background: green;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}
</style>