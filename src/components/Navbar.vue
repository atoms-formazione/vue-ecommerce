<template>
  <div>
    <nav class="navbar">
      <div class="bachira">Ba<span class="green">chira</span></div>
      <div class="nav-links">
        <a>Home</a>
        <a>Products</a>
        <a>Categories</a>
        <a>Brands</a>
        <a>Pricing</a>
      </div>
      <div class="login-register">
        <a class="login">Login</a>
        <button class="register">Register</button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bachira {
  font-size: 2rem;
  font-weight: 700;
  color: black;
}

.green {
  color: #3c9379;
  font-weight: 700;
}

.nav-links > a {
  margin-right: 2rem;
}
.nav-links > a:hover {
  cursor: pointer;
  font-weight: 700;
}

.register {
  border: none;
  background-color: #3c9379;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 18px;
  padding-left: 18px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.login {
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
