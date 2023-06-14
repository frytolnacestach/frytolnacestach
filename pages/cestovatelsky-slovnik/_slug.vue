<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsTravelDictionaryArray" :item="travelDictionary[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -food-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-food">
                        <oHeroItemDetail :item="travelDictionary" :images="imageTravelDictionary" />
                    </div>
                    <!-- SECTION - hero END -->
                    
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
                        <section class="t-section" v-if="travelDictionary[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Co je ' + (travelDictionary[0].name ? travelDictionary[0].name : '') + '?'" :perexWysiwyg="travelDictionary[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
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
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'

    export default {
        name: 'CestovatelskySlovnikSlugPage',

        components: {
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oHeroItemDetail,
            oInformationBlock,
        },

        data() {
            return {
                fauna: this.fauna,
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
            return {
                title: `${this.travelDictionary[0].name ? this.travelDictionary[0].name : 'Cestovatelský slovník'} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.travelDictionary[0].description ? this.travelDictionary[0].description.slice(0, this.travelDictionary[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.travelDictionary[0].name}` },
                    { name: 'keywords', content: `${this.travelDictionary[0].name + ', Cestovatelský slovník, co je to ' + this.travelDictionary[0].name + ', travel hacky, plánuj cestu, cestovatelský portál, cestování, svět'}` },
                    { property: 'og:image', content: `${this.travelDictionary[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).source + this.imageTravelDictionary.find(image => image.id === this.travelDictionary[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.travelDictionary[0].name ? this.travelDictionary[0].name : 'Cestovatelský slovník'}  | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.travelDictionary[0].description ? this.travelDictionary[0].description.slice(0, this.travelDictionary[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.travelDictionary[0].name ? this.travelDictionary[0].name : 'Fauna'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/cestovatelsky-slovnik/${this.travelDictionary[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // Načtení fauny přes API podle slug
                    const travelDictionary = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/travel-dictionary/${params.slug}`)

                    // Načtení informací o obrázku pro faunu
                    const imageTravelDictionary = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${travelDictionary[0].id_image_hero}`)

                    data = { travelDictionary, imageTravelDictionary }
                    
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