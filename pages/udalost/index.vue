<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">
                    
                    <!-- SECTION - Hero event -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Události" perex="Na našem cestovatelském portálu vám přinášíme nejnovější zprávy o zajímavých událostech z České republiky i ze světa. Buďte v obraze o kulturních festivalech, sportovních událostech, uměleckých vystoupeních a dalších akcích, které oživí vaše cestovatelské dobrodružství." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero event END -->

                    <!-- SECTION - Události list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="events" :images="images" type="udalost" />
                            <OrganismsCoverItem :items="null" :images="null" type="udalost" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Události list END -->
                    
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'udalostIndexPage',

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

        setup() {
            let headMeta = reactive({
                title: 'Události | Cestovatelský portál Frytol na cestách',
                description: 'Události které se ve světě konají.',
                keywords: 'udalosti, svetove eventy, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Události | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Události které se ve světě konají.',
                ogUrl: `https://www.frytolnacestach.cz/udalost`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
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

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        },

        methods: {
            async loadItems() {
                //start loading
                this.isLoading = true

                //load events
                const responseEvents = await fetch(`https://api.frytolnacestach.cz/api/events?status=nearby&showType=list&page=${this.page}&items=${this.perPage}`)
                const eventsData = await responseEvents.json() || []
                this.events = this.events.concat(eventsData)

                //load images
                const imagesEventsIDS = eventsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesEventsIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
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

        mounted() {
            this.loadItems()
            this.addScrollListener()
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>