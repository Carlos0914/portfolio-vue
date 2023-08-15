<script setup lang="ts">
import NavButton from './NavButton.vue';
import Image from './Image.vue';
import "../style.css"

</script>


<template>
  <div class="nav-container desktopNav">
    <p class="dragicon" />
    <span class="image-container">
      <Image src="/logo.jpeg" :style="{ 'border-radius': 0, 'max-height': '128px', filter: 'invert(1)' }" />
    </span>
    <NavButton text="Sobre mí" path="" />
    <NavButton text="Servicios" path="services" />
    <NavButton text="Historia Laboral" path="history" />
    <NavButton text="Proyectos" path="projects" />
    <NavButton text="Contacto" path="contact" />
    <!-- <LanguageSelector /> -->
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;

}

.dragicon {
  position: absolute;
  display: none;
  top: 0;
  margin: 2px 0;
  text-align: center;
  width: calc(100% - 4rem);
}

.dragicon::before {
  content: '»';
  display: inline-block;
  transform: rotate(90deg);
}

.nav-container {
  max-width: calc(320px - 8rem);
  min-width: calc(320px - 8rem);
  border-radius: 40px;
  flex-direction: column;
  min-height: 350px;
  max-height: calc(100% - 2rem);
  height: fit-content;
  background-color: white;
  padding: 2rem;
  position: sticky;
  top: 2rem;
  border: 1px solid #969696;
  box-shadow: 8px 8px 8px #868686;
}

.nav-container a:last-of-type>span {
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .image-container {
    margin-top: 12px;
  }

  .dragicon {
    display: block;
  }

  .nav-container {
    border-radius: 40px 40px 0 0;
    box-shadow: none;
    padding-top: 1rem;
  }
}
</style>


