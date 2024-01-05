<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsFoodArray" :item="food[0]" />
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
                                <oHeroItemDetail :item="food" :images="imageFood" />
                            </div>
                        </section>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="food[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(food[0].name ? food[0].name : '')" :perexWysiwyg="food[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - foods places -->
                        <div class="t-section" v-if="placesStates">
                            <div class="t-section__inner">
                                <mHeadline :title="'Jídlo ' + food[0].name + ' se jí v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                <oCoverStates :items="placesStates" :images="imagesStates" text="Kde se používá" />
                            </div>
                        </div>
                        <!-- SECTION - foods places - END -->
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
        name: 'JidloSlugPage',

        components: {
            mHeadline,
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oCoverStates,
            oHeroItemDetail,
            oInformationBlock,
        },

        data() {
            return {
                food: this.food,
                imageFood: this.imageFood,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsFoodArray: [
                    {
                        id: 1,
                        name: "Jídla",
                        url: "/jidlo",
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
            title = `${this.food[0].name ? this.food[0].name : 'Jídlo'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.food[0].description ? this.food[0].description.slice(0, this.food[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.food[0].name}`

            // keywolds
            let metaSeoTags
            if (this.food[0].seo_tags && this.food[0].seo_tags.length > 0) {
                metaSeoTags = this.food[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.food[0].name ? this.food[0].name : '') + metaSeoTags + ', Jídla, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = `${this.food[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFood.find(image => image.id === this.food[0].id_image_hero).source + this.imageFood.find(image => image.id === this.food[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/jidlo/${this.food[0].slug}`

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
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - Food detail
                    // Food
                    const food = await $axios.$get(`https://api.frytolnacestach.cz/api/food/${params.slug}`)
                    // Image
                    const imageFood = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${food[0].id_image_hero}`)


                    // COMPONENT - Places states
                    // PlacesStates
                    const idsStates = food[0].ids_states.map(state => state.id)
                    const placesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    // Images
                    const imagesPlacesStatesID = placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesStates = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)


                    data = {
                        food,
                        imageFood,
                        placesStates,
                        imagesStates
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - JÍDLO DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>