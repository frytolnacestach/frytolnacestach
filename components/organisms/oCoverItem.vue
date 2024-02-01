<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoCoverItem styleThema=" -skeleton-green" v-if="items === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="items !== null && skeleton !== true">
            <div class="o-cover-item">
                <div class="o-cover-item__outer">
                    <div class="o-cover-item__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-item__item">
                            <div class="o-cover-item__content">
                                <div class="o-cover-item__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-item__image-lazyload">
                                        <img class="o-cover-item__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-172.webp 160w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-172.webp 172w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 186w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-224.webp 216w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-274.webp 274w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-240.webp 230w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-224.webp 224w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-224.webp 220w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-274.webp 256w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-360.webp 360w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-344-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-344-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 372w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-448-2x.webp 432w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-548-2x.webp 548w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-480-2x.webp 460w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-448-2x.webp 448w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-448-2x.webp 440w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-548-2x.webp 512w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-720-2x.webp 720w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}.webp`"
                                            :alt="item.name"
                                            v-lazy>
                                    </div>
                                    <div v-else class="o-cover-item__image-lazyload">
                                        <img class="o-cover-item__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                            :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-172.webp 160w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-172.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 256w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-344-2x.webp 320w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-344-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 512w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                            :alt="item.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h2 class="o-cover-item__name">
                                    {{ item.name }}
                                </h2>
                                <NuxtLink class="o-cover-item__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o ${item.name}`"></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>


<script>
    import skeletonoCoverItem from '~/components/skeleton/skeletonoCoverItem.vue'

    export default {
        name: 'OrganismsoCoverItemComponent',

        components: {
            skeletonoCoverItem
        },

        props: {
            items: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            skeleton: {
                type: Boolean,
                required: false
            }
        },

        head() {
            // Empty Array
            if (!this.items && this.items === null) {
                return { script: [] };
            }
            // Return
            const jsonldItems = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": (this.type === 'jidlo' ? 'Jídla' : this.type === 'fauna' ? 'Fauna' : this.type === 'flora' ? 'Flora' : this.type === 'znacka' ? 'Výrobky' : this.type === 'retezec' ? 'Řetězce' : this.type === 'cestovatelsky-slovnik' ? 'Cestovatelský slovník' : this.type === 'udalost' ? 'Události' : ''),
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${this.type}/${item.slug}`,
                                "name": item.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        }
    }
</script>