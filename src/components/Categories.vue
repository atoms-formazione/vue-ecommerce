<script setup lang="ts"></script>

<template>
  <p class="text">Browse Categories of<br />The Store</p>
  <div class="categories">
    <div class="fashion">
      <img src="./icons/Fashion.png" alt="Fashion" />
      <p class="title">Fashion<br /><span class="items">30,000 items</span></p>
    </div>
    <div class="skincare">
      <img src="./icons/Skincare.png" alt="Skincare" />
      <p class="title">Skincare<br /><span class="items">2,000 items</span></p>
    </div>
    <div class="shoes">
      <img src="./icons/Shoes.png" alt="Shoes" />
      <p class="title">Shoes<br /><span class="items">10,000 items</span></p>
    </div>
    <div class="electronic">
      <img src="./icons/Electronic.png" alt="Electronic" />
      <p class="title">
        Electronic<br /><span class="items">10,000 items</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.text {
  font-weight: 700;
  font-size: 32px;
  margin-left: 15%;
}

.categories {
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  grid-auto-rows: auto;
  margin-left: 15%;
  margin-right: 15%;
}

.fashion {
  grid-column: 1 / 3;
  grid-row: 1;
  position: relative;
}

.skincare {
  grid-column: 1 / 3;
  grid-row: 2;
  position: relative;
}

.shoes {
  grid-column: 3;
  grid-row: 1 / 3;
  position: relative;
}

.electronic {
  grid-column: 4 / 6;
  grid-row: 1 / 3;
  position: relative;
}

img {
  border-radius: 30px;
}

.title {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;

  position: absolute;
  top: 10px;
  right: 15%;
}

.items {
  font-weight: 400;
  font-size: 16px;
}
</style>
