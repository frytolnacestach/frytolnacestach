<template>
    <section class="t-section my-2 py-1 -p0" v-if="items !== null && items.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="title + ' '" :titleValue="placeStateName" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-cover-item-state">
                <div class="o-cover-item-state__outer">
                    <div class="o-cover-item-state__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-item-state__item">
                            <div class="o-cover-item-state__content">
                                <div class="o-cover-item-state__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-item-state__image-lazyload">
                                        <img class="o-cover-item-state__image-file lazyload-file"
                                            data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-180.webp 180w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-280.webp 280w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-380.webp 380w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-540.webp 540w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-360-2x.webp 360w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-560-2x.webp 560w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-760-2x.webp 760w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-1080-2x.webp 1080w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}.webp`"
                                            :alt="item.name"
                                            v-lazy>
                                    </div>
                                    <div v-else class="o-cover-item-state__image-lazyload">
                                        <img class="o-cover-item-state__image-file lazyload-file"
                                            data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,
                                                https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                            :alt="item.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h2 class="o-cover-item-state__name">
                                    {{ item.name }}
                                </h2>
                                <NuxtLink class="o-cover-item-state__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o jídle ${item.name}`"></NuxtLink>
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
        name: 'OrganismsoCoverItemStateComponent',

        components: {
            mHeadline
        },

        props: {
            placeStateID: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            placeStateName: {
                type: String,
                required: true
            },
        },

        data() {
            return {
                items: null,
                images: null
            }
        },

        async mounted() {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    let items = [];

                    if ( this.type === "jidlo" ) {
                        // Načtení jídla z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/foods-id-state/${this.placeStateID}?showType=list`) : [];
                    } else if ( this.type === "fauna" ) {
                        // Načtení fauny z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/faunas-id-state/${this.placeStateID}?showType=list`) : [];
                    } else if ( this.type === "flora" ) {
                        // Načtení flory z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/floras-id-state/${this.placeStateID}?showType=list`) : [];
                    } else if ( this.type === "znacka" ) {
                        // Načtení značek z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/brands-id-state/${this.placeStateID}?showType=list`) : [];
                    }

                    // Načtení informací o obrázcích pro items
                    const imagesItemsID = items.map(item => item.id_image_cover).filter(id => id !== null && id !== '')
                    const images = await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesItemsID.join(',')}`)

                    data = { items, images }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - VYPIS oCoverItemState`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data);
        },
    }
</script>