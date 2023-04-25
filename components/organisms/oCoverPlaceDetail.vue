<template>
    <div class="o-cover-place-detail">
        <div class="o-cover-place-detail__outer">
            <div class="o-cover-place-detail__inner">
                <div class="o-cover-place-detail__items">
                    <div v-for="place in filteredPlaces" :key="place.id" class="o-cover-place-detail__item">
                        <div class="o-cover-place-detail__content">

                            <div class="o-cover-place-detail__image loading-image">
                                <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-detail__image-lazyload">
                                    <img class="o-cover-place-detail__image-file lazyload-file"
                                        data-sizes="(max-width: 374px) 250px, (max-width: 575px) 220px, (max-width: 1920px) 280px, 360px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-220.webp 220w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-250.webp 250w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-280.webp 280w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-360.webp 360w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-440-2x.webp 440w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-500-2x.webp 500w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-560-2x.webp 560w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-720-2x.webp 720w
                                            `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                        :alt="place.name"
                                        v-lazy>
                                </div>
                                <div v-else class="o-cover-place-detail__image-lazyload">
                                    <img class="o-cover-place-detail__image-file lazyload-file"
                                        data-sizes="(max-width: 374px) 250px, (max-width: 575px) 220px, (max-width: 1920px) 280px, 360px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/_default/hero-220.webp 220w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-250.webp 250w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-360.webp 360w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-440-2x.webp 440w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-500-2x.webp 500w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,
                                            https://image.frytolnacestach.cz/storage/_default/hero-720-2x.webp 720w
                                            `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                        :alt="place.name"
                                        v-lazy>
                                </div>
                            </div>

                            <h3 class="o-cover-place-detail__name" v-if="place.name">
                                {{ place.name }}
                            </h3>
                            <NuxtLink class="o-cover-place-detail__link" :to="`/svet/${type}/${place.slug}`" v-if="place.slug"></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
            biggest: {
                type: String,
                required: false
            }
        },

        computed: {
            filteredPlaces() {
                if (this.biggest === "big") {
                    return this.places.filter(place => place.biggest === 'yes');
                } else if (this.biggest === "nobig") {
                    return this.places.filter(place => place.biggest !== 'yes');
                } else {
                    return this.places;
                }
            }
        }
    }
</script>