<template>
  <div>
    <Header />
    <h1>{{ slug }} page ([slug])</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
</script>
