<template>
    <main class="t-main -bg-world -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsFood :links="mNavBreadcrumbsFoodArray" :food="food[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -food-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-food">
                        <oHeroFoodDetail :food="food" :images="imageFood" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - food places -->
                    <div class="t-grid__section -states">
                        <oFoodStates :places="placesStates" :food="food[0].name" />
                    </div>
                    <!-- SECTION - food places - END -->
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
                        <section class="t-section" v-if="food[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="(food[0].name ? food[0].name : '')" :perexWysiwyg="food[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
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
    import mNavBreadcrumbsFood from '~/components/molecules/mNavBreadcrumbsFood.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oFoodStates from '~/components/organisms/oFoodStates.vue'
    import oHeroFoodDetail from '~/components/organisms/oHeroFoodDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'

    export default {
        name: 'JidloSlugPage',

        components: {
            mNavBreadcrumbsFood,
            oAdGoogleSidebar,
            oFoodStates,
            oHeroFoodDetail,
            oInformationBlock,
        },

        data() {
            return {
                food: this.food,
                placesStates: this.placesStates,
                imageFood: this.imageFood,
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
            return {
                title: `${this.food[0].name ? this.food[0].name : 'Jídlo'} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.food[0].description ? this.food[0].description.slice(0, this.food[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.food[0].name}` },
                    { name: 'keywords', content: `${this.food[0].name + ', Jídla, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět'}` },
                    { property: 'og:image', content: `${this.food[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFood.find(image => image.id === this.food[0].id_image_hero).source + this.imageFood.find(image => image.id === this.food[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.food[0].name ? this.food[0].name : 'Jídlo'}  | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.food[0].description ? this.food[0].description.slice(0, this.food[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.food[0].name ? this.food[0].name : 'Jídlo'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/jidlo/${this.food[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // Načtení jídla přes API podle slug
                    const food = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/food/${params.slug}`)

                    //states Array
                    const idsStates = food[0].ids_states.map(state => state.id)

                    // Načtení státu  podle jeho id
                    const placesStates = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states-array?id=${idsStates.join(',')}`)

                    //images Array
                    const imagesPlacesStatesID = placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')


                    // Načtení informací o obrázku pro jídlo
                    const imageFood = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${food[0].id_image_hero}`)

                    // Načtení informací o obrázku pro státy
                    const imagesStates = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesStatesID.join(',')}`)


                    data = { food, placesStates, imageFood, imagesStates }
                    
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