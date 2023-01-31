<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="text">
      <div class="motto">
        <p class="motto1">Best Place to Buy</p>
        <p class="motto2">Everything.</p>
      </div>
      <p class="subtitle">
        At Bachira, you can shop for all your favorite beauty brands,
        clothes,<br />
        household products and more at a single place.
      </p>
      <button class="button">Shopping Now</button>
    </div>
    <img src="./icons/HeroImage.png" alt="hero image" />
  </div>
</template>

<style scoped>
.hero {
  display: flex;
}

.text {
  position: absolute;
}

.motto {
  font-weight: 700;
  font-size: 54px;
  margin-left: 20px;
}
.motto1 {
  color: #101913;
  margin-bottom: 0px;
}

.motto2 {
  color: #3c9379;
  margin-top: 0px;
}

.subtitle {
  font-weight: 400;
  font-size: 14px;
  margin-left: 20px;
  color: #535a56;
}

.button {
  background-color: #3c9379;
  color: #ffffff;
  border: 0px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  width: 156px;
  height: 48px;
  margin-left: 20px;
}
button {
  cursor: pointer;
}

img {
  margin-left: 30%;
}
</style>
