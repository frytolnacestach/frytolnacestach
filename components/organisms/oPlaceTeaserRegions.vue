<template>
    <section :class="'t-section my-2 -p0 print-section' + (styleGap ? styleGap : '')" v-if="regions && regions.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="headline" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-place-teaser-regions">
                <div class="o-place-teaser-regions__outer">
                    <div class="o-place-teaser-regions__inner">
                        <div class="o-place-teaser-regions__items">
                            <div class="o-place-teaser-regions__item" v-for="region in regions" :key="region.id" v-if="region.id !== IDplaceShow && type !== typeShow">
                                <div class="o-place-teaser-regions__content">
                                    <div class="o-place-teaser-regions__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === region.id_image_hero)" class="o-place-teaser-regions__image-lazyload">
                                            <img class="o-place-teaser-regions__image-file lazyload-file"
                                                data-sizes="(max-width: 349px) 100px, (max-width: 374px) 108px, (max-width: 399px) 108px, (max-width: 459px) 126px, (max-width: 575px) 162px, (max-width: 767px) 220px, (max-width: 991px) 192px, (max-width: 1219px) 172px, (max-width: 1399px) 208px, 312px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-108.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-126.webp 126w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-172.webp 162w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-220.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-192.webp 192w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-172.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-220.webp 208w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-312.webp 312w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-216-2x.webp 200w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-252-2x.webp 252w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-344-2x.webp 324w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-440-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-384-2x.webp 384w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-344-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-440-2x.webp 416w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + 'h-' + images.find(image => image.id === region.id_image_cover).name}-624-2x.webp 624w
                                                `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === region.id_image_cover).source + images.find(image => image.id === region.id_image_cover).name}.webp`"
                                                :alt="region.name"
                                                v-lazy>
                                        </div>
                                        <div v-else class="o-place-teaser-regions__image-lazyload">
                                            <img class="o-place-teaser-regions__image-file lazyload-file"
                                                data-sizes="(max-width: 349px) 100px, (max-width: 374px) 108px, (max-width: 399px) 108px, (max-width: 459px) 126px, (max-width: 575px) 162px, (max-width: 767px) 220px, (max-width: 991px) 192px, (max-width: 1219px) 172px, (max-width: 1399px) 208px, 312px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-108.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-108.webp 108w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-126.webp 126w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-172.webp 162w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-220.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-192.webp 192w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-172.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-220.webp 208w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-312.webp 312w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-216-2x.webp 200w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-216-2x.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-252-2x.webp 252w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-344-2x.webp 324w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-440-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-384-2x.webp 384w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-344-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-440-2x.webp 416w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-no-image-624-2x.webp 624w
                                                `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/no-image.webp`"
                                                :alt="region.name"
                                                v-lazy>
                                        </div>
                                        <NuxtLink class="o-place-teaser-regions__image-link" :to="`/svet/region/${region.slug}`" :aria-label="`Čti více o regionu ${region.name}`"></NuxtLink>
                                    </div>
                                    <div class="o-place-teaser-regions__text">
                                        <h3 class="o-place-teaser-regions__name"><nuxtLink class="o-place-teaser-regions__name-link" :to="`/svet/region/${region.slug}`" :aria-label="`Čti více o regionu ${region.name}`">{{ region.name }}</nuxtLink></h3>
                                        <div class="o-place-teaser-regions__wysiwyg" v-if="region.information_chatgpt && !region.information_author?.length > 0" v-html="region.information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, region.information_chatgpt.lastIndexOf(' ', 150))"></div>       
                                        <div class="o-place-teaser-regions__wysiwyg" v-if="region.information_author?.length > 0" v-html="region.information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, region.information_author[0].text.lastIndexOf(' ', 150))"></div>    
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
        name: 'OrganismsoPlaceTeaserRegionsComponent',

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
                regions: [],
                images: []
            }
        },

        head() {
            // Empty Array
            if (!this.regions && this.regions.length === 0) {
                return { script: [] };
            }
            // Return
            const jsonldPlaces = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Jaké regiony vidět",
                    "itemListElement": this.regions.map((region, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/region/${region.slug}`,
                                "name": region.name,
                                "image": ((this.images && this.images.length > 0 && this.images.find(image => image.id === region.id_image_cover)) ? (`https://image.frytolnacestach.cz/storage${this.images.find(image => image.id === region.id_image_cover).source + this.images.find(image => image.id === region.id_image_cover).name}.webp`) : "" ),
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        async fetch() {
            if(this.type === "state") {
                this.regions = await fetch(`https://api.frytolnacestach.cz/api/places-regions-id-state/${this.IDplace}`).then((res) => res.json())
            }

            const imagesRegionsID = this.regions.map(region => region.id_image_cover).filter(id => id !== null && id !== '')
            this.images = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesRegionsID.join(',')}`).then((res) => res.json())
        },
    }
</script>