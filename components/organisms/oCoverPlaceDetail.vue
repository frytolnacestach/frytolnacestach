<template>
    <div class="o-cover-place-detail">
        <div class="o-cover-place-detail__outer">
            <div class="o-cover-place-detail__inner">
                <div class="o-cover-place-detail__items">
                    <div v-for="place in filteredPlaces" :key="place.id" class="o-cover-place-detail__item">
                        <div class="o-cover-place-detail__content">

                            <div class="o-cover-place-detail__image loading-image -green">
                                <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-detail__image-lazyload">
                                    <img class="o-cover-place-detail__image-file lazyload-file"
                                        data-sizes="(max-width: 349px) 230px, (max-width: 374px) 248px, (max-width: 399px) 146px, (max-width: 459px) 170px, (max-width: 575px) 216px, (max-width: 767px) 310px, (max-width: 992px) 206px, (max-width: 1219px) 172px, (max-width: 1399px) 200px, 278px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-354.webp 230w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-380.webp 248w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-226.webp 146w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-264.webp 170w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-332.webp 216w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-314.webp 310w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-314.webp 206w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-264.webp 172w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-314.webp 200w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-424.webp 278w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-708-2x.webp 460w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-760-2x.webp 496w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-452-2x.webp 292w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-528-2x.webp 340w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-664-2x.webp 432w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-628-2x.webp 620w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-628-2x.webp 412w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-528-2x.webp 344w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-628-2x.webp 400w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 'v-' + images.find(image => image.id === place.id_image_cover).name}-848-2x.webp 556w
                                        `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                        :alt="place.name"
                                        v-lazy>
                                </div>
                                <div v-else class="o-cover-place-detail__image-lazyload">
                                    <img class="o-cover-place-detail__image-file lazyload-file"
                                        data-sizes="(max-width: 349px) 354px, (max-width: 374px) 380px, (max-width: 399px) 226px, (max-width: 459px) 264px, (max-width: 575px) 332px, (max-width: 992px) 314px, (max-width: 1219px) 264px, (max-width: 1399px) 314px, 424px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/v-no-image-354.webp 230w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-380.webp 248w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-226.webp 146w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-264.webp 170w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-332.webp 216w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-314.webp 310w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-314.webp 206w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-264.webp 172w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-314.webp 200w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-424.webp 278w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-708-2x.webp 460w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-760-2x.webp 496w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-452-2x.webp 292w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-528-2x.webp 340w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-664-2x.webp 432w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-628-2x.webp 620w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-628-2x.webp 412w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-528-2x.webp 344w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-628-2x.webp 400w,
                                            https://image.frytolnacestach.cz/storage/v-no-image-848-2x.webp 556w
                                        `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/_default/no-image.webp`"
                                        :alt="place.name"
                                        v-lazy>
                                </div>
                            </div>

                            <h3 class="o-cover-place-detail__name" v-if="place.name">
                                {{ place.name }}
                            </h3>
                            <NuxtLink class="o-cover-place-detail__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`" v-if="place.slug"></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoCoverPlaceDetailComponent',

        props: {
            places: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                default: null
            },
            type: {
                type: String,
                required: true
            }, 
            importance: {
                type: String,
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

        computed: {
            filteredPlaces() {
                if (this.importance === "biggest") {
                    return this.places.filter(place => place.importance === 'biggest')
                } else if (this.importance === null) {
                    return this.places.filter(place => place.importance !== 'biggest')
                } else {
                    return this.places
                }
            }
        }
    }
</script>