<script setup lang="ts">
import Image from '../components/Image.vue';
import MainContainer from '../components/MainContainer.vue';
import ClickITLogo from "../assets/ClickIT.png"
import BilboLogo from "../assets/Bilbo.webp"
import Navbar from '../components/Navbar.vue';
import { t } from '../utils/i18n';
</script>

<template>
    <Navbar />
    <MainContainer>
        <h2>{{ t('navbar.history') }}</h2>
        <div style="flex-direction: column; display: flex; gap: 16;">
            <div style="position: relative; max-width: 500px; width: 100%; margin: 0 auto;">
                <Image :src="ClickITLogo" width="calc(100% - 20px)"
                    :style="{ position: 'relative', padding: '10px', background: '#333333', 'border-radius': '10px 10px 0 0', margin: '0 auto', 'z-index': 2, 'max-width': '500px', cursor: 'pointer' }" />
                    <b-collapse></b-collapse>
            </div>
            <div style="position: relative; max-width: 500px; width: 100%; margin: 0 auto;">
                <Image :src="BilboLogo" width="calc(100% - 20px)"
                    :style="{ position: 'relative', padding: '10px', background: '#333333', 'border-radius': '10px 10px 0 0', margin: '0 auto', 'z-index': 2, 'max-width': '500px', cursor: 'pointer' }" />
            </div>
        </div>
    </MainContainer>
</template>