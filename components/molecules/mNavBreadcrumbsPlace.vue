<template>
    <nav class="m-nav-breadcrumbs">
        <div class="m-nav-breadcrumbs__outer">
            <div class="m-nav-breadcrumbs__inner">
                <ul class="m-nav-breadcrumbs__items">
                    <li class="m-nav-breadcrumbs__item" v-for="item in links" :key="item.id">
                        <NuxtLink class="m-nav-breadcrumbs__link" :to="item.url" v-if="item.status === 'link'">{{ item.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs__span" v-else-if="item.status === 'span'">{{ item.name }}</span>
                    </li>

                    <li class="m-nav-breadcrumbs__item" v-if="place">
                        <NuxtLink class="m-nav-breadcrumbs__link" :to="links[1].url + '/' + place.slug" v-if="typeof tab !== 'undefined' && tab !== 'default'">{{ place.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs__span" v-else>{{ place.name }}</span>
                    </li>

                    <li class="m-nav-breadcrumbs__item" v-if="typeof tab !== 'undefined' && tab !== 'default'">
                        <span class="m-nav-breadcrumbs__span">{{ tabName }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
   export default {
        name: 'MoleculesmNavBreadcrumbsComponent',
    
        data() {
            return {
                place: this.place
            }
        },

        props: {
            links: {
                type: Array,
                required: true
            },
            place: {
                type: Array,
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