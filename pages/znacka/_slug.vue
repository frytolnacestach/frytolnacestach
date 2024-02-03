<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsBrandArray" :item="brand[0]" />
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
                                <oHeroItemDetail :item="brand" :images="imageBrand" />
                            </div>
                        </section>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="brand[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(brand[0].name ? brand[0].name : '')" :perexWysiwyg="brand[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - brands places -->
                        <div class="t-section" v-if="placesStates">
                            <div class="t-section__inner">
                                <mHeadline :title="'Výrobek ' + brand[0].name + ' se vyrábí v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                <oCoverStates :items="placesStates" :images="imagesStates" />
                            </div>
                        </div>
                        <!-- SECTION - brands places - END -->
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
        name: 'brandSlugPage',

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
                brand: this.brand,
                imageBrand: this.imageBrand,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsBrandArray: [
                    {
                        id: 1,
                        name: "Značka",
                        url: "/znacka",
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
            title = `${this.brand[0].name ? this.brand[0].name : 'brand'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.brand[0].description ? this.brand[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.brand[0].description.lastIndexOf(' ', 160)) : this.brand[0].name}`

            // keywolds
            let metaSeoTags
            if (this.brand[0].seo_tags && this.brand[0].seo_tags.length > 0) {
                metaSeoTags = this.brand[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.brand[0].name ? this.brand[0].name : '') + metaSeoTags + ', brand, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.brand[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageBrand.find(image => image.id === this.brand[0].id_image_hero).source + this.imageBrand.find(image => image.id === this.brand[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/brand/${this.brand[0].slug}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": ((this.brand && this.brand.length > 0 && this.brand[0].name) ? this.brand[0].name : ""),
                            "description": ((this.brand && this.brand.length > 0 && this.brand[0].description) ? this.brand[0].description.replace(/<\/?[^>]+(>|$)/g, '') : ""),
                            "image": ((this.imageBrand && this.imageBrand.length > 0 && this.imageBrand[0] && this.imageBrand[0].id) ? ("https://image.frytolnacestach.cz/storage/brands/" + this.imageBrand[0].name + ".webp") : "" )
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
                    // PAGE - Brand detail
                    // Brand
                    const brand = await $axios.$get(`https://api.frytolnacestach.cz/api/brand/${params.slug}`)
                    // Image
                    const imageBrand = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${brand[0].id_image_hero}`)


                    // COMPONENT - Places states
                    // States
                    const idsStates = brand[0].ids_states.map(state => state.id)
                    const placesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    // Images
                    const imagesPlacesStatesID = placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)


                    data = {
                        brand,
                        placesStates,
                        imageBrand,
                        imagesStates
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - BRAND DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>