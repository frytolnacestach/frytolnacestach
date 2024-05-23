<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0 print-section">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsTravelDictionaryArray" :item="travelDictionary[0]" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="travelDictionary" :images="imageTravelDictionary" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section print-section" v-if="travelDictionary[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'Co je ' + (travelDictionary[0].name ? travelDictionary[0].name : '') + '?'" :perexWysiwyg="travelDictionary[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                            </div>
                            <div class="t-grid__section -ad">

                                <!-- SECTION - Events - sidebar -->
                                <oSidebarListTravelDictionary :IDTravelDictionary="this.travelDictionary[0].id" />
                                <!-- SECTION - Events - sidebar - END -->

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
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oSidebarListTravelDictionary from '~/components/organisms/oSidebarListTravelDictionary.vue'

    export default defineComponent({
        name: 'CestovatelskySlovnikSlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oHeroItemDetail,
            oInformationBlock,
            oSidebarListTravelDictionary
        },

        data() {
            return {
                travelDictionary: [],
                imageTravelDictionary: this.imageTravelDictionary,
                mNavBreadcrumbsTravelDictionaryArray: [
                    {
                        id: 1,
                        name: "Cestovatelský slovník",
                        url: "/cestovatelsky-slovnik",
                        status: "link"
                    }
                ]
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Detail cestovatelského slovníku | Cestovatelský portál Frytol na cestách',
                description: 'Popis detailu cestovatelského slovníku',
                keywords: 'cestovatelský slovník, co je to, travel hacky, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Detail cestovatelského slovníku | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Popis detailu cestovatelského slovníku',
                ogUrl: `https://www.frytolnacestach.cz/cestovatelsky-slovnik/slug`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "Article",
                "name": "Název",
                "image": "Obrázek",
                "url": "URL",
                "description": "Popis"
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

                // PAGE - TravelDictionaries detail
                // TravelDictionaries
                const responseTravelDictionary = await fetch(`https://api.frytolnacestach.cz/api/travel-dictionary/${route.params.slug}`)
                this.travelDictionary = await responseTravelDictionary.json() || []
                // Images
                if (this.travelDictionary && this.travelDictionary.length > 0) {
                    const responseImageTravelDictionary = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.travelDictionary[0].id_image_hero}`)
                    this.imageTravelDictionary = await responseImageTravelDictionary.json() || []
                }

                // HEAD
                if (this.travelDictionary && this.travelDictionary.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.travelDictionary[0].name ? this.travelDictionary[0].name : 'Cestovatelský slovník'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.travelDictionary[0].description ? this.travelDictionary[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.travelDictionary[0].description.lastIndexOf(' ', 160)) : this.travelDictionary[0].name}`
                    if (this.travelDictionary[0].seo_tags && this.travelDictionary[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.travelDictionary[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.travelDictionary[0].name ? this.travelDictionary[0].name : '') + metaSeoTags + ', Cestovatelský slovník, co je to ' + this.travelDictionary[0].name + ', travel hacky, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = (this.travelDictionary[0].name ? this.travelDictionary[0].name : '') + ', Cestovatelský slovník, co je to ' + this.travelDictionary[0].name + ', travel hacky, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.travelDictionary[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).source + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.travelDictionary[0].name ? this.travelDictionary[0].name : 'Cestovatelský slovník'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.travelDictionary[0].description ? this.travelDictionary[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.travelDictionary[0].description.lastIndexOf(' ', 160)) : this.travelDictionary[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/cestovatelsky-slovnik/${this.travelDictionary[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = (this.travelDictionary[0].name ? this.travelDictionary[0].name : "")
                    this.headScript.description = (this.travelDictionary[0].description ? this.travelDictionary[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageTravelDictionary && this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero)) ? ("https://image.frytolnacestach.cz/storage" + (this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).source + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).name) + ".webp") : "")
                    this.headScript.url = ('https://frytolnacestach.cz' + `/cestovatelsky-slovnik/${this.travelDictionary[0].slug}`)
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>