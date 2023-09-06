<template>
    <div class="o-item-states">
        <div class="o-item-states__outer">
            <div class="o-item-states__inner">
                <h3 class="o-item-states__headline">{{ text }} {{ itemName }}?</h3>
                <ul class="o-item-states__items">
                    <li class="o-item-states__item" v-for="item in items" :key="item.name">
                        <NuxtLink class="o-item-states__link" :to="`/svet/stat/${item.slug}`" :aria-label="`Čti více o státu ${item.name}`">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoItemStatesComponent',

        props: {
            items: {
                type: Array,
                required: true
            },
            itemName: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    }
</script>