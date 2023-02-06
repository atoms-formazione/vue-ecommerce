<template>
  <div class="why-choose-section">
    <div class="why-choose-intro">
      <IntroText :class="'centered'" :blurb="whyChooseIntro" />
    </div>
    <div class="why-choose-list">
      <div
        class="why-choose-item"
        v-for="(l, index) in whyChooseList"
        :key="index"
      >
        <LargeIconParagraph v-bind="l" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroText from "@/components/atoms/IntroText.vue";
import LargeIconParagraph from "../molecules/LargeIconParagraph.vue";

defineProps({
  whyChooseIntro: String,
  whyChooseList: { type: Array },
});

const whyChooseIntro =
  'Why Choose Ba<span style="color: var(--green)">chira</span>?';

const whyChooseList = [
  {
    itemTitle: "Free Delivery",
    itemContent:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    imgUrl: "./static/images/delivery.png",
  },
  {
    itemTitle: "Trusted Platform",
    itemContent:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    imgUrl: "./static/images/honesty.png",
  },
  {
    itemTitle: "Here For You",
    itemContent:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    imgUrl: "./static/images/24-7.png",
  },
];
</script>

<style scoped>
.why-choose-section {
  width: 100%;
  padding: 2rem 8rem 2rem 8rem;
}

.why-choose-intro {
  padding-bottom: 2rem;
  width: 100%;
}

.why-choose-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
</style>
