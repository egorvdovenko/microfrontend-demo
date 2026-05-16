<template>
  <div id="app">
    <h1>Microfrontend Host App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products (MFE1)</router-link> |
      <router-link to="/cart">Cart (MFE2)</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// No need to import here - router handles it
</script>

<style scoped>
nav {
  padding: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b883;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>