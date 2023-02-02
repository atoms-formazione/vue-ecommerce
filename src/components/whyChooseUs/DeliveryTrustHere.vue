<template>
    <div>
        <img :src="icon">
        <strong> {{ titolo }}</strong>
        <p> {{ descrizione }}</p>
    </div>
</template>

<script setup lang="ts">
import { stringifyExpression } from '@vue/compiler-core';

const props = defineProps({
    icon: String,
    titolo: String,
    descrizione: String,
})
</script>

<style scoped>

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
}

img{
    width: 64px;
    height: 64px;

}

strong{
    font-weight: 700;
}

p{
    font-weight: 400;
    text-align: center;
}
</style>