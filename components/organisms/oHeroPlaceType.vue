<template>
    <div :class="'o-hero-place-type' + styleType">
        <div class="o-hero-place-type__inner">
            <div class="o-hero-place-type__image">
                <div class="o-hero-place-type__image-file"></div>
            </div>
            <h1 class="o-hero-place-type__headline">{{ title }}</h1>
            <p class="o-hero-place-type__perex" v-if="perex">{{ perex }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroPlaceTypeComponent',

        props: {
            styleType: {
                type: String,
                required: true
            },
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