<template>
    <div>
        <div >
            <div :style="{'background-image':'url({{ urlImage }})'}">
                <div>
                   <p>{{ category }}</p> 
                    <p>{{ elements }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps ({
    urlImage : String,
    category : String,
    elements : String,
})
</script>

<style scoped>

</style>