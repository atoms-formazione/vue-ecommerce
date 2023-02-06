<script setup lang="ts"></script>

<template>
  <div class="topNav">
    <a>Ba</a>
    <aa>chira</aa>
    <ul>
      <li><b href="home">Home</b></li>
      <li><b href="products">Products</b></li>
      <li><b href="categories">Categories</b></li>
      <li><b href="brand">Brand</b></li>
      <li><b href="pricing">Pricing</b></li>
      <button class="c" id="button1">Register</button>
      <button class="c" id="button2">Login</button>
    </ul>
  </div>
</template>

<style scoped>
.topNav {
  overflow: hidden;
  width: 100%;
  display: inline-block;
  position: relative;
  font-size: 18px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  top: 20px;
  text-align: center;
  left: 200px;
  text-align: center;
  padding: 21px;
}
li :hover {
  color: #44af8f;
}

a {
  padding-left: 100px;
  font-size: 40px;
  font-weight: 600;
  color: black;
  float: left;
}
aa {
  padding-left: 50px;
  font-size: 40px;
  font-weight: 600;
  color: #3c9379;
  left: -50px;
  float: left;
}

.c {
  float: right;
  right: 100px;
  padding: 10px;
  top: 16px;
  border-radius: 10px;
}
#button1 {
  background-color: #3c9379;
  color: whitesmoke;
  border-color: #3c9379;
}
#button2 {
  background-color: white;
  border-color: white;
  border-width: 0px;
}
</style>
