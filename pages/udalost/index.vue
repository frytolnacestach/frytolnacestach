<template>
    <main class="t-main -green -pt-menu" role="main">

        <section class="t-section print-section">
            <!-- SECTION - Hero event -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <oHero headline="Události" perex="Na našem cestovatelském portálu vám přinášíme nejnovější zprávy o zajímavých událostech z České republiky i ze světa. Buďte v obraze o kulturních festivalech, sportovních událostech, uměleckých vystoupeních a dalších akcích, které oživí vaše cestovatelské dobrodružství." modifierCSS=" -green -w640" />
                </div>
            </section>
            <!-- SECTION - Hero event END -->

            <!-- SECTION - cestovatelsky slovnik list -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oCoverItem :items="events" :images="images" type="udalost" />
                    <oCoverItem :items="null" :images="null" type="udalost" :skeleton=true v-if="isLoading" />
                    <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                        <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                    </div>
                </div>
            </section>
            <!-- SECTION - cestovatelsky slovnik list END -->
        </section>

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'udalostIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                events: [],
                images: [],
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
            title = 'Události | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Události které se ve světě konají.'

            // keywolds
            keywords = 'udalosti, svetove eventy, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/udalost`

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
            await this.loadItems()
            this.addScrollListener()
        },

        methods:{
            async loadItems() {
                //start loading
                this.isLoading = true

                //load events
                const [eventsResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/events?status=nearby&showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: eventsData } = eventsResponse

                //load images
                const imagesEventsIDS = eventsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesEventsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to events
                    this.events = this.events.concat(eventsData)
                } else {
                    // add to placecesData to events
                    this.events = this.events.concat(eventsData)
                } 

                //no more items?
                if (eventsData.length === 0 || eventsData.length < this.perPage) {
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
                this.loadItems()
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
                    this.loadItems()
                }
            }
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>