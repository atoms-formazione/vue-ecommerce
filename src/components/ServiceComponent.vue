<template>
    <div class="choose-component">
        <img :src=" icon " alt="icon-service" class="icon-service">
        <h4 class="title-service">{{ title }}</h4>
        <p class="description-service">{{ description }}</p>
    </div>
</template>
<script setup  lang="ts">
type ChooseProps = {
    icon: string,
    title: string,
    description: string,
}
const props = defineProps<ChooseProps>();
</script>
<style scoped>
    .choose-component{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
    .icon-service{
        width: 64px;
        height: 64px;
        text-align: center;
        margin: 0px 5.25rem;
    }
    .title-service{
        text-align: center;
        width: 168px;
        height: 20px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.3px;
        color: #101913;
        margin: 0px 3rem;
        margin-top: 1.5rem;
        margin-bottom: 8px;
    }
    .description-service{
        width: 266px;
        height: 40px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.3px;
        color: #535A56;
    }
</style>