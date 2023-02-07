<template>
    <div class="container">
        <div class="intro">
            {{ intro }}
        </div>
        <img src="src\components\icons\Tokopedia svg.svg" alt="logo-partner" class="tokopedia">
        <img src="src\components\icons\Balenciaga svg.svg" alt="logo-partner" class="balenciaga">
        <img src="src\components\icons\adidas svg.svg" alt="logo-partner" class="adidas">
        <img src="src\components\icons\gucci svg.svg" alt="logo-partner" class="gucci">
        <img src="src\components\icons\Bukalapak svg.svg" alt="logo-partner" class="buka">
       <!--  <PartnerComponent :partner="'src/components/icons/Tokopedia svg.svg'" class="tokopedia"></PartnerComponent>
        <PartnerComponent :partner="'src/components/icons/Balenciaga svg.svg'" class="balenciaga"></PartnerComponent>
        <PartnerComponent :partner="'src/components/icons/adidas svg.svg'" class="adidas"></PartnerComponent>
        <PartnerComponent :partner="'src/components/icons/gucci svg.svg'" class="gucci"></PartnerComponent>
        <PartnerComponent :partner="'src/components/icons/Bukalapak svg.svg'" class="buka"></PartnerComponent> -->
    </div>
</template>
<script setup  lang="ts">
import { ref } from 'vue';
import PartnerComponent from './PartnerComponent.vue';
const intro = ref('We Collaborate With 250++ Leading Top E Commerce and Brands') 
</script>
<style scoped>
    .container{
        margin: 5rem 5rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 2fr 1fr;
        gap: 3rem;
        text-align: center;
    }
    .intro{
        grid-column: 1/6;
        grid-row: 1;
        width: 622px;
        height: 80px;
        margin-left: 340px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.3px;
         color: #101913;  
    }
    .tokopedia{
        grid-column: 1/2;
        grid-row: 2;
    }
    .balenciaga{
        grid-column: 2/3;
        grid-row: 2;
    }
    .adidas{
        grid-column: 3/4;
        grid-row: 2;
    }
    .gucci{
        grid-column: 4/5;
        grid-row: 2;
    }
    .buka{
        grid-column: 5/6;
        grid-row: 2;
    }
    img:hover{
        border-color: rgb(25, 207, 231);
        color: aqua;
        cursor: pointer;
    }
</style>