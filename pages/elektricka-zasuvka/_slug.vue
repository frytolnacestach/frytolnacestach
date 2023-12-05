<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsWallSocketsArray" :item="wallSockets[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -food-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-food">
                        <oHeroItemDetail :item="wallSockets" :images="imageWallSockets" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - wall-sockets places -->
                    <div class="t-grid__section -states">
                        <oItemStates :items="placesStates" :itemName="wallSockets[0].name" text="Kde se používá" />
                    </div>
                    <!-- SECTION - wall-sockets places - END -->
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
                        <section class="t-section" v-if="wallSockets[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(wallSockets[0].name ? wallSockets[0].name : '')" :perexWysiwyg="wallSockets[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->
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
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oItemStates from '~/components/organisms/oItemStates.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'

    export default {
        name: 'ElektrickeZasuvkySlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oItemStates,
            oHeroItemDetail,
            oInformationBlock
        },

        data() {
            return {
                wallSockets: this.wallSockets,
                imageWallSockets: this.imageWallSockets,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsWallSocketsArray: [
                    {
                        id: 1,
                        name: "Elektricka zásuvka",
                        url: "/elektricka-zasuvka",
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
            title = `${this.wallSockets[0].name ? this.wallSockets[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.wallSockets[0].description ? this.wallSockets[0].description.slice(0, this.wallSockets[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.wallSockets[0].name}`

            // keywolds
            let metaSeoTags
            if (this.wallSockets[0].seo_tags && this.wallSockets[0].seo_tags.length > 0) {
                metaSeoTags = this.wallSockets[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.wallSockets[0].name ? this.wallSockets[0].name : '') + metaSeoTags + ', Elektrická zásuvka, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.wallSockets[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageWallSockets.find(image => image.id === this.wallSockets[0].id_image_hero).source + this.imageWallSockets.find(image => image.id === this.wallSockets[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/elektricka-zasuvka/${this.wallSockets[0].slug}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // PAGE - wall-sockets detail
                    // wall-sockets
                    const wallSockets = await $axios.$get(`https://api.frytolnacestach.cz/api/wall-socket/${params.slug}`)
                    // Image
                    const imageWallSockets = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${wallSockets[0].id_image_hero}`)


                    // COMPONENT - Places states
                    // States
                    let idsStates
                    if (wallSockets[0].ids_states && Array.isArray(wallSockets[0].ids_states) && wallSockets[0].ids_states.length !== 0) {
                        idsStates = wallSockets[0].ids_states.map(state => state.id)
                    } else {
                        idsStates = null
                    }
                    let placesStates
                    if (idsStates) {
                        placesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    } else {
                        placesStates = null
                    }
                    // Images
                    let imagesPlacesStatesID
                    if (placesStates) {
                        imagesPlacesStatesID = placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    }
                    let imagesStates
                    if ( imagesPlacesStatesID) {
                        imagesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                    } else {
                        imagesStates = null
                    }


                    data = {
                        wallSockets,
                        placesStates,
                        imageWallSockets,
                        imagesStates
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - ELEKTRICKÁ ZÁSUVKA DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>