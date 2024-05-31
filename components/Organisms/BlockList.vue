<template>
    <div class="o-block-list">
        <div class="o-block-list__outer">
            <div class="o-block-list__inner">
                <div class="o-block-list__list">
                    <ul class="o-block-list__list-ul" v-if="items.some(item => item.value)">
                        <li class="o-block-list__list-li print-section" v-for="item in filteredItems" :key="item.name">
                            <div class="o-block-list__list-content">
                                <div class="o-block-list__list-text">
                                    <h3 class="o-block-list__list-h3">{{ item.name }}</h3> 
                                    <span class="o-block-list__list-span">{{ item.value }} {{ perexListItemValueSubfix }}</span>
                                </div>
                                <i class="o-block-list__list-info">({{ formatDate(item.date_update) }})</i>
                            </div>
                        </li>
                    </ul>
                    <OrganismsNoneContent text="Bohužel tu není žadný obsah" styleThema=" -green" styleGap=" px-1" v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoBlockListComponent',

        props: {
            items: {
                type: Array,
                required: false
            },
            perexListItemValueSubfix: {
                type: String,
                required: false
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
        },

        methods: {
            formatDate(date) {
                const [month, year] = date.split('-')
                const formattedDate = new Date(`${year}-${month}-01`)
                const options = { month: 'long', year: 'numeric' }
                return formattedDate.toLocaleDateString('cs', options)
            }
        },

        computed: {
            filteredItems() {
                return this.items.filter(item => item.value);
            }
        }
    })
</script>