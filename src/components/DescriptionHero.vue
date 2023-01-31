<template>
    <div class="description">
        <h3>Best Place to Buy <span>Everything.</span></h3>
        <p>At Bachira, you can shop for all your favorite beauty brands, clothes, household products and more at a single place.</p>
        <button>Shopping Now</button>
    </div>
</template>
<script setup lang="ts">
    
</script>
<style>
.description{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    margin-left: 3rem;
    justify-content: flex-start;
}
.description h3 span{
  color: #3C9379;
}
.description h3{
    
    width: 200px;
    height: 100px;
    color: #101913;
    font-weight: 700;
    font-size: 24px;
    margin-top: 10rem;
}
.description button{
        color: #FFFFFF;
        background-color: #3C9379;
        border-radius: 8%;
        border-color: #3C9379;
        width: 156px;
        height: 48px;
        
    }
</style>