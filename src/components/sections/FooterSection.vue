<script setup lang="ts"></script>

<template>
  <div class="container-footer">
    <div>
      <div class="container-desc">
        <h3 class="footer-title">Ba<span class="text-green">chira</span></h3>
        <p>
          Bachira is an online store dealing with all product Bachira provide
          cheap, high quality, products to customers
        </p>
      </div>
      <div class="container-beginner">
        <h3 class="footer-section-title">For Beginner</h3>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Career</a></li>
          <li><a href="">Promotion</a></li>
        </ul>
      </div>
      <div class="container-overview">
        <h3 class="footer-section-title">Overview</h3>
        <ul>
          <li><a href="">Product</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">Pricing</a></li>
        </ul>
      </div>
      <div class="container-explore">
        <h3 class="footer-section-title">Explore Us</h3>
        <ul>
          <li><a href="">Our Career</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Terms & Conditions</a></li>
        </ul>
      </div>
      <div class="container-connect">
        <h3 class="footer-section-title">Connect Us</h3>
        <ul>
          <li><a href="">support@bachira.com</a></li>
          <li><a href="">021 - 555 -456</a></li>
          <li><a href="">Sudirman, South Jakarta</a></li>
        </ul>
      </div>
      <div class="container-copyright">
        Copyright 2023 • All Rights Reserved Bachira by Giatinaja
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-footer {
  background-color: var(--black);
}

.container-footer > div {
  display: grid;
  grid-template-columns: auto repeat(4, 15%);
  grid-template-rows: 70% 30%;

  margin-left: 120px;
  margin-right: 120px;
}

.container-footer > * {
  color: #ffffff;
}

.container-desc {
  grid-column: 1/2;
}

.container-beginner {
  grid-column: 2/3;
}

.container-overview {
  grid-column: 3/4;
}

.container-explore {
  grid-column: 4/5;
}

.container-connect {
  grid-column: 5/6;
}

.container-desc,
.container-beginner,
.container-overview,
.container-explore,
.container-connect {
  color: #ffffff;
  margin-top: 65px;
  margin-bottom: 50px;
}

.container-copyright {
  grid-column: 1/6;
  grid-row: 2/3;

  margin: auto;
  margin-bottom: 65px;
}

.container-desc > p {
  width: 372px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
}

.container-footer > div > div > ul > li {
  margin-top: 8px;
}

.footer-title {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #ffffff;
  margin-bottom: 14px;
}

.footer-title > span {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.5px;
}

.footer-section-title {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
  color: #ffffff;
  margin-bottom: 16px;
}

a {
  text-decoration: none;
  color: #ffffff;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
