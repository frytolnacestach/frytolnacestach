<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsFaunaArray" :item="fauna[0]" v-if="fauna && fauna.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="fauna" :images="imageFauna" v-if="fauna && fauna.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="fauna && fauna.length > 0 && fauna[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="(fauna[0].name ? fauna[0].name : '')" :perexWysiwyg="fauna[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - fauna places -->
                                <div class="t-section" v-if="fauna && fauna.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline :title="'Zvíře ' + fauna[0].name + ' žije v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <oCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - fauna places - END -->

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
        name: 'FaunaSlugPage',

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
                fauna: [],
                imageFauna: [],
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsFaunaArray: [
                    {
                        id: 1,
                        name: "Fauna",
                        url: "/fauna",
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
                "@type": "Animal",
                "name": "Název",
                "description": "Popis",
                "image": "Obrázek"
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

                // PAGE - Fauna detail
                // Fauna
                const responseFauna = await fetch(`https://api.frytolnacestach.cz/api/fauna/${route.params.slug}`)
                this.fauna = await responseFauna.json() || []
                // Image
                if (this.fauna && this.fauna.length > 0) {
                    const responseImageFauna = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.fauna[0].id_image_hero}`)
                    this.imageFauna = await responseImageFauna.json() || []
                }

                // COMPONENT - Places states
                if (this.fauna && this.fauna.length > 0) {
                    // PlacesStates
                    const idsStates = this.fauna[0].ids_states.map(state => state.id)
                    const responsePlacesStates = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    this.placesStates = await responsePlacesStates.json() || []
                    // Images
                    const imagesPlacesStatesID = this.placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const responseImagesStates = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                    this.imagesStates = await responseImagesStates.json() || []
                }

                // HEAD
                if (this.fauna && this.fauna.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.fauna[0].name ? this.fauna[0].name : 'Fauna'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.fauna[0].description ? this.fauna[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.fauna[0].description.lastIndexOf(' ', 160)) : this.fauna[0].name}`
                    if (this.fauna[0].seo_tags && this.fauna[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.fauna[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.fauna[0].name ? this.fauna[0].name : '') + metaSeoTags + ', Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = (this.fauna[0].name ? this.fauna[0].name : '') + ', Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.fauna[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFauna.find(image => image.id === this.fauna[0].id_image_hero).source + this.imageFauna.find(image => image.id === this.fauna[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.fauna[0].name ? this.fauna[0].name : 'Fauna'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.fauna[0].description ? this.fauna[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.fauna[0].description.lastIndexOf(' ', 160)) : this.fauna[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/fauna/${this.fauna[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = ((this.fauna[0].name) ? this.fauna[0].name : "")
                    this.headScript.description = ((this.fauna[0].description) ? this.fauna[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageFauna && this.imageFauna.length > 0 && this.imageFauna[0] && this.imageFauna[0].id) ? ("https://image.frytolnacestach.cz/storage/fauna/" + this.imageFauna[0].name + ".webp") : "")
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>