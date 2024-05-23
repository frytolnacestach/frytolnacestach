
<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsFoodArray" :item="food[0]" v-if="food && food.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="food" :images="imageFood" v-if="food && food.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="food && food.length > 0 && food[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="(food[0].name ? food[0].name : '')" :perexWysiwyg="food[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - Ingredients -->
                                <section class="t-section my-4 py-1" v-if="food && food.length > 0 && food[0].ingredients && food[0].ingredients.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Ingredience" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                        <oIngredients :items="food[0].ingredients" />
                                    </div>
                                </section>
                                <!-- SECTION - Ingredients END -->

                                <!-- SECTION - Recipe -->
                                <section class="t-section my-4 py-1" v-if="food && food.length > 0 && food[0].recipe && food[0].recipe.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Recept" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                        <oRecipe :items="food[0].recipe" />
                                    </div>
                                </section>
                                <!-- SECTION - Recipe END -->

                                <!-- SECTION - foods places -->
                                <div class="t-section" v-if="food && food.length > 0 && placesStates && placesStates.length > 0">
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
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oCoverStates from '~/components/organisms/oCoverStates.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oIngredients from '~/components/organisms/oIngredients.vue'
    import oRecipe from '~/components/organisms/oRecipe.vue'

    export default {
        name: 'JidloSlugPage',

        components: {
            mHeadline,
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oCoverStates,
            oHeroItemDetail,
            oInformationBlock,
            oIngredients,
            oRecipe
        },

        data() {
            return {
                food: [],
                imageFood: [],
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

        setup() {
            let headMeta = reactive({
                title: 'Detail jídla | Cestovatelský portál Frytol na cestách',
                description: 'Popis detailu jídla',
                keywords: 'Jídlo, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Detail jídla | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Popis detailu jídla',
                ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "Recipe",
                "name": headMeta.title,
                "description": headMeta.description,
                "image": "https://image.frytolnacestach.cz/storage/main/og-default.png",
                "recipeIngredient": [],
                "recipeInstructions": []
            })

            watch(headMeta, (newMeta) => {
                useHead({
                    title: headMeta.title,
                    meta: [
                        { name: 'description', content: headMeta.description },
                        { name: 'keywords', content: headMeta.keywords },
                        { property: 'og:image', content: headMeta.ogImage },
                        { property: 'og:title', content: headMeta.ogTitle },
                        { property: 'og:description', content: headMeta.ogDescription },
                        { property: 'og:url', content: headMeta.ogUrl },
                        { property: 'og:type', content: headMeta.ogType }
                    ],
                    link: headLink
                })
            }, { deep: true })

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        },

        methods: {
            async fetchData() {
                const route = useRoute()

                // PAGE - Food detail
                // Food
                const responseFood = await fetch(`https://api.frytolnacestach.cz/api/food/${route.params.slug}`)
                this.food = await responseFood.json() || []
                // Image
                if (this.food && this.food.length > 0) {
                    const responseImageFood = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.food[0].id_image_hero}`)
                    this.imageFood = await responseImageFood.json() || []
                }

                // COMPONENT - Places states
                if (this.food && this.food.length > 0) {
                    // PlacesStates
                    const idsStates = this.food[0].ids_states.map(state => state.id)
                    const responsePlacesStates = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                    this.placesStates = await responsePlacesStates.json() || []
                    // Images
                    const imagesPlacesStatesID = this.placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    const responseImagesStates = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                    this.imagesStates = await responseImagesStates.json() || []
                }

                // HEAD
                if (this.food && this.food.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.food[0].name ? this.food[0].name : 'Jídlo'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.food[0].description ? this.food[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.food[0].description.lastIndexOf(' ', 160)) : this.food[0].name}`
                    if (this.food[0].seo_tags && this.food[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.food[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.food[0].name ? this.food[0].name : '') + metaSeoTags + ', Jídla, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = (this.food[0].name ? this.food[0].name : '') + ', Jídla, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.food[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageFood.find(image => image.id === this.food[0].id_image_hero).source + this.imageFood.find(image => image.id === this.food[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.food[0].name ? this.food[0].name : 'Jídlo'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.food[0].description ? this.food[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.food[0].description.lastIndexOf(' ', 160)) : this.food[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/jidlo/${this.food[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = ((this.food[0].name) ? this.food[0].name : "")
                    this.headScript.description = ((this.food[0].description) ? this.food[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageFood[0].id) ? ("https://image.frytolnacestach.cz/storage/foods/" + this.imageFood[0].name + ".webp") : "https://image.frytolnacestach.cz/storage/main/og-default.png" )
                    this.headScript.recipeIngredient = ((this.food[0].ingredients && this.food[0].ingredients.length > 0) ? this.food[0].ingredients : "")
                    this.headScript.recipeInstructions = ((this.food[0].recipe && this.food[0].recipe.length > 0) ? this.food[0].recipe : "")
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    }
</script>