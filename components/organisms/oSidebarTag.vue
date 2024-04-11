<template>
    <div class="o-sidebar-tag">
        <div class="o-sidebar-tag__outer">
            <div class="o-sidebar-tag__inner">
                <div class="o-sidebar-tag__items">
                    <div class="o-sidebar-tag__item" v-for="tag in tags" v-bind:key="tag.name">
                        <nuxtLink class="o-sidebar-tag__link" :to="`/clanky?filterTag=${tag.name}`">{{ tag.name }}</nuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoSidebarTagComponent',

        props: {
            tags: {
                type: Array,
                required: true
            }
        }
    }
</script>