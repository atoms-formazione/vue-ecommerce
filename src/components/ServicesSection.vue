<template>
    <div class="why-bachira">Why Choose  <LogoComponent :startLogo="'Bar'" :endLogo="'chira'" class="logo"></LogoComponent> <span>?</span> </div>
    <div class="services">
        <ServiceComponent 
        :icon="'src/components/icons/Delivery.svg'" 
        :title="'Free Delivery'" 
        :description="'Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor'">
        </ServiceComponent>
        <ServiceComponent 
        :icon="'src/components/icons/Trust Plateform.svg'" 
        :title="'Trusted Platfrom'" 
        :description="'Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor'">
        </ServiceComponent>
        <ServiceComponent 
        :icon="'src/components/icons/Avaible.svg'" 
        :title="'Here For You'" 
        :description="'Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor'">
        </ServiceComponent>
    </div>
</template>
<script setup lang="ts">
import ServiceComponent from './ServiceComponent.vue';
import LogoComponent from './LogoComponent.vue';
</script>
<style scoped>
    .why-bachira{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 40px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 45px;
        letter-spacing: 0.5px;
        color: #101913;
        margin-left: 34.5rem;
        margin-top: 4rem;

    }
    .services{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: nowrap;
        margin: 3rem 9rem;
    }
    .logo{
        width: 100%;
        margin-right: -250px;
        margin-left: -134px;
    }
    .why-bachira>span{
        margin-left: 125px;
        font-weight: 700;
        color: #101913;
    }
</style>