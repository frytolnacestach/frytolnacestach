<template>
    <nav class="m-nav-breadcrumbs-place">
        <div class="m-nav-breadcrumbs-place__outer">
            <div class="m-nav-breadcrumbs-place__inner">
                <ul class="m-nav-breadcrumbs-place__items">
                    <li class="m-nav-breadcrumbs-place__item" v-for="item in links" :key="item.id">
                        <NuxtLink class="m-nav-breadcrumbs-place__link" :class="{ '-icon': item.icon, ['-'+item.type]: item.type }" :to="item.url" v-if="item.status === 'link'" :title="item.name">
                            {{ item.icon ? '' : item.name }}
                        </NuxtLink>
                        <span class="m-nav-breadcrumbs-place__span" :class="{ '-icon': item.icon, ['-'+item.type]: item.type }" v-else-if="item.status === 'span'" :title="item.name">
                            {{ item.icon ? '' : item.name }}
                        </span>
                    </li>

                    <li class="m-nav-breadcrumbs-place__item" v-if="tab !== '' && tab !== 'undefined' && tab !== 'default'">
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