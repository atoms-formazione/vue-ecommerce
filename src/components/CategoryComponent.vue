<template>
    <div class="category-component">
        <img :src="image" alt="image-category">
        <h4>{{ name }}</h4>
        <p>{{ quantity }}</p>
    </div>
</template>
<script setup lang="ts">
type ProductProps = {
    image: string,
    name: string,
    quantity: string,
}
const props = defineProps<ProductProps>();
</script>
<style scoped>
    .category-component{
        /* display: flex;
        flex-direction: column;
        justify-content: flex-start; */

    }
    .category-component>img{
        border-radius: 30px
    }
    .category-component>h4{
        width: 102px;
        height: 20px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.3px;
        color: #FFFF;
    }
    .category-component>p{
        width: 100px;
        height: 16px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.3px;
        color: #FFFF;
    }
</style>