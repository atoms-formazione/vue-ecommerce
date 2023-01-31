<script setup lang="ts"></script>

<template>
  <div class="container-welcome">
    <div class="container-intro">
      <h1>Best Place to Buy <span class="text-green">Everything.</span></h1>
      <p>
        At Bachira, you can shop for all your favorite beauty brands, clothes,
        household products and more at a single place.
      </p>
    </div>
    <button class="btn-shopping-now">Shopping Now</button>
  </div>
</template>

<style scoped>
.btn-shopping-now {
  padding: 16px 22px;
  background: #3c9379;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 48px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #ffffff;
}

.container-intro > h1 {
  width: 454px;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 70px;
  letter-spacing: 0.5px;
  color: #101913;
}

.container-intro > h1 > span {
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 70px;
  letter-spacing: 0.5px;
}

.container-intro > p {
  width: 454px;
  margin-top: 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #535a56;
}

.container-welcome {
  margin-top: 60px;
}
</style>
