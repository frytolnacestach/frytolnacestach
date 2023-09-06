<template>
    <div class="o-event-list">
        <div class="o-event-list__outer">
            <div class="o-event-list__inner">
                <div class="o-event-list__items">
                    <div class="o-event-list__item" v-for="event in events" :key="event.id">
                        <div class="o-event-list__image-container">
                            <div class="o-event-list__image loading-image -green">
                                <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-event-list__image-lazyload">
                                    <img class="o-event-list__image-file lazyload-file"
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
                                <div v-else class="o-event-list__image-lazyload">
                                    <img class="o-event-list__image-file lazyload-file"
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
                                <nuxtLink class="o-event-list__image-link" :to="'/udalost/' + event.slug"></nuxtLink>
                            </div>
                        </div>
                        <div class="o-event-list__text">
                            <h4 class="o-event-list__name"><nuxtLink class="o-event-list__name-link" :to="'/udalost/' + event.slug">{{ event.name }}</nuxtLink></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoEventListComponent',

        data() {
            return {
                events: this.events,
                images: this.images
            }
        },

        async fetch() {
            this.events = await fetch(`https://api.frytolnacestach.cz/api/events`).then((res) => res.json())

            const imagesEventsID = this.events.map(event => event.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsID.join(',')}`).then((res) => res.json())
        }
    }
</script>