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
                        <section class="t-section -px-world my-2">
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
            return {
                title: `${this.flora[0].name ? this.flora[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.flora[0].description ? this.flora[0].description.slice(0, this.flora[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.flora[0].name}` },
                    { name: 'keywords', content: `${this.flora[0].name + ', Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět'}` },
                    { property: 'og:image', content: `${this.flora[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFlora.find(image => image.id === this.flora[0].id_image_hero).source + this.imageFlora.find(image => image.id === this.flora[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.flora[0].name ? this.flora[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách` },
                    { hid: 'og:description', content: `${this.flora[0].description ? this.flora[0].description.slice(0, this.flora[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.flora[0].name ? this.flora[0].name : 'Flóra'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/flora/${this.flora[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
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