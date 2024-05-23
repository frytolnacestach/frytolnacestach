<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbschainArray" :item="chain[0]" v-if="chain && chain.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="chain" :images="imageChain" v-if="chain && chain.length > 0"/>
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="chain && chain.length > 0 && chain[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="(chain[0].name ? chain[0].name : '')" :perexWysiwyg="chain[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - chains places -->
                                <div class="t-section" v-if="chain && chain.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline :title="'Řetezec ' + chain[0].name + ' se nachází v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <oCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - chains places - END -->

                            </div>
                            <div class="t-grid__section -ad">

                                <!-- SECTION - sidebar information -->
                                <section class="t-section -px-world mt-1 mb-2" v-if="chain && chain.length > 0 && chain[0].information && chain[0].information.length > 0">
                                    <div class="t-section__inner">
                                        <oSidebarInformation :items="chain[0].information" />
                                    </div>
                                </section>
                                <!-- SECTION - sidebar information - END -->

                                <!-- SECTION - ad-google - sidebar -->
                                <section class="t-section -px-world mt-4 mb-2">
                                    <div class="t-section__inner">
                                        <oAdGoogleSidebar styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - ad-google - sidebar - END -->

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oCoverStates from '~/components/organisms/oCoverStates.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oSidebarInformation from '~/components/organisms/oSidebarInformation.vue'

    export default defineComponent({
        name: 'RetezceSlugPage',

        components: {
            mHeadline,
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oCoverStates,
            oHeroItemDetail,
            oInformationBlock,
            oSidebarInformation
        },

        data() {
            return {
                chain: this.chain,
                imageChain: this.imageChain,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbschainArray: [
                    {
                        id: 1,
                        name: "Řetězec",
                        url: "/retezec",
                        status: "link"
                    }
                ]
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Detail jídla | Cestovatelský portál Frytol na cestách',
                description: 'Popis detailu jídla',
                keywords: 'Jídlo, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Detail jídla | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Popis detailu jídla',
                ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "",
                "description": "",
                "image": ""
            })

            watch(headMeta, (newMeta) => {
                useHead({
                    title: headMeta.title,
                    meta: [
                        { name: 'description', content: headMeta.description },
                        { name: 'keywords', content: headMeta.keywords },
                        { property: 'og:image', content: headMeta.ogImage },
                        { property: 'og:title', content: headMeta.ogTitle },
                        { property: 'og:description', content: headMeta.ogDescription },
                        { property: 'og:url', content: headMeta.ogUrl },
                        { property: 'og:type', content: headMeta.ogType }
                    ],
                    link: headLink
                })
            }, { deep: true })

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        },

        methods: {
            async fetchData() {
                const route = useRoute()

                // PAGE - chain detail
                // chain
                const responseChain = await fetch(`https://api.frytolnacestach.cz/api/chain/${route.params.slug}`)
                this.chain = await responseChain.json() || []
                // Image
                if (this.chain && this.chain.length > 0) {
                    const responseImageChain = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.chain[0].id_image_hero}`)
                    this.imageChain = await responseImageChain.json() || []
                }

                // COMPONENT - Places states
                if (this.chain && this.chain.length > 0) {
                    // States
                    let idsStates
                    if (this.chain[0].ids_states && Array.isArray(this.chain[0].ids_states) && this.chain[0].ids_states.length !== 0) {
                        idsStates = this.chain[0].ids_states.map(state => state.id)
                    } else {
                        idsStates = null
                    }
                    let responsePlacesStates
                    if (idsStates) {
                        responsePlacesStates = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                        this.placesStates = await responsePlacesStates.json() || []
                    } else {
                        this.placesStates = null
                    }
                    // Images
                    let imagesPlacesStatesID
                    if (this.placesStates) {
                        imagesPlacesStatesID = this.placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    }
                    let responseImagesStates
                    if (imagesPlacesStatesID) {
                        responseImagesStates = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                        this.imagesStates = await responseImagesStates.json() || []
                    } else {
                        this.imagesStates = null
                    }
                }

                // HEAD
                if (this.chain && this.chain.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.chain[0].name ? this.chain[0].name : 'Řetězec'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.chain[0].description ? this.chain[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.chain[0].description.lastIndexOf(' ', 160)) : this.chain[0].name}`
                    if (this.chain[0].seo_tags && this.chain[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.chain[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.chain[0].name ? this.chain[0].name : '') + metaSeoTags + ', Řetězec, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = (this.chain[0].name ? this.chain[0].name : '') + ', Řetězec, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.chain[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageChain.find(image => image.id === this.chain[0].id_image_hero).source + this.imageChain.find(image => image.id === this.chain[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.chain[0].name ? this.chain[0].name : 'Řetězec'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.chain[0].description ? this.chain[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.chain[0].description.lastIndexOf(' ', 160)) : this.chain[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/retezec/${this.chain[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = (this.chain[0].name ? this.chain[0].name : "")
                    this.headScript.description = (this.chain[0].description ? this.chain[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageChain && this.imageChain.length > 0 && this.imageChain[0] && this.imageChain[0].id) ? ("https://image.frytolnacestach.cz/storage/chains/" + this.imageChain[0].name + ".webp") : "")
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>