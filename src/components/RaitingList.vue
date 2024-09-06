<script setup>
import RaitingItem from './RaitingItem.vue'
import { computed } from 'vue'
const props = defineProps({
  maxValue: Number,
  startValue: Number
})

const collectionRaiting = computed(() => {
  const arr = []
  for (let index = props.startValue; index < props.maxValue; index++) {
    arr.push(index)
  }
  return arr
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex gap-3 justify-center mt-6">
      <RaitingItem class="" v-for="num in collectionRaiting" :key="num" :number="num" />
    </div>
    <slot></slot>
  </div>
</template>
