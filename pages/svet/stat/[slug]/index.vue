<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :tab="activeTab" :tabName="activeTabName" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <!-- SECTION - Buttons -->
                <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                    <div class="t-section__inner">
                        <OrganismsSwitchHero :show-hero.sync="showHero" />
                    </div>
                </section>
                <!-- SECTION - Buttons END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-hero">

                            <!-- SECTION - hero -->
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                                <OrganismsHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                                <OrganismsMapGoogle :place="place" v-if="place && place.length > 0 && (place[0].coordinates.length > 0 && place[0].zoom.length > 0)" />
                            </div>
                            <!-- SECTION - map - END -->

                            <!-- SECTION - hot info -->
                            <div class="t-grid__section -hot-info-hero">
                                <OrganismsHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hot info - END -->

                        </div>
                    </div>
                </section>

                <!-- SECTION - Alerts -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0 && place[0].alerts">
                    <div class="t-section__inner">
                        <OrganismsAlerts :alerts="place[0].alerts" />
                    </div>
                </section>
                <!-- SECTION - Alerts END -->
            
                <!-- SECTION - Nav place -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0">
                    <div class="t-section__inner">
                        <MoleculesNavPlace :tabs="tabs" :activeTab="activeTab" :place="place[0]" />
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
                                            <OrganismsInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - information by ChatGPT END -->

                                    <!-- SECTION - information by Author -->
                                    <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_author?.length > 0">
                                        <div class="t-section__inner">
                                            <OrganismsInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" :authorID="place[0].information_author[0].author_create" styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - information by Author END -->

                                    <!-- SECTION - ad-google - wysiwyg -->
                                    <section class="t-section  my-2 -p0 print-section">
                                        <div class="t-section__inner">
                                            <OrganismsAdGoogleWysiwyg styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - ad-google - wysiwyg - END -->

                                    <!-- SECTION - Account banner big - sidebar -->
                                    <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                        <div class="t-section__inner">
                                            <OrganismsAccountBannerBig :account="account" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Account banner big - sidebar END -->

                                    <!-- SECTION - Place teaser -->
                                    <section class="t-section my-2 -p0 print-section" v-if="place && place.length > 0 && place[0].id_city_main && placeCityMain && placeCityMain.length > 0">
                                        <div class="t-section__inner">
                                            <OrganismsPlaceTeaser :headline="'Hlavním městem ve státě ' + place[0].name + ' je ' + placeCityMain[0].name" :place="placeCityMain" :image="imageCityMain" type="mesto" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Place teaser END -->

                                    <!-- SECTION - Facts place -->
                                    <section class="t-section my-4 py-1 -p0 print-section" v-if="place && place.length > 0 && place[0].facts_place && place[0].facts_place.length > 0">
                                        <div class="t-section__inner">
                                            <MoleculesHeadline title="Fakta o státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                            <OrganismsFactsPlace :items="place[0].facts_place" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Facts place END -->

                                    <!-- SECTION - Directory Subpages -->
                                    <section class="t-section my-4 py-1 -p0 hidden-print" v-if="tabsLoad && tabsLoad.length > 0">
                                        <div class="t-section__inner">
                                            <MoleculesHeadline title="Co by tě mohlo zajímat o státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                            <OrganismsDirectorySubpages :tabs="tabs" :data="tabsLoad" :placeSlug="place[0].slug" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Directory Subpages END -->

                                    <!-- SECTION - Review -->
                                    <OrganismsReviewItem :account="account" :IDplace="place[0].id" type="state" v-if="place && place.length > 0 && place[0].id && account && account.length > 0" />
                                    <!-- SECTION - Review END -->
                            
                                </div>
                                <div class="t-grid__section -aside-place-status">

                                    <!-- SECTION - Visited button - sidebar -->
                                    <section class="t-section -px-world my-1">
                                        <div class="t-section__inner">
                                            <OrganismsVisitedButton :account="account" :place="place[0].id" placeType="state" v-if="place && place.length > 0 && place[0].id && account && account.length > 0" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Visited button - sidebar - END -->

                                </div>
                                <div class="t-grid__section -aside-content">

                                    <!-- SECTION - time - sidebar -->
                                    <section class="t-section -px-world my-1">
                                        <div class="t-section__inner">
                                            <OrganismsSidebarTime :mpz="place[0].mpz" v-if="place && place.length > 0 && place[0].mpz" />
                                        </div>
                                    </section>
                                    <!-- SECTION - time - sidebar - END -->

                                    <section class="t-section-print">

                                        <!-- SECTION - Měna -->
                                        <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].currency[0].name !== null">
                                            <div class="t-section__inner">
                                                <OrganismsBlockItem title="Měna" :subtitle="place[0].currency[0].name" :perexWysiwyg="place[0].currency[0].code !== null ? place[0].currency[0].code : ''" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - Měna END -->

                                        <!-- SECTION - MPZ -->
                                        <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].mpz">
                                            <div class="t-section__inner">
                                                <OrganismsBlockItem title="MPZ" subtitle="Mezinárodní poznávací značka" :perexWysiwyg="place[0].mpz" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - MPZ END -->

                                        <!-- SECTION - TLD -->
                                        <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].tld">
                                            <div class="t-section__inner">
                                                <OrganismsBlockItem title="TLD" subtitle="Národní internetová doména" :perexWysiwyg="place[0].tld" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - TLD END -->

                                        <!-- SECTION - links - sidebar -->
                                        <section class="t-section -px-world" v-if="place && place.length > 0 && place[0].links && place[0].links.length > 0">
                                            <div class="t-section__inner">
                                                <OrganismsSidebarLinks :items="place[0].links" headline="Užitečné odkazy" />
                                            </div>
                                        </section>
                                        <!-- SECTION - links - sidebar - END -->

                                        <!-- SECTION - apps - sidebar -->
                                        <section class="t-section -px-world" v-if="place && place.length > 0 && place[0].apps && place[0].apps.length > 0">
                                            <div class="t-section__inner">
                                                <OrganismsSidebarLinks :items="place[0].apps" headline="Užitečné aplikace" />
                                            </div>
                                        </section>
                                        <!-- SECTION - apps - sidebar - END -->
                                        
                                    </section>

                                    <!-- SECTION - Events - sidebar -->
                                    <OrganismsSidebarEvent :place="place[0].id" type="state" v-if="place && place.length > 0" />
                                    <!-- SECTION - Events - sidebar - END -->

                                </div>
                                <div class="t-grid__section -aside-ad">

                                    <!-- SECTION - ad-google - sidebar -->
                                    <section class="t-section -px-world mt-4 mb-2">
                                        <div class="t-section__inner">
                                            <OrganismsAdGoogleSidebar styleThema=" -green" />
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
                                    <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="place && place.length > 0 && placesCities && placesCities.length > 0">
                                        <div class="t-section__inner">
                                            <MoleculesHeadline title="Největší města ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                            <OrganismsCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" importance="biggest" />
                                        </div>
                                    </section>
                                    <!-- SECTION - města - Biggest - END -->

                                    <!-- SECTION - videos -->
                                    <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && videos && videos.length > 0">
                                        <div class="t-section__inner">
                                            <MoleculesHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                            <OrganismsVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                            <OrganismsVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                            <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                                <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                            </div>
                                        </div>
                                    </section>
                                    <!-- SECTION - videos END -->

                                    <!-- SECTION - města - menší -->
                                    <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="place && place.length > 0 && placesCities && placesCities.length > 0 && hasCitiesToShow">
                                        <div class="t-section__inner">
                                            <MoleculesHeadline title="Další města a obce ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                            <OrganismsCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" :importance=null />
                                        </div>
                                    </section>
                                    <!-- SECTION - města - menší - END -->

                                    <!-- SECTION - articles -->
                                    <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && posts && posts.length !== 0">
                                        <div class="t-section__inner">
                                            <MoleculesHeadline title="Články ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                            <OrganismsArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                            <OrganismsArticleList :posts="null" :images="null" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingPosts" />
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

<script setup>
    // Utils
    import { updatedTabs } from '~/utils/tabsPlacesState.js'

    const route = useRoute()

    // DATA
    let account = useAccountData().accountData
    let isLoadingVideos = false
    let noMoreVideosItems = false
    let videosPage = 1
    let videosPerPage = 20
    let isLoadingPosts = false
    let noMorePostsItems = false
    let postsPage = 1
    let postsPerPage = 20
    let preTitle = ''
    let activeTab = ''
    let activeTabName = ''
    let showHero = true
    // DATA API
    const place = ref([])
    const imagePlace = ref([])
    const placeContinent = ref([])
    const placesCities = ref([])
    const imagesCities = ref([])
    const placeCityMain = ref([])
    const imageCityMain = ref([])
    const videos = ref([])
    const imagesVideos = ref([])
    const posts = ref([])
    const imagesPosts = ref([])
    const tabsLoad = ref([])
    // DATA OTHER
    let tabs = [
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
    ]
    let mNavBreadcrumbsPlaceArray = [
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
    ]
    let oHotInfoHeroArray = [
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
    // DATA Meta - head
    let headMeta = reactive({
        title: '',
        description: '',
        keywords: '',
        ogImage: '',
        ogTitle: '',
        ogDescription: '',
        ogUrl: '',
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Place",
        "name": "",
        "description": "",
        "image": "",
        "area": {
            "@type": "QuantitativeValue",
            "value": "",
            "comment": "Rozloha v km²"
        },
        "population": {
            "@type": "QuantitativeValue",
            "value": ""
        }
    })

    // META - Head
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
    // META - Head - JSONld
    useJsonld(() => headJsonld)

    // LOAD DATA
    const loadData = async () => {
        // PAGE - City detail
        // Place
        const placeResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-state/${route.params.slug}`)
        const placeData = JSON.parse(placeResponse) || []
        place.value = placeData
        // Image
        if (place.value && place.value.length > 0 && place.value[0].id_image_hero && place.value[0].id_image_hero !== 0) {
            const imagePlaceResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${place.value[0].id_image_hero}`)
            const imagePlaceData = JSON.parse(imagePlaceResponse) || []
            imagePlace.value = imagePlaceData
        }

        // COMPONENT - Tabs
        if (place.value && place.value.length > 0 && place.value[0].id) {
            const tabsLoadResponse = await $fetch(`https://api.frytolnacestach.cz/api/config-world-state-tabs/${place.value[0].id}`)
            const tabsLoadData = JSON.parse(tabsLoadResponse) || []
            tabsLoad.value = tabsLoadData
        }

        if (place.value && place.value.length > 0) {
            // PlaceContinent
            const placeContinentResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${place.value[0].id_continent}`)
            const placeContinentData = JSON.parse(placeContinentResponse) || []
            placeContinent.value = placeContinentData
        }

        // PlaceCityMain
        if (place.value && place.value.length > 0 && place.value[0].id_city_main !== null) {
            const placeCityMainResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-city-id/${place.value[0].id_city_main}`)
            const placeCityMainData = JSON.parse(placeCityMainResponse) || []
            placeCityMain.value = placeCityMainData

            // Images
            if (placeCityMain.value && placeCityMain.value[0].id_image_cover !== null ) {
                const imageCityMainResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${placeCityMain.value[0].id_image_cover}`)
                const imageCityMainData = JSON.parse(imageCityMainResponse) || []
                imageCityMain.value = imageCityMainData
            }
        }

        if (place.value && place.value.length > 0) {
            // PlacesCities
            const placesCitiesResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-cities-id-state/${place.value[0].id}?showType=list`)
            const placesCitiesData = JSON.parse(placesCitiesResponse) || []
            placesCities.value = placesCitiesData

            // Images
            const imagesPlacesCitiesID = placesCities.value.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
            if (imagesPlacesCitiesID !== null) {
                const imagesCitiesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)
                const imagesCitiesData = JSON.parse(imagesCitiesResponse) || []
                imagesCities.value = imagesCitiesData
            }
        }

        // HEAD
        if (place.value && place.value.length > 0) {
            // Meta
            headMeta.title = `${(place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Stát'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = ((place.value[0].information_author?.length > 0) ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].information_chatgpt) ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Stát')
            if (place.value[0].seo_tags && place.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + place.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (place.value[0].name ? place.value[0].name : '') + metaSeoTags + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'
            } else {
                headMeta.keywords = (place.value[0].name ? place.value[0].name : '') + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'
            }
            headMeta.ogImage = `${(place.value[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + imagePlace.find(image => image.id === place.value[0].id_image_hero).source + imagePlace.find(image => image.id === place.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png')}`
            headMeta.ogTitle = `${(place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Stát'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = ((place.value[0].information_author?.length > 0) ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].information_chatgpt) ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Stát')
            headMeta.ogUrl = `https://www.frytolnacestach.cz/svet/stat/${place.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headJsonld.name = (place.value[0].name ? place.value[0].name : "")
            headJsonld.description = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ""))
            headJsonld.image = ((imagePlace && imagePlace.length > 0  && imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/states/" + imagePlace[0].name + ".webp") : "")
            headJsonld.area.value = (place.value[0].area ? place.value[0].area : "")
            headJsonld.population.value = (place.value[0].population ? place.value[0].population : "")
        }

        // SET PAGE
        preTitle = `${activeTabName}`
    }
    await useAsyncData('dataAPI', () => loadData())

    // LOAD DATA - Posts
    const loadPosts = async () => {
        //start loading
        isLoadingPosts = true

        //load posts
        if (place.value && place.value.length > 0) {
            const postsResponse = await $fetch(`https://api.frytolnacestach.cz/api/posts-id-state/${place.value[0].id}?showType=list&page=${postsPage}&items=${postsPerPage}`)
            const postsData = JSON.parse(postsResponse) || []
            posts.value = posts.value.concat(postsData)

            //end loading
            isLoadingPosts = false

            //load images
            if (postsData && postsData.length > 0) {
                const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPostsIDS.length > 0) {
                    const imagesPostsResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                    const imagesPostsData = JSON.parse(imagesPostsResponse) || []
                    imagesPosts.value = imagesPosts.value.concat(imagesPostsData)
                }
            }

            //no more items?
            if (postsData.length === 0 || postsData.length < postsPerPage) {
                noMorePostsItems = true
            }
        }
    }
    await useAsyncData('dataAPI', () => loadPosts())

    // LOAD DATA - Videos
    const loadVideos = async () => {
        //start loading
        isLoadingVideos = true

        //load videos
        if (place.value && place.value.length > 0) {
            const videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos-id-state/${place.value[0].id}?showType=list&page=${videosPage}&items=${videosPerPage}`)
            const videosData = JSON.parse(videosResponse) || []
            videos.value = videos.value.concat(videosData)

            //end loading
            isLoadingVideos = false

            //load images
            if (videosData && videosData.length > 0) {
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesVideosResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const imagesVideosData = JSON.parse(imagesVideosResponse) || []
                    imagesVideos.value = imagesVideos.value.concat(imagesVideosData)
                }
            }

            //no more items?
            if (videosData.length === 0 || videosData.length < videosPerPage) {
                noMoreVideosItems = true
            }
        }
    }
    await useAsyncData('dataAPI', () => loadVideos())

    // OTHER
    const loadMoreVideosItems = () => {
        if (isLoadingVideos || noMoreVideosItems) {
            return
        }
        videosPage++
        loadVideos()
    }

    const loadMorePostsItems = () => {
        if (isLoadingPosts || noMorePostsItems) {
            return
        }
        postsPage++
        loadPosts()
    }

    const hasCitiesToShow = () => {
        return placesCities.value.some(place => place.importance !== 'biggest')
    }

    // WATCH
    watchEffect(() => {
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
        useJsonld(() => headJsonld)
    })

    watch(place, (newValue, oldValue) => {
        if (newValue && newValue.length > 0) {
            mNavBreadcrumbsPlaceArray[4].name = newValue[0].name
            mNavBreadcrumbsPlaceArray[4].url = "/svet/stat/" + newValue[0].slug
            oHotInfoHeroArray[1].name = newValue[0].area
            oHotInfoHeroArray[2].name = newValue[0].population
            loadVideos()
            loadPosts()
        }
    })

    watch(placeContinent, (newValue, oldValue) => {
        if (newValue && newValue.length > 0) {
            mNavBreadcrumbsPlaceArray[2].name = newValue[0].name
            mNavBreadcrumbsPlaceArray[2].url = "/svet/kontinent/" + newValue[0].slug
            oHotInfoHeroArray[0].name = newValue[0].name
            oHotInfoHeroArray[0].url = "/svet/kontinent/" + newValue[0].slug
        }
    })

    watch(tabsLoad, (newValue, oldValue) => {
        tabs = updatedTabs(newValue)
    })
</script>