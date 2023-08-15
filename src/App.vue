<script setup lang="ts">
import "./style.css"
import Image from './components/Image.vue';
import VueLogo from './assets/vue.svg'
import MainContainer from './components/MainContainer.vue';
import NavButton from './components/NavButton.vue';
</script>

<template>
  <MainContainer>
    <a href="https://vitejs.dev" target="_blank">
      <Image src="/vite.svg" alt="Vite logo" :width=250 :style="{ 'object-fit': 'cover !important' }" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <Image :src="VueLogo" alt="Vue logo" :width=250 :style="{ 'object-fit': 'cover !important' }" />
    </a>
    <NavButton path="/home" text="Testing"/>
  </MainContainer>
</template>
