<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero food -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Jídla" perex="Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero food END -->

        <!-- SECTION - cestovatelsky slovnik list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="foods" :images="images" type="jidlo" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oCoverItem :items="null" :images="null" type="jidlo" :skeleton=true v-if="isLoading" />
            </div>
        </section>
        <!-- SECTION - cestovatelsky slovnik list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'JidloIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                foods: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        head: {
            title: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Jídla, kde se co jí?, světová tradiční jídla, informace o jídlech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/jidlo` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async mounted() {
            await this.loadItems()
            this.addScrollListener()
        },

        methods:{
            async loadItems() {
                //start loading
                this.isLoading = true

                //load foods
                const [foodsResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/foods?showType=list&page=${this.page}&items=${this.perPage}`)
                ])
                const { data: foodsData } = foodsResponse

                //load images
                const imagesFoodsIDS = foodsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesFoodsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFoodsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to foods
                    this.foods = this.foods.concat(foodsData)
                } else {
                    // add to placecesData to foods
                    this.foods = this.foods.concat(foodsData)
                } 

                //no more items?
                if (foodsData.length === 0 || foodsData.length < this.perPage) {
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