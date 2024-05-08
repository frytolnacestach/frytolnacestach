<template>
    <NuxtLink :class="'a-button-fill' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '') + ' hidden-print'" :to="url" v-if="target === 'internal'">{{ text }}</NuxtLink>
    <span :class="'a-button-fill' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '') + ' hidden-print'" v-else-if="target === 'span'">{{ text }}</span>
    <a :class="'a-button-fill' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '') + ' hidden-print'" :href="url" target="_blank" rel="noopener" v-else>{{ text }}</a>
</template>

<script>
    export default defineComponent({
        name: 'AtomsaButtonFillComponent',
        
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
            }
        }
    })
</script>