<script setup lang="js">
import MainContainer from '../components/MainContainer.vue';
import Navbar from '../components/Navbar.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { t } from '../utils/i18n';
import projects from "../utils/projectsInformation.json"
import { Carousel } from 'bootstrap'
</script>

<template>
    <Navbar />
    <MainContainer>
        <h2>{{ t('navbar.projects') }}</h2>
        <div id="projectsCarousel" class="custom-carousel carousel slide" data-bs-interval="2500">
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