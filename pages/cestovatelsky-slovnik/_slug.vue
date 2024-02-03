<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0 print-section">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsTravelDictionaryArray" :item="travelDictionary[0]" />
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
                                <oHeroItemDetail :item="travelDictionary" :images="imageTravelDictionary" />
                            </div>
                        </section>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section print-section" v-if="travelDictionary[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Co je ' + (travelDictionary[0].name ? travelDictionary[0].name : '') + '?'" :perexWysiwyg="travelDictionary[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->
                    </div>


                    <div class="t-grid__section -ad">
                        <!-- SECTION - Events - sidebar -->
                        <oSidebarListTravelDictionary :IDTravelDictionary="this.travelDictionary[0].id" />
                        <!-- SECTION - Events - sidebar - END -->

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
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oSidebarListTravelDictionary from '~/components/organisms/oSidebarListTravelDictionary.vue'

    export default {
        name: 'CestovatelskySlovnikSlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oHeroItemDetail,
            oInformationBlock,
            oSidebarListTravelDictionary
        },

        data() {
            return {
                travelDictionary: [],
                imageTravelDictionary: this.imageTravelDictionary,
                mNavBreadcrumbsTravelDictionaryArray: [
                    {
                        id: 1,
                        name: "Cestovatelský slovník",
                        url: "/cestovatelsky-slovnik",
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
            title = `${this.travelDictionary[0].name ? this.travelDictionary[0].name : 'Cestovatelský slovník'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.travelDictionary[0].description ? this.travelDictionary[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.travelDictionary[0].description.lastIndexOf(' ', 160)) : this.travelDictionary[0].name}`

            // keywolds
            let metaSeoTags
            if (this.travelDictionary[0].seo_tags && this.travelDictionary[0].seo_tags.length > 0) {
                metaSeoTags = this.travelDictionary[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.travelDictionary[0].name ? this.travelDictionary[0].name : '') + metaSeoTags + ', Cestovatelský slovník, co je to ' + this.travelDictionary[0].name + ', travel hacky, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.travelDictionary[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).source + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatelsky-slovnik/${this.travelDictionary[0].slug}`

            // ogType
            ogType = 'website'

            // script
            let jsonldTravelDictionary
            if (this.travelDictionary && this.travelDictionary.length > 0 && this.imageTravelDictionary !== null) {
                jsonldTravelDictionary = {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "name": (this.travelDictionary[0].name ? this.travelDictionary[0].name : ""),
                        "image": (this.imageTravelDictionary && this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero)) ? ("https://image.frytolnacestach.cz/storage" + (this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).source + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).name) + ".webp") : "",
                        "url": 'https://frytolnacestach.cz' + `/cestovatelsky-slovnik/${this.travelDictionary[0].slug}`,
                        "description": (this.travelDictionary[0].description ? this.travelDictionary[0].description.replace(/<\/?[^>]+(>|$)/g, '') : ""),
                    }
                }
            } else {
                jsonldTravelDictionary = []
            }

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
                script: [jsonldTravelDictionary],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - TravelDictionaries detail
                    // TravelDictionaries
                    const travelDictionary = await $axios.$get(`https://api.frytolnacestach.cz/api/travel-dictionary/${params.slug}`)
                    // Images
                    const imageTravelDictionary = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${travelDictionary[0].id_image_hero}`)


                    data = {
                        travelDictionary,
                        imageTravelDictionary
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - CESTOVATELSKÝ SLOVNÍK DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>