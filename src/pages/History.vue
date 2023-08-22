<script setup lang="js">
import Image from '../components/Image.vue';
import MainContainer from '../components/MainContainer.vue';
import ClickITLogo from "../assets/ClickIT.png"
import BilboLogo from "../assets/Bilbo.webp"
import Navbar from '../components/Navbar.vue';
import { t } from '../utils/i18n';
import { Collapse } from "bootstrap";
import InfoRow from '../components/InfoRow.vue';
import { onMounted, ref, watch } from 'vue';
import { useHead } from "@unhead/vue"

useHead({
  title: () => t('meta.history'),
})

const toggled = ref(0)
let clickITCollapse, bilboCollapse

// const bilboCollapse = new Carousel(document.getElementById('collapseBilbo'))
onMounted(() => {
    clickITCollapse = document.getElementById('collapseClickit')
    bilboCollapse = document.getElementById('collapseBilbo')

    clickITCollapse = new Collapse(clickITCollapse, { toggle: true })
    bilboCollapse = new Collapse(bilboCollapse, { toggle: false })
})

watch(toggled, () => {
    if (clickITCollapse && bilboCollapse) {
        if (toggled.value === 0) {
            clickITCollapse.show()
            bilboCollapse.hide()
        } else {
            clickITCollapse.hide()
            bilboCollapse.show()
        }
    }
}
)

</script>

<template>
    <Navbar />
    <MainContainer>
        <h2>{{ t('navbar.history') }}</h2>
        <div style="flex-direction: column; display: flex; gap: 16px;">
            <div style="position: relative; max-width: 500px; width: 100%; margin: 0 auto;">
                <Image :src="ClickITLogo" class="image" @click="toggled = 0" />
                <div id="collapseClickit" :class="`collapse collapse-container`">
                    <div style="display: flex; flex-direction: column; gap: 10px; padding: 0 20px;">
                        <InfoRow style="margin-top: 10px;">
                            <calendarmonth />
                            <p>{{ t('history.clickit.date') }}</p>
                        </InfoRow>
                        <InfoRow>
                            <p>
                                <account />
                                {{ t('history.clickit.role') }}
                            </p>
                        </InfoRow>
                        <InfoRow>
                            <p>
                                <Label />
                                {{ t('history.clickit.line') }}
                            </p>
                        </InfoRow>
                        <InfoRow>
                            <p>
                                <laptop />
                                {{ t('history.clickit.tech') }}
                            </p>
                        </InfoRow>
                        <InfoRow style="marginBottom: 10px">
                            <p>
                                <earth />
                                <a style="color: #333333" href="https://www.clickittech.com" target="_blank"
                                    rel="noreferrer">
                                    https://www.clickittech.com
                                </a>
                            </p>
                        </InfoRow>
                    </div>
                </div>
            </div>
            <div style="position: relative; width: 500px; width: 100%; margin: 0 auto;">
                <Image :src="BilboLogo" class="image" @click="toggled = 1" />
                <div id="collapseBilbo" :class="`collapse collapse-container`">
                    <div style="display: flex; flex-direction: column; gap: 10px; padding: 0 20px;">
                        <InfoRow style="marginTop: 10px">
                            <p>
                                <calendarmonth />
                                2020 - 2021
                            </p>
                        </InfoRow>
                        <InfoRow>
                            <p>
                                <account />
                                {{ t('history.bilbo.role') }}
                            </p>
                        </InfoRow>
                        <InfoRow>
                            <p>
                                <Label />
                                {{ t('history.bilbo.line') }}
                            </p>
                        </InfoRow>
                        <InfoRow>
                            <p>
                                <laptop/>
                                {{ t('history.bilbo.tech') }}
                            </p>
                        </InfoRow>
                        <InfoRow style="marginBottom: 10px">
                            <p>
                                <earth />
                                <a style="color: #333333" href="https://www.bilbo.mx" target="_blank" rel="noreferrer">
                                    https://www.bilbo.mx
                                </a>
                            </p>
                        </InfoRow>
                    </div>
                </div>
            </div>
        </div>
    </MainContainer>
</template>

<style scoped>
.collapse-container {
    max-width: 500px;
    color: #333333;
    width: auto;
    top: 0px;
    background: #AAAAAA;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    position: relative;
    z-index: 0;
}

.image {
    position: relative;
    padding: 10px;
    background: #333333;
    border-radius: 10px 10px 0 0 !important;
    margin: 0 auto;
    z-index: 2;
    width: 500px;
    cursor: pointer;
}
</style>