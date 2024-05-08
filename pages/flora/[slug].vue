<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsFloraArray" :item="flora[0]" v-if="flora && flora.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="flora" :images="imageFlora" v-if="flora && flora.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="flora && flora.length > 0 && flora[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="(flora[0].name ? flora[0].name : '')" :perexWysiwyg="flora[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - flora places -->
                                <div class="t-section" v-if="flora && flora.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline :title="'Rostlina ' + flora[0].name + ' roste v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <oCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - flora places - END -->

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
        name: 'FloraSlugPage',

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

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = `${this.flora[0].name ? this.flora[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.flora[0].description ? this.flora[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.flora[0].description.lastIndexOf(' ', 160)) : this.flora[0].name}`

            // keywolds
            let metaSeoTags = ""
            if (this.flora[0].seo_tags && this.flora[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.flora[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.flora[0].name ? this.flora[0].name : '') + metaSeoTags + ', Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.flora[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFlora.find(image => image.id === this.flora[0].id_image_hero).source + this.imageFlora.find(image => image.id === this.flora[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/flora/${this.flora[0].slug}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "Plant",
                            "name": ((this.flora && this.flora.length > 0 && this.flora[0].name) ? this.flora[0].name : ""),
                            "description": ((this.flora && this.flora.length > 0 && this.flora[0].description) ? this.flora[0].description.replace(/<\/?[^>]+(>|$)/g, '') : ""),
                            "image": ((this.imageFlora && this.imageFlora.length > 0 && this.imageFlora[0] && this.imageFlora[0].id) ? ("https://image.frytolnacestach.cz/storage/flora/" + this.imageFlora[0].name + ".webp") : "" )
                        }
                    }
                ]
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
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>