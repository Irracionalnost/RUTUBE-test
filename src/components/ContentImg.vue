<script setup>
defineProps({
  imageUrl: String,
  title: String,
  textContent: String
})
</script>

<template>
  <div class="flex flex-col items-center text-white text-center">
    <img class="mb-12" :src="imageUrl" alt="image" />
    <div class="w-2/5 px-10 text-roboto">
      <b class="text-3xl">{{ title }}</b>
      <p class="text-base mt-4">{{ textContent }}</p>
    </div>
  </div>
</template>
