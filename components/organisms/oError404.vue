<template>
    <div class="o-error404">
        <div class="o-error404__outer">
            <div class="o-error404__inner">
                <h1 class="o-error404__headline">{{ headline }}</h1>
                <p class="o-error404__perex" v-if="perex">{{ perex }}</p>
                <div class="col flex flex-center mt-4 mb-2">
                    <div class="col-6">
                        <aButtonFillFull target="internal" url="/" text="Zpět na úvod" styleThema=" -green" styleFont=" -bold" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'

    export default defineComponent({
        name: 'OrganismsoError404Component',

        components: {
            aButtonFillFull
        },

        props: {
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