<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoCoverPlace styleThema=" -skeleton-green" v-if="places === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="places !== null && skeleton !== true">
            <div class="o-cover-place">
                <div class="o-cover-place__outer">
                    <div class="o-cover-place__items">
                        <div v-for="place in places" :key="place.id" class="o-cover-place__item">
                            <div class="o-cover-place__content">
                                <div class="o-cover-place__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place__image-lazyload">
                                        <img class="o-cover-place__image-file lazyload-file"
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
                                    <div v-else class="o-cover-place__image-lazyload">
                                        <img class="o-cover-place__image-file lazyload-file"
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
                                <div class="o-cover-place__text">
                                    <span class="o-cover-place__prename -state" v-if="showPrename && type==='region' || showPrename && type==='mesto' || showPrename && type==='misto'">{{ getPrename(place.id_state) }}</span>
                                    <h2 class="o-cover-place__name">
                                        {{ place.name }}
                                    </h2>
                                </div>
                                <NuxtLink class="o-cover-place__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
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
    import skeletonoCoverPlace from '~/components/skeleton/skeletonoCoverPlace.vue'

    export default {
        name: 'OrganismsoCoverPlaceComponent',

        components: {
            skeletonoCoverPlace
        },

        props: {
            places: {
                type: Array,
                required: true
            },
            placesParent: {
                type: Array,
                required: false
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
            },
            showPrename: {
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
                    "name": (this.type === 'kontinent' ? 'Kontinenty' : this.type === 'stat' ? 'Státy' : this.type === 'mesto' ? 'Města' : this.type === 'region' ? 'Regiony' : this.type === 'misto' ? 'Místa' : ''),
                    "itemListElement": this.places.map((place, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${this.type}/${place.slug}`,
                                "name": place.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        methods: {
            // ONLY CITIES LIST - Metoda pro prohledání pole placesParent, kde se hledá aktuální potřební stát v podobě idState
            getPrename(idState) {
                const matchingPlaceParent = this.placesParent.find(
                    (parent) => parent.id === idState
                )

                if (matchingPlaceParent) {
                    return matchingPlaceParent.name
                }

                return ''
            }
        }
    }
</script>