<template>
    <main class="t-main -green -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - Buttons -->
        <section class="t-section -px-world mt-1 -p0 hidden-print" v-if="isMobile">
            <div class="t-section__inner">
                <oSwitchHero :show-hero.sync="showHero" />
            </div>
        </section>
        <!-- SECTION - Buttons END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-place" v-show="!isMobile || (isMobile && showHero)">
                        <oHeroPlace :title="place[0].name" :preTitle="preTitle" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place[0]" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - map -->
                    <div class="t-grid__section -map" v-show="!isMobile || (isMobile && !showHero)">
                        <oMapGoogle :place="place" />
                    </div>
                    <!-- SECTION - map - END -->

                    <!-- SECTION - hot info -->
                    <div class="t-grid__section -hot-info-hero">
                        <oHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3"/>
                    </div>
                    <!-- SECTION - hot info - END -->

                </div>
            </div>
        </section>
        <!-- SECTION - hero + hot info - END -->

        <!-- SECTION - Alerts -->
        <section class="t-section -px-world-big -p0" v-if="place[0].alerts">
            <div class="t-section__inner">
                <oAlerts :alerts="place[0].alerts" />
            </div>
        </section>
        <!-- SECTION - Alerts END -->
    
        <!-- SECTION - Nav place -->
        <section class="t-section -px-world-big -p0" v-if="place[0]">
            <div class="t-section__inner">
                <mNavPlace :tabs="tabs" :activeTab="activeTab" :place="place[0]" />
            </div>
        </section>
        <!-- SECTION - Nav place END -->

        <div class="t-main -tab" v-if="place[0]">
            <!-- SECTION -->
            <section class="t-section -px-world -p0">
                <div class="t-section__inner">
                    <div class="t-grid -place-main-with-aside">
                        <div class="t-grid__section -main">

                            <!-- SECTION - information by ChatGPT -->
                            <section class="t-section mt-2" v-if="place[0].information_chatgpt && !place[0].information_author?.length > 0">
                                <div class="t-section__inner">
                                    <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                </div>
                            </section>
                            <!-- SECTION - information by ChatGPT END -->

                            <!-- SECTION - information by Author -->
                            <section class="t-section" v-if="place[0].information_author?.length > 0">
                                <div class="t-section__inner">
                                    <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" authorName="Michal Fryč (frytolnacestach)" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" />
                                </div>
                            </section>
                            <!-- SECTION - information by Author END -->

                            <!-- SECTION - Place teaser -->
                            <section class="t-section my-2 -p0 print-section" v-if="place[0].id_city_main">
                                <div class="t-section__inner">
                                    <oPlaceTeaser :headline="'Hlavním městem ve státě ' + place[0].name + ' je ' + placeCityMain[0].name" :place="placeCityMain" :image="imageCityMain" type="mesto" />
                                </div>
                            </section>
                            <!-- SECTION - Place teaser END -->

                            <!-- SECTION - Facts place -->
                            <section class="t-section my-4 py-1 -p0 print-section" v-if="place[0].facts_place && place[0].facts_place.length > 0">
                                <div class="t-section__inner">
                                    <mHeadline title="Fakta o státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                    <oFactsPlace :items="place[0].facts_place" />
                                </div>
                            </section>
                            <!-- SECTION - Facts place END -->

                            <!-- SECTION - Neighboring Place list -->
                            <section class="t-section my-4 py-1 -p0 print-section" v-if="placesStatesNeighboring">
                                <div class="t-section__inner">
                                    <mHeadline title="Sousední státy státu " :titleValue="place[0].name" perex="Přehled o zemích, které sdílí pevninskou či mostní hranici s touto destinací, představujeme kulturu, zajímavosti a potenciální cestovatelská dobrodružství." styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                    <oCoverNeighboring :items="placesStatesNeighboring" :images="imagesStatesNeighboring" />
                                </div>
                            </section>
                            <!-- SECTION - Neighboring Place list END -->
                            
                            <!-- SECTION - Food -->
                            <oCoverItemState type="jidlo" title="Tradiční jídla ve státě" perex="Ponořte se do bohaté tradice a ochutnejte neodolatelná tradiční jídla, která vám přiblíží autentickou chuť a atmosféru této fascinující destinace." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                            <!-- SECTION - Food END -->

                            <!-- SECTION - Fauna list -->
                            <oCoverItemState type="fauna" title="Nebezpečná Fauna ve státě" perex="Představujeme vám nebezpečná zvířata, která obývají tuto oblast, a poodhalujeme výjimečné vlastnosti a zajímavosti o nich." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                            <!-- SECTION - Fauna list END -->

                            <!-- SECTION - Flora list -->
                            <oCoverItemState type="flora" title="Nebezpečná Flóra ve státě" perex="Přehled o rostlinách, které ukrývají svou sílu a nebezpečí. Objevte tajemství jedinečných rostlinných druhů, které tvoří fascinující a zároveň riskantní součást tamní přírody." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                            <!-- SECTION - Flora list END -->

                            <!-- SECTION - Značky list -->
                            <oCoverItemState type="znacka" title="Značky a výrobky ze státu" perex="Zajímavý přehled kvalitních produktů, které vystihují místní charakter a tradici." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                            <!-- SECTION - Značky list END -->

                            <!-- SECTION - Elektrické zásuvky list -->
                            <oCoverTitleItemState type="elektricka-zasuvka" title="Elektrické zásuvky použivané ve státě" perex="Poskytujeme vám informace pro pohodlné připojení a dobíjení vašich zařízení během pobytu, abyste byli připraveni na místní elektrickou infrastrukturu." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                            <!-- SECTION - Elektrické zásuvky END -->

                            <!-- SECTION - Řetezce list -->
                            <oCoverItemState type="retezec" title="Řetězce ve státě" perex="Představujeme vám přehled nadnárodních i místních řetězců, abyste mohli plánovat své nákupy a stravování s lehkostí a přizpůsobit je svým preferencím." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                            <!-- SECTION - Řetezce list END -->

                            <!-- SECTION - Review -->
                            <oReviewItem :account="account" :IDplace="place[0].id" type="state" v-if="place[0].id" />
                            <!-- SECTION - Review END -->
                    
                        </div>

                        <div class="t-grid__section -aside-place-status">
                            <!-- SECTION - Visited button - sidebar -->
                            <section class="t-section -px-world my-1">
                                <div class="t-section__inner">
                                    <oVisitedButton :account="account" :place="this.place[0].id" placeType="state" />
                                </div>
                            </section>
                            <!-- SECTION - Visited button - sidebar - END -->
                        </div>
                        <div class="t-grid__section -aside-content">
                            <!-- SECTION - Account banner - sidebar -->
                            <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                <div class="t-section__inner">
                                    <oAccountBanner :account="account" styleThema=" -green" />
                                </div>
                            </section>
                            <!-- SECTION - Account banner - sidebar END -->

                            <!-- SECTION - time - sidebar -->
                            <section class="t-section -px-world my-1">
                                <div class="t-section__inner">
                                    <oSidebarTime :mpz="this.place[0].mpz" />
                                </div>
                            </section>
                            <!-- SECTION - time - sidebar - END -->

                            <section class="t-section-print">
                                <!-- SECTION - Měna -->
                                <section class="t-section -px-world my-1" v-if="place[0].currency_name">
                                    <div class="t-section__inner">
                                        <oBlockItem title="Měna" :subtitle="place[0].currency_name" :perexWysiwyg="place[0].currency_code ? place[0].currency_code : ''" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - Měna END -->

                                <!-- SECTION - MPZ -->
                                <section class="t-section -px-world my-1" v-if="place[0].mpz">
                                    <div class="t-section__inner">
                                        <oBlockItem title="MPZ" subtitle="Mezinárodní poznávací značka" :perexWysiwyg="place[0].mpz" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - MPZ END -->

                                <!-- SECTION - TLD -->
                                <section class="t-section -px-world my-1" v-if="place[0].tld">
                                    <div class="t-section__inner">
                                        <oBlockItem title="TLD" subtitle="Národní internetová doména" :perexWysiwyg="place[0].tld" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - TLD END -->
                            </section>

                            <!-- SECTION - Events - sidebar -->
                            <oSidebarList :place="this.place[0].id" type="state" />
                            <!-- SECTION - Events - sidebar - END -->
                        </div>
                        <div class="t-grid__section -aside-ad">
                            <!-- SECTION - ad-google - sidebar -->
                            <section class="t-section -px-world mt-4 mb-2">
                                <div class="t-section__inner">
                                    <oAdGoogleSidebar styleThema=" -green" />
                                </div>
                            </section>
                            <!-- SECTION - ad-google - sidebar - END -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- SECTION END -->

            <!-- SECTION -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <div class="t-grid -world-ful">
                        <div class="t-grid__section -content">

                            <!-- SECTION - města - Biggest -->
                            <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="placesCities[0]">
                                <div class="t-section__inner">
                                    <mHeadline title="Největší města ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                    <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" importance="biggest" />
                                </div>
                            </section>
                            <!-- SECTION - města - Biggest - END -->

                            <!-- SECTION - videos -->
                            <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place[0] && videos.length !== 0">
                                <div class="t-section__inner">
                                    <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                    <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                    <oVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                    <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                        <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                    </div>
                                </div>
                            </section>
                            <!-- SECTION - videos END -->

                            <!-- SECTION - města - menší -->
                            <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="hasCitiesToShow">
                                <div class="t-section__inner">
                                    <mHeadline title="Další města a obce ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                    <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" :importance=null />
                                </div>
                            </section>
                            <!-- SECTION - města - menší - END -->

                            <!-- SECTION - articles -->
                            <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place[0] && posts.length !== 0">
                                <div class="t-section__inner">
                                    <mHeadline title="Články ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                    <oArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                    <oArticleList :posts="null" :images="null" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingPosts" />
                                    <div class="flex flex-center my-2" v-if="!isLoadingPosts && !noMorePostsItems">
                                        <span class="a-button-border -big -green" @click="loadMorePostsItems">Načíst další články</span>
                                    </div>
                                </div>
                            </section>
                            <!-- SECTION - articles END -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- SECTION END -->
        </div>
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mNavPlace from '~/components/molecules/mNavPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBanner from '~/components/organisms/oAccountBanner.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAffilateBooking from '~/components/organisms/oAffilateBooking.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oBlockItem from '~/components/organisms/oBlockItem.vue'
    import oBlockList from '~/components/organisms/oBlockList.vue'
    import oCoverItemState from '~/components/organisms/oCoverItemState.vue'
    import oCoverNeighboring from '~/components/organisms/oCoverNeighboring.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oCoverTitleItemState from '~/components/organisms/oCoverTitleItemState.vue'
    import oFactsPlace from '~/components/organisms/oFactsPlace.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oLanguagePhrases from '~/components/organisms/oLanguagePhrases.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oChartPie from '@/components/organisms/oChartPie.vue'
    import oOrganizationList from '~/components/organisms/oOrganizationList.vue'
    import oPlaceTeaserCities from '~/components/organisms/oPlaceTeaserCities.vue'
    import oPlaceTeaserRegions from '~/components/organisms/oPlaceTeaserRegions.vue'
    import oPlaceTeaserSpots from '~/components/organisms/oPlaceTeaserSpots.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarLinks from '~/components/organisms/oSidebarLinks.vue'
    import oSidebarList from '~/components/organisms/oSidebarList.vue'
    import oSidebarTime from '~/components/organisms/oSidebarTime.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'


    export default {
        name: 'SvetStatSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mNavPlace,
            mHeadline,
            oAccountBanner,
            oAdGoogleSidebar,
            oAffilateBooking,
            oAlerts,
            oArticleList,
            oBlockItem,
            oBlockList,
            oCoverItemState,
            oCoverNeighboring,
            oCoverPlaceDetail,
            oCoverTitleItemState,
            oFactsPlace,
            oHeroPlace,
            oHotInfoHero,
            oInformationBlock,
            oLanguagePhrases,
            oMapGoogle,
            oChartPie,
            oOrganizationList,
            oPlaceTeaserCities,
            oPlaceTeaserRegions,
            oPlaceTeaserSpots,
            oPlaceTeaser,
            oReviewItem,
            oSidebarLinks,
            oSidebarList,
            oSidebarTime,
            oSwitchHero,
            oVideoList,
            oVisitedButton
        },

        data() {
            return {
                account: [],
                preTitle: '',
                tabsLoad: this.tabsLoad,
                place: this.place,
                placesStatesNeighboring: this.placesStatesNeighboring,
                placeContinent: this.placeContinent,
                placesCities: this.placesCities,
                placeCityMain: this.placeCityMain,
                imagePlace: this.imagePlace,
                imagesStatesNeighboring: this.imagesStatesNeighboring,
                imagesCities: this.imagesCities,
                imageCityMain: this.imageCityMain,
                tabsLoad: this.tabsLoad,
                activeTab: '',
                activeTabName: '',
                isMobile: false,
                showHero: true,
                videos: [],
                imagesVideos: [],
                isLoadingVideos: false,
                noMoreVideosItems: false,
                videosPage: 1,
                videosPerPage: 9,
                posts: [],
                imagesPosts: [],
                isLoadingPosts: false,
                noMorePostsItems: false,
                postsPage: 1,
                postsPerPage: 9,
                tabs: [
                    { slug: 'default', label: 'state_name', visible: true },
                    { slug: 'co-videt', label: 'Co vidět', visible: true },
                    { slug: 'ceny', label: 'Ceny', visible: true },
                    { slug: 'lide', label: 'Lidé', visible: true },
                    { slug: 'cesta', label: 'Cesta', visible: true },
                    { slug: 'kontakty', label: 'Kontakty', visible: true },
                    { slug: 'ubytovani', label: 'Ubytování', visible: true },
                    { slug: 'videa', label: 'Videa', visible: true },
                    { slug: 'clanky', label: 'Články', visible: true },
                    { slug: 'sousedni-staty', label: 'Sousední státy', visible: true },
                    { slug: 'elektricke-zasuvky', label: 'Elektrické zásuvky', visible: true },
                    { slug: 'retezce', label: 'Řetězce', visible: true }
                ],
                mNavBreadcrumbsPlaceArray: [
                    {
                        id: 1,
                        icon: true,
                        type: "world",
                        name: "Svět",
                        url: "/svet",
                        status: "link"
                    },
                    {
                        id: 2,
                        icon: true,
                        type: "continent",
                        name: "Kontinenty",
                        url: "/svet/kontinent",
                        status: "link"
                    },
                    {
                        id: 3,
                        icon: false,
                        type: "continent",
                        name: "Kontinent",
                        url: "/svet/kontinent",
                        status: "link"
                    },
                    {
                        id: 4,
                        icon: true,
                        type: "state",
                        name: "Státy",
                        url: "/svet/stat",
                        status: "link"
                    },
                    {
                        id: 5,
                        icon: false,
                        type: "state",
                        name: "Stát",
                        url: "/svet/stat",
                        status: "span"
                    }
                ],
                oHotInfoHeroArray: [
                    {
                        id: 1,
                        title: "Kontinent",
                        name: "_NÁZEV KONTINENTU_",
                        url: `_ODKAZ_`,
                        type: "string",
                    },
                    {
                        id: 2,
                        title: "Rozloha",
                        name: "_ROZLOHA_",
                        type: "number",
                        subfix: " km²"
                    },
                    {
                        id: 3,
                        title: "Populace",
                        name: "_POPULACE_",
                        type: "number"
                    }
                ]
            }
        },

        methods:{
            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992
            },

            updatedTabs() {
                const hasTabDefault = true
                const hasTabShow = this.tabsLoad.tabWhatToSee
                const hasTabPrice = this.tabsLoad.tabPrice
                const hasTabPeople = this.tabsLoad.tabPeople
                const hasTabTrip = this.tabsLoad.tabTrip
                const hasTabContacts = this.tabsLoad.tabContact
                const hasTabHotel = this.tabsLoad.tabHotel
                const hasTabVideos = this.tabsLoad.tabVideos > 0
                const hasTabPosts = this.tabsLoad.tabArticles > 0
                const hasTabNeighboring = this.tabsLoad.tabNeighboring > 0
                const hasTabWallSockets = this.tabsLoad.tabWallSockets > 0
                const hasTabChains = this.tabsLoad.tabChains > 0

                const newTabs = [
                    { slug: 'default', label: 'Výchozí', visible: hasTabDefault },
                    { slug: 'co-videt', label: 'Co vidět', visible: hasTabShow },
                    { slug: 'ceny', label: 'Ceny', visible: hasTabPrice },
                    { slug: 'lide', label: 'Lidé', visible: hasTabPeople },
                    { slug: 'cesta', label: 'Cesta', visible: hasTabTrip },
                    { slug: 'kontakty', label: 'Kontakty', visible: hasTabContacts },
                    { slug: 'ubytovani', label: 'Ubytování', visible: hasTabHotel },
                    { slug: 'videa', label: 'Videa', visible: hasTabVideos },
                    { slug: 'clanky', label: 'Články', visible: hasTabPosts },
                    { slug: 'sousedni-staty', label: 'Sousední státy', visible: hasTabNeighboring },
                    { slug: 'elektricke-zasuvky', label: 'Elektrické zásuvky', visible: hasTabWallSockets },
                    { slug: 'retezce', label: 'Řetězce', visible: hasTabChains }
                ]

                this.tabs = newTabs
            },

            async loadPosts() {
                //start loading
                this.isLoadingPosts = true

                // Variable
                let postsResponse

                //load posts
                postsResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/posts-id-state/${this.place[0].id}?showType=list&page=${this.postsPage}&items=${this.postsPerPage}`)
                const { data: postsData } = postsResponse

                //load images
                const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPostsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.imagesPosts = this.imagesPosts.concat(imagesData)
                
                    // add to postsData to posts
                    this.posts = this.posts.concat(postsData)
                } else {
                    // add to postsData to posts
                    this.posts = this.posts.concat(postsData)
                } 

                //no more items?
                if (postsData.length === 0 || postsData.length < this.postsPerPage) {
                    this.noMorePostsItems = true
                }

                //end loading
                this.isLoadingPosts = false
            },

            async loadVideos() {
                //start loading
                this.isLoadingVideos = true

                // Variable
                let videosResponse

                //load videos
                videosResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/videos-id-state/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
                const { data: videosData } = videosResponse

                //load images
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.imagesVideos = this.imagesVideos.concat(imagesData)
                
                    // add to videosData to videos
                    this.videos = this.videos.concat(videosData)
                } else {
                    // add to videosData to videos
                    this.videos = this.videos.concat(videosData)
                } 

                //no more items?
                if (videosData.length === 0 || videosData.length < this.videosPerPage) {
                    this.noMoreVideosItems = true
                }

                //end loading
                this.isLoadingVideos = false
            },

            loadMoreVideosItems() {
                //no further loading can occur while loading
                if (this.isLoadingVideos || this.noMoreVideosItems) {
                    return
                }
                // loading more items
                this.videosPage++
                this.loadVideos()
            },

            loadMorePostsItems() {
                //no further loading can occur while loading
                if (this.isLoadingPosts || this.noMorePostsItems) {
                    return
                }
                // loading more items
                this.postsPage++
                this.loadPosts()
            }
        },

        computed: {
            hasCitiesToShow() {
                return this.placesCities.some(place => place.importance !== 'biggest')
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
            const placeName = this.place && this.place.length > 0 ? this.place[0].name : 'Stát'
            const defaultTitle = `${placeName} | Cestovatelský portál Frytol na cestách`
            title = defaultTitle

            // tab
            let tabTitle = `${this.place[0].name} | Cestovatelský portál Frytol na cestách`
            title = tabTitle

            // description
            description = `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}`

            // keywolds
            let metaSeoTags
            if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'

            // ogImage
            ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet/stat/${this.place[0].slug}${this.activeTab !== 'default' ? `/${this.activeTab}` : ''}`

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

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) { 
                try {
                    // PAGE - Place state detail
                    // Place
                    const place = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state/${params.slug}`)
                    // Image
                    const imagePlace = place[0].id_image_hero && place[0].id_image_hero !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${place[0].id_image_hero}`) : []
                    // PlaceContinent
                    const placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${place[0].id_continent}`)


                    // COMPONENT - Tabs
                    let tabsLoad
                    if (place[0].id) {
                        tabsLoad = await $axios.$get(`https://api.frytolnacestach.cz/api/config-world-state-tabs/${place[0].id}`)
                    }


                    // COMPONENT - Main city
                    // PlaceCityMain
                    let placeCityMain = null
                    if (place[0].id_city_main !== null) {
                        placeCityMain = await $axios.$get(`https://api.frytolnacestach.cz/api/places-city-id/${place[0].id_city_main}`)
                    }
                    // Images
                    let imageCityMain = null
                    if (place[0].id_city_main !== null && placeCityMain && placeCityMain[0].id_image_cover !== null ) {
                        imageCityMain = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeCityMain[0].id_image_cover}`)
                    }


                    // COMPONENT - Neighboring states
                    // PlacesStatesNeighboring
                    let placesStatesNeighboring
                    if (place[0].ids_neighboring_countries !== null ) {
                        const idsNeighboringCountries = place[0].ids_neighboring_countries.map(item => item.id)
                        placesStatesNeighboring = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${idsNeighboringCountries.join(',')}`)
                    } else {
                        placesStatesNeighboring = null
                    }
                    // Images
                    let imagesStatesNeighboring
                    if (placesStatesNeighboring) {
                        const imagesplaceStatesNeighboringID = placesStatesNeighboring.map(placesStateNeighboring => placesStateNeighboring.id_image_cover).filter(id => id !== null && id !== '')
                        imagesStatesNeighboring = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesplaceStatesNeighboringID.join(',')}`)
                    } else {
                        imagesStatesNeighboring = null
                    }


                    // COMPONENT - Města ve státě
                    // placesCities
                    const placesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/places-cities-id-state/${place[0].id}?showType=list`)
                    // Images
                    let imagesCities
                    const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
                    if ( imagesPlacesCitiesID  !== null) {
                        imagesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)
                    } else {
                        imagesCities = null
                    }


                    data = {
                        tabsLoad,
                        place,
                        imagePlace,
                        tabsLoad,
                        placesStatesNeighboring,
                        imagesStatesNeighboring,
                        placeContinent,
                        placesCities,
                        imagesCities,
                        placeCityMain,
                        imageCityMain
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - STÁT DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
            return data
        },

        mounted() {
            this.loadVideos()
            this.loadPosts()

            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize)

            // Pretitle
            this.preTitle = `${this.activeTabName}`

            //Data for mNavBreadcrumbsPlaceArray 
            //continent
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 3) {
                    item.name = this.placeContinent[0].name
                    item.url = "/svet/kontinent/" + this.placeContinent[0].slug
                }
                return item
            })
            //state
            if(this.activeTab === 'undefined' || this.activeTab === 'default') {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name
                        item.url = "/svet/stat/" + this.place[0].slug
                        item.status = "span"
                    }
                    return item
                })
            } else {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name
                        item.url = "/svet/stat/" + this.place[0].slug
                        item.status = "link"
                    }
                    return item
                })
            }

            //Data for oHotInfoHero
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 1) {
                    item.name = this.placeContinent[0].name
                    item.url = `/svet/kontinent/${this.placeContinent[0].slug}`
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 2) {
                    item.name = this.place[0].area
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 3) {
                    item.name = this.place[0].population
                }
                return item
            })
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize)
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        watch: {
            '$store.state.account': {
                deep: true,
                immediate: true,
                handler() {
                    this.account = this.$store.state.account
                }
            },

            tabsLoad: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.updatedTabs()
                }
            }
        }
    }
</script>