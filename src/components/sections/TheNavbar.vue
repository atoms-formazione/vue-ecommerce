<script setup lang="ts"></script>

<template>
  <div>
    <div class="container-navbar">
      <span class="nav-intro">Ba<span class="text-green">chira</span></span>
      <nav class="nav-menu">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Brands</a>
        <a href="#">Pricing</a>
      </nav>
      <nav class="nav-login">
        <a class="btn-login" href="#">Login</a>
        <button class="btn-register" href="#">Register</button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container-navbar {
  padding: 20px;
  padding-top: 40px;
  margin: 0 40px;
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.nav-intro {
  width: 123px;
  height: 36px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1.5px;
  color: var(--black);
}

.nav-menu {
  display: flex;
  gap: 40px;
  justify-content: space-between;
}

.nav-menu > a {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: var(--black);
  text-decoration: none;
}

.nav-login {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.btn-login {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: var(--black);
  cursor: pointer;
  text-decoration: none;
}

.btn-register {
  padding: 12px 18px;
  background: var(--green);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #ffffff;
}
</style>
