<template>
    <main class="t-main -green -pt-menu" role="main">

        <section class="t-section print-section">
            <!-- SECTION - Hero řetězce -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <oHero headline="Řetězce" perex="Ty nejznámější a největší řetezce na světě, V jaké zemi je najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
                </div>
            </section>
            <!-- SECTION - Hero řetězce END -->

            <!-- SECTION - řetězce list -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oCoverItem :items="chains" :images="images" type="retezec" />
                    <oCoverItem :items="null" :images="null" type="chains" :skeleton=true v-if="isLoading" />
                    <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                        <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                    </div>
                </div>
            </section>
            <!-- SECTION - řetězce END -->
        </section>

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'RetezceIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                chains: [],
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
            title = 'Řetězce | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Jaké Řetězce kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.'

            // keywolds
            keywords = 'Řetězce, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/retezec`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
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

                //load chains
                const [chainsResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/chains?showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: chainsData } = chainsResponse

                //load images
                const imagesChainsIDS = chainsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesChainsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesChainsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to chains
                    this.chains = this.chains.concat(chainsData)
                } else {
                    // add to placecesData to chains
                    this.chains = this.chains.concat(chainsData)
                } 

                //no more items?
                if (chainsData.length === 0 || chainsData.length < this.perPage) {
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