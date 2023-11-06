<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsFloraArray" :item="flora[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -food-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-food">
                        <oHeroItemDetail :item="flora" :images="imageFlora" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - flora places -->
                    <div class="t-grid__section -states">
                        <oItemStates :items="placesStates" :itemName="flora[0].name" text="Kde roste" />
                    </div>
                    <!-- SECTION - flora places - END -->

                </div>
            </div>
        </section>
        <!-- SECTION - hero + hot info - END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-content-with-ad">
                    
                    <div class="t-grid__section -content">
                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="flora[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(flora[0].name ? flora[0].name : '')" :perexWysiwyg="flora[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->
                    </div>

                    <div class="t-grid__section -ad">
                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world mt-4 mb-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
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
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oItemStates from '~/components/organisms/oItemStates.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'

    export default {
        name: 'FloraSlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oItemStates,
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
            description = `${this.flora[0].description ? this.flora[0].description.slice(0, this.flora[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.flora[0].name}`

            // keywolds
            let metaSeoTags
            if (this.flora[0].seo_tags && this.flora[0].seo_tags.length > 0) {
                metaSeoTags = this.flora[0].seo_tags.map(item => item.tag).join(", ")
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
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - Flora detail
                    // Flora
                    const flora = await $axios.$get(`https://api.frytolnacestach.cz/api/flora/${params.slug}`)
                    // Image
                    const imageFlora = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${flora[0].id_image_hero}`)


                    // COMPONENT - Places states
                    // PlacesStates
                    const idsStates = flora[0].ids_states.map(state => state.id)
                    const placesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    // Images
                    const imagesPlacesStatesID = placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)


                    data = {
                        flora,
                        imageFlora,
                        placesStates,
                        imagesStates
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - FLÓRA DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>