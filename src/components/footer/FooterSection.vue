<template>
  <div class="big-container">
    <div class="container">
      <div class="description">
        <FooterDescription></FooterDescription>
      </div>
      <div class="tables">
        <FooterTable
          title="For Beginner"
          row1="About"
          row2="Career"
          row3="Promotion"
        ></FooterTable>
        <FooterTable
          title="Overview"
          row1="Product"
          row2="Categories"
          row3="Pricing"
        ></FooterTable>
        <FooterTable
          title="Explore Us"
          row1="Our Career"
          row2="Privacy"
          row3="Terms & Conditions"
        ></FooterTable>
        <FooterTable
          title="Connect Us"
          row1="support@bachira.com"
          row2="021 - 555 - 269"
          row3="Sudirman, South Jakarta"
        ></FooterTable>
      </div>
    </div>
    <p class="copyright">
      Copyright {{ year }} • All Rights Reserved Bachira by Pietro Stivanello
    </p>
  </div>
</template>

<script setup lang="ts">
import FooterDescription from "./FooterDescription.vue";
import FooterTable from "./FooterTable.vue";

const year = new Date().getFullYear();
</script>

<style scoped>
.big-container {
  background-color: var(--black);
  color: white;
  bottom: 0%;
}
.container {
  display: flex;
}

.tables {
  display: flex;
  flex: 3;
  justify-content: space-around;
  margin-top: 3rem;
}

.copyright {
  text-align: center;
  padding-bottom: 2rem;
  font-size: .9rem;
}

.description {
  flex: 1;
  margin: 3rem;
}
</style>
