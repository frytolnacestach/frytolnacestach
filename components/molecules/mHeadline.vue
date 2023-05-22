<template>
    <div :class="'m-headline' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '') + (styleGap ? styleGap : '')">
        <h2 class="m-headline__title">{{ title }} {{ titleValue ? titleValue : '' }}</h2>
        <p class="m-headline__perex pt-1" v-if="perex">{{ perex }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmHeadlineComponent',
        
        props: {
            title: {
                type: String,
                required: true
            },
            titleValue: {
                type: String,
                required: false
            },
            perex: {
                type: String,
                required: false
            },
            styleThema: {
                type: String,
                required: false
            },
            styleAlign: {
                type: String,
                required: false
            },
            styleGap: {
                type: String,
                required: false
            }
        }
    }
</script>