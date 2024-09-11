<script setup>
import ContentImg from '@/components/ContentImg.vue'
</script>

<template>
  <ContentImg
    image-url="/thanks.png"
    title="Спасибо за обратную связь!"
    text-content="Это поможет нам улучшить сервис"
  >
    <a
      class="text-white text-roboto text-base bg-button-color text-center rounded-3xl py-3 px-12 mt-6 no-underline"
      href="https://rutube.ru/"
    >
      Перейти на платформу
    </a>
  </ContentImg>
</template>
