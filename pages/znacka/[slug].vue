<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsBrandArray" :item="brand[0]" v-if="brand && brand.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">
                                
                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="brand" :images="imageBrand" v-if="brand && brand.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="brand && brand.length > 0 && brand[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="(brand[0].name ? brand[0].name : '')" :perexWysiwyg="brand[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - brands places -->
                                <div class="t-section" v-if="brand && brand.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline :title="'Výrobek ' + brand[0].name + ' se vyrábí v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <oCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - brands places - END -->

                            </div>
                            <div class="t-grid__section -ad">
                                
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

    export default defineComponent({
        name: 'brandSlugPage',

        components: {
            mHeadline,
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oCoverStates,
            oHeroItemDetail,
            oInformationBlock
        },

        data() {
            return {
                brand: this.brand,
                imageBrand: this.imageBrand,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsBrandArray: [
                    {
                        id: 1,
                        name: "Značka",
                        url: "/znacka",
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
                "@type": "Product",
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

                // PAGE - Brand detail
                // Brand
                const responseBrand = await fetch(`https://api.frytolnacestach.cz/api/brand/${route.params.slug}`)
                this.brand = await responseBrand.json() || []
                // Image
                if (this.brand && this.brand.length > 0) {
                    const responseImageBrand = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.brand[0].id_image_hero}`)
                    this.imageBrand = await responseImageBrand.json() || []
                }

                // COMPONENT - Places states
                if (this.brand && this.brand.length > 0) {
                    // States
                    const idsStates = this.brand[0].ids_states.map(state => state.id)
                    const responsePlacesStates = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    this.placesStates = await responsePlacesStates.json() || []
                    // Images
                    const imagesPlacesStatesID = this.placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    if (imagesPlacesStatesID && imagesPlacesStatesID.length > 0) {
                        const responseImagesStates = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                        this.imagesStates = await responseImagesStates.json() || []
                    }
                }

                // HEAD
                if (this.brand && this.brand.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.brand[0].name ? this.brand[0].name : 'brand'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.brand[0].description ? this.brand[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.brand[0].description.lastIndexOf(' ', 160)) : this.brand[0].name}`
                    if (this.brand[0].seo_tags && this.brand[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.brand[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = ((this.brand[0].name) ? this.brand[0].name : '') + metaSeoTags + ', brand, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = ((this.brand[0].name) ? this.brand[0].name : '') + ', brand, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.brand[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageBrand.find(image => image.id === this.brand[0].id_image_hero).source + this.imageBrand.find(image => image.id === this.brand[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.brand[0].name ? this.brand[0].name : 'brand'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.brand[0].description ? this.brand[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.brand[0].description.lastIndexOf(' ', 160)) : this.brand[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/brand/${this.brand[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = (this.brand[0].name ? this.brand[0].name : "")
                    this.headScript.description = (this.brand[0].description ? this.brand[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageBrand && this.imageBrand.length > 0 && this.imageBrand[0] && this.imageBrand[0].id) ? ("https://image.frytolnacestach.cz/storage/brands/" + this.imageBrand[0].name + ".webp") : "")
                }
            } 
        },

        mounted() {
            this.fetchData()
        }
    })
</script>