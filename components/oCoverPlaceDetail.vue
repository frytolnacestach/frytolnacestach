<template>
    <div class="o-cover-place-detail">
        <div class="o-cover-place-detail__outer">
            <div class="o-cover-place-detail__inner">
                <div class="o-cover-place-detail__items">
                    <div v-for="place in filteredPlaces" :key="place.id" class="o-cover-place-detail__item">
                        <div class="o-cover-place-detail__content">

                            <div class="o-cover-place-detail__image loading-image">
                                <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-detail__image-lazyload">
                                    <img
                                        class="o-cover-place-detail__image-file lazyload-file"
                                        v-lazy="{
                                            src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            srcset: {
                                                '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                                '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                                '1920': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                                '1921': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                                '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                                '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                                '1920@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                                '1921@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                            },
                                            sizes: '(max-width: 374px) 374px, (max-width: 1399px) 1399px, (max-width: 1920px) 1920px, 1921px'
                                        }"
                                        :alt="place.name ? place.name : 'Obrázek města'"
                                    />
                                </div>
                                <div v-else class="o-cover-place-detail__image-lazyload">
                                    <img
                                        class="o-cover-place-detail__image-file lazyload-file"
                                        v-lazy="{
                                            src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            srcset: {
                                                '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                '1920': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                '1921': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                '1920@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                '1921@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                            },
                                            sizes: '(max-width: 374px) 374px, (max-width: 1399px) 1399px, (max-width: 1920px) 1920px, 1921px'
                                        }"
                                        :alt="place.name ? place.name : 'Obrázek města'"
                                    />
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