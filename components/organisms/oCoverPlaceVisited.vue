<template>
    <div>
        <!-- skeleton -->
        <div v-if="places === null">
            <div class="skeleton-o-cover-place-visited">
                <div class="skeleton-o-cover-place-visited__outer">
                    <div class="o-cover-place-visited__items">
                        
                        <div class="skeleton-o-cover-place-visited__item">
                            <div class="skeleton-o-cover-place-visited__content">
                                <div class="skeleton-o-cover-place-visited__image loading-image -skeleton-blue"></div>
                            </div>
                        </div>

                        <div class="skeleton-o-cover-place-visited__item">
                            <div class="skeleton-o-cover-place-visited__content">
                                <div class="skeleton-o-cover-place-visited__image loading-image -skeleton-blue"></div>
                            </div>
                        </div>

                        <div class="skeleton-o-cover-place-visited__item">
                            <div class="skeleton-o-cover-place-visited__content">
                                <div class="skeleton-o-cover-place-visited__image loading-image -skeleton-blue"></div>
                            </div>
                        </div>

                        <div class="skeleton-o-cover-place-visited__item">
                            <div class="skeleton-o-cover-place-visited__content">
                                <div class="skeleton-o-cover-place-visited__image loading-image -skeleton-blue"></div>
                            </div>
                        </div>

                        <div class="skeleton-o-cover-place-visited__item">
                            <div class="skeleton-o-cover-place-visited__content">
                                <div class="skeleton-o-cover-place-visited__image loading-image -skeleton-blue"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- skeleton END -->

        <client-only v-if="places !== null">
            <div class="o-cover-place-visited">
                <div class="o-cover-place-visited__outer">
                    <div class="o-cover-place-visited__items">
                        <div v-for="place in places" :key="place.id" class="o-cover-place-visited__item">
                            <div class="o-cover-place-visited__content">
                                <div class="o-cover-place-visited__image loading-image -blue">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-visited__image-lazyload">
                                        <img class="o-cover-place-visited__image-file lazyload-file"
                                            data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-180.webp 180w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-280.webp 280w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-380.webp 380w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-540.webp 540w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-360-2x.webp 360w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-560-2x.webp 560w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-760-2x.webp 760w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-1080-2x.webp 1080w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                    <div v-else class="o-cover-place-visited__image-lazyload">
                                        <img class="o-cover-place-visited__image-file lazyload-file"
                                            data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h2 class="o-cover-place-visited__name">
                                    {{ place.name }}
                                </h2>
                                <NuxtLink class="o-cover-place-visited__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <client-only v-if="places && Array.isArray(places) && places.length === 0">
            <p v-if="account === 'other'">
                Ještě tu žádné místo nemám.
            </p>
            <p v-else>
                Nemáš tu žádné místo. Co takhle projít <nuxt-link to="/svet">svět</nuxt-link> a přidat sem místa?
            </p>
        </client-only>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoCoverPlaceComponent',

        props: {
            placesID: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            account: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                places: null,
                images: null,
            }
        },

        async mounted() {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    let places = [];
                
                    if ( this.type === "kontinent" ) {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents-array?id=${this.placesID.join(',')}`) : [];
                    } else if ( this.type === "stat" ) {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states-array?id=${this.placesID.join(',')}`) : [];
                    } else if ( this.type === "mesto" ) {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-array?id=${this.placesID.join(',')}`) : [];
                    } else if ( this.type === "region" ) {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-regions-array?id=${this.placesID.join(',')}`) : [];
                    } else if ( this.type === "misto" ) {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-spots-array?id=${this.placesID.join(',')}`) : [];
                    }
                    

                    const imagesPlacesID = places.map(place => place.id_image_cover).filter(id => id !== null && id !== '')

                    const images = await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesID.join(',')}`)

                    data = { places, images }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - VYPIS NAVŠTÍVIL JSEM/CHCI NAVŠTÍVIT`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data);
        },
    }
</script>