<template>
    <div class="o-hero">
        <div class="o-hero__outer">
            <div class="o-hero__inner">
                <h1 class="o-hero__headline">{{ headline }}</h1>
                <p class="o-hero__perex" v-if="perex">{{ perex }}</p>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'OrganismsoHeroComponent',

        props: {
            headline: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: false
            }
        },
    }
</script>