<template>
    <div class="o-hero-item-detail">
        <div class="o-hero-item-detail__container">
            <div class="o-hero-item-detail__image loading-image -green">
                <div v-if="images && images.find(image => image.id === item[0].id_image_hero)" class="o-hero-item-detail__image-lazyload">
                    <img class="o-hero-item-detail__image-file"
                    sizes="(max-width: 349px) 344px, (max-width: 374px) 354px, (max-width: 399px) 360px, (max-width: 459px) 430px, (max-width: 575px) 556px, (max-width: 767px) 728px, (max-width: 991px) 952px, (max-width: 1219px) 780px, (max-width: 1399px) 900px, 1248px"
                        :srcset="`
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-344.webp 344w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-360.webp 354w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-360.webp 360w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-430.webp 430w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-556.webp 556w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-728.webp 728w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-952.webp 952w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-780.webp 780w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-900.webp 900w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-1248.webp 1248w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-688-2x.webp 688w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-720-2x.webp 708w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-720-2x.webp 720w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-860-2x.webp 860w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 's-' + images.find(image => image.id === item[0].id_image_hero).name}-1112-2x.webp 1112w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-1456-2x.webp 1456w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-1904-2x.webp 1904w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-1560-2x.webp 1560w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-1800-2x.webp 1800w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + 'h-' + images.find(image => image.id === item[0].id_image_hero).name}-2496-2x.webp 2496w
                            `"
                        :src="`https://image.frytolnacestach.cz/storage${images.find(image => image.id === item[0].id_image_hero).source + images.find(image => image.id === item[0].id_image_hero).name}.webp`"
                        :alt="item[0].name ? item[0].name : 'Úvodní obrázek'"
                        fetchpriority="high">
                </div>
                <div v-else class="o-hero-item-detail__image-lazyload">
                    <img class="o-hero-item-detail__image-file"
                        sizes="(max-width: 349px) 330px, (max-width: 374px) 374px, (max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px"
                        :srcset="`
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
                        :src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                        :alt="item[0].name ? item[0].name : 'Úvodní obrázek'"
                        fetchpriority="high">
                </div>
                
                <div class="o-hero-item-detail__outer" v-if="showTitle">
                    <div class="o-hero-item-detail__inner">
                        <h1 class="o-hero-item-detail__headline" v-if="item[0].name">{{ item[0].name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroItemComponent',

        props: {
            item: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            showTitle: {
                type: Boolean,
                required: false,
                default: true
            }
        }
    }
</script>