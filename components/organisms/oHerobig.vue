<template>
    <div class="o-hero-big">
        <div class="o-hero-big__image loading-image -gray">
            <div class="o-hero-big__image-lazyload">
                <img class="o-hero-big__image-file lazyload-file"
                    data-sizes="(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 952px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px"
                    :data-srcset="`
                        https://image.frytolnacestach.cz/storage/_default/h-hero-310.webp 310w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 334w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-952.webp 952w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-1180.webp 1180w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-1360.webp 1360w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-1880.webp 1880w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-620-2x.webp 620w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 668w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-1904-2x.webp 1904w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-2360-2x.webp 2360w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-2720-2x.webp 2720w,
                        https://image.frytolnacestach.cz/storage/_default/h-hero-3760-2x.webp 3760w
                        `"
                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                    :alt="headline"
                    :preload="true"
                    v-lazy>
            </div>

            <div class="o-hero-big__outer">
                <div class="o-hero-big__inner">
                    <h1 class="o-hero-big__headline">{{ headline }}</h1>
                    <p class="o-hero-big__perex">Cestovatelský portál co tě bude bavit</p>
                    <div class="o-hero-big__buttons mt-2">
                        <aButtonFill target="internal" url="/svet" text="Chci objevovat svět" styleThema=" -brand-green" styleSize=" -big" />
                        <aButtonFill target="internal" url="/videa" text="Chci vidět videa" styleThema=" -brand-blue" styleSize=" -big" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFill from '~/components/atoms/aButtonFill.vue'

    export default {
        name: 'OrganismsoHeroBigComponent',

        components: {
            aButtonFill
        },

        props: {
            headline: {
                type: String,
                required: true
            }
        }
    }
</script>