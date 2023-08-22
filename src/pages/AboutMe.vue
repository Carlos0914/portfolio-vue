<script setup lang="ts">
import MainContainer from "../components/MainContainer.vue";
import ProfilePicture from "../assets/pp.png";
import Image from "../components/Image.vue";
import { RouterLink } from "vue-router"
import logos from "../assets/logos";
import InfoRow from "../components/InfoRow.vue";
import Navbar from "../components/Navbar.vue";
import { t } from "../utils/i18n"
import { useHead } from "@unhead/vue"

useHead({
  title: () => t('meta.home'),
})

</script>

<template>
  <Navbar />
  <MainContainer>
    <div style='lineHeight: 1.75'>
      <h2>{{t('navbar.about')}}</h2>
      <Image :src="ProfilePicture" :width=350 :style="{ float: 'left', margin: '0 3rem 1rem 0' }" />
      <p style="textAlign: justify">
        {{ t('home.line1') }}
        <br />
        {{ t('home.line2') }}
        <br />
      </p>
      <i18n-t keypath="home.line4" tag="p" style="text-align: justify;">
        <RouterLink to="/projects">{{ t('navbar.projects') }}</RouterLink>
        <RouterLink to="/history" place="history">{{ t('navbar.history') }}</RouterLink>
      </i18n-t>
      <div style="display: flow-root">
        <h2>
          <school />
          {{ t('home.education') }}
        </h2>
        <ul>
          <li>
            <h4 style="margin: 8px 0">{{ t('home.degree') }}</h4>
            <InfoRow>
              <span>
                <mapmarker />
                {{ t('home.university') }}
              </span>
              <p class="separator" />
              <span>
                <calendarmonth />
                2017 - 2022
              </span>
            </InfoRow>
            <InfoRow>
              <span>
                <school />
                {{t('home.note')}}
              </span>
              <p class="separator" />
              <span>
                <chartbox />
                96.88 / 100
              </span>
            </InfoRow>
          </li>
          <li>
            <h4 style="margin: 8px 0">
              AWS Certified Cloud Practitioner
            </h4>
            <InfoRow>
              <span>
                <mapmarker />
                Amazon Web Services
              </span>
              <p class="separator" />
              <span>
                <calendarmonth />
                2022
              </span>
            </InfoRow>
          </li>
          <li>
            <h4 style="margin: 8px 0">
              AWS Certified Developer Associate
            </h4>
            <InfoRow>
              <span>
                <mapmarker />
                Amazon Web Services
              </span>
              <p class="separator" />
              <span>
                <calendarmonth />
                2023
              </span>
            </InfoRow>
          </li>
        </ul>
      </div>
      <div style="display: flow-root">
        <h2>
          <accounthardhat />
          {{ t('home.techStack') }}
        </h2>
        <h3>{{ t('home.main') }}</h3>
        <span class="icons-container">
          <Image v-for="(value, index) in ['MONGODB', 'EXPRESS', 'REACT', 'NODE'].map((x, _) => logos[x])" :key="index"
            :src="value.logo" :width=64 :style="{ borderRadius: 0 }" />
        </span>
        <h3>{{ t('home.programming_languages') }}</h3>
        <span class="icons-container">

          <Image v-for="(x) in Object.values(logos).filter((x: any) => x.tags.includes('language'))" :key="x.name"
            :src="x.logo" :width=64 :style="{ borderRadius: 0 }" />
        </span>
        <h3>Backend</h3>
        <span class="icons-container">

          <Image v-for="(x) in Object.values(logos).filter((x: any) => x.tags.includes('backend'))" :key="x.name"
            :src="x.logo" :width=64 :style="{ borderRadius: 0 }" />
        </span>
        <h3>Frontend</h3>
        <span class="icons-container">

          <Image v-for="(x) in Object.values(logos).filter((x: any) => x.tags.includes('frontend'))" :key="x.name"
            :src="x.logo" :width=64 :style="{ borderRadius: 0 }" />
        </span>
        <h3>{{ t('home.databases') }}</h3>
        <span class="icons-container">

          <Image v-for="(x) in Object.values(logos).filter((x: any) => x.tags.includes('database'))" :key="x.name"
            :src="x.logo" :width=64 :style="{ borderRadius: 0 }" />
        </span>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped>
.icons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.separator {
  display: none;
  margin: 0 10px !important;
}

.separator::before {
  content: '|';
}

@media (min-width: 600px) {
  .separator {
    display: block;
  }
}
</style>
