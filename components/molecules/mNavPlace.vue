<template>
    <div class="m-nav-place hidden-print">
        <div class="m-nav-place__outer">
            <div class="m-nav-place__inner">
                <ul class="m-nav-place__items">
                    <li class="m-nav-place__item" v-for="tab in tabs" :key="tab.slug">
                        <nuxt-link :to="`/svet/stat/${ place.slug }`" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug || !activeTab }" v-if="!tab.slug || tab.slug === 'default'">
                            {{ place.name ? place.name : 'Stát' }}
                        </nuxt-link>
                        <nuxt-link :to="`/svet/stat/${ place.slug }/${tab.slug}`" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug }" v-if="tab.slug && tab.slug !== 'default' && tab.visible === true">
                            {{ tab.label }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmNavPlaceComponent',

        props: {
            place: {
                type: Object,
                required: true
            },
            tabs: {
                type: Array,
                required: true
            },
            activeTab: {
                type: String,
                required: false
            }
        }
    }
</script>