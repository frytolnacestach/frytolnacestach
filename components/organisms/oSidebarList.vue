<template>
    <section class="t-section -px-world my-2" v-if="events && events.length > 0">
        <div class="t-section__inner">
            <div class="o-sidebar-list">
                <div class="o-sidebar-list__outer">
                    <div class="o-sidebar-list__inner">
                        <h3 class="o-sidebar-list__header">Události v lokalitě</h3>
                        <div class="o-sidebar-list__items">
                            <div class="o-sidebar-list__item" v-for="event in events" :key="event.id">
                                <div class="o-sidebar-list__image-container">
                                    <div class="o-sidebar-list__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-sidebar-list__image-lazyload">
                                            <img class="o-sidebar-list__image-file lazyload-file"
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
                                        <div v-else class="o-sidebar-list__image-lazyload">
                                            <img class="o-sidebar-list__image-file lazyload-file"
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
                                        <nuxtLink class="o-sidebar-list__image-link" :to="'/udalost/' + event.slug"></nuxtLink>
                                    </div>
                                </div>
                                <div class="o-sidebar-list__text">
                                    <h4 class="o-sidebar-list__name"><nuxtLink class="o-sidebar-list__name-link" :to="'/udalost/' + event.slug">{{ event.name }}</nuxtLink></h4>
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
        name: 'OrganismsoSidebarListComponent',

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
                events: this.events,
                images: this.images
            }
        },

        async fetch() {
            
            if(this.type === "state") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-state/${this.place}`).then((res) => res.json());
            } else if (this.type === "region") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-region/${this.place}`).then((res) => res.json());
            } else if (this.type === "city") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-city/${this.place}`).then((res) => res.json());
            } else if (this.type === "spot") {
                this.events = await fetch(`https://api.frytolnacestach.cz/api/events-id-spot/${this.place}`).then((res) => res.json());
            }

            const imagesEventsID = this.events.map(event => event.id_image_cover).filter(id => id !== null && id !== '');
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsID.join(',')}`).then((res) => res.json());
        },
    }
</script>