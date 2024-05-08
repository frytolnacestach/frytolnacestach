<template>
<div class="o-facts-place">
        <div class="o-facts-place__outer">
            <div class="o-facts-place__inner">
                <ul class="o-facts-place__items">
                    <li class="o-facts-place__item" v-for="item in items" v-bind:key="item.name">
                        <h3 class="o-facts-place__name">{{ item.name }}</h3>
                        <span class="o-facts-place__value" target="_blank" rel="noopener">{{ item.value }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoFactsPlaceComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        },

        head() {
            // Empty Array
            if (!this.items && this.items.length === 0) {
                return { script: [] };
            }
            // Return
            const jsonldItems = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Fakta",
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "name": item.name,
                                "perex": item.value
                            }
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        }
    })
</script>