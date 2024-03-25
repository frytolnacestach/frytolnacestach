<template>
    <div class="o-hero-place">
        <div class="o-hero-place__container">
            <div class="o-hero-place__image loading-image -green">
                <div v-if="images && idImageHero && images.find(image => image.id === idImageHero)" class="o-hero-place__image-lazyload">
                    <img class="o-hero-place__image-file"
                        sizes="(max-width: 349px) 344px, (max-width: 374px) 354px, (max-width: 399px) 360px, (max-width: 459px) 430px, (max-width: 575px) 556px, (max-width: 767px) 728px, (max-width: 991px) 952px, (max-width: 1219px) 780px, (max-width: 1399px) 900px, 1248px"
                        :srcset="`
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-344.webp 344w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-360.webp 354w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-360.webp 360w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-430.webp 430w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-556.webp 556w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-728.webp 728w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-952.webp 952w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-780.webp 780w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-900.webp 900w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-1248.webp 1248w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-688-2x.webp 688w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-720-2x.webp 708w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-720-2x.webp 720w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-860-2x.webp 860w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 's-' + images.find(image => image.id === idImageHero).name}-1112-2x.webp 1112w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-1456-2x.webp 1456w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-1904-2x.webp 1904w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-1560-2x.webp 1560w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-1800-2x.webp 1800w,
                            https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + 'h-' + images.find(image => image.id === idImageHero).name}-2496-2x.webp 2496w
                            `"
                        :src="`https://image.frytolnacestach.cz/storage${images.find(image => image.id === idImageHero).source + images.find(image => image.id === idImageHero).name}.webp`"
                        :alt="title ? title : 'Úvodní obrázek'"
                        fetchpriority="high">
                </div>
                <div v-else class="o-hero-place__image-lazyload">
                    <img class="o-hero-place__image-file"
                        sizes="(max-width: 349px) 330px, (max-width: 374px) 354px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 952px, (max-width: 1219px) 780px, (max-width: 1399px) 900px, 1248px"
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
                        :alt="title ? title : 'Úvodní obrázek'"
                        fetchpriority="high">
                </div>
                
                <div class="o-hero-place__outer">
                    <div class="o-hero-place__inner">
                        <h1 class="o-hero-place__headline" v-if="title">{{ preTitle ? preTitle + ' ' + title : title }}</h1>
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
            title: {
                type: String,
                required: true
            },
            preTitle: {
                type: String,
                required: false
            },
            idImageHero: {
                type: Number,
                required: false
            },
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>