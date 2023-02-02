<template>
  <div class="titleWhyChoose">
    <p>Why choose</p><span><NavbarLogo first="Ba" second="chira"/></span> <p>?</p>
  </div>
  <div class="container">
    <DeliveryTrustHere
      icon="\static\fonts\Manrope\static\images\Delivery.svg"
      titolo="Free Delivery"
      descrizione="Lorem ipsum dolor sit amet, consectetu
adipiscing elit, sed do eiusmod tempor"
    ></DeliveryTrustHere>
    <DeliveryTrustHere
      icon="\static\fonts\Manrope\static\images\Trust.svg"
      titolo="Trusted Platform"
      descrizione="Lorem ipsum dolor sit amet, consectetu
adipiscing elit, sed do eiusmod tempor"
    ></DeliveryTrustHere>
    <DeliveryTrustHere
      icon="\static\fonts\Manrope\static\images\HereForYou.svg"
      titolo="Here For You"
      descrizione="Lorem ipsum dolor sit amet, consectetu
adipiscing elit, sed do eiusmod tempor"
    ></DeliveryTrustHere>
  </div>
</template>

<script setup lang="ts">
import NavbarLogo from "../navbar/NavbarLogo.vue";
import DeliveryTrustHere from "./DeliveryTrustHere.vue";
</script>

<style scoped>

.titleWhyChoose > p {
    font-weight: 700;

}
.titleWhyChoose{
    font-size: 2rem;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: .8rem;
}
.container{
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
}


</style>
