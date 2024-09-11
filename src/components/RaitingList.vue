<script setup>
import RaitingItem from './RaitingItem.vue'
import { computed } from 'vue'
const props = defineProps({
  startValue: Number,
  maxValue: Number
})

const collectionRaiting = computed(() => {
  const arr = []
  for (let index = props.startValue; index <= props.maxValue; index++) {
    arr.push(index)
  }
  return arr
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex gap-2 my-3">
      <RaitingItem v-for="num in collectionRaiting" :key="num" :number="num" />
    </div>
    <slot></slot>
  </div>
</template>
