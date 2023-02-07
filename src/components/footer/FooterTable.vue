<template>
  <div class="contain">
    <table>
      <tr>
        <td class="litteTitle">
          {{ title }}
        </td>
      </tr>
      <tr>
        <ul>
          <li>
            <a href=""> {{ row1 }}</a>
          </li>
          <li>
            <a href=""> {{ row2 }}</a>
          </li>
          <li>
            <a href=""> {{ row3 }}</a>
          </li>
        </ul>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  row1: String,
  row2: String,
  row3: String,
});
</script>

<style scoped>
.contain {
  color: white;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.litteTitle {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: white;
}
</style>
