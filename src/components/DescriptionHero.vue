<template>
  <div class="description">
   <!--  <h3>
    <LogoComponent :startLogo="'Best Place to Buy'" ></LogoComponent>
    <LogoComponent :end-logo="'Everything.'" ></LogoComponent>
  </h3> -->
    <h3>Best Place to Buy <span>Everything.</span></h3>
    <p>
      At Bachira, you can shop for all your favorite beauty brands, clothes,
      household products and more at a single place.
    </p>
    <button>Shopping Now</button>
  </div>
</template>
<script setup lang="ts">
import LogoComponent from './LogoComponent.vue';
</script>
<style scoped>
.description {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: auto;
  margin-left: 3rem;
  justify-content: flex-start;
}
.description h3 span {
  font-weight: 700;
  color: #3c9379;
}
.description h3 {
  width: 457px;
height: 140px;

font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 54px;
line-height: 70px;
/* or 130% */

letter-spacing: 0.5px;

/* Black */

color: #101913;
}
.description button {
  color: #ffffff;
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px 22px;
gap: 10px;

width: 156px;
height: 48px;

/* Green */
border-color: #3C9379;
background: #3C9379;
border-radius: 8px;
}
p{
  width: 454px;
height: 40px;

font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* or 143% */

letter-spacing: 0.3px;

/* Grey */

color: #535A56;
}
</style>
