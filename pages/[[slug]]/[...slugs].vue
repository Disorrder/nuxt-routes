<template>
  <div>
    <Header />
    <h1>{{ slug }}/{{ slugs.join("/") }} page ([...slugs])</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    console.log("🚀 ~ validate: ~ route:", route.fullPath);
    return true;
  },
});

const route = useRoute();
const { slug } = route.params;
const slugs = Array.isArray(route.params.slugs)
  ? route.params.slugs
  : [route.params.slugs];
</script>
