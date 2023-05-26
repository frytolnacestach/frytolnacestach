<template>
    <div :class="'o-hero-food'">
        <div class="o-hero-food__inner">
            <h1 class="o-hero-food__headline">{{ title }}</h1>
            <p class="o-hero-food__perex" v-if="perex">{{ perex }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroFoodComponent',

        props: {
            title: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: false
            }
        }
    }
</script>