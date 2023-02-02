<template>
  <div>
    <TitleSection title-name="Browse Categories of The Store"></TitleSection>

    <div class="parent">
      <div class="div1">
        <img src="/static/fonts/Manrope/static/images/fashion.svg" />
        <div class="top-right">
          <strong>Fashion</strong> <br />
          <span> 30,000 items</span>
        </div>
      </div>
      <div class="div2">
        <img src="/static/fonts/Manrope/static/images/skincare.svg" />
        <div class="top-right">
          <strong>Skincare</strong> <br />
          <span> 2,000 items</span>
        </div>
      </div>
      <div class="div3">
        <img src="/static/fonts/Manrope/static/images/shoes.svg" />
        <div class="top-right">
          <strong>Shoes</strong> <br />
          <span> 10,000 items</span>
        </div>
      </div>
      <div class="div4">
        <img src="/static/fonts/Manrope/static/images/electronic.svg" />
        <div class="top-right">
          <strong>Electronic</strong> <br />
          <span>10,000 items</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleSection from "./TitleSection.vue";
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr 1.1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 5%;
  max-width: 90%;
  justify-items: center;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
}
.div3 {
  grid-area: 1 / 2 / 3 / 3;
}
.div4 {
  grid-area: 1 / 3 / 3 / 4;
}

.top-right {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
}

.top-right > strong {
  font-weight: 700;
}

img {
  width: 100%;
  height: 100%;
}
</style>
