<template>
    <section :class="'t-section my-2 -p0 print-section' + (styleGap ? styleGap : '')" v-if="spots && spots.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="headline" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-place-teaser-spots">
                <div class="o-place-teaser-spots__outer">
                    <div class="o-place-teaser-spots__inner">
                        <div class="o-place-teaser-spots__items">
                            <div class="o-place-teaser-spots__item" v-for="spot in spots" :key="spot.id" v-if="spot.id !== IDplaceShow && type !== typeShow">
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
                                        <h3 class="o-place-teaser-spots__name"><nuxtLink class="o-place-teaser-spots__name-link" :to="`/svet/misto/${spot.slug}`" :aria-label="`Čti více o místě ${spot.name}`">{{ spot.name }}</nuxtLink></h3>
                                        <div class="o-place-teaser-spots__wysiwyg" v-if="spot.information_chatgpt && !spot.information_author?.length > 0" v-html="spot.information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, spot.information_chatgpt.lastIndexOf(' ', 150))"></div>       
                                        <div class="o-place-teaser-spots__wysiwyg" v-if="spot.information_author?.length > 0" v-html="spot.information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, spot.information_author[0].text.lastIndexOf(' ', 150))"></div>   
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
            IDplaceShow: {
                type: Number,
                required: false
            },
            headline: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            typeShow: {
                type: String,
                required: false
            },
            styleGap: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                spots: [],
                images: []
            }
        },

        head() {
            // Empty Array
            if (!this.spots && this.spots.length === 0) {
                return { script: [] };
            }
            // Return
            const jsonldPlaces = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Jaké místa vidět",
                    "itemListElement": this.spots.map((spot, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/misto/${spot.slug}`,
                                "name": spot.name,
                                "image": ((this.images && this.images.length > 0 && this.images.find(image => image.id === spot.id_image_cover)) ? (`https://image.frytolnacestach.cz/storage${this.images.find(image => image.id === spot.id_image_cover).source + this.images.find(image => image.id === spot.id_image_cover).name}.webp`) : "" ),
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        async fetch() {
            if(this.type === "city") {
                this.spots = await fetch(`https://api.frytolnacestach.cz/api/places-spots-id-city/${this.IDplace}`).then((res) => res.json())
            } else if(this.type === "state") {
                this.spots = await fetch(`https://api.frytolnacestach.cz/api/places-spots-id-state/${this.IDplace}`).then((res) => res.json())
            }

            const imagesSpotsID = this.spots.map(spot => spot.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesSpotsID.join(',')}`).then((res) => res.json())
        }
    }
</script>