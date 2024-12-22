<template>
  <div class="header">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/example/">Example</NuxtLink>
    <NuxtLink to="/custom-slug/">Custom Slug</NuxtLink>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  gap: 1rem;
}

.header a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
}

.header a:hover {
  text-decoration: underline;
}
</style>
