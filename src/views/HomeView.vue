<script setup lang="ts">
import TheNavbar from "@/components/sections/TheNavbar.vue";
import TheHero from "@/components/sections/TheHero.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import CollabSection from "@/components/sections/CollabSection.vue";
import PPSection from "@/components/sections/PPSection.vue";
import BrowseCategoriesSection from "@/components/sections/BrowseCategoriesSection.vue";
import WhyChoose from "@/components/sections/WhyChoose.vue";

const repoAll =
  "https://dummyjson.com/products?limit=12&select=title,price,images,brand";
//const repoApple = "https://dummyjson.com/products/search?q=apple&limit=10";
const repoApple =
  "https://dummyjson.com/products?limit=12&select=title,price,images,brand";
</script>

<template>
  <main>
    <TheNavbar />
    <TheHero></TheHero>
    <CollabSection></CollabSection>
    <BrowseCategoriesSection></BrowseCategoriesSection>
    <WhyChoose></WhyChoose>
    <Suspense>
      <PPSection
        :allBrands="true"
        brandName="''"
        :gridStyle="true"
        :urlRepository="repoAll"
      ></PPSection>
    </Suspense>
    <Suspense>
      <PPSection
        :allBrands="false"
        :brandName="'Apple'"
        :gridStyle="false"
        :urlRepository="repoApple"
      ></PPSection>
    </Suspense>
    <Suspense>
      <PPSection
        :allBrands="false"
        :brandName="'Nike'"
        :gridStyle="false"
        :urlRepository="'myData'"
      ></PPSection>
    </Suspense>
    <FooterSection></FooterSection>
  </main>
</template>
