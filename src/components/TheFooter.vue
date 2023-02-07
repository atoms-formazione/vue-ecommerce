<template>
  <div id="pricing" class="container">
    <div class="bloc1">
      <h3>Ba<span>chira</span></h3>
      <p>{{ text }}</p>
    </div>
    <div class="wrapper">
      <div class="bloc2">
        <FooterComponent
          :title="'For Beginner'"
          :parte1="'About'"
          :parte2="'Career'"
          :parte3="'Promotion'"
        ></FooterComponent>
      </div>
      <div class="bloc3">
        <FooterComponent
          :title="'Overview'"
          :parte1="'Product'"
          :parte2="'Categories'"
          :parte3="'Pricing'"
        ></FooterComponent>
      </div>
      <div class="bloc4">
        <FooterComponent
          :title="'Explore Us'"
          :parte1="'Our Career'"
          :parte2="'Privacy'"
          :parte3="'Terms & Conditions'"
        ></FooterComponent>
      </div>
      <div class="bloc5">
        <FooterComponent
          :title="'Connect Us'"
          :parte1="'support@bachira.com'"
          :parte2="'021-555-456'"
          :parte3="'Sudirman, South Jakarta'"
        ></FooterComponent>
      </div>
    </div>
  </div>
  <div class="bloc6">
    <p>Copyright 2023 • All Rights Reserved Bachira by Giatinaja</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import FooterComponent from "./FooterComponent.vue";
const text = ref(
  "Bachira is an online store dealing with all product Bachira provide cheap, high quality, products to customers"
);
</script>
<style scoped>
.container{
  background-color: black;
  color: white;
  display: flex;
  margin:  0px;
  gap: 1rem;
  margin-top: 3rem;
}
.wrapper {
  margin: 3rem;
  display: grid;
  width: 65%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 100%;
  background-color: black;
  color: white;
}
.bloc1 {
  margin-left: 5rem;
  margin-top: 3rem;
  width: 35%;
  /* grid-column: 1 / 2;
  grid-row: 1; */
}
.bloc2 {
  grid-column: 2 / 3;
  grid-row: 1;
}
.bloc1>h3 {
  width: 120px;
  height: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #FFFF;
  margin-bottom: .5rem;
}
.bloc1>h3>span {
  width: 120px;
  height: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #3C9379;
}
.bloc1>p{
  width: 372px;
  height: 66px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
}
.bloc1 {
  grid-column: 1 / 6;
  grid-row: 1;
}
.bloc6{
  background-color: black;
  color: white;
  padding-bottom: 2rem;
  text-align: center;
}
</style>
