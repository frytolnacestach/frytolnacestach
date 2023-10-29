<template>
    <main class="t-main -bg-world -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbschainArray" :item="chain[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -food-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-food">
                        <oHeroItemDetail :item="chain" :images="imageChain" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - Chain places -->
                    <div class="t-grid__section -states">
                        <oItemStates :items="placesStates" :itemName="chain[0].name" text="Kde se nachází" />
                    </div>
                    <!-- SECTION - Chain places - END -->
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
                        <section class="t-section" v-if="chain[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(chain[0].name ? chain[0].name : '')" :perexWysiwyg="chain[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
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
        name: 'RetezceSlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oItemStates,
            oHeroItemDetail,
            oInformationBlock
        },

        data() {
            return {
                chain: this.chain,
                imageChain: this.imageChain,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbschainArray: [
                    {
                        id: 1,
                        name: "Řetězec",
                        url: "/retezec",
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
            title = `${this.chain[0].name ? this.chain[0].name : 'Řetězec'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.chain[0].description ? this.chain[0].description.slice(0, this.chain[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.chain[0].name}`

            // keywolds
            let metaSeoTags
            if (this.chain[0].seo_tags && this.chain[0].seo_tags.length > 0) {
                metaSeoTags = this.chain[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.chain[0].name ? this.chain[0].name : '') + metaSeoTags + ', Řetězec, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.chain[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagechain.find(image => image.id === this.chain[0].id_image_hero).source + this.imagechain.find(image => image.id === this.chain[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/retezec/${this.chain[0].slug}`

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
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // PAGE - chain detail
                    // chain
                    const chain = await $axios.$get(`https://api.frytolnacestach.cz/api/chain/${params.slug}`)
                    // Image
                    const imageChain = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${chain[0].id_image_hero}`)


                    // COMPONENT - Places states
                    // States
                    let idsStates
                    if (chain[0].ids_states && Array.isArray(chain[0].ids_states) && chain[0].ids_states.length !== 0) {
                        idsStates = chain[0].ids_states.map(state => state.id)
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
                        chain,
                        placesStates,
                        imageChain,
                        imagesStates
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - ŘETĚZEC DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>