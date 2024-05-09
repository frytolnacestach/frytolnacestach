<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :tab="activeTab" :tabName="activeTabName" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <!-- SECTION - Buttons -->
                <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                    <div class="t-section__inner">
                        <oSwitchHero :show-hero.sync="showHero" />
                    </div>
                </section>
                <!-- SECTION - Buttons END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-hero">

                            <!-- SECTION - hero -->
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                                <oHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                                <oMapGoogle :place="place" v-if="place && place.length > 0 && (place[0].coordinates.length > 0 && place[0].zoom.length > 0)" />
                            </div>
                            <!-- SECTION - map - END -->

                            <!-- SECTION - hot info -->
                            <div class="t-grid__section -hot-info-hero">
                                <oHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hot info - END -->

                        </div>
                    </div>
                </section>

                <!-- SECTION - Alerts -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0 && place[0].alerts">
                    <div class="t-section__inner">
                        <oAlerts :alerts="place[0].alerts" />
                    </div>
                </section>
                <!-- SECTION - Alerts END -->
            
                <!-- SECTION - Nav place -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0">
                    <div class="t-section__inner">
                        <mNavPlace :tabs="tabs" :activeTab="activeTab" :place="place[0]" />
                    </div>
                </section>
                <!-- SECTION - Nav place END -->

                <div class="t-main -tab">
                    <section class="t-section -px-world -p0">
                        <div class="t-section__inner">
                            <div class="t-grid -place-main-with-aside">
                                <div class="t-grid__section -main">

                                    <!-- SECTION - information by ChatGPT -->
                                    <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_chatgpt && !place[0].information_author?.length > 0">
                                        <div class="t-section__inner">
                                            <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - information by ChatGPT END -->

                                    <!-- SECTION - information by Author -->
                                    <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_author?.length > 0">
                                        <div class="t-section__inner">
                                            <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" :authorID="place[0].information_author[0].author_create" styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - information by Author END -->

                                    <!-- SECTION - ad-google - wysiwyg -->
                                    <section class="t-section  my-2 -p0 print-section">
                                        <div class="t-section__inner">
                                            <oAdGoogleWysiwyg styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - ad-google - wysiwyg - END -->

                                    <!-- SECTION - Account banner big - sidebar -->
                                    <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                        <div class="t-section__inner">
                                            <oAccountBannerBig :account="account" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Account banner big - sidebar END -->

                                    <!-- SECTION - Place teaser -->
                                    <section class="t-section my-2 -p0 print-section" v-if="place && place.length > 0 && place[0].id_city_main && placeCityMain && placeCityMain.length > 0">
                                        <div class="t-section__inner">
                                            <oPlaceTeaser :headline="'Hlavním městem ve státě ' + place[0].name + ' je ' + placeCityMain[0].name" :place="placeCityMain" :image="imageCityMain" type="mesto" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Place teaser END -->

                                    <!-- SECTION - Facts place -->
                                    <section class="t-section my-4 py-1 -p0 print-section" v-if="place && place.length > 0 && place[0].facts_place && place[0].facts_place.length > 0">
                                        <div class="t-section__inner">
                                            <mHeadline title="Fakta o státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                            <oFactsPlace :items="place[0].facts_place" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Facts place END -->

                                    <!-- SECTION - Directory Subpages -->
                                    <section class="t-section my-4 py-1 -p0 hidden-print" v-if="tabsLoad && tabsLoad.length > 0">
                                        <div class="t-section__inner">
                                            <mHeadline title="Co by tě mohlo zajímat o státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                            <oDirectorySubpages :tabs="tabs" :data="tabsLoad" :placeSlug="place[0].slug" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Directory Subpages END -->

                                    <!-- SECTION - Review -->
                                    <oReviewItem :account="account" :IDplace="place[0].id" type="state" v-if="place && place.length > 0 && place[0].id && account && account.length > 0" />
                                    <!-- SECTION - Review END -->
                            
                                </div>
                                <div class="t-grid__section -aside-place-status">

                                    <!-- SECTION - Visited button - sidebar -->
                                    <section class="t-section -px-world my-1">
                                        <div class="t-section__inner">
                                            <oVisitedButton :account="account" :place="this.place[0].id" placeType="state" v-if="place && place.length > 0 && place[0].id && account && account.length > 0" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Visited button - sidebar - END -->

                                </div>
                                <div class="t-grid__section -aside-content">

                                    <!-- SECTION - time - sidebar -->
                                    <section class="t-section -px-world my-1">
                                        <div class="t-section__inner">
                                            <oSidebarTime :mpz="place[0].mpz" v-if="place && place.length > 0 && place[0].mpz" />
                                        </div>
                                    </section>
                                    <!-- SECTION - time - sidebar - END -->

                                    <section class="t-section-print">

                                        <!-- SECTION - Měna -->
                                        <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].currency[0].name !== null">
                                            <div class="t-section__inner">
                                                <oBlockItem title="Měna" :subtitle="place[0].currency[0].name" :perexWysiwyg="place[0].currency[0].code !== null ? place[0].currency[0].code : ''" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - Měna END -->

                                        <!-- SECTION - MPZ -->
                                        <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].mpz">
                                            <div class="t-section__inner">
                                                <oBlockItem title="MPZ" subtitle="Mezinárodní poznávací značka" :perexWysiwyg="place[0].mpz" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - MPZ END -->

                                        <!-- SECTION - TLD -->
                                        <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].tld">
                                            <div class="t-section__inner">
                                                <oBlockItem title="TLD" subtitle="Národní internetová doména" :perexWysiwyg="place[0].tld" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - TLD END -->

                                        <!-- SECTION - links - sidebar -->
                                        <section class="t-section -px-world" v-if="place && place.length > 0 && place[0].links && place[0].links.length > 0">
                                            <div class="t-section__inner">
                                                <oSidebarLinks :items="this.place[0].links" headline="Užitečné odkazy" />
                                            </div>
                                        </section>
                                        <!-- SECTION - links - sidebar - END -->

                                        <!-- SECTION - apps - sidebar -->
                                        <section class="t-section -px-world" v-if="place && place.length > 0 && place[0].apps && place[0].apps.length > 0">
                                            <div class="t-section__inner">
                                                <oSidebarLinks :items="place[0].apps" headline="Užitečné aplikace" />
                                            </div>
                                        </section>
                                        <!-- SECTION - apps - sidebar - END -->
                                        
                                    </section>

                                    <!-- SECTION - Events - sidebar -->
                                    <oSidebarEvent :place="place[0].id" type="state" v-if="place && place.length > 0" />
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

                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <div class="t-grid -world-ful">
                                <div class="t-grid__section -content">

                                    <!-- SECTION - města - Biggest -->
                                    <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="place && place.length > 0 && placeCities && placeCities.length > 0">
                                        <div class="t-section__inner">
                                            <mHeadline title="Největší města ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                            <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" importance="biggest" />
                                        </div>
                                    </section>
                                    <!-- SECTION - města - Biggest - END -->

                                    <!-- SECTION - videos -->
                                    <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && videos && videos.length > 0">
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
                                    <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="place && place.length > 0 && placesCities && placesCities.length > 0 && hasCitiesToShow">
                                        <div class="t-section__inner">
                                            <mHeadline title="Další města a obce ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                            <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" :importance=null />
                                        </div>
                                    </section>
                                    <!-- SECTION - města - menší - END -->

                                    <!-- SECTION - articles -->
                                    <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && posts && posts.length !== 0">
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
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    // Utils
    import { updatedTabs } from '~/utils/tabsPlacesState.js'
    // Components
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mNavPlace from '~/components/molecules/mNavPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBannerBig from '~/components/organisms/oAccountBannerBig.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAdGoogleWysiwyg from '~/components/organisms/oAdGoogleWysiwyg.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oBlockItem from '~/components/organisms/oBlockItem.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oDirectorySubpages from '~/components/organisms/oDirectorySubpages.vue'
    import oFactsPlace from '~/components/organisms/oFactsPlace.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarLinks from '~/components/organisms/oSidebarLinks.vue'
    import oSidebarEvent from '~/components/organisms/oSidebarEvent.vue'
    import oSidebarTime from '~/components/organisms/oSidebarTime.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'

    export default defineComponent({
        name: 'SvetStatSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mNavPlace,
            mHeadline,
            oAccountBannerBig,
            oAdGoogleSidebar,
            oAdGoogleWysiwyg,
            oAlerts,
            oArticleList,
            oBlockItem,
            oCoverPlaceDetail,
            oDirectorySubpages,
            oFactsPlace,
            oHeroPlace,
            oHotInfoHero,
            oInformationBlock,
            oMapGoogle,
            oPlaceTeaser,
            oReviewItem,
            oSidebarLinks,
            oSidebarEvent,
            oSidebarTime,
            oSwitchHero,
            oVideoList,
            oVisitedButton
        },

        data() {
            return {
                account: useAccountData().accountData,
                // Data from API
                place: this.place,
                imagePlace: this.imagePlace,
                placeContinent: this.placeContinent,
                placesCities: this.placesCities,
                imagesCities: this.imagesCities,
                placeCityMain: this.placeCityMain,
                imageCityMain: this.imageCityMain,
                videos: this.videos,
                imagesVideos: this.imagesVideos,
                posts: this.posts,
                imagesPosts: this.imagesPosts,
                // Loading videos
                videosPage: 1,
                videosPerPage: 9,
                isLoadingVideos: false,
                noMoreVideosItems: false,
                // Loading posts
                postsPage: 1,
                postsPerPage: 9,
                isLoadingPosts: false,
                noMorePostsItems: false,
                // Other
                preTitle: '',
                tabsLoad: this.tabsLoad,
                activeTab: '',
                activeTabName: '',
                showHero: true,
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
                    { slug: 'fauna', label: 'Fauna', visible: true },
                    { slug: 'flora', label: 'Flora', visible: true },
                    { slug: 'jidlo', label: 'Jídlo', visible: true },
                    { slug: 'vyrobky', label: 'Výrobky', visible: true },
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
                        name: (this.placeContinent && this.placeContinent.length > 0) ? this.placeContinent[0].name : "Kontinent",
                        url: (this.placeContinent && this.placeContinent.length > 0) ? ("/svet/kontinent/" + this.placeContinent[0].slug) : "/svet/kontinent",
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
                        name: (this.place && this.place.length > 0) ? this.place[0].name : "Stát",
                        url: (this.place && this.place.length > 0) ? ("/svet/stat/" + this.place[0].slug) : "/svet/stat",
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
            const placeName = (this.place && this.place.length > 0) ? this.place[0].name : 'Stát'
            const defaultTitle = `${placeName} | Cestovatelský portál Frytol na cestách`
            title = defaultTitle

            // tab
            let tabTitle = `${(this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : "Stát"} | Cestovatelský portál Frytol na cestách`
            title = tabTitle

            // description
            description = (this.place && this.place.length > 0 && this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát'

            // keywolds
            let metaSeoTags = ""
            if (this.place && this.place.length > 0 && this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = ((this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : '') + metaSeoTags + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'

            // ogImage
            ogImage = `${(this.place && this.place.length > 0 && this.place[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = (this.place && this.place.length > 0) ? `${process.env.baseUrl}/svet/stat/${this.place[0].slug}` : `${process.env.baseUrl}`

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
                            "@type": "Place",
                            "name": ((this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : ""),
                            "description": ((this.place && this.place.length > 0 && this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : "")),
                            "image": ((this.place && this.place.length > 0 && this.imagePlace && imagePlace.length > 0 && this.imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/states/" + this.imagePlace[0].name + ".webp") : "" ),
                            "area": {
                                "@type": "QuantitativeValue",
                                "value": ((this.place && this.place.length > 0 && this.place[0].area) ? this.place[0].area : ""),
                                "comment": "Rozloha v km²"
                            },
                            "population": {
                                "@type": "QuantitativeValue",
                                "value": ((this.place && this.place.length > 0 && this.place[0].population) ? this.place[0].population : "")
                            }
                        }
                    }
                ]
            }
        },

        methods: {
            async fetchData() {
                const route = useRoute()

                // PAGE - Place state detail
                // Place
                const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-state/${route.params.slug}`)
                this.place = await responsePlace.json()
                // Image
                if (this.place && this.place.length > 0 && this.place[0].id_image_hero && this.place[0].id_image_hero !== 0) {
                    const responseImagePlace = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`)
                    this.imagePlace = await responseImagePlace.json()
                }
                // PlaceContinent
                const responsePlaceContinent = await fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${this.place[0].id_continent}`)
                this.placeContinent = await responsePlaceContinent.json()

                // COMPONENT - Tabs
                if (this.place && this.place.length > 0 && this.place[0].id) {
                    const responseTabsLoad = await fetch(`https://api.frytolnacestach.cz/api/config-world-state-tabs/${this.place[0].id}`)
                    this.tabsLoad = await responseTabsLoad.json()
                }

                // COMPONENT - Main city
                // PlaceCityMain
                if (this.place && this.place.length > 0 && this.place[0].id_city_main !== null) {
                    const responsePlaceCityMain = await fetch(`https://api.frytolnacestach.cz/api/places-city-id/${this.place[0].id_city_main}`)
                    this.placeCityMain = await responsePlaceCityMain.json()
                }
                // Images
                if (this.place && this.place.length > 0 && this.place[0].id_city_main !== null && this.placeCityMain && this.placeCityMain[0].id_image_cover !== null ) {
                    const responseImageCityMain = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.placeCityMain[0].id_image_cover}`)
                    this.imageCityMain = await responseImageCityMain.json()
                }

                // COMPONENT - Města ve státě
                // placesCities
                const responsePlacesCities = await fetch(`https://api.frytolnacestach.cz/api/places-cities-id-state/${this.place[0].id}?showType=list`)
                this.placesCities = await responsePlacesCities.json()
                // Images
                const imagesPlacesCitiesID = this.placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
                if ( imagesPlacesCitiesID  !== null) {
                    const responseImagesCities = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)
                    this.imagesCities = await responseImagesCities.json()
                } else {
                    this.imagesCities = null
                }
            },

            async loadPosts() {
                //start loading
                this.isLoadingPosts = true

                //load posts
                if (this.place && this.place.length > 0) {
                    const responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts-id-state/${this.place[0].id}?showType=list&page=${this.postsPage}&items=${this.postsPerPage}`)
                    const postsData = await responsePosts.json()
                    this.posts = this.posts.concat(postsData)
                }

                //load images
                if (this.posts && this.posts.legth > 0) {
                    const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                    if (imagesPostsIDS.length > 0) {
                        const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                        const imagesData = await responseImages.json()
                        this.imagesPosts = this.imagesPosts.concat(imagesData)
                    }
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

                //load videos
                if (this.place && this.place.length > 0) {
                    const responseVideo = await fetch(`https://api.frytolnacestach.cz/api/videos-id-state/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
                    const videosData = await responseVideo.json()
                    this.videos = this.videos.concat(videosData)
                }

                //load images
                if (this.videosData && this.videosData.length > 0) {
                    const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                    if (imagesVideosIDS.length > 0) {
                        const imagesResponse = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                        const imagesData = await responseImages.json()
                        this.imagesVideos = this.imagesVideos.concat(imagesData)
                    }
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

        mounted() {
            // GET Data
            this.fetchData()

            if (this.place && this.place.length > 0) {
                this.loadVideos()
                this.loadPosts()
            }

            // Pretitle
            this.preTitle = `${this.activeTabName}`
        },

        watch: {
            tabsLoad: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.tabs = updatedTabs(newVal)
                }
            },

            placeContinent: {
                handler(newValue) {
                    if (newValue && newValue.length > 0) {
                        this.mNavBreadcrumbsPlaceArray[2].name = newValue[0].name
                        this.mNavBreadcrumbsPlaceArray[2].url = ("/svet/kontinent/" + newValue[0].slug)
                        this.oHotInfoHeroArray[0].name = newValue[0].name
                        this.oHotInfoHeroArray[0].url = ("/svet/kontinent/" + newValue[0].slug)
                    } else {
                        this.mNavBreadcrumbsPlaceArray[2].name = "Kontinent"
                        this.mNavBreadcrumbsPlaceArray[2].url = "/svet/kontinent"
                        this.oHotInfoHeroArray[0].name = "_Kontinent_"
                        this.oHotInfoHeroArray[0].url = "/svet/kontinent"
                    }
                },
                deep: true
            },

            place: {
                handler(newValue) {
                    if (newValue && newValue.length > 0) {
                        this.mNavBreadcrumbsPlaceArray[4].name = newValue[0].name
                        this.mNavBreadcrumbsPlaceArray[4].url = ("/svet/stat/" + newValue[0].slug)
                        this.oHotInfoHeroArray[1].name = newValue[0].area
                        this.oHotInfoHeroArray[2].name = newValue[0].population
                    } else {
                        this.mNavBreadcrumbsPlaceArray[4].name = "Stát"
                        this.mNavBreadcrumbsPlaceArray[4].url = "/svet/stat"
                        this.oHotInfoHeroArray[1].name = "_Rozloha_"
                        this.oHotInfoHeroArray[1].name = "_Populace_"
                    }
                },
                deep: true
            }
        }
    })
</script>