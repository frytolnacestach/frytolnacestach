<template>
    <div :class="'m-headline' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '') + (styleGap ? styleGap : '')">
        <div class="m-headline__outer">
            <div class="m-headline__inner">
                <h1 class="m-headline__title" v-if="title && styleSize === 'h1'">
                    {{ title }} {{ titleValue ? titleValue : '' }}
                    <aButtonFill :url="url" :text="urlText" styleThema=" -small -green" target="internal" v-if="url" />
                </h1>
                <h2 class="m-headline__title" v-if="title && styleSize === 'h2'">
                    {{ title }} {{ titleValue ? titleValue : '' }}
                    <aButtonFill :url="url" :text="urlText" styleThema=" -small -green" target="internal" v-if="url" />
                </h2>
                <p class="m-headline__perex pt-1" v-if="perex" v-html="perex"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFill from '~/components/atoms/aButtonFill.vue'

    export default defineComponent({
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
            styleSize: {
                type: String,
                required: false,
                default: "h2"
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
    })
</script>