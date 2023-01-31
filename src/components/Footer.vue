<script setup lang="ts"></script>

<template>
  <div>
    <div class="footer">
      <div>
        <p class="logo">
          <span class="white">Ba</span><span class="green">chira</span>
        </p>
        <p class="text">
          Bachira is an online store dealing with all product<br />
          Bachira provide cheap, high quality, products to<br />customers
        </p>
      </div>
      <div class="wrapper">
        <div>
          <p class="bold">For Beginner</p>
          <p>About</p>
          <p>Career</p>
          <p>Promotion</p>
        </div>
        <div>
          <p class="bold">Overview</p>
          <p>Product</p>
          <p>Categories</p>
          <p>Pricing</p>
        </div>
        <div>
          <p class="bold">Explore Us</p>
          <p>Our Career</p>
          <p>Privacy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p class="bold">Connect Us</p>
          <p>support@bachira.com</p>
          <p>021 - 555 - 456</p>
          <p>Sudirman, South Jakarta</p>
        </div>
      </div>
    </div>
    <p class="copyright">
      Copyright 2023 • All Rights Reserved Bachira by Giatinaja
    </p>
  </div>
</template>

<style scoped>
* {
  background-color: #101913;
  color: #ffffff;
}

.logo {
  font-weight: 700;
  font-size: 36px;
  padding-left: 20px;
}

.white {
  color: #ffffff;
}

.green {
  color: #3c9379;
}
.text {
  font-size: 16px;
  padding-left: 20px;
  font-weight: 400;
}

.footer {
  display: flex;
}

.wrapper {
  padding-left: 100px;
  padding-top: 30px;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  font-size: 14px;
}

.bold {
  font-weight: 700;
  font-size: 16px;
}
.copyright {
  text-align: center;
  margin-bottom: 0px;
  font-size: 14px;
  padding: 20px;
}
</style>
