<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsFaunaArray" :item="fauna[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-content-with-ad">
                    
                    <div class="t-grid__section -content">
                        <!-- SECTION - hero -->
                        <section class="t-section print-section">
                            <div class="t-section__inner">
                                <oHeroItemDetail :item="fauna" :images="imageFauna" />
                            </div>
                        </section>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="fauna[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(fauna[0].name ? fauna[0].name : '')" :perexWysiwyg="fauna[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - fauna places -->
                        <div class="t-section" v-if="placesStates">
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
        <!-- SECTION END -->
    </main>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oCoverStates from '~/components/organisms/oCoverStates.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'

    export default {
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
            title = `${this.fauna[0].name ? this.fauna[0].name : 'Fauna'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.fauna[0].description ? this.fauna[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.fauna[0].description.lastIndexOf(' ', 160)) : this.fauna[0].name}`

            // keywolds
            let metaSeoTags = ""
            if (this.fauna[0].seo_tags && this.fauna[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.fauna[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.fauna[0].name ? this.fauna[0].name : '') + metaSeoTags + ', Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.fauna[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFauna.find(image => image.id === this.fauna[0].id_image_hero).source + this.imageFauna.find(image => image.id === this.fauna[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/fauna/${this.fauna[0].slug}`

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
                            "@type": "Animal",
                            "name": ((this.fauna && this.fauna.length > 0 && this.fauna[0].name) ? this.fauna[0].name : ""),
                            "description": ((this.fauna && this.fauna.length > 0 && this.fauna[0].description) ? this.fauna[0].description.replace(/<\/?[^>]+(>|$)/g, '') : ""),
                            "image": ((this.imageFauna && this.imageFauna.length > 0 && this.imageFauna[0] && this.imageFauna[0].id) ? ("https://image.frytolnacestach.cz/storage/fauna/" + this.imageFauna[0].name + ".webp") : "" )
                        }
                    }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - Fauna detail
                    // Fauna
                    const fauna = await $axios.$get(`https://api.frytolnacestach.cz/api/fauna/${params.slug}`)
                    // Image
                    const imageFauna = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${fauna[0].id_image_hero}`)


                    // COMPONENT - Places states
                    // PlacesStates
                    const idsStates = fauna[0].ids_states.map(state => state.id)
                    const placesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    // Images
                    const imagesPlacesStatesID = placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)


                    data = {
                        fauna,
                        imageFauna,
                        placesStates,
                        imagesStates
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - FAUNA DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>