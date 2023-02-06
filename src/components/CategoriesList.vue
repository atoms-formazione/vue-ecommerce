<script setup lang="ts">
//
</script>

<template>
  <div>
    <p>
      Browse Categories of <br />
      The Store
    </p>
  </div>
  <div class="flexCateg">
    <img
      class="flexCategories"
      height="220"
      width="520"
      src="fashionCateg.png"
    />
    <img
      class="flexCategories"
      id="shoesImg"
      height="450"
      width="340"
      src="shoesCateg.png"
    />
    <img
      class="flexCategories"
      id="electronicImg"
      height="450"
      width="340"
      src="electronicCateg.png"
    />
    <img
      class="flexCategories"
      id="skincareImg"
      height="220"
      width="520"
      src="skincareCateg.png"
    />
  </div>
</template>

<style scoped>
p {
  font-size: 35px;
  font-weight: bold;
  padding-left: 100px;
}
.flexCateg {
  padding-left: 100px;
  top: 35px;
  display: flex;
  flex-direction: row;
}
.flexCategories {
  border-radius: 10px;
}
#shoesImg {
  left: 35px;
}
#electronicImg {
  left: 65px;
}
#skincareImg {
  /* flex-direction: column;
    TODO DA SISTEMARE */
  left: -1195px;
  top: 230px;
}
</style>
