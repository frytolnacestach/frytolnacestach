<template>
    <section class="t-section -px-world my-2">
        <div class="t-section__inner">
            <div class="o-sidebar-links">
                <div class="o-sidebar-links__outer">
                    <div class="o-sidebar-links__inner">
                        <h3 class="o-sidebar-links__header">{{ headline }}</h3>
                        <div class="o-sidebar-links__items">
                            <div class="o-sidebar-links__item" v-for="item in items" :key="item.name">
                                <h4 class="o-sidebar-links__name">
                                    {{ item.name }}
                                </h4>
                                <p>{{ item.description }}</p>
                                <a :href="item.url" :alt="item.name">Odkaz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OrganismsoSidebarLinkComponent',

        props: {
            items: {
                type: Array,
                required: true
            },
            headline: {
                type: String,
                required: true
            }
        },
    }
</script>