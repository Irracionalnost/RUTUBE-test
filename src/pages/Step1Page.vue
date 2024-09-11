<script setup>
import ContentImg from '@/components/ContentImg.vue'
import RaitingList from '@/components/RaitingList.vue'
</script>

<template>
  <ContentImg
    image-url="/people.png"
    title="Уважаемый клиент!"
    text-content="Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично»."
  />
  <router-link to="/Step2">
    <RaitingList class="flex items-center" :start-value="0" :max-value="9">
      <div class="w-2/5 mx-auto px-14 flex justify-between text-roboto text-sm text-white">
        <span>Хуже некуда</span>
        <span>Отлично</span>
      </div>
    </RaitingList>
  </router-link>
</template>
