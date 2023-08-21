<script setup lang="js">
import { t } from '../utils/i18n';
import Image from './Image.vue';
import projectlogos from "../assets/projectlogos"
import InfoRow from './InfoRow.vue';
import logos from '../assets/logos';
import { messages } from '../utils/i18n';

</script>

<template>
    <div class="custom-card h-100 d-flex flex-column">
        <div class="custom-card-header">
            {{ data.title }}
        </div>
        <Image :src="projectlogos[data.media]" alt="logo"
            style="object-fit: contain; padding: 0 20px; width: calc(100% - 40px);" :height=216 />
        <div style="overflow: auto;">
            <p style="text-align: center; font-style: italic;">
                {{ t(`projects.${data.key}.description`) }}
            </p>
            <InfoRow>
                {{ t(`projects.${data.key}.dates.0`) }}
                <span style="color: #777777">({{ t(`projects.${data.key}.dates.1`) }})</span>
            </InfoRow>

            <InfoRow v-for="( site, index ) in  data.sites " key={index}>
                <!-- {site.active ? (
                <Public sx={{ color: "green" }} />
                ) : (
                <PublicOff sx={{ color: "red" }} />
                )}{" "} -->
                <a class="site-link" :href="site.url" target="_blank" rel="noreferrer">
                    {{ site.url }}
                </a>
            </InfoRow>
            <h4>{{ t('projects.labels.tasks') }}</h4>
            <ul style="text-align: left; margin: 0 16px; list-style: inside; font-size: 0.875rem;">
                <li v-for="( task, index ) in messages.projects[data.key].tasks " key={index}>{{ t(`projects.${data.key}.tasks.${index}`) }}</li>
            </ul>
            <h4>{{ t('projects.labels.tech') }}</h4>
            <span style="display: flex , justify-content: center , gap: 12px, flex-wrap: wrap">
                <Image v-for="( x ) in  data.technologies " :key="x" :src="logos[x].logo" :width=64
                    style="border-radius: 0" />
            </span>
        </div>
    </div>
</template>

<script lang="js">
export default {
    props: {
        data: Object,
        first: Boolean
    }
}
</script>

<style>
.custom-card {
    position: relative;
    max-width: 500px;
    overflow: auto;
    width: calc(100% - 28px);
    color: black;
    margin: 0 auto;
    max-height: calc(100% - 2rem);
    overflow-y: auto;
    border: 1px solid #DDDDDD;
    border-radius: 20px;
    padding-bottom: 16px;
    flex-shrink: 0;
    box-shadow: 8px 8px 6px #8a8686;
}

.custom-card-header {
    display: flex;
    justify-content: center;
    padding: 16px;
    margin: 0px;
    font-style: italic;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    display: block;
}

.site-link {
    width: 250px;
    text-align: left;
}

@media (max-width: 599px) {
    .site-link {
        text-align: center;
    }
}
</style>

