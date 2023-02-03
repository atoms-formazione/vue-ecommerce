<template>
  <div class="footer">
    <div class="footer-top">
      <div class="top-left">
        <FooterLeft v-bind="{ footerBlurb, logoProperties }" />
      </div>
      <div class="top-right">
        <FooterRight v-bind="{ menus, contactInfo }" />
      </div>
    </div>
    <p class="footer-bottom">
      <CopyrightInfo
        v-bind="{ year, companyName, holderName }"
        :white-text="whiteText"
      />
    </p>
  </div>
</template>

<script setup lang="ts">
import CopyrightInfo from "../atoms/CopyrightInfo.vue";
import FooterLeft from "../molecules/FooterLeft.vue";
import FooterRight from "../molecules/FooterRight.vue";

defineProps({
  year: Date,
  companyName: String,
  holderName: String,
  logoProperties: Object,
  footerBlurb: String,
  menus: { type: Array<Object> },
  contactInfo: Object,
});
const whiteText: boolean = true;
</script>

<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  width: 100%;
  padding-bottom: 4rem;
  padding-top: 1vw;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.top-left {
  grid-column: 1 / 2;
  padding: 3rem 4rem 3rem 7rem;
}

.top-right {
  grid-column: 2 / 4;
  padding: 3rem 7rem 3rem 2rem;
}
</style>
