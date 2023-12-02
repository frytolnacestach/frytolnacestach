<template>
    <div :class="'m-headline' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '') + (styleGap ? styleGap : '')">
        <div class="m-headline__outer">
            <div class="m-headline__inner">
                <h2 class="m-headline__title" v-if="title">
                    {{ title }} {{ titleValue ? titleValue : '' }}
                    <aButtonFill :url="url" :text="urlText" styleThema=" -small -green" target="internal" v-if="url" />
                </h2>
                <p class="m-headline__perex pt-1" v-if="perex">{{ perex }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFill from '~/components/atoms/aButtonFill.vue'

    export default {
        name: 'MoleculesmHeadlineComponent',
        
        components: {
            aButtonFill
        },

        props: {
            title: {
                type: String,
                required: false
            },
            titleValue: {
                type: String,
                required: false
            },
            url: {
                type: String,
                required: false
            },
            urlText: {
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