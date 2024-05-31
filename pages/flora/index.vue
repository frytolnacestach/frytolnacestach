<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero flora -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Flóra" perex="Otevři okno do barevného světa flory a objev, jaké rostliny ozdobují naši planetu. S cestovatelským portále Frytol na cestách získáš zajímavé informace a tipy, jak si vychutnat krásy rostlinného života. Připoj se k nám na nezapomenutelnou cestu do světa rozmanité flóry!" modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero flora END -->

                    <!-- SECTION - Flora list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="floras" :images="images" type="flora" v-if="floras && floras.length > 0" />
                            <OrganismsCoverItem :items="[]" :images="[]" type="flora" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Flora list END -->

                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'FloraIndexPage',

        data() {
            return {
                floras: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Flóra co roste ve světě | Frytol na cestách',
                description: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
                keywords: 'Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Flóra co roste ve světě | Frytol na cestách',
                ogDescription: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/flora`,
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

                //load floras
                const responseFloras = await fetch(`https://api.frytolnacestach.cz/api/floras?showType=list&page=${this.page}&items=${this.perPage}`)
                const florasData = await responseFloras.json() || []
                this.floras = this.floras.concat(florasData)

                //load images
                const imagesFlorasIDS = florasData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesFlorasIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFlorasIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
                }

                //no more items?
                if (florasData.length === 0 || florasData.length < this.perPage) {
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
            },
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