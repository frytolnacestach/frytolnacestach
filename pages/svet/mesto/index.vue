<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero place type -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <OrganismsHeroPlaceType styleType=" -city" :title="headlineFilter" perex="Města, jsou místem, kde se setkávají historie, kultura a moderní doba. Na naší planetě, je podle velmi nepřesných zdrojů více než tři a půl milionu obcí, na našem cestovatelském portálu jich najdeš přibližně 2500 měst, z nichž každé má svůj unikátní příběh a kouzlo." />
                    </div>
                </section>
                <!-- SECTION - Hero place type END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - Place list -->
                <section class="t-section -bg-world -p0">
                    <div class="t-section__inner">
                        <OrganismsCoverPlace :places="placesCities" :placesParent="placesParent" :showPrename="true" :images="images" type="mesto" />
                        <OrganismsCoverPlace :places="null" :images="null" type="mesto" :skeleton=true v-if="isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - Place list END -->
                
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'SvetMestoIndexPage',

        data() {
            return {
                headline: 'Města',
                headlineFilter: 'Města',
                filterPlace: '',
                filterPlaceName: '',
                images: [],
                placesCities: [],
                placesParent: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: '',
                description: 'Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.',
                keywords: 'města, největší města, nejznámější města, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: '',
                ogDescription: 'Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.',
                ogUrl: `https://www.frytolnacestach.cz/svet/mesto`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headJsonld = reactive({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": headMeta.title,
                "description": headMeta.description,
                "url": headMeta.ogUrl,
                "datePublished": "2024-01-31",
                "author": {
                    "@type": "Organization",
                    "name": "Frytol na cestách",
                    "url": "https://www.frytolnacestach.cz/"
                }
            })

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

            useJsonld(() => headJsonld)

            return {
                headMeta,
                headLink,
                headJsonld
            }
        },

        head() {
            // title
            title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`
        },

        async mounted() {
            const filterIDstate = this.$route.query.filterIDstate
            if (!filterIDstate) {
                await this.loadPlaces()
            }
            this.addScrollListener()
        },

        methods: {
            async loadPlaces(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let responsePlaces

                //load places
                if (this.filterPlace !== null) {
                    responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-cities?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-cities?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const placesData = await responsePlaces.json()

                //load places parent
                let placesParentIDS = placesData.map(placeCity => placeCity.id_state).filter(id => id !== undefined && id !== null && id !== '')
                placesParentIDS = [...new Set(placesParentIDS)]
                const [placesParentResponse] = await Promise.all([
                    await fetch(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${placesParentIDS.join(',')}`)
                ])
                const placesParentData = await placesParentResponse.json()
                this.placesParent = this.placesParent.concat(placesParentData)

                //load images
                const imagesPlacesCitiesIDS = placesData.map(placeCity => placeCity.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesCitiesIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesIDS.join(',')}`)
                    const imagesData = await responseImages.json()
                    this.images = this.images.concat(imagesData)

                    // add to placecesData to placesCities
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesCities = placesData
                    } else {
                        this.placesCities = this.placesCities.concat(placesData)
                    }
                } else {
                    // add to placecesData to placesCities
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesCities = placesData
                    } else {
                        this.placesCities = this.placesCities.concat(placesData)
                    }
                } 

                //no more items?
                if (placesData.length === 0 || placesData.length < this.perPage) {
                    this.noMoreItems = true
                }

                //end loading
                this.isLoading = false
            },

            addScrollListener() {
                window.addEventListener('scroll', this.handleScroll)
            },

            removeScrollListener() {
                window.removeEventListener('scroll', this.handleScroll)
            },

            loadMoreItems() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return
                }
                // loading more items
                this.page++
                this.loadPlaces()
            },

            updateHeadline() {
                if (this.filterPlaceName) {
                    this.headlineFilter = this.headline + ' státu ' + this.filterPlaceName
                } else {
                    this.headlineFilter = this.headline
                }
            },

            handleScroll() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return
                }

                // Document for scroll point
                const windowHeight = window.innerHeight
                const documentHeight = document.documentElement.scrollHeight
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

                // Footer height
                const tFooterElement = document.querySelector('.t-footer')
                const tFooterHeight = tFooterElement.offsetHeight

                // Point for loading
                if (scrollTop + windowHeight >= documentHeight - tFooterHeight) {
                    // loading more items
                    this.page++
                    this.loadPlaces()
                }
            },

            // filter set update
            filterUpdate(newValue) {
                this.filterPlace = newValue.id
                this.filterPlaceName = newValue.name
                this.images = []
                this.placesCities = []
                this.placesParent = []
                this.isLoading = false
                this.noMoreItems = false
                this.page = 1
                this.perPage = 20
                this.loadPlaces(true)
                this.updateHeadline()
            }
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>