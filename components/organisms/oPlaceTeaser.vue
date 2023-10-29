<template>
    <div class="o-place-teaser">
        <div class="o-place-teaser__outer">
            <div class="o-place-teaser__inner">
                <div class="o-place-teaser__content">
                    <div class="o-place-teaser__image loading-image -green">
                        <div v-if="image && image.length > 0" class="o-place-teaser__image-lazyload">
                            <img class="o-place-teaser__image-file lazyload-file"
                                data-sizes="(max-width: 349px) 330px, (max-width: 374px) 354px, (max-width: 399px) 354px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 286px, (max-width: 1219px) 258px, (max-width: 1399px) 312px, 468px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-334.webp 330w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-360.webp 354w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-360.webp 360w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-420.webp 420w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-536.webp 536w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-728.webp 728w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-286.webp 286w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-258.webp 258w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-312.webp 312w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-468.webp 468w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-668-2x.webp 660w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-720-2x.webp 708w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-720-2x.webp 720w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-840-2x.webp 840w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1072-2x.webp 1072w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1456-2x.webp 1456w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-572-2x.webp 572w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-516-2x.webp 516w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-614-2x.webp 624w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-936-2x.webp 936w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}.webp`"
                                :alt="place[0].name"
                                v-lazy>
                        </div>
                        <div v-else class="o-place-teaser__image-lazyload">
                            <img class="o-place-teaser__image-file lazyload-file"
                                data-sizes="(max-width: 349px) 330px, (max-width: 374px) 354px, (max-width: 399px) 354px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 286px, (max-width: 1219px) 258px, (max-width: 1399px) 312px, 468px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 330w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 354w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-286.webp 286w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-258.webp 258w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-312.webp 312w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-468.webp 468w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 660w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 708w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-572-2x.webp 572w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-516-2x.webp 516w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-614-2x.webp 624w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-936-2x.webp 936w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                :alt="place[0].name"
                                v-lazy>
                        </div>
                    </div>
                    <div class="o-place-teaser__text">
                        <h3 class="o-place-teaser__name">{{ headline }}</h3>
                        <div class="o-place-teaser__wysiwyg" v-if="place[0].information_chatgpt && !place[0].information_author?.length > 0" v-html="place[0].information_chatgpt.slice(0, place[0].information_chatgpt.lastIndexOf(' ', 160)).replace(/<\/?[^>]+(>|$)/g, '')"></div>       
                        <div class="o-place-teaser__wysiwyg" v-if="place[0].information_author?.length > 0" v-html="place[0].information_author[0].text.slice(0, place[0].information_author[0].text.lastIndexOf(' ', 160)).replace(/<\/?[^>]+(>|$)/g, '')"></div>    
                        <div class="o-place-teaser__button hidden-print">
                            <aButtonFillFull :url="`/svet/${type}/${place[0].slug}`" text="Číst více" styleThema=" -green -bold" target="internal" />
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'

    export default {
        name: 'OrganismsoPlaceTeaserComponent',

        components: {
            aButtonFillFull
        },

        props: {
            place: {
                type: Array,
                required: true
            },
            image: {
                type: Array,
                required: false
            },
            type: {
                type: String,
                required: true
            },
            headline: {
                type: String,
                required: true
            }
        }
    }
</script>