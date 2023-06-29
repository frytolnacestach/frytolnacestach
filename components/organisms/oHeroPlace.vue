<template>
    <div class="o-hero-place">
        <div class="o-hero-place__container">
            <div class="o-hero-place__image loading-image -green">
                <div v-if="images && images.find(image => image.id === place[0].id_image_hero)" class="o-hero-place__image-lazyload">
                    <img class="o-hero-place__image-file lazyload-file"
                        data-sizes="(max-width: 349px) 330px, (max-width: 374px) 354px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 952px, (max-width: 1219px) 780px, (max-width: 1399px) 900px, 1248px"
                        :data-srcset="`
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-334.webp 330w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-360.webp 354w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-360.webp 360w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-420.webp 420w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-536.webp 536w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-728.webp 728w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-952.webp 952w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-780.webp 780w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-900.webp 900w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-1248.webp 1248w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-668-2x.webp 660w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-720-2x.webp 708w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-720-2x.webp 720w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-840-2x.webp 840w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-1072-2x.webp 1072w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-1456-2x.webp 1456w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-1904-2x.webp 1904w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-1560-2x.webp 1560w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-1800-2x.webp 1800w,
                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + 'h-' + images.find(image => image.id === place[0].id_image_cover).name}-2496-2x.webp 2496w
                            `"
                        :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name}.webp`"
                        :alt="place[0].name ? place[0].name : 'Úvodní obrázek'"
                        :preload="true"
                        v-lazy>

                </div>
                <div v-else class="o-hero-place__image-lazyload">
                    <img class="o-hero-place__image-file lazyload-file"
                        data-sizes="(max-width: 349px) 330px, (max-width: 374px) 354px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 952px, (max-width: 1219px) 780px, (max-width: 1399px) 900px, 1248px"
                        :data-srcset="`
                            https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 330w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 354w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-952.webp 952w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-780.webp 780w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-900.webp 900w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-1248.webp 1248w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 660w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 708w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-1904-2x.webp 1904w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-1560-2x.webp 1560w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-1800-2x.webp 1800w,
                            https://image.frytolnacestach.cz/storage/_default/h-hero-2496-2x.webp 2496w
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