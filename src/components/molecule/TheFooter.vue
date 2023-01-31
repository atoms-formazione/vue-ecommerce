<template>
  <div class="container">
    <div class="footpage">
      <div class="description">
        <Title is-white></Title>
        <DescriptionFoot></DescriptionFoot>
      </div>
      <div class="links">
        <FooterCard
          title="For Beginner"
          a1="About"
          a2="Career"
          a3="Promotion"
        ></FooterCard>
        <FooterCard
          title="Overview"
          a1="Product"
          a2="Categories"
          a3="Pricing"
        ></FooterCard>
        <FooterCard
          title="Explore Us"
          a1="Our Career"
          a2="Privacy"
          a3="terms & Conditions"
        ></FooterCard>
        <FooterCard
          title="Connect Us"
          a1="support@bachira.com"
          a2="021 - 555 - 456"
          a3="Sudirman, South jakarta"
        ></FooterCard>
      </div>
    </div>
    <div class="license">
      <LincenseRight></LincenseRight>
    </div>
  </div>
</template>

<script setup lang="ts">
import DescriptionFoot from "../atoms/DescriptionFoot.vue";
import Title from "../atoms/Title.vue";
import FooterCard from "../atoms/FooterCard.vue";
import LincenseRight from "../atoms/LincenseRight.vue";
</script>

<style scoped>
template {
  background-color: black;
}

.footpage {
  display: flex;
  padding: 1rem;
  gap: 3rem;
}

.description {
  flex: 1;
  width: 50px;
}
.links {
  flex: 2;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}

.license {
  text-align: center;
  margin-top: 50px;
}

.container {
  padding: 3rem;
}
</style>
