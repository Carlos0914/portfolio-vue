<script setup lang="ts">
import { ref } from 'vue';
import MainContainer from '../components/MainContainer.vue';
import Navbar from '../components/Navbar.vue';
import { send } from "@emailjs/browser"
import { t } from '../utils/i18n';
import { useHead } from "@unhead/vue"

useHead({
    title: () => t('meta.contact'),
})
const emailRegex = new RegExp(
    /^([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/,
    "gm"
);

const name = ref("");
const message = ref("");
const sender = ref("");
const errors = ref({
    name: "",
    message: "",
    sender: "",
});

const sendMail = async () => {
    let error = false;
    if (!name.value) {
        error = true;
        errors.value = { ...errors.value, name: t('contact.errors.name') };
    }
    if (message.value.length < 20) {
        error = true;
        errors.value = { ...errors.value, message: t('contact.errors.message') };

    }
    if (!sender.value.match(emailRegex)) {
        error = true;
        errors.value = { ...errors.value, sender: t('contact.errors.email') };
    }
    console.log(errors.value)
    if (!error) {
        const response = await send(
            "service_29smvu8",
            "template_kcrbnch",
            {
                from_name: name.value,
                message: message.value,
                reply_to: sender.value,
            },
            "9S5J3IM99OnP01NLK"
        );
        if (response.status === 200) {
            alert(t('contact.success'));
            name.value = "";
            message.value = "";
            sender.value = "";
        } else {
            alert(t('contact.errors.form'));
        }
    }
};

</script>

<template>
    <Navbar />
    <MainContainer>
        <h2>{{ t('navbar.contact') }}</h2>
        <p>{{ t('contact.headline') }}</p>
        <div class="fields-container">
            <span>

                <label for="nameinput">{{ t('contact.nameLabel') }}</label>
                <input class="form-control" required id="nameinput" :error="Boolean(errors.name)"
                    :placeholder="t('contact.namePH')" :value="name"
                    v-on:change="(e: any) => { name = e.target.value; errors = { ...errors, name: '' } }" />
                <p v-if="errors.name.length > 0" class="error-message">{{ errors.name }}</p>
            </span>

            <span>
                <label for="mailinput">{{ t('contact.emailLabel') }}</label>
                <input class="form-control" required id="mailinput" :error="Boolean(errors.sender)"
                    :placeholder="t('contact.emailPH')" :value="sender"
                    v-on:change="(e: any) => { sender = e.target.value; errors = { ...errors, sender: '' } }" />
                <p v-if="errors.sender.length > 0" class="error-message">{{ errors.sender }}</p>
            </span>
            <span>
                <label for="nameinput">{{ t('contact.messageLabel') }}</label>
                <textarea class="form-control" rows="5" required id="msginput" :error="Boolean(errors.message)"
                    :placeholder="t('contact.messagePH')" :value="message"
                    v-on:change="(e: any) => { message = e.target.value; errors = { ...errors, message: '' } }" />
                <p v-if="errors.message.length > 0" class="error-message">{{ errors.message }}</p>
            </span>

            <button class="btn btn-primary" v-on:click="sendMail" :disabled="Object.values(errors).some(Boolean)">
                <send-icon class="icon"/>
                {{ t('contact.send') }}
            </button>

            <i18n-t keypath="contact.contactLinkedin" tag="p">
                <a href="https://linkedin.com/in/carlos-lopez-dev" target="_blank" rel="noreferrer">
                    Linkedin
                </a> </i18n-t>

        </div>
    </MainContainer>
</template>

<style scoped>
input,
textarea {
    all: unset;
    text-align: left;
    background: transparent;
    border: 1px solid black;
    line-height: 2rem;
    padding: 4px 8px;
}

input[error="true"],
textarea[error="true"] {
    border: 1px solid #d32f2f;
}

input[error="true"]::placeholder,
textarea[error="true"]::placeholder {
    opacity: 0.9;
}

.fields-container span:not(.icon) {
    display: flex;
    flex-direction: column;
}

label {
    text-align: left;
    line-height: 1.8;
    padding: 0 2px
}

.error-message {
    color: #d32f2f;
    font-size: 0.75rem;
    line-height: 1.66rem;
    letter-spacing: 0.03333em;
    margin: -8px 0;
    padding: 0 6px;
}

.error-message::before {
    content: '* ';
}

.fields-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>