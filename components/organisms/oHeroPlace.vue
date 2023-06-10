<template>
    <div class="o-hero-place">
        <div class="o-hero-place__container">
            <div class="o-hero-place__image loading-image -green">
                <div v-if="images && images.find(image => image.id === place[0].id_image_hero)" class="o-hero-place__image-lazyload">
                    <img class="o-hero-place__image-file lazyload-file"
                        data-sizes="(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px"
                        :data-srcset="`
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-374.webp 374w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-575.webp 575w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-767.webp 767w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-991.webp 991w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-1139.webp 1139w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-1219.webp 1219w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-1399.webp 1399w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}-1920.webp 1920w
                            `"
                        :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}.webp`"
                        :alt="place[0].name ? place[0].name : 'Úvodní obrázek'"
                        :preload="true"
                        v-lazy>
                </div>
                <div v-else class="o-hero-place__image-lazyload">
                    <img class="o-hero-place__image-file lazyload-file"
                        data-sizes="(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px"
                        :data-srcset="`
                            https://image.frytolnacestach.cz/storage/_default/hero-374.webp 374w,
                            https://image.frytolnacestach.cz/storage/_default/hero-575.webp 575w,
                            https://image.frytolnacestach.cz/storage/_default/hero-767.webp 767w,
                            https://image.frytolnacestach.cz/storage/_default/hero-991.webp 991w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1139.webp 1139w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1219.webp 1219w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1399.webp 1399w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1920.webp 1920w,
                            https://image.frytolnacestach.cz/storage/_default/hero-748-2x.webp 748w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1150-2x.webp 1150w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1534-2x.webp 1534w,
                            https://image.frytolnacestach.cz/storage/_default/hero-1982-2x.webp 1982w,
                            https://image.frytolnacestach.cz/storage/_default/hero-2278-2x.webp 2278w,
                            https://image.frytolnacestach.cz/storage/_default/hero-2438-2x.webp 2438w,
                            https://image.frytolnacestach.cz/storage/_default/hero-2798-2x.webp 2798w,
                            https://image.frytolnacestach.cz/storage/_default/hero-3840-2x.webp 3840w
                            `"
                        :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                        :alt="place[0].name ? place[0].name : 'Úvodní obrázek'"
                        :preload="true"
                        v-lazy>
                </div>
                
                <div class="o-hero-place__outer">
                    <div class="o-hero-place__inner">
                        <h1 class="o-hero-place__headline" v-if="place[0].name">{{ place[0].name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroPlaceComponent',

        props: {
            place: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>