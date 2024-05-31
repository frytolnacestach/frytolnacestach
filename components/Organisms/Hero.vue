<template>
    <div :class="'o-hero' + modifierCSS + classCSS">
        <div class="o-hero__outer">
            <div class="o-hero__inner">
                <h1 class="o-hero__headline">{{ headline }}</h1>
                <p class="o-hero__perex" v-if="perex" v-html="perex"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoHeroComponent',

        props: {
            modifierCSS: {
                type: String,
                required: false,
                default: ' '
            },
            classCSS: {
                type: String,
                required: false,
                default: ' '
            },
            headline: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: false
            }
        }
    })
</script>