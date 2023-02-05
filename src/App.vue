<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Collaborations from "./components/Collaborations.vue";
import Categories from "./components/Categories.vue";
import WhyChoose from "./components/WhyChoose.vue";
import PopularAll from "./components/PopularAll.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </header>

  <Navbar />
  <Hero />
  <Collaborations />
  <Categories />
  <WhyChoose />
  <Suspense> <PopularAll /></Suspense>
  <Footer />
</template>

<style>
* {
  font-family: "Manrope", sans-serif;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
