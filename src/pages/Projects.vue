<script setup lang="js">
import MainContainer from '../components/MainContainer.vue';
import Navbar from '../components/Navbar.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { t } from '../utils/i18n';
import projects from "../utils/projectsInformation.json"
import { Carousel } from 'bootstrap'
import { useHead } from "@unhead/vue"
import { onMounted, onUnmounted } from 'vue';

useHead({
    title: () => t('meta.projects'),
})

onMounted(() => {
    const element = document.querySelector('.carousel')
    const carousel = new Carousel(element, {})
    element.addEventListener('touchstart', (e) => {
        const x = e.touches[0].pageX
        const handler = (e) => {
            const newX = e.touches[0].pageX
            const sensitivity = 5
            if (newX - x > sensitivity) {
                carousel.prev()
            }
            if (x - newX > sensitivity) {
                carousel.next()
            }

        }
        element.addEventListener('touchmove', handler, { passive: true })
        element.addEventListener('touchend', (e) => {
            element.removeEventListener('touchmove', handler)
        })
    }, { passive: true })
})

onUnmounted(() => {
    const element = document.querySelector('.carousel')
    element.removeEventListener('touchmove')
})
</script>

<template>
    <Navbar />
    <MainContainer :reduce-padding="true">
        <h2>{{ t('navbar.projects') }}</h2>
        <div id="projectsCarousel" class="custom-carousel carousel slide" data-bs-slide="next" data-bs-ride="carousel">
            <div>
                <button class="btn btn-secondary" data-bs-target="#projectsCarousel" data-bs-slide="prev" />
            </div>
            <div class="carousel-inner">
                <div :class="`carousel-item ${index === 0 ? 'active' : ''}`" v-for="(project, index) in projects"
                    :key="project.title">
                    <ProjectCard :data="project" />
                </div>
            </div>
            <div>
                <button class="btn btn-secondary" data-bs-target="#projectsCarousel" data-bs-slide="next" />
            </div>
        </div>
    </MainContainer>
</template>

<style scoped>
.custom-carousel {
    align-items: center;
    display: flex;
}

.custom-carousel button:focus {
    outline: none;
}

.carousel-item {
    height: inherit;
}

.custom-carousel button:hover {
    border-color: #AAAAAA;
    background-color: #999999;
}


.carousel-inner {
    height: calc(100vh - 201px);
}

.custom-carousel button {
    border-color: #AAAAAA;
    background-color: #AAAAAA;
}

.custom-carousel div:nth-of-type(1)>button::before {
    content: "<";
}

.custom-carousel div:nth-of-type(2) {
    cursor: auto;
}

.custom-carousel div:nth-last-of-type(1)>button::before {
    content: ">";
}

@media (max-width: 759px) {
    .custom-carousel button {
        display: none !important;
    }
}
</style>