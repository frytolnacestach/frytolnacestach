<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoTopPlace :styleThema="(skeletonThema ? skeletonThema : ' -skeleton-gray')" v-if="places === null || images === null" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="places !== null && images !== null">
            <div class="o-top-place">
                <div class="o-top-place__outer">
                    <div class="o-top-place__items">
                        <div v-for="place in places" :key="place.id" class="o-top-place__item">
                            <div class="o-top-place__content">
                                <div :class="'o-top-place__image loading-image' + (styleThema ? styleThema : ' -gray')">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-top-place__image-lazyload">
                                        <img class="o-top-place__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-186.webp 186w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-224.webp 216w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-274.webp 274w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-240.webp 230w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-224.webp 224w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-224.webp 220w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-256.webp 256w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-360.webp 360w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-332-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-372-2x.webp 372w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-448-2x.webp 432w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-548-2x.webp 548w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-480-2x.webp 460w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-448-2x.webp 448w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-448-2x.webp 440w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-512-2x.webp 512w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-720-2x.webp 720w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                    <div v-else class="o-top-place__image-lazyload">
                                        <img class="o-top-place__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h3 class="o-top-place__name">
                                    <span class="o-top-place__name-type">
                                        {{ place.type_place === 'city' ? 'Město' : place.type_place === 'state' ? 'Stát' : place.type_place === 'continent' ? 'Kontinent' : '' }}
                                    </span>
                                    {{ place.name }}
                                </h3>
                                <NuxtLink class="o-top-place__link" :to="`/svet/${place.type_place === 'continent' ? 'kontinent' : place.type_place === 'state' ? 'stat' : place.type_place === 'city' ? 'mesto' : ''}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import axios from 'axios'

    import skeletonoTopPlace from '~/components/skeleton/skeletonoTopPlace.vue'

    export default {
        name: 'OrganismsoTopPlaceComponent',

        components: {
            skeletonoTopPlace
        },

        props: {
            styleThema: {
                type: String,
                required: false
            },
            skeletonThema: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                topPlaces: [],
                placesContinents: [],
                placesStates: [],
                placesCities: [],
                places: null,
                images: null
            }
        },

        async created() {
            const topPlaces = await axios.get("https://api.frytolnacestach.cz/api/top-places")
            this.topPlaces = topPlaces.data

            const topPlacesIDcontinents = this.topPlaces
                .filter(place => place.type === 'continent' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place)

            const topPlacesIDstates = this.topPlaces
                .filter(place => place.type === 'state' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place)

            const topPlacesIDcities = this.topPlaces
                .filter(place => place.type === 'city' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place)

            const placesContinents = await axios.get(`https://api.frytolnacestach.cz/api/places-continents-array?id=${topPlacesIDcontinents.join(',')}`)
            this.placesContinents = placesContinents.data

            const placesStates = await axios.get(`https://api.frytolnacestach.cz/api/places-states-array?id=${topPlacesIDstates.join(',')}`)
            this.placesStates = placesStates.data

            const placesCities = await axios.get(`https://api.frytolnacestach.cz/api/places-cities-array?id=${topPlacesIDcities.join(',')}`)
            this.placesCities = placesCities.data

            const places = this.placesContinents.concat(
                this.placesStates,
                this.placesCities
            )
            this.places = places

            const imagesPlaceID = places.map(place => place.id_image_cover).filter(id => id !== null && id !== '')

            const images = await axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlaceID.join(',')}`)
            this.images = images.data
        }
    }
</script>