<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoTimePlace styleThema=" -skeleton-green" v-if="places === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="places !== null && skeleton !== true">
            <div class="o-time-place">
                <div class="o-time-place__outer">
                    <div class="o-time-place__items">
                        <div v-for="place in places" :key="place.id" class="o-time-place__item">
                            <div class="o-time-place__content">
                                <div class="o-time-place__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-time-place__image-lazyload">
                                        <img class="o-time-place__image-file lazyload-file"
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
                                    <div v-else class="o-time-place__image-lazyload">
                                        <img class="o-time-place__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-186.webp 186w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-224.webp 216w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-274.webp 274w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-240.webp 230w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-224.webp 224w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-224.webp 220w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-256.webp 256w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-360.webp 360w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-332-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-372-2x.webp 372w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-448-2x.webp 432w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-548-2x.webp 548w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-480-2x.webp 460w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-448-2x.webp 448w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-448-2x.webp 440w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-512-2x.webp 512w,
                                                https://image.frytolnacestach.cz/storage/_default/s-no-image-720-2x.webp 720w
                                            `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/no-image.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h2 class="o-time-place__name">
                                    {{ place.name }}
                                </h2>
                                <NuxtLink class="o-time-place__link" :to="`/svetovy-cas/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
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
    import skeletonoTimePlace from '~/components/skeleton/skeletonoTimePlace.vue'

    export default {
        name: 'OrganismsoTimePlaceComponent',

        components: {
            skeletonoTimePlace
        },

        props: {
            places: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            skeleton: {
                type: Boolean,
                required: false
            }
        },

        head() {
            // Empty Array
            if (!this.places && this.places === null) {
                return { script: [] };
            }
            // Return
            const jsonldPlaces = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Čas ve světě",
                    "itemListElement": this.places.map((place, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svetovy-cas/${place.slug}`,
                                "name": place.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        }
    }
</script>