<template>
    <div :class="'o-event-list-small' + (styleThema ? styleThema : ' -gray')">
        <div class="o-event-list-small__outer">
            <div class="o-event-list-small__inner">
                <div class="o-event-list-small__items">
                    <div class="o-event-list-small__item" v-for="event in events" :key="event.id">
                        <div class="o-event-list-small__image-container">
                            <div :class="'o-event-list-small__image loading-image' + (styleThema ? styleThema : ' -gray')">
                                <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-event-list-small__image-lazyload">
                                    <img class="o-event-list-small__image-file lazyload-file"
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
                                <div v-else class="o-event-list-small__image-lazyload">
                                    <img class="o-event-list-small__image-file lazyload-file"
                                        data-sizes="0px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w
                                            `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                        :alt="event.name ? event.name : 'Úvodní obrázek'"
                                        :preload="true"
                                        v-lazy>
                                </div>
                                <nuxtLink class="o-event-list-small__image-link" :to="'/udalost/' + event.slug"></nuxtLink>
                            </div>
                        </div>
                        <div class="o-event-list-small__text">
                            <h4 class="o-event-list-small__name"><nuxtLink class="o-event-list-small__name-link" :to="'/udalost/' + event.slug">{{ event.name }}</nuxtLink></h4>
                            <span class="o-event-list-small__date" v-if="event.date_start || event.date_end">
                                <span class="o-event-list-small__date-start">Začátek události: {{ formatDate(event.date_start) }}</span>
                                <span class="o-event-list-small__date-end">Konec události: {{ formatDate(event.date_end) }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoEventListSmallComponent',

        props: {
            styleThema: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                events: this.events,
                images: this.images
            }
        },

        methods: {
            formatDate(date) {
                const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        },

        async fetch() {
            this.events = await fetch(`https://api.frytolnacestach.cz/api/events?limit=5&status=nearby`).then((res) => res.json())

            const imagesEventsID = this.events.map(event => event.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsID.join(',')}`).then((res) => res.json())
        }
    }
</script>