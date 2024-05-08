<template>
    <section class="t-section -px-world mt-1 mb-2 print-section" v-if="travelDictionaries && travelDictionaries.length > 0">
        <div class="t-section__inner">
            <div class="o-sidebar-list-travel-dictionary">
                <div class="o-sidebar-list-travel-dictionary__outer">
                    <div class="o-sidebar-list-travel-dictionary__inner">
                        <h3 class="o-sidebar-list-travel-dictionary__header">Další výrazy</h3>
                        <div class="o-sidebar-list-travel-dictionary__items">
                            <div class="o-sidebar-list-travel-dictionary__item" v-for="event in travelDictionaries" :key="event.id">
                                <div class="o-sidebar-list-travel-dictionary__image-container">
                                    <div class="o-sidebar-list-travel-dictionary__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-sidebar-list-travel-dictionary__image-lazyload">
                                            <aImage 
                                                :alt="event.name ? event.name : 'Úvodní obrázek'" 
                                                :author="images.find(image => image.id === event.id_image_cover).author"
                                                :lazy=true
                                                :imageSource="images.find(image => image.id === event.id_image_cover).source"
                                                :imageName="images.find(image => image.id === event.id_image_cover).name"
                                                :sizes=imageSizes
                                                :srcSet=imageSizesMedia
                                                cssClassComponent="o-sidebar-list-travel-dictionary"
                                            />
                                        </div>
                                        <div v-else class="o-sidebar-list-travel-dictionary__image-lazyload">
                                            <aImage 
                                                :alt="event.name ? event.name : 'Úvodní obrázek'" 
                                                :lazy=true
                                                imageSource="/_default/"
                                                imageName="no-image"
                                                :sizes=imageSizes
                                                :srcSet=imageSizesMedia
                                                cssClassComponent="o-sidebar-list-travel-dictionary"
                                            />
                                        </div>
                                        <nuxtLink class="o-sidebar-list-travel-dictionary__image-link" :to="'/cestovatelsky-slovnik/' + event.slug" :aria-label="`Čti více o události ${event.name}`"></nuxtLink>
                                    </div>
                                </div>
                                <div class="o-sidebar-list-travel-dictionary__text">
                                    <h4 class="o-sidebar-list-travel-dictionary__name"><nuxtLink class="o-sidebar-list-travel-dictionary__name-link" :to="'/cestovatelsky-slovnik/' + event.slug">{{ event.name }}</nuxtLink></h4>
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
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoSidebarListTravelDictionaryComponent',

        components: {
            aImage
        },

        props: {
            IDTravelDictionary: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                travelDictionaries: [],
                images: [],
                isLoading: false,
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 0
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 100,
                        "imageWidth": 100,
                        "orientation": "s-"
                    }
                ]
            }
        },

        methods: {
            async fetchData() {
                // START
                this.isLoading = true

                // API - GET - Travel Dictionaries
                const responseTravelDictionaries = await fetch(`https://api.frytolnacestach.cz/api/travel-dictionaries-random?showType=list&actualID=${this.IDTravelDictionary}&quantity=5`)
                const travelDictionariesData = await responseTravelDictionaries.json() || []
                this.travelDictionaries = this.travelDictionaries.concat(travelDictionariesData)
                
                // API - GET - Images
                const imagesTravelDictionariesIDS  = this.travelDictionaries.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesTravelDictionariesIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesTravelDictionariesIDS .join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
                }

                // FINAL
                this.isLoading = false
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>