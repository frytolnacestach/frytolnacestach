<template>
    <section class="t-section my-4 py-1 -p0 print-section" v-if="items !== null && items.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="title + ' '" :titleValue="placeStateName" :perex="perex" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-cover-item-state">
                <div class="o-cover-item-state__outer">
                    <div class="o-cover-item-state__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-item-state__item">
                            <div class="o-cover-item-state__content">
                                <div class="o-cover-item-state__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-item-state__image-lazyload">
                                        <img class="o-cover-item-state__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 180w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-210.webp 210w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-274.webp 274w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-240.webp 240w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-240.webp 234w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 166w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-210.webp 202w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-306.webp 306w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-232-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 360w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-420-2x.webp 420w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-548-2x.webp 548w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-480-2x.webp 480w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-480-2x.webp 468w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 332w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-420-2x.webp 404w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-612-2x.webp 612w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}.webp`"
                                            :alt="item.name"
                                            v-lazy>
                                    </div>
                                    <div v-else class="o-cover-item-state__image-lazyload">
                                        <img class="o-cover-item-state__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 180w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 210w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 240w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 234w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 166w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 202w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 306w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-232-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 360w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 420w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 480w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 468w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 332w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 404w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 612w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                            :alt="item.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h3 class="o-cover-item-state__name">
                                    {{ item.name }}
                                </h3>
                                <NuxtLink class="o-cover-item-state__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o ${item.name}`"></NuxtLink>
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
            perex: {
                type: String,
                required: false
            },
            placeStateName: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                items: null,
                images: null
            }
        },

        async mounted() {
            let success = false
            let data = null

            while (!success) {
                try {
                    let items = []

                    if ( this.type === "jidlo" ) {
                        // Načtení jídla z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/foods-id-state/${this.placeStateID}?showType=list`) : []
                    } else if ( this.type === "fauna" ) {
                        // Načtení fauny z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/faunas-id-state/${this.placeStateID}?showType=list`) : []
                    } else if ( this.type === "flora" ) {
                        // Načtení flory z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/floras-id-state/${this.placeStateID}?showType=list`) : []
                    } else if ( this.type === "znacka" ) {
                        // Načtení značek z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/brands-id-state/${this.placeStateID}?showType=list`) : []
                    } else if ( this.type === "elektricka-zasuvka" ) {
                        // Načtení elektrických zásuvek z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/wall-sockets-id-state/${this.placeStateID}?showType=list`) : []
                    } else if ( this.type === "retezec" ) {
                        // Načtení řetěscům z místa
                        items = this.placeStateID ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/chains-id-state/${this.placeStateID}?showType=list`) : []
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

            Object.assign(this, data)
        }
    }
</script>