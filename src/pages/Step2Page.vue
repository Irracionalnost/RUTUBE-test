<script setup>
import RaitingList from '@/components/RaitingList.vue'
</script>

<template>
  <div class="relative">
    <img class="absolute top-12 start-1/3" src="/phone.png" alt="" />
  </div>
  <div class="flex flex-col text-white text-roboto text-xs">
    <h1 class="text-base mb-6">Пожалуйста, ответьте на дополнительные вопросы.</h1>
    <div>
      <span> 1. Как быстро вы получили ответ от клиентского сервиса RUTUBE?</span>
      <p class="w-64 border border-blue-500 rounded-full py-3 px-6 my-3">Быстрее, чем ожидал</p>
      <p class="w-64 border border-blue-500 rounded-full py-3 px-6 my-3">Как и ожидал</p>
      <p class="w-64 border border-blue-500 rounded-full py-3 px-6 my-3">Медленнее, чем ожидал</p>
    </div>

    <span>2. Клиентский сервис RUTUBE помог в решении проблемы?</span>
    <RaitingList :start-value="1" :max-value="5"> </RaitingList>

    <span>3. Специалист RUTUBE хорошо изъяснялся и владел языком?</span>
    <RaitingList :start-value="1" :max-value="5"> </RaitingList>

    <span>4. Специалист RUTUBE был отзывчив?</span>
    <RaitingList :start-value="1" :max-value="5"> </RaitingList>

    <span>5. Специалист RUTUBE был компетентен?</span>
    <RaitingList :start-value="1" :max-value="5"> </RaitingList>

    <span>6. Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?</span>
    <RaitingList :start-value="0" :max-value="10"> </RaitingList>
  </div>
  <router-link to="/Step3">
    <button
      class="text-white text-roboto text-base bg-button-color text-center rounded-3xl py-3 px-12 mt-4"
    >
      Отправить ответы
    </button>
  </router-link>
</template>

<style scoped>
span {
  margin-top: 6px;
}
</style>
