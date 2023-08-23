<script setup lang="ts">
import NavButton from './NavButton.vue';
import Image from './Image.vue';
import "../style.css"
import { t } from '../utils/i18n';
import LanguageSelector from './LanguageSelector.vue';
import { router } from "../main"
import { Offcanvas } from 'bootstrap';
import { onMounted } from 'vue';

const currentRoute = router.currentRoute.value.path

onMounted(() => {
  const offcanvas = new Offcanvas(document.getElementById('navigation') as HTMLElement);
  // offcanvas.hide()
  (offcanvas as any)._backdrop._config.isVisible = false
});


</script>


<template>
  <div class="nav-container desktopNav">
    <p class="dragicon" />
    <span class="image-container">
      <Image src="/logo.jpeg" :style="{ 'border-radius': 0, 'max-height': '128px', filter: 'invert(1)' }" />
    </span>
    <NavButton :text="t('navbar.about')" path="/" icon="account" :active="currentRoute === '/'" />
    <NavButton :text="t('navbar.services')" path="/services" icon="faceagent" :active="currentRoute === '/services'" />
    <NavButton :text="t('navbar.history')" path="/history" icon="briefcase" :active="currentRoute === '/history'" />
    <NavButton :text="t('navbar.projects')" path="/projects" icon='laptop' :active="currentRoute === '/projects'" />
    <NavButton :text="t('navbar.contact')" path="/contact" icon="email" :active="currentRoute === '/contact'" />
    <LanguageSelector />
  </div>
  <div class="dragarea mobileNav" data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="navigation" />
  <div class="offcanvas offcanvas-bottom" tabindex="0" id="navigation">
    <div class="offcanvas-body nav-container">
      <p class="dragicon" />
      <span class="image-container">
        <Image src="/logo.jpeg" :style="{ 'border-radius': 0, 'max-height': '128px', filter: 'invert(1)' }" />
      </span>
      <NavButton :text="t('navbar.about')" path="/" icon="account" :active="currentRoute === '/'" />
      <NavButton :text="t('navbar.services')" path="/services" icon="faceagent" :active="currentRoute === '/services'" />
      <NavButton :text="t('navbar.history')" path="/history" icon="briefcase" :active="currentRoute === '/history'" />
      <NavButton :text="t('navbar.projects')" path="/projects" icon='laptop' :active="currentRoute === '/projects'" />
      <NavButton :text="t('navbar.contact')" path="/contact" icon="email" :active="currentRoute === '/contact'" />
      <LanguageSelector />
    </div>
  </div>
</template>

<style scoped>
.offcanvas {
  height: unset;
  background-color: transparent;
  border: none;
}

.dragarea {
  position: fixed;
  height: 20px;
  inset: auto 0px 0px;
  background: white;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
}

.dragarea::before {
  content: '»';
  display: inline-block;
  transform: rotate(-90deg);
}

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
  min-width: 258px;
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

@media (max-width: 759px) {
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


