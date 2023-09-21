<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsFaunaArray" :item="fauna[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -food-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-food">
                        <oHeroItemDetail :item="fauna" :images="imageFauna" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - fauna places -->
                    <div class="t-grid__section -states">
                        <oItemStates :items="placesStates" :itemName="fauna[0].name" text="Kde žije" />
                    </div>
                    <!-- SECTION - fauna places - END -->
                    
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
                        <section class="t-section" v-if="fauna[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(fauna[0].name ? fauna[0].name : '')" :perexWysiwyg="fauna[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
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
        name: 'FaunaSlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oItemStates,
            oHeroItemDetail,
            oInformationBlock
        },

        data() {
            return {
                fauna: this.fauna,
                imageFauna: this.imageFauna,
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
            let metaSeoTags
            if (this.fauna[0].seo_tags && this.fauna[0].seo_tags.length > 0) {
                metaSeoTags = this.fauna[0].seo_tags.map(item => item.tag).join(", ")
            }

            return {
                title: `${this.fauna[0].name ? this.fauna[0].name : 'Fauna'} | Cestovatelský portál Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.fauna[0].description ? this.fauna[0].description.slice(0, this.fauna[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.fauna[0].name}` },
                    { name: 'keywords', content: `${this.fauna[0].name + metaSeoTags + ', Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'}` },
                    { property: 'og:image', content: `${this.fauna[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFauna.find(image => image.id === this.fauna[0].id_image_hero).source + this.imageFauna.find(image => image.id === this.fauna[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.fauna[0].name ? this.fauna[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách` },
                    { hid: 'og:description', content: `${this.fauna[0].description ? this.fauna[0].description.slice(0, this.fauna[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.fauna[0].name ? this.fauna[0].name : 'Fauna'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/fauna/${this.fauna[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
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