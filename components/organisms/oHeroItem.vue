<template>
    <div :class="'o-hero-item'">
        <div class="o-hero-item__inner">
            <h1 class="o-hero-item__headline">{{ title }}</h1>
            <p class="o-hero-item__perex" v-if="perex">{{ perex }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroItemComponent',

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