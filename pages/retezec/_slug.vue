<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbschainArray" :item="chain[0]" />
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
                                <oHeroItemDetail :item="chain" :images="imageChain" />
                            </div>
                        </section>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="chain[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(chain[0].name ? chain[0].name : '')" :perexWysiwyg="chain[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - chains places -->
                        <div class="t-section" v-if="placesStates">
                            <div class="t-section__inner">
                                <mHeadline :title="'Řetezec ' + chain[0].name + ' se nachází v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                <oCoverStates :items="placesStates" :images="imagesStates" />
                            </div>
                        </div>
                        <!-- SECTION - chains places - END -->
                    </div>


                    <div class="t-grid__section -ad">
                        <!-- SECTION - sidebar information -->
                        <section class="t-section -px-world mt-1 mb-2" v-if="chain[0].information && chain[0].information.length > 0">
                            <div class="t-section__inner">
                                <oSidebarInformation :items="chain[0].information" />
                            </div>
                        </section>
                        <!-- SECTION - sidebar information - END -->
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
    import oSidebarInformation from '~/components/organisms/oSidebarInformation.vue'

    export default {
        name: 'RetezceSlugPage',

        components: {
            mHeadline,
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oCoverStates,
            oHeroItemDetail,
            oInformationBlock,
            oSidebarInformation
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
            description = `${this.chain[0].description ? this.chain[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.chain[0].description.lastIndexOf(' ', 160)) : this.chain[0].name}`

            // keywolds
            let metaSeoTags
            if (this.chain[0].seo_tags && this.chain[0].seo_tags.length > 0) {
                metaSeoTags = this.chain[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.chain[0].name ? this.chain[0].name : '') + metaSeoTags + ', Řetězec, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.chain[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageChain.find(image => image.id === this.chain[0].id_image_hero).source + this.imageChain.find(image => image.id === this.chain[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

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
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": ((this.chain && this.chain.length > 0 && this.chain[0].name) ? this.chain[0].name : ""),
                            "description": ((this.chain && this.chain.length > 0 && this.chain[0].description) ? this.chain[0].description.replace(/<\/?[^>]+(>|$)/g, '') : ""),
                            "image": ((this.imageChain && this.imageChain.length > 0 && this.imageChain[0] && this.imageChain[0].id) ? ("https://image.frytolnacestach.cz/storage/chains/" + this.imageChain[0].name + ".webp") : "" )
                        }
                    }
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