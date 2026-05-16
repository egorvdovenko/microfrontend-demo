<template>
  <div class="cart">
    <h2>Cart</h2>
    <div v-if="cart.length === 0">
      <p>Cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <span>{{ item.name }} - ${{ item.price }}</span>
        <button @click="removeItem(item.id)">Remove</button>
      </div>
      <h3>Total: ${{ total }}</h3>
      <button @click="clearCart">Clear</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cart = ref([])

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0)
})

const loadCart = () => {
  const savedCart = JSON.parse(localStorage.getItem('shared-cart') || '[]')
  cart.value = savedCart
}

const handleCartUpdate = (event) => {
  cart.value = event.detail
}

const handleStorageChange = (event) => {
  if (event.key === 'shared-cart') {
    cart.value = JSON.parse(event.newValue || '[]')
  }
}

const removeItem = (id) => {
  cart.value = cart.value.filter(item => item.id !== id)
  localStorage.setItem('shared-cart', JSON.stringify(cart.value))
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart.value }))
}

const clearCart = () => {
  cart.value = []
  localStorage.setItem('shared-cart', JSON.stringify([]))
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: [] }))
}

onMounted(() => {
  loadCart()
  window.addEventListener('cart-updated', handleCartUpdate)
  window.addEventListener('storage', handleStorageChange)
})

onUnmounted(() => {
  window.removeEventListener('cart-updated', handleCartUpdate)
  window.removeEventListener('storage', handleStorageChange)
})
</script>

<style scoped>
.cart {
  padding: 20px;
  border: 2px solid red;
}
.cart-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
button {
  margin-left: 10px;
  cursor: pointer;
}
</style>