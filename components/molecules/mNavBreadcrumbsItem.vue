<template>
    <nav class="m-nav-breadcrumbs-item">
        <div class="m-nav-breadcrumbs-item__outer">
            <div class="m-nav-breadcrumbs-item__inner">
                <ul class="m-nav-breadcrumbs-item__items">
                    <li class="m-nav-breadcrumbs-item__item" v-for="item in links" :key="item.id">
                        <NuxtLink class="m-nav-breadcrumbs-item__link" :to="item.url" v-if="item.status === 'link'">{{ item.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs-item__span" v-else-if="item.status === 'span'">{{ item.name }}</span>
                    </li>
                    <li class="m-nav-breadcrumbs-item__item" v-if="item">
                        <span class="m-nav-breadcrumbs-item__span">{{ item.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
   export default defineComponent({
        name: 'MoleculesmNavBreadcrumbsFoodComponent',

        props: {
            links: {
                type: Array,
                required: true
            },
            item: {
                type: Object,
                required: true
            }
        }
    })
</script>