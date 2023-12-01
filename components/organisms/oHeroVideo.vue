<template>
    <div class="o-hero-video">
        <div class="o-hero-video__image loading-image">
            <div v-if="image" class="o-hero-video__image-lazyload -gray">
                <img class="o-hero-video__image-file lazyload-file"
                    data-sizes="(max-width: 349px) 230px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 1019px) 980px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px"
                    :data-srcset="`
                    'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                    
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-230.webp 230w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-248.webp 248w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-146.webp 146w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-170.webp 170w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-216.webp 216w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-310.webp 310w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-206.webp 206w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-172.webp 172w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-200.webp 200w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-278.webp 278w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-460-2x.webp 460w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-680-2x.webp 680w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-720-2x.webp 720w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-840-2x.webp 840w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1072-2x.webp 1072w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1456-2x.webp 1456w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1960-2x.webp 1960w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-2360-2x.webp 2360w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-2720-2x.webp 2720w,
                        https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-3760-2x.webp 3760w
                        `"
                    :data-src="`https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}.webp`"
                    :alt="title"
                    :srr="true"
                    v-lazy>
            </div>
            <div v-else class="o-hero-video__image-lazyload">
                <img class="o-hero-video__image-file lazyload-fil"
                    data-sizes="(max-width: 349px) 230px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 1019px) 980px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px"
                    :data-srcset="`
                        https://image.frytolnacestach.cz/storage/h-hero-230.webp 230w,
                        https://image.frytolnacestach.cz/storage/h-hero-340.webp 340w,
                        https://image.frytolnacestach.cz/storage/h-hero-360.webp 360w,
                        https://image.frytolnacestach.cz/storage/h-hero-420.webp 420w,
                        https://image.frytolnacestach.cz/storage/h-hero-536.webp 536w,
                        https://image.frytolnacestach.cz/storage/h-hero-728.webp 728w,
                        https://image.frytolnacestach.cz/storage/h-hero-980.webp 980w,
                        https://image.frytolnacestach.cz/storage/h-hero-1180.webp 1180w,
                        https://image.frytolnacestach.cz/storage/h-hero-1360.webp 1360w,
                        https://image.frytolnacestach.cz/storage/h-hero-1880.webp 1880w,
                        https://image.frytolnacestach.cz/storage/h-hero-460-2x.webp 460w,
                        https://image.frytolnacestach.cz/storage/h-hero-680-2x.webp 680w,
                        https://image.frytolnacestach.cz/storage/h-hero-720-2x.webp 720w,
                        https://image.frytolnacestach.cz/storage/h-hero-840-2x.webp 840w,
                        https://image.frytolnacestach.cz/storage/h-hero-1072-2x.webp 1072w,
                        https://image.frytolnacestach.cz/storage/h-hero-1456-2x.webp 1456w,
                        https://image.frytolnacestach.cz/storage/h-hero-1960-2x.webp 1960w,
                        https://image.frytolnacestach.cz/storage/h-hero-2360-2x.webp 2360w,
                        https://image.frytolnacestach.cz/storage/h-hero-2720-2x.webp 2720w,
                        https://image.frytolnacestach.cz/storage/h-hero-3760-2x.webp 3760w
                        `"
                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                    :alt="title"
                    :srr="true"
                    v-lazy>
            </div>

            <div class="o-hero-video__outer">
                <div class="o-hero-video__inner">
                    <h1 class="o-hero-video__headline">{{ title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroVideoComponent',

        props: {
            title: {
                type: String,
                required: true
            },
            image: {
                type: Array,
                required: true
            }
        }
    }
</script>