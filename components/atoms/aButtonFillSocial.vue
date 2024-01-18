<template>
    <NuxtLink :class="'a-button-fill-social' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '')" :to="url" v-if="target === 'internal'">{{ text }}</NuxtLink>
    <a :class="'a-button-fill-social' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '')" :href="url" target="_blank" rel="noopener" v-else>{{ text }}</a>
</template>

<script>
    export default {
        name: 'AtomsaButtonFillSocialComponent',
        
        props: {
            url: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            target: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            },
            styleSize: {
                type: String,
                required: false
            }
        }
    }
</script>