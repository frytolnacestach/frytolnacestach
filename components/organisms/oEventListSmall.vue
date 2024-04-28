<template>
    <div :class="'o-event-list-small' + (styleThema ? styleThema : ' -gray')">
        <div class="o-event-list-small__outer">
            <div class="o-event-list-small__inner">
                <div class="o-event-list-small__items">
                    <div class="o-event-list-small__item" v-for="event in events" :key="event.id">
                        <div class="o-event-list-small__image-container">
                            <div :class="'o-event-list-small__image loading-image' + (styleThema ? styleThema : ' -gray')">
                                <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-event-list-small__image-lazyload">
                                    <aImage 
                                        :alt="event.name ? event.name : 'Úvodní obrázek'" 
                                        :author="images.find(image => image.id === event.id_image_cover).author"
                                        :lazy=true
                                        :imageSource="images.find(image => image.id === event.id_image_cover).source"
                                        :imageName="images.find(image => image.id === event.id_image_cover).name"
                                        :sizes=imageSizes
                                        :srcSet=imageSizesMedia
                                        cssClassComponent="o-event-list-small"
                                    />
                                </div>
                                <div v-else class="o-event-list-small__image-lazyload">
                                    <aImage 
                                        :alt="event.name ? event.name : 'Úvodní obrázek'" 
                                        :lazy=true
                                        imageSource="/_default/"
                                        imageName="no-image"
                                        :sizes=imageSizes
                                        :srcSet=imageSizesMedia
                                        cssClassComponent="o-event-list-small"
                                    />
                                </div>
                                <nuxtLink class="o-event-list-small__image-link" :to="'/udalost/' + event.slug" :aria-label="`Přejít na událost ${event.name}`"></nuxtLink>
                            </div>
                        </div>
                        <div class="o-event-list-small__text">
                            <h3 class="o-event-list-small__name"><nuxtLink class="o-event-list-small__name-link" :to="'/udalost/' + event.slug">{{ event.name }}</nuxtLink></h3>
                            <span class="o-event-list-small__dates" v-if="event.date_start || event.date_end">
                                <span class="o-event-list-small__date">
                                    <span class="o-event-list-small__date-text">Začátek události </span>
                                    <span class="o-event-list-small__date-value">{{ formatDate(event.date_start) }}</span>
                                </span>
                                <span class="o-event-list-small__date">
                                    <span class="o-event-list-small__date-text">Konec události </span>
                                    <span class="o-event-list-small__date-value">{{ formatDate(event.date_end) }}</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoEventListSmallComponent',

        components: {
            aImage
        },

        props: {
            styleThema: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                events: this.events,
                images: this.images,
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

        head() {
            // Empty Array
            if (!this.events && this.events === null) {
                return { script: [] };
            }
            // Return
            const jsonldEvents = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Nejbližší události",
                    "itemListElement": this.events.map((event, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + '/udalost/' + event.slug,
                                "name": event.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldEvents] }
        },

        methods: {
            formatDate(date) {
                const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        },

        async fetch() {
            // API - GET - Events
            this.events = await fetch(`https://api.frytolnacestach.cz/api/events?limit=5&status=nearby`).then((res) => res.json())
            // API - GET - Images
            const imagesEventsID = this.events.map(event => event.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsID.join(',')}`).then((res) => res.json())
        }
    }
</script>