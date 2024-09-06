<script setup>
import RaitingList from './components/RaitingList.vue'
import Header from './components/Header.vue'
import ContentImg from './components/ContentImg.vue'
</script>

<template>
  <div class="bg-main-fon h-screen pt-12 px-48">
    <Header />
    <ContentImg
      image-url="/people.png"
      title="Уважаемый клиент!"
      text-content="Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично»."
    />
    <RaitingList :max-value="10" :start-value="0">
      <div class="w-2/5 mx-auto px-14 mt-4 flex justify-between text-roboto text-sm text-white">
        <span>Хуже некуда</span>
        <span>Отлично</span>
      </div>
    </RaitingList>
  </div>
</template>
