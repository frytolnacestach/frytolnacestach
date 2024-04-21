<template>
    <section :class="'t-section my-2 -p0 print-section' + (styleGap ? styleGap : '')" v-if="items && items.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="headline" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-place-teaser-list">
                <div class="o-place-teaser-list__outer">
                    <div class="o-place-teaser-list__inner">
                        <div class="o-place-teaser-list__items">
                            <div class="o-place-teaser-list__item" v-for="item in items" :key="item.id" v-if="item.id !== IDplaceShow && typePage !== typeShow">
                                <div class="o-place-teaser-list__content">
                                    <div class="o-place-teaser-list__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === item.id_image_hero)" class="o-place-teaser-list__image-lazyload">
                                            <aImage 
                                                :alt="item.name ? item.name : 'Místo'"  
                                                :author="images.find(image => image.id === item.id_image_cover).author"
                                                :lazy=true
                                                :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                                :imageName="images.find(image => image.id === item.id_image_cover).name"
                                                :sizes=imageSizes
                                                :srcSet=imageSizesMedia
                                                cssClassComponent="o-place-teaser-list"
                                            />
                                        </div>
                                        <div v-else class="o-place-teaser-list__image-lazyload">
                                            <aImage 
                                                :alt="item.name ? item.name : 'Místo'"   
                                                :lazy=true
                                                imageSource="/_default/"
                                                imageName="no-image"
                                                :sizes=imageSizes
                                                :srcSet=imageSizesMedia
                                                cssClassComponent="o-place-teaser-list"
                                            />
                                        </div>
                                        <NuxtLink class="o-place-teaser-list__image-link" :to="`/svet/misto/${item.slug}`" :aria-label="`Čti více o místě ${item.name}`" v-if="type === 'spots'"></NuxtLink>
                                        <NuxtLink class="o-place-teaser-list__image-link" :to="`/svet/mesto/${item.slug}`" :aria-label="`Čti více o městě ${item.name}`" v-if="type === 'cities'"></NuxtLink>
                                        <NuxtLink class="o-place-teaser-list__image-link" :to="`/svet/region/${item.slug}`" :aria-label="`Čti více o regionu ${item.name}`" v-if="type === 'regions'"></NuxtLink>
                                    </div>
                                    <div class="o-place-teaser-list__text">
                                        <h3 class="o-place-teaser-list__name">
                                            <nuxtLink class="o-place-teaser-list__name-link" :to="`/svet/misto/${item.slug}`" :aria-label="`Čti více o místě ${item.name}`" v-if="type === 'spots'">{{ item.name }}</nuxtLink>
                                            <nuxtLink class="o-place-teaser-list__name-link" :to="`/svet/mesto/${item.slug}`" :aria-label="`Čti více o městě ${item.name}`" v-if="type === 'cities'">{{ item.name }}</nuxtLink>
                                            <nuxtLink class="o-place-teaser-list__name-link" :to="`/svet/region/${item.slug}`" :aria-label="`Čti více o regionu ${item.name}`" v-if="type === 'regions'">{{ item.name }}</nuxtLink>
                                        </h3>
                                        <div class="o-place-teaser-list__wysiwyg" v-if="item.information_chatgpt && !item.information_author?.length > 0" v-html="item.information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, item.information_chatgpt.lastIndexOf(' ', 150))"></div>       
                                        <div class="o-place-teaser-list__wysiwyg" v-if="item.information_author?.length > 0" v-html="item.information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, item.information_author[0].text.lastIndexOf(' ', 150))"></div>     
                                    </div>
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
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoPlaceTeaserListComponent',

        components: {
            mHeadline,
            aImage
        },

        props: {
            IDplace: {
                type: Number,
                required: true
            },
            IDplaceShow: {
                type: Number,
                required: false
            },
            headline: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            typePage: {
                type: String,
                required: true
            },
            typeShow: {
                type: String,
                required: false
            },
            styleGap: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                items: [],
                images: [],
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 100
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 108
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 108
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 126
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 162
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 220
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 192
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 172
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 268
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 312
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 100,
                        "imageWidth": 108,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 108,
                        "imageWidth": 108,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 126,
                        "imageWidth": 126,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 162,
                        "imageWidth": 172,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 220,
                        "imageWidth": 220,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 192,
                        "imageWidth": 192,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 172,
                        "imageWidth": 172,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 208,
                        "imageWidth": 220,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 312,
                        "imageWidth": 312,
                        "orientation": "h-"
                    }
                ]
            }
        },

        head() {
            // Empty Array
            if (!this.items && this.items.length === 0) {
                return { script: [] };
            }
            const jsonldPlaces = {}
            if (this.type === "state") {
                // Return
                jsonldPlaces = {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Jaké města vidět",
                        "itemListElement": this.items.map((item, index) => {
                            return {
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@id": 'https://frytolnacestach.cz' + `/svet/mesto/${item.slug}`,
                                    "name": item.name,
                                    "image": ((this.images && this.images.length > 0 && this.images.find(image => image.id === item.id_image_cover)) ? (`https://image.frytolnacestach.cz/storage${this.images.find(image => image.id === item.id_image_cover).source + this.images.find(image => image.id === item.id_image_cover).name}.webp`) : "" ),
                                }
                            }
                        })
                    }
                }
            } else if (this.type === "region") {
                // Return
                jsonldPlaces = {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Jaké regiony vidět",
                        "itemListElement": this.items.map((item, index) => {
                            return {
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@id": 'https://frytolnacestach.cz' + `/svet/region/${item.slug}`,
                                    "name": item.name,
                                    "image": ((this.images && this.images.length > 0 && this.images.find(image => image.id === item.id_image_cover)) ? (`https://image.frytolnacestach.cz/storage${this.images.find(image => image.id === item.id_image_cover).source + this.images.find(image => image.id === item.id_image_cover).name}.webp`) : "" ),
                                }
                            }
                        })
                    }
                }
            } else if (this.type === "city") {
                // Return
                jsonldPlaces = {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Jaké města vidět",
                        "itemListElement": this.items.map((item, index) => {
                            return {
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@id": 'https://frytolnacestach.cz' + `/svet/mesto/${item.slug}`,
                                    "name": item.name,
                                    "image": ((this.images && this.images.length > 0 && this.images.find(image => image.id === item.id_image_cover)) ? (`https://image.frytolnacestach.cz/storage${this.images.find(image => image.id === item.id_image_cover).source + this.images.find(image => image.id === item.id_image_cover).name}.webp`) : "" ),
                                }
                            }
                        })
                    }
                }
            }

            return { script: [jsonldPlaces] }
        },

        async fetch() {
            if (this.type === "spots") {
                if(this.typePage === "city") {
                    this.items = await fetch(`https://api.frytolnacestach.cz/api/places-spots-id-city/${this.IDplace}`).then((res) => res.json())
                } else if(this.typePage === "state") {
                    this.items = await fetch(`https://api.frytolnacestach.cz/api/places-spots-id-state/${this.IDplace}`).then((res) => res.json())
                }
            } else if (this.type === "regions") {
                if(this.typePage === "state") {
                    this.items = await fetch(`https://api.frytolnacestach.cz/api/places-regions-id-state/${this.IDplace}`).then((res) => res.json())
                }
            } else if (this.type === "cities") {
                if(this.typePage === "state") {
                    this.items = await fetch(`https://api.frytolnacestach.cz/api/places-cities-id-state/${this.IDplace}`).then((res) => res.json())
                }
            }

            const imagesCitiesID = this.items.map(item => item.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesCitiesID.join(',')}`).then((res) => res.json())
        }
    }
</script>