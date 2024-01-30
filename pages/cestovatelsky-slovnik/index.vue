<template>
    <main class="t-main -green -pt-menu" role="main">

        <section class="t-section print-section">
            <!-- SECTION - Hero cestovatelsky slovnik -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <oHero headline="Cestovatelský slovník" perex="Procházej cestovatelský slovník a rozšiřuj svůj cestovatelský slovníček o unikátní výrazy spojené s cestováním. Nabízíme ti pohled do jazyka cestování, abys lépe porozuměl(a) specifickým termínům a zkratkám." modifierCSS=" -green -w640" />
                </div>
            </section>
            <!-- SECTION - Hero cestovatelsky slovnik END -->

            <!-- SECTION - cestovatelsky slovnik list -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oCoverItem :items="travelDictionaries" :images="images" type="cestovatelsky-slovnik" />
                    <oCoverItem :items="null" :images="null" type="cestovatelsky-slovnik" :skeleton=true v-if="isLoading" />
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
        name: 'CestovatelskySlovnikIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                travelDictionaries: [],
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
            title = 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.'

            // keywolds
            keywords = 'Cestovatelský slovník, travel hack, zkratky, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatelsky-slovnik`

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
                this.isLoading = true;

                //load travelDictionaries
                const [travelDictionariesResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/travel-dictionaries?showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: travelDictionariesData } = travelDictionariesResponse;

                //load images
                const imagesTravelDictionariesIDS  = travelDictionariesData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesTravelDictionariesIDS .length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesTravelDictionariesIDS .join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to travelDictionaries
                    this.travelDictionaries = this.travelDictionaries.concat(travelDictionariesData)
                } else {
                    // add to placecesData to travelDictionaries
                    this.travelDictionaries = this.travelDictionaries.concat(travelDictionariesData)
                } 

                //no more items?
                if (travelDictionariesData.length === 0 || travelDictionariesData.length < this.perPage) {
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