<script setup lang="ts">
const logos = [
  "/src/components/icons/tokopediaLogo.svg",
  "/src/components/icons/balenciagaLogo.svg",
  "/src/components/icons/adidasLogo.svg",
  "/src/components/icons/gucciLogo.svg",
  "/src/components/icons/bukalapakLogo.svg",
];
</script>

<template>
  <div class="container-collab">
    <h2>We Collaborate With 250++ Leading Top E Commerce and Brands</h2>
    <div class="container-logos">
      <div v-for="(logo, index) in logos" :key="index">
        <img :src="logo" :alt="'Logo ' + index" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-collab > h2 {
  margin: auto;
  width: 624px;
  margin-bottom: 60px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.3px;
  color: var(--black);
}

.container-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.container-collab {
  margin-bottom: 130px;
}
</style>
