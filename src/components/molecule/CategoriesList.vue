<template>
  <div class="container">
    <div class="colum">
      <div class="fashion">
        <CategoriesCard
          url-image="/static/fonts/Manrope/static/Images/Shoes.png"
          category="Fashion"
          elements="20.000 items"
        ></CategoriesCard>
      </div>
      <div class="skin">
        <CategoriesCard
          url-image="/static/fonts/Manrope/static/Images/Shoes.png"
          category="Skincare"
          elements="20.000 items"
        ></CategoriesCard>
      </div>
    </div>
    <div class="shoes">
      <CategoriesCard
        url-image="/static/fonts/Manrope/static/Images/Shoes.png"
        category="Shoes"
        elements="20.000 items"
      ></CategoriesCard>
    </div>
    <div class="tech">
      <CategoriesCard
        url-image="/static/fonts/Manrope/static/Images/Shoes.png"
        category="Electronic"
        elements="20.000 items"
      ></CategoriesCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoriesCard from "../atoms/CategoriesCard.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.colum {
}
.fashion {

}
.skin {

}
.shoes {

}
.tech {
    
}

</style>
