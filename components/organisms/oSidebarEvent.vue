<template>
    <section class="t-section -px-world my-2" v-if="events && events.length > 0">
        <div class="t-section__inner">
            <div class="o-sidebar-event">
                <div class="o-sidebar-event__outer">
                    <div class="o-sidebar-event__inner">
                        <h3 class="o-sidebar-event__header">Události v lokalitě</h3>
                        <div class="o-sidebar-event__items">
                            <div class="o-sidebar-event__item" v-for="event in events" :key="event.id">
                                <div class="o-sidebar-event__image-container">
                                    <div class="o-sidebar-event__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-sidebar-event__image-lazyload">
                                            <img class="o-sidebar-event__image-file lazyload-file"
                                                data-sizes="0px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === event.id_image_cover).source + images.find(image => image.id === event.id_image_cover).name}-100.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === event.id_image_cover).source + images.find(image => image.id === event.id_image_cover).name}-200-2x.webp 200w,
                                                `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === event.id_image_cover).source + images.find(image => image.id === event.id_image_cover).name}.webp`"
                                                :alt="event.name ? event.name : 'Úvodní obrázek'"
                                                :preload="true"
                                                v-lazy>
                                        </div>
                                        <div v-else class="o-sidebar-event__image-lazyload">
                                            <img class="o-sidebar-event__image-file lazyload-file"
                                                data-sizes="0px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-100.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-200-2x.webp 200w
                                                `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/no-image.webp`"
                                                :alt="event.name ? event.name : 'Úvodní obrázek'"
                                                :preload="true"
                                                v-lazy>
                                        </div>
                                        <nuxtLink class="o-sidebar-event__image-link" :to="'/udalost/' + event.slug" :aria-label="`Přejít na událost ${event.name}`"></nuxtLink>
                                    </div>
                                </div>
                                <div class="o-sidebar-event__text">
                                    <h4 class="o-sidebar-event__name"><nuxtLink class="o-sidebar-event__name-link" :to="'/udalost/' + event.slug">{{ event.name }}</nuxtLink></h4>
                                    <span class="o-sidebar-event__dates" v-if="event.date_start || event.date_end">
                                        <span class="o-sidebar-event__date">
                                            <span class="o-sidebar-event__date-text">Začátek události </span>
                                            <span class="o-sidebar-event__date-value">{{ formatDate(event.date_start) }}</span>
                                        </span>
                                        <span class="o-sidebar-event__date">
                                            <span class="o-sidebar-event__date-text">Konec události </span>
                                            <span class="o-sidebar-event__date-value">{{ formatDate(event.date_end) }}</span>
                                        </span>
                                    </span>
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
    export default {
        name: 'OrganismsoSidebarEventComponent',

        props: {
            place: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                events: [],
                images: []
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
                    "name": "Události v lokalitě",
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
            if(this.type === "state") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-state/${this.place}`).then((res) => res.json())
            } else if (this.type === "region") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-region/${this.place}`).then((res) => res.json())
            } else if (this.type === "city") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-city/${this.place}`).then((res) => res.json())
            } else if (this.type === "spot") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-spot/${this.place}`).then((res) => res.json())
            }

            const imagesEventsID = this.events.map(event => event.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsID.join(',')}`).then((res) => res.json())
        }
    }
</script>