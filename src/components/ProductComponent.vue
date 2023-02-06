<template>
    <div class="product-component">
        <img :src="image" alt="image-product">
        <h4>{{ name }}</h4>
        <p>{{ price }}.00€</p>
    </div>
</template>
<script setup lang="ts">
type ProductProps = {
    image: string,
    name: string,
    price: number,
}
const props = defineProps<ProductProps>();
</script>
<style scoped>
    .product-component{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .product-component>img{
        width: 280px;
        height: 380px;
        border-radius: 30px;
        margin-bottom: 15px;
        object-fit: cover;
        
    }
    .product-component>img :hover{
        opacity: 0.6;
    }
    .product-component>h4{
        width: 280px;
        height: 20px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.3px;
        color: #101913;
        margin-left: 5px;
    }
    .product-component>p{
        width: 103px;
        height: 16px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.3px;
        color: #101913;
        margin-left: 5px;
    }
</style>