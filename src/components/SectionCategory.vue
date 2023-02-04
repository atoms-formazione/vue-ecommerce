<template>
    <div class="container">
        <div class="title">
            {{ title }}
        </div>
        <div class="fashion">
            Fashion items
        </div>
        <div class="shoes">
            Shoes items
        </div>
        <div class="electronic">
            Electronic items
        </div>
        <div class="skincare">
            Skincare items
        </div>
        
    </div>
</template>
<script setup  lang="ts">
import { ref } from 'vue';
const title = ref('Browse Categories of The Store') 
</script>
<style scoped>
    .container{
        display: grid;
        grid-template-columns: 500px 287px 361px;
        grid-template-rows: 80px 180px 180px;
        gap: 2rem;
        margin: 0px 3rem;
        border: solid 1px black;
        border-radius: 10px;
    }
    .title{
        grid-column: 1/4;
        grid-row: 1;
        width: 343px;
        height: 80px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.3px;
        color: #101913;
    }
    .fashion{
        grid-column: 1/2;
        grid-row: 2;
        border: solid 1px black;
        border-radius: 10px;
    }
    .shoes{
        grid-column: 2/3;
        grid-row: 2/4;
        border: solid 1px black;
        border-radius: 10px;
    }
    .electronic{
        grid-column: 3/4;
        grid-row: 2/4;
        border: solid 1px black;
        border-radius: 10px;
    }
    .skincare{
        grid-column: 1/2;
        grid-row: 3/4;
        border: solid 1px black;
        border-radius: 10px;
    }
</style>