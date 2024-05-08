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
                                <p class="o-sidebar-links__description" v-html="item.description"></p>
                                <div class="o-sidebar-links__link">
                                    <a class="o-sidebar-links__link-item" :href="item.url" :alt="item.name">Odkaz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default defineComponent({
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

        head() {
            // Empty Array
            if (!this.items && this.items === null) {
                return { script: [] };
            }
            // Return
            const jsonldItems = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Externí odkazy",
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "name": item.name,
                                "perex": item.description,
                                "url": item.url
                            }
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        },
    })
</script>