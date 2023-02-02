<template>
    <div>
        <p class="titolo">{{ titleName }}</p>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    titleName: String,
});
</script>

<style scoped>
.titolo{
font-weight: 700;
font-size: 32px;
line-height: 40px;
letter-spacing: 0.3px;
width: 360px;
margin: 5%;
}
</style>