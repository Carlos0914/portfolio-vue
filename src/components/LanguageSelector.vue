<script setup lang="js">
import { onMounted } from 'vue';
import i18n from '../utils/i18n';
import { Dropdown } from 'bootstrap';

if (localStorage.getItem('lang')) {
  i18n.global.locale = localStorage.getItem('lang');
} else {
  i18n.global.locale = 'es';
  localStorage.setItem('lang', i18n.global.locale);
}

const setLanguage = (lang) => {
  localStorage.setItem('lang', lang);
  i18n.global.locale = lang;
}

onMounted(() => {
  const options = document.getElementsByClassName('dropdown-item')
  Array.from(options).forEach(element => {
    element.addEventListener('click', () => {
      setLanguage(element.innerText.toLowerCase());
    })
  });

})
</script>

<template>
  <div style="display: block, position: absolute, right: 32px, bottom: 18px">
    <div class="dropdown" id="language-selector">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        <span :class="`fi fi-${i18n.global.locale === 'en' ? 'us' : 'mx'}`"></span> {{
          i18n.global.locale.toUpperCase()
        }}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#"><span :class="`fi fi-us`"></span>
          EN</a>
        <a class="dropdown-item" href="#"><span :class="`fi fi-mx`"></span>
          ES</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#language-selector {
  display: block;
  width: 85px;
  margin: 0;
  margin-left: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.dropdown-menu {
  width: 80px;
}

.dropdown-item {
  display: flex;
  gap: 8px;
  margin: 0;
}
</style>

