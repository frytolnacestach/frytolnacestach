<template>
    <nav class="m-nav-breadcrumbs-food">
        <div class="m-nav-breadcrumbs-food__outer">
            <div class="m-nav-breadcrumbs-food__inner">
                <ul class="m-nav-breadcrumbs-food__items">
                    <li class="m-nav-breadcrumbs-food__item" v-for="item in links" :key="item.id">
                        <NuxtLink class="m-nav-breadcrumbs-food__link" :to="item.url" v-if="item.status === 'link'">{{ item.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs-food__span" v-else-if="item.status === 'span'">{{ item.name }}</span>
                    </li>

                    <li class="m-nav-breadcrumbs-food__item" v-if="food">
                        <span class="m-nav-breadcrumbs-food__span">{{ food.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
   export default {
        name: 'MoleculesmNavBreadcrumbsFoodComponent',

        props: {
            links: {
                type: Array,
                required: true
            },
            food: {
                type: Object,
                required: true
            }
        }
    }
</script>