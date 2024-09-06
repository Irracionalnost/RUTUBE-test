<script setup>
defineProps({
  number: Number
})
</script>

<template>
  <p
    class="w-10 h-10 text-roboto text-white text-base border border-blue-500 rounded-full text-center py-2"
  >
    {{ number }}
  </p>
</template>
