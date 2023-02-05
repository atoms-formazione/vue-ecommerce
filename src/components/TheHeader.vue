<script setup lang="ts">
const links = reactive([
  { name: 'Home', isActive: true },
  { name: 'Products' },
  { name: 'Categories' },
  { name: 'Brands' },
  { name: 'Pricing' },
])
</script>

<template>
  <!-- TODO: remove static padding -->
  <header class="flex justify-between px-10 py-10 items-center">
    <a href="/">
      <IconsLogoBachira />
    </a>

    <nav class="hidden md:block">
      <ul class="flex gap-10">
        <li v-for="{ name, isActive } in links" :key="name" class="text-grey" :class="{ 'text-black': isActive }">
          <a href="/">{{ name }}</a>
        </li>
      </ul>
    </nav>

    <div class="flex gap-5">
      <button>Login</button>
      <button
        class="py-3 px-[18px] rounded-lg bg-green text-white
      "
      >
        Register
      </button>
    </div>
  </header>
</template>
