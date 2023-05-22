<template>
    <div class="o-place-block">
        <div class="o-place-block__outer">
            <div class="o-place-block__inner">
                <div class="o-place-block__content">
                    <div class="o-place-block__image loading-image">
                        <div v-if="image" class="o-place-block__image-lazyload">
                            <img class="o-place-block__image-file lazyload-file"
                                data-sizes="(max-width: 374px) 345px, 390px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}-345.webp 345w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}-390.webp 390w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}-690-2x.webp 690w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}-780-2x.webp 780w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}.webp`"
                                :alt="place[0].name"
                                v-lazy>
                        </div>
                        <div v-else class="o-place-block__image-lazyload">
                            <img class="o-place-block__image-file lazyload-file"
                                data-sizes="(max-width: 374px) 345px, 390px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w,
                                    https://image.frytolnacestach.cz/storage/_default/hero-390.webp 390w,
                                    https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w,
                                    https://image.frytolnacestach.cz/storage/_default/hero-780-2x.webp 780w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                :alt="place[0].name"
                                v-lazy>
                        </div>
                        <div class="o-place-block__filter">
                            <span class="o-place-block__name">{{ place[0].name }}</span>
                        </div>
                    </div>
                    <div class="o-place-block__text">
                        <div class="o-place-block__wysiwyg" v-if="place[0].information_chatgpt" v-html="place[0].information_chatgpt.slice(0, 220)"></div>
                        <aButtonFillFull :url="`/svet/${type}/${place[0].slug}`" text="Číst více" styleThema=" -green" target="internal" />                                 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'

    export default {
        name: 'OrganismsoPlaceBlockComponent',

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
                required: true
            },
            type: {
                type: String,
                required: true
            }
        }
    }
</script>