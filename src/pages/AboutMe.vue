<script setup lang="ts">
import MainContainer from "../components/MainContainer.vue";
import ProfilePicture from "../assets/pp.png";
import Image from "../components/Image.vue";
// import {
//   Assessment,
//   CalendarMonth,
//   Engineering,
//   LocationOn,
//   School,
// } from "@mui/icons-material";
import logos from "../assets/logos";
// import Icon from "icon.jpeg"
import InfoRow from "../components/InfoRow.vue";
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <MainContainer>
    <div style='lineHeight: 1.75'>
      <h2>Sobre mí</h2>
      <Image :src="ProfilePicture" :width=350 :style="{ float: 'left', margin: '0 3rem 1rem 0' }" />
      <p style="textAlign: justify">
        ¡Bienvenido a mi sitio personal! Mi nombre es Carlos López, soy un Licenciado en Matemáticas Aplicadas que
        desarrolló un gran interes en la programación muy temprano durante mi carrera, llevandome a aventurarme en el
        mercado de desarrollo de sotware.
        <br />
        Con más de tres años de experiencia, me especializo en el desarrollo web full-stack con un mayor enfoque en el
        backend. Me apasiona mantenerme al día con las últimas novedades en tecnología y expandir mi conocimiento
        continuamente.
        <br />
      </p>
      <p style="textAlign: justify">
        Si te interesa explorar mis proyectos o conocer más sobre mi historia laboral, puedes encontrar mas detalles en
        sus respectivas páginas: <RouterLink to="/projects"> Proyectos</RouterLink> y <RouterLink to="/history">Historia
          laboral</RouterLink>. Estas páginas proveen una descripción general de los proyectos en los que he trabajado y
        de mi experiencia profesional al día de hoy. No dude en dar clic en los respectivos enlaces para profundizar en
        mis logros pasados y ver los resultados tangibles de mi experiencia.
      </p>
      <div style="display: flow-root">
        <h2>
          Formación académica
        </h2>
        <ul>
          <li>
            <h4 style="margin: 8px 0">Licenciado en Matemáticas aplicadas</h4>
            <InfoRow>
              <span>
                Universidad Autónoma de Coahuila
              </span>
              <p class="separator" />
              <span>
                2017 - 2022
              </span>
            </InfoRow>
            <InfoRow>
              <span>
                Graduado con mención honorífica
              </span>
              <p class="separator" />
              <span>
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
                Amazon Web Services
              </span>
              <p class="separator" />
              <span>
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
                Amazon Web Services
              </span>
              <p class="separator" />
              <span>
                2023
              </span>
            </InfoRow>
          </li>
        </ul>
      </div>
      <div style="display: flow-root">
        <h2>
          Mi stack tecnológico
        </h2>
        <h3>Stack principal</h3>
        {{ console.log(logos) }}
        <span class="icons-container">
          <Image v-for="(value, index) in ['MONGODB', 'EXPRESS', 'REACT', 'NODE'].map((x, _) => logos[x])" :key="index"
            :src="value.logo" :width=64 :style="{ borderRadius: 0 }" />
        </span>
        <h3>Lenguajes de programación</h3>
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
        <h3>Bases de datos</h3>
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
