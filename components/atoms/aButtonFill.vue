<template>
    <NuxtLink :class="'a-button-fill' + (styleThema ? styleThema : '') + ' hidden-print'" :to="url" v-if="target === 'internal'">{{ text }}</NuxtLink>
    <a :class="'a-button-fill' + (styleThema ? styleThema : '') + ' hidden-print'" :href="url" target="_blank" v-else>{{ text }}</a>
</template>

<script>
    export default {
        name: 'AtomsaButtonFillComponent',
        
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
            }
        }
    }
</script>