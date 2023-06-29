<template>
    <section class="t-section my-2 -p0" v-if="spots && spots.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="headline" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-place-teaser-spots">
                <div class="o-place-teaser-spots__outer">
                    <div class="o-place-teaser-spots__inner">
                        <div class="o-place-teaser-spots__items">
                            <div class="o-place-teaser-spots__item" v-for="spot in spots" :key="spot.id">
                                <div class="o-place-teaser-spots__content">
                                    <div class="o-place-teaser-spots__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === spot.id_image_hero)" class="o-place-teaser-spots__image-lazyload">
                                            <img class="o-place-teaser-spots__image-file lazyload-file"
                                                data-sizes="(max-width: 349px) 100px, (max-width: 374px) 108px, (max-width: 399px) 108px, (max-width: 459px) 126px, (max-width: 575px) 162px, (max-width: 767px) 220px, (max-width: 991px) 192px, (max-width: 1219px) 172px, (max-width: 1399px) 208px, 312px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-108.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-126.webp 126w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-172.webp 162w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-220.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-192.webp 192w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-172.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-220.webp 208w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-312.webp 312w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-216-2x.webp 200w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-252-2x.webp 252w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-344-2x.webp 324w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-440-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-384-2x.webp 384w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-344-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-440-2x.webp 416w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + 'h-' + images.find(image => image.id === spot.id_image_cover).name}-624-2x.webp 624w
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === spot.id_image_cover).source + images.find(image => image.id === spot.id_image_cover).name}.webp`"
                                                :alt="spot.name"
                                                v-lazy>
                                        </div>
                                        <div v-else class="o-place-teaser-spots__image-lazyload">
                                            <img class="o-place-teaser-spots__image-file lazyload-file"
                                                data-sizes="(max-width: 349px) 100px, (max-width: 374px) 108px, (max-width: 399px) 108px, (max-width: 459px) 126px, (max-width: 575px) 162px, (max-width: 767px) 220px, (max-width: 991px) 192px, (max-width: 1219px) 172px, (max-width: 1399px) 208px, 312px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-108.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-126.webp 126w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-172.webp 162w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-220.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-192.webp 192w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-172.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-220.webp 208w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-312.webp 312w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-216-2x.webp 200w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-252-2x.webp 252w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-344-2x.webp 324w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-440-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-384-2x.webp 384w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-344-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-440-2x.webp 416w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-624-2x.webp 624w
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                                :alt="spot.name"
                                                v-lazy>
                                        </div>
                                        <NuxtLink class="o-place-teaser-spots__image-link" :to="`/svet/misto/${spot.slug}`" :aria-label="`Čti více o místě ${spot.name}`"></NuxtLink>
                                    </div>
                                    <div class="o-place-teaser-spots__text">
                                        <nuxtLink class="o-place-teaser-spots__name" :to="`/svet/misto/${spot.slug}`" :aria-label="`Čti více o místě ${spot.name}`">{{ spot.name }}</nuxtLink>
                                        <div class="o-place-teaser-spots__wysiwyg" v-if="spot.information_chatgpt" v-html="spot.information_chatgpt.slice(0, spot.information_chatgpt.lastIndexOf(' ', 160)).replace(/<\/?[^>]+(>|$)/g, '')"></div>                               
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
            
            if(this.type === "city") {
                this.spots = await fetch(`https://api.frytolnacestach.cz/api/places-spots-id-city/${this.IDplace}`).then((res) => res.json());
            } else if(this.type === "state") {
                this.spots = await fetch(`https://api.frytolnacestach.cz/api/places-spots-id-state/${this.IDplace}`).then((res) => res.json());
            }

            const imagesSpotsID = this.spots.map(spot => spot.id_image_cover).filter(id => id !== null && id !== '');
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesSpotsID.join(',')}`).then((res) => res.json());
        },
    }
</script>