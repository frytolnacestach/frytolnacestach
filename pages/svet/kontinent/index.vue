<template>
    <main class="t-main -green -pt-menu" role="main">
        <div class="t-main__content">

            <!-- SECTION - Hero place type -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <oHeroPlaceType styleType=" -continent" title="Kontinenty" perex="Zveme tě na neuvěřitelnou cestu kolem světa, abys prozkoumal všech 7 kontinentů naší planety. Objevuj fascinující kultury, přírodní divy a tajemná místa včetně odlehlé Antarktidy. Připrav se na dobrodružství, které tě zavede do různých koutů světa a otevře ti dveře k nezapomenutelným zážitkům." />
                </div>
            </section>
            <!-- SECTION - Hero place type END -->

            <!-- SECTION - Place list -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oCoverPlace :places="placesContinents" :images="images" type="kontinent" />
                    <oCoverPlace :places="null" :images="null" type="kontinent" :skeleton=true v-if="isLoading" />
                    <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                        <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                    </div>
                </div>
            </section>
            <!-- SECTION - Place list END -->
            
        </div>
    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetKontinentIndexPage',

        components: {
            oCoverPlace,
            oHeroPlaceType
        },

        data() {
            return {
                images: [],
                placesContinents: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
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
            title = 'Kontinenty | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.'

            // keywolds
            keywords = 'kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet/kontinent`

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
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": title,
                            "description": description,
                            "url": ogUrl,
                            "datePublished": "2024-01-31",
                            "author": {
                                "@type": "Organization",
                                "name": "Frytol na cestách",
                                "url": "https://www.frytolnacestach.cz/"
                            }
                        }
                    }
                ]
            }
        },

        async mounted() {
            await this.loadPlaces()
            this.addScrollListener()
        },

        methods:{
            async loadPlaces() {
                //start loading
                this.isLoading = true

                // Variable
                let placesResponse

                //load places
                placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-continents?showType=list&page=${this.page}&items=${this.perPage}`)
                const { data: placesData } = placesResponse

                //load images
                const imagesPlacesContinentsIDS = placesData.map(placeContinent => placeContinent.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesContinentsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesContinentsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to placesContinent
                    this.placesContinents = this.placesContinents.concat(placesData)
                } else {
                    // add to placecesData to placesContinent
                    this.placesContinents = this.placesContinents.concat(placesData)
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
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>