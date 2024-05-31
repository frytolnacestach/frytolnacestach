<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero fauna -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Fauna" perex="Ponoř se do světa fauny a objev, kdo s námi sdílí tento planetární domov. S cestovatelským portále Frytol na cestách získáš poutavé informace a tipy, na co si dávat pozor. Vydej se s námi na nezapomenutelnou cestu do světa divokého života!" modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero fauna END -->

                    <!-- SECTION - Fauna list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="faunas" :images="images" type="fauna" v-if="faunas && faunas.length > 0" />
                            <OrganismsCoverItem :items="[]" :images="[]" type="fauna" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Fauna list END -->

                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'FaunaIndexPage',

        data() {
            return {
                faunas: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Fauna co žije ve světě | Cestovatelský portál Frytol na cestách',
                description: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
                keywords: 'Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Fauna co žije ve světě | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/fauna`,
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

                //load faunas
                const responseFaunas = await fetch(`https://api.frytolnacestach.cz/api/faunas?showType=list&page=${this.page}&items=${this.perPage}`)
                const faunasData = await responseFaunas.json() || []
                this.faunas = this.faunas.concat(faunasData)

                //load images
                const imagesFaunasIDS = faunasData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesFaunasIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFaunasIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
                } 

                //no more items?
                if (faunasData.length === 0 || faunasData.length < this.perPage) {
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