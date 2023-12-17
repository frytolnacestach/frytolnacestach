<template>
<div class="o-facts-place">
        <div class="o-facts-place__outer">
            <div class="o-facts-place__inner">
                <ul class="o-facts-place__items">
                    <li class="o-facts-place__item" v-for="item in items" v-bind:key="item.name">
                        <h3 class="o-facts-place__name">{{ item.name }}</h3>
                        <span class="o-facts-place__value" target="_blank">{{ item.value }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrganismsoFactsPlaceComponent',

    props: {
        items: {
            type: Array,
            required: true
        }
    }

}
</script>