<template>
    <div :class="'o-place-block' + (styleThema ? styleThema : ' -gray')">
        <div class="o-place-block__outer">
            <div class="o-place-block__inner">
                <div class="o-place-block__content">
                    <div class="o-place-block__image loading-image -gray">
                        <div v-if="image" class="o-place-block__image-lazyload">
                            <img class="o-place-block__image-file lazyload-file"
                                data-sizes="(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 304px, (max-width: 1219px) 380px, (max-width: 1399px) 440px, 614px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-312.webp 310w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-334.webp 334w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-360.webp 360w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-420.webp 420w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-536.webp 536w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-728.webp 728w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-312.webp 304w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-380.webp 380w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-440.webp 440w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-614.webp 614w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-624-2x.webp 620w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-668-2x.webp 668w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-720-2x.webp 720w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-840-2x.webp 840w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1072-2x.webp 1072w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1456-2x.webp 1456w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-624-2x.webp 608w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-740-2x.webp 740w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-880-2x.webp 880w,
                                    https://image.frytolnacestach.cz/storage/${image[0].source + 'h-' + image[0].name}-1228-2x.webp 1228w
                                `"
                                :data-src="`https://image.frytolnacestach.cz/storage/${image[0].source + image[0].name}.webp`"
                                :alt="place[0].name"
                                v-lazy>
                        </div>
                        <div v-else class="o-place-block__image-lazyload">
                            <img class="o-place-block__image-file lazyload-file"
                                data-sizes="(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 304px, (max-width: 1219px) 380px, (max-width: 1399px) 440px, 614px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-312.webp 310w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-334.webp 334w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-360.webp 360w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-420.webp 420w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-536.webp 536w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-728.webp 728w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-312.webp 304w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-380.webp 380w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-440.webp 440w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-614.webp 614w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-624-2x.webp 620w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-668-2x.webp 668w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-720-2x.webp 720w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-840-2x.webp 840w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-1072-2x.webp 1072w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-1456-2x.webp 1456w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-624-2x.webp 608w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-740-2x.webp 740w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-880-2x.webp 880w,
                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-1228-2x.webp 1228w
                                `"
                                :data-src="`https://image.frytolnacestach.cz/storage/_default/no-image.webp`"
                                :alt="place[0].name"
                                v-lazy>
                        </div>
                        <div class="o-place-block__filter">
                            <span class="o-place-block__name">{{ place[0].name }}</span>
                        </div>
                        <NuxtLink class="o-place-block__image-link" :to="`/svet/${type}/${place[0].slug}`" :aria-label="`Čti více o místě ${place[0].name}`"></NuxtLink>
                    </div>
                    <div class="o-place-block__text">
                        <div class="o-place-block__wysiwyg" v-if="place[0].information_chatgpt" v-html="place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 220)"></div>
                        <div class="o-place-block__button">
                            <aButtonFillFull target="internal" :url="`/svet/${type}/${place[0].slug}`" text="Číst více" :styleThema="(styleThema ? styleThema : ' -gray')" />
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
        name: 'OrganismsoPlaceBlockComponent',

        components: {
            aButtonFillFull
        },

        props: {
            placeID: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                place: [],
                image: []
            }
        },

        head() {
            // Empty Array
            if (!this.place && this.place.length === 0) {
                return { script: [] };
            }
            // Return
            const jsonldPlaces = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": (this.type === 'kontinent' ? 'Kontinent' : this.type === 'stat' ? 'Stát' : this.type === 'mesto' ? 'Město' : this.type === 'region' ? 'Region' : this.type === 'misto' ? 'Místo' : ''),
                    "itemListElement": this.place.map((itemPlace, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${this.type}/${itemPlace.slug}`,
                                "name": itemPlace.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        async fetch() {
            // Place
            if (this.type === "kontinent") {
                this.place = await fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${this.placeID}`).then((res) => res.json())
            } else if (this.type === "stat") {
                this.place = await fetch(`https://api.frytolnacestach.cz/api/places-state-id/${this.placeID}`).then((res) => res.json())
            } else if (this.type === "region") {
                this.place = await fetch(`https://api.frytolnacestach.cz/api/places-region-id/${this.placeID}`).then((res) => res.json())
            } else if (this.type === "mesto") {
                this.place = await fetch(`https://api.frytolnacestach.cz/api/places-city-id/${this.placeID}`).then((res) => res.json())
            } else if (this.type === "misto") {
                this.place = await fetch(`https://api.frytolnacestach.cz/api/places-spot-id/${this.placeID}`).then((res) => res.json())
            }


            // Image
            if (this.place) {
                this.image = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`).then((res) => res.json())
            }
        }
    }
</script>