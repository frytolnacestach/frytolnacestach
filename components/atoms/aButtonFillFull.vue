<template>
    <NuxtLink :class="'a-button-fill-full' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '') + (styleFont ? styleFont : '') + ' hidden-print'" :to="url" v-if="target === 'internal'">{{ text }}</NuxtLink>
    <span :class="'a-button-fill-full' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '') + (styleFont ? styleFont : '') + ' hidden-print'" v-else-if="target === 'span'">{{ text }}</span>
    <a :class="'a-button-fill-full' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '') + (styleFont ? styleFont : '') + ' hidden-print'" :href="url" target="_blank" rel="noopener" v-else>{{ text }}</a>
</template>

<script>
    export default {
        name: 'AtomsaButtonFillFullComponent',
        
        props: {
            url: {
                type: String,
                required: false
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
            },
            styleFont: {
                type: String,
                required: false
            }
        }
    }
</script>