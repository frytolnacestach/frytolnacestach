<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsFloraArray" :item="flora[0]" v-if="flora && flora.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="flora" :images="imageFlora" v-if="flora && flora.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="flora && flora.length > 0 && flora[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="(flora[0].name ? flora[0].name : '')" :perexWysiwyg="flora[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - flora places -->
                                <div class="t-section" v-if="flora && flora.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Rostlina ' + flora[0].name + ' roste v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - flora places - END -->

                            </div>
                            <div class="t-grid__section -ad">

                                <!-- SECTION - ad-google - sidebar -->
                                <section class="t-section -px-world mt-4 mb-2">
                                    <div class="t-section__inner">
                                        <OrganismsAdGoogleSidebar styleThema=" -green" />
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
    export default defineComponent({
        name: 'FloraSlugPage',

        data() {
            return {
                flora: this.flora,
                imageFlora: this.imageFlora,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsFloraArray: [
                    {
                        id: 1,
                        name: "Flóra",
                        url: "/flora",
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
                "@type": "Plant",
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

                // PAGE - Flora detail
                // Flora
                const responseFlora = await fetch(`https://api.frytolnacestach.cz/api/flora/${route.params.slug}`)
                this.flora = await responseFlora.json() || []
                // Image
                if (this.flora && this.flora.length > 0) {
                    const responseImageFlora = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.flora[0].id_image_hero}`)
                    this.imageFlora = await responseImageFlora.json() || []
                }

                // COMPONENT - Places states
                if (this.flora && this.flora.length > 0) {
                    // PlacesStates
                    const idsStates = this.flora[0].ids_states.map(state => state.id)
                    const responsePlacesStates = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    this.placesStates = await responsePlacesState.json() || []
                    // Images
                    const imagesPlacesStatesID = this.placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const responseImagesStates = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                    this.imagesStates = await responseImagesStates.json() || []
                }

                // HEAD
                if (this.flora && this.flora.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.flora[0].name ? this.flora[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.flora[0].description ? this.flora[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.flora[0].description.lastIndexOf(' ', 160)) : this.flora[0].name}`
                    if (this.flora[0].seo_tags && this.flora[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.flora[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.flora[0].name ? this.flora[0].name : '') + metaSeoTags + ', Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = (this.flora[0].name ? this.flora[0].name : '') + ', Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.flora[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFlora.find(image => image.id === this.flora[0].id_image_hero).source + this.imageFlora.find(image => image.id === this.flora[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.flora[0].name ? this.flora[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.flora[0].description ? this.flora[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.flora[0].description.lastIndexOf(' ', 160)) : this.flora[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/flora/${this.flora[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = ((this.flora && this.flora.length > 0 && this.flora[0].name) ? this.flora[0].name : "")
                    this.headScript.description = ((this.flora && this.flora.length > 0 && this.flora[0].description) ? this.flora[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageFlora && this.imageFlora.length > 0 && this.imageFlora[0] && this.imageFlora[0].id) ? ("https://image.frytolnacestach.cz/storage/flora/" + this.imageFlora[0].name + ".webp") : "")
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>