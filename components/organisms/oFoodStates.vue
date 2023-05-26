<template>
    <div class="o-food-states">
        <div class="o-food-states__outer">
            <div class="o-food-states__inner">
                <h3 class="o-food-states__headline">Kde se jí {{ food }}?</h3>
                <ul class="o-food-states__items">
                    <li class="o-food-states__item" v-for="place in places" :key="place.name">
                        <NuxtLink class="o-food-states__link" :to="`/svet/stat/${place.slug}`" :aria-label="`Čti více o státě ${place.name}`" v-if="place.slug">{{ place.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoFoodStatesComponent',

        props: {
            places: {
                type: Array,
                required: true
            },
            food: {
                type: String,
                required: true
            }
        },
    }
</script>