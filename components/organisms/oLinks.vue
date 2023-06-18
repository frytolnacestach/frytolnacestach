<template>
    <div class="o-links">
        <div class="o-links__outer">
            <div class="o-links__inner">
                <h3 class="o-links__header">Odkazy co se mohou hodit</h3>
                <div class="o-links__items">
                    <div class="o-links__item" v-for="item in items" v-bind:key="item.name">
                        <h4 class="o-links__name">{{ item.name }}</h4>
                        <a class="o-links__link" :href="item.link" target="_blank">{{ item.link }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoLinksComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>