<template>
  <div class="categories-menu">
    <IntroText
      :class="'left-align'"
      :blurb="categoriesCopy"
      class="categories-intro"
    />
    <div class="categories-select">
      <div class="cat-select-left">
        <div>
          <ImageCard v-bind="topLeftCardProps" />
        </div>
        <div>
          <ImageCard v-bind="bottomLeftCardProps" />
        </div>
      </div>
      <div class="center-container">
        <ImageCard v-bind="centerCardProps" />
      </div>
      <div class="right-container">
        <ImageCard v-bind="rightCardProps" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCard from "@/components/molecules/ImageCard.vue";
import IntroText from "@/components/atoms/IntroText.vue";

defineProps({
  topLeftCardProps: Object,
  bottomLeftCardProps: Object,
  centerCardProps: Object,
  rightCardProps: Object,
  categoriesCopy: String,
});
</script>

<style scoped>
.categories-menu {
  width: 100%;
  padding: 2rem 8rem 2rem 8rem;
}

.categories-intro {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.categories-select {
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: space-around;
  column-gap: 1.5rem;
}

.categories-select > div {
  height: 100%;
}

.cat-select-left {
  height: 100%;
  width: 125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 1.5rem;
}

.cat-select-left > div {
  height: 100%;
  width: 100%;
}

.center-container {
  width: 75rem;
}
.right-container {
  width: 100%;
}
</style>
