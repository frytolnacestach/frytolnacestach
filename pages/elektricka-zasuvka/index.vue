<template>
    <main class="t-main -green -pt-menu" role="main">

        <section class="t-section print-section">
            <!-- SECTION - Hero elektrické zásuvky -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <oHero headline="Elektrické zásuvky" perex="Plánujete cestu mimo střední Evropu a nevíte, jakou redukci pro svá elektronická zařízení si pořídit? Typy zásuvek a používané normy se dozvíte na cestovatelském portálu Frytol na cestách." modifierCSS=" -green -w600" />
                </div>
            </section>
            <!-- SECTION - Hero elektrické zásuvky END -->

            <!-- SECTION - elektrické zásuvky list -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oCoverItem :items="wallSockets" :images="images" type="elektricka-zasuvka" />
                    <oCoverItem :items="null" :images="null" type="wall-sockets" :skeleton=true v-if="isLoading" />
                    <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                        <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                    </div>
                </div>
            </section>
            <!-- SECTION - elektrické zásuvky list END -->
        </section>

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'ElektrickeZasuvkyIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                wallSockets: [],
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
            title = 'Elektrické zásuvky | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Jaké elektrické zásuvky se kde používají? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.'

            // keywolds
            keywords = 'Elektrické zásuvky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/elektricka-zasuvka`

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

                //load wall-sockets
                const [wallSocketsResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/wall-sockets?showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: wallSocketsData } = wallSocketsResponse

                //load images
                const imagesWallSocketsIDS = wallSocketsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesWallSocketsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesWallSocketsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to wall-sockets
                    this.wallSockets = this.wallSockets.concat(wallSocketsData)
                } else {
                    // add to placecesData to wall-sockets
                    this.wallSockets = this.wallSockets.concat(wallSocketsData)
                } 

                //no more items?
                if (wallSocketsData.length === 0 || wallSocketsData.length < this.perPage) {
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