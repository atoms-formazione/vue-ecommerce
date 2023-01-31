<template>
    <div class="container">
        <div class="bloc1">
            <h3>Ba<span>chira</span></h3>
            <p>{{ text }}</p>
        </div>
        <div class="wrapper">
            <div class="bloc2">
            <FooterComponent :title="'For Beginner'" :parte1="'About'" :parte2="'Career'" :parte3="'Promotion'" ></FooterComponent>
            </div>
            <div class="bloc3">
            <FooterComponent :title="'Overview'" :parte1="'Product'" :parte2="'Categories'" :parte3="'Pricing'" ></FooterComponent>
            </div>
            <div class="bloc4">
            <FooterComponent :title="'Explore Us'" :parte1="'Our Career'" :parte2="'Privacy'" :parte3="'Terms & Conditions'" ></FooterComponent>
            </div>
            <div class="bloc5">
            <FooterComponent :title="'Connect Us'" :parte1="'support@bachira.com'" :parte2="'021-555-456'" :parte3="'Sudirman, South Jakarta'" ></FooterComponent>
            </div>
        </div>
        <div class="bloc6">
        <p>Copyright 2023 • All Rights Reserved Bachira by Giatinaja</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import FooterComponent from './FooterComponent.vue';
const text = ref("Bachira is an online store dealing with all product Bachira provide cheap, high quality, products to customers")
</script>
<style>
    .wrapper{
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 100%;
        background-color: black;
        color: white;

    }
    .bloc1{
        grid-column: 1 / 2;
        grid-row: 1;
        
    }
    .bloc2{
        grid-column: 2 / 3;
        grid-row: 1;
    }
    .bloc1{
        grid-column: 3 / 4;
        grid-row: 1;
    }
    .bloc1{
        grid-column: 4 / 5;
        grid-row: 1;
    }
    .bloc1{
        grid-column: 1 / 6;
        grid-row: 1;
    }
</style>