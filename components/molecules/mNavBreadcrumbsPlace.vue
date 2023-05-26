<template>
    <nav class="m-nav-breadcrumbs-place">
        <div class="m-nav-breadcrumbs-place__outer">
            <div class="m-nav-breadcrumbs-place__inner">
                <ul class="m-nav-breadcrumbs-place__items">
                    <li class="m-nav-breadcrumbs-place__item" v-for="item in links" :key="item.id">
                        <NuxtLink class="m-nav-breadcrumbs-place__link" :to="item.url" v-if="item.status === 'link'">{{ item.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs-place__span" v-else-if="item.status === 'span'">{{ item.name }}</span>
                    </li>

                    <li class="m-nav-breadcrumbs-place__item" v-if="place">
                        <NuxtLink class="m-nav-breadcrumbs-place__link" :to="links[1].url + '/' + place.slug" v-if="typeof tab !== 'undefined' && tab !== 'default'">{{ place.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs-place__span" v-else>{{ place.name }}</span>
                    </li>

                    <li class="m-nav-breadcrumbs-place__item" v-if="typeof tab !== 'undefined' && tab !== 'default'">
                        <span class="m-nav-breadcrumbs-place__span">{{ tabName }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
   export default {
        name: 'MoleculesmNavBreadcrumbsPlaceComponent',

        props: {
            links: {
                type: Array,
                required: true
            },
            place: {
                type: Object,
                required: true
            },
            tab: {
                type: String,
                required: false
            },
            tabName: {
                type: String,
                required: false
            }
        }
    }
</script>