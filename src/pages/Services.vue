<script setup lang="ts">
import MainContainer from '../components/MainContainer.vue';
import { t, messages } from "../utils/i18n"
import images from "../assets/services"
import Navbar from '../components/Navbar.vue';
</script>

<template>
    <Navbar />
    <MainContainer>
        <h2>{{ t('navbar.services') }}</h2>
        <div v-for="(title, index) in messages.services.titles" :key="index">
            <div v-if="index%2 === 0" class="row">
                <div class="image" :style="`background-image: url(${images[index]})`"/>
                <div class="content-right">
                    <h3>{{ title }}</h3>
                    <p style="text-align: justify;">{{ t(`services.items.${index}`) }}</p>
                </div>
            </div>
            <div v-else class="row-reverse">
                <div class="content-left">
                    <h3>{{ title }}</h3>
                    <p style="text-align: justify;">{{ t(`services.items.${index}`) }}</p>
                </div>
                <div class="image" :style="`background-image: url(${images[index]})`"/>
            </div>
        </div>
    </MainContainer>
</template>

<style scoped>
    .image {
        height: inherit;
        min-height: 150px;
        width: 33.33%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .content-right {
        padding: 10px;
        text-align: left;
        width: 66.66%;
        background: #DDDDDD;
    }

    .content-left {
        padding: 10px;
        text-align: left;
        width: 66.66%;
        background: #EEEEEE;
    }

    .row {
        display: flex;
    }

    .row-reverse {
        display: flex;
    }

    @media (max-width: 599px) {
        .image {
            width: calc(100% - 2px);
        }

        .content-right {
            width: calc(100% - 22px);
        }

        .row {
            flex-direction: column;
        }

        .row-reverse {
            flex-direction: column-reverse;
        }
    }
</style>