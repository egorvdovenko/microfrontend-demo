<template>
  <div>
    <h2>Welcome to Microfrontend Demo</h2>
    <p>This is the host application running on port 5001</p>
    <div class="info">
      <h3>How it works:</h3>
      <ul>
        <li>Products app loads from port 5002</li>
        <li>Cart app loads from port 5003</li>
        <li>All apps share Vue 3 runtime</li>
        <li>Communication via Custom Events</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.info {
  margin-top: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>