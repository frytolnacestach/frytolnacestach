<template>
    <section class="t-section my-2 -p0" v-if="spots && spots.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="headline" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-place-teaser-cities">
                <div class="o-place-teaser-cities__outer">
                    <div class="o-place-teaser-cities__inner">
                        <div class="o-place-teaser-cities__items">
                            <div class="o-place-teaser-cities__item" v-for="spot in spots" :key="spot.id">
                                <div class="o-place-teaser-cities__content">
                                    <div class="o-place-teaser-cities__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === spot.id_image_hero)" class="o-place-teaser-cities__image-lazyload">
                                            <img class="o-place-teaser-cities__image-file lazyload-file"
                                                data-sizes="(max-width: 374px) 345px, 390px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + images.find(image => image.id === spot.id_image_cover).name}-345.webp 345w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + images.find(image => image.id === spot.id_image_cover).name}-390.webp 390w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + images.find(image => image.id === spot.id_image_cover).name}-690-2x.webp 690w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + images.find(image => image.id === spot.id_image_cover).name}-780-2x.webp 780w
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + images.find(image => image.id === spot.id_image_cover).name}.webp`"
                                                :alt="spot.name"
                                                v-lazy>
                                        </div>
                                        <div v-else class="o-place-teaser-cities__image-lazyload">
                                            <img class="o-place-teaser-cities__image-file lazyload-file"
                                                data-sizes="(max-width: 374px) 345px, 390px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w,
                                                    https://image.frytolnacestach.cz/storage/_default/hero-390.webp 390w,
                                                    https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w,
                                                    https://image.frytolnacestach.cz/storage/_default/hero-780-2x.webp 780w
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                                :alt="spot.name"
                                                v-lazy>
                                        </div>
                                        <NuxtLink class="o-place-teaser-cities__image-link" :to="`/svet/misto/${spot.slug}`" :aria-label="`Čti více o místě ${spot.name}`"></NuxtLink>
                                    </div>
                                    <div class="o-place-teaser-cities__text">
                                        <nuxtLink class="o-place-teaser-cities__name" :to="`/svet/misto/${spot.slug}`" :aria-label="`Čti více o místě ${spot.name}`">{{ spot.name }}</nuxtLink>
                                        <div class="o-place-teaser-cities__wysiwyg" v-if="spot.information_chatgpt" v-html="spot.information_chatgpt.slice(0, spot.information_chatgpt.lastIndexOf(' ', 160)).replace(/<\/?[^>]+(>|$)/g, '')"></div>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'

    export default {
        name: 'OrganismsoPlaceTeaserSpotsComponent',

        components: {
            mHeadline
        },

        props: {
            IDplace: {
                type: Number,
                required: true
            },
            headline: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                spots: this.spots,
                images: this.images
            }
        },

        async fetch() {
            
            if(this.type === "state") {
                this.spots = await fetch(`https://api.frytolnacestach.cz/api/places-cities-id-state/${this.IDplace}`).then((res) => res.json());
            }

            const imagesSpotsID = this.spots.map(spot => spot.id_image_cover).filter(id => id !== null && id !== '');
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesSpotsID.join(',')}`).then((res) => res.json());
        }
    }
</script>