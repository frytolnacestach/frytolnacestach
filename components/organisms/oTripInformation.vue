<template>
    <div :class="'o-trip-information' + (styleThema ? styleThema : '')">
        <div class="o-trip-information__outer">
            <div class="o-trip-information__inner">
                <h2 class="o-trip-information__title">{{ title }}</h2>
                <p class="o-trip-information__perex">{{ perex }}</p>
                <div class="o-trip-information__items">
                    <div class="o-trip-information__item" v-for="item in items" v-bind:key="item.name">
                        <h4 class="o-trip-information__name">{{ item.name }}<span class="o-trip-information__name-sub"> {{ item.subname }}</span></h4>
                        <span class="o-trip-information__value">{{ item.value }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoTripInformationComponent',

        props: {
            title: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            }
        }
    }
</script>