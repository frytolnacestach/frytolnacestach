<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" v-if="place && place.length > 0" />
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
                                <OrganismsHeroPlace :title="place[0].name" :preTitle="preTitle" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                                <OrganismsMapGoogle :place="place" v-if="place && place.length > 0 && (place[0].coordinates.length > 0 && place[0].zoom.length > 0)" />
                            </div>
                            <!-- SECTION - map - END -->

                            <!-- SECTION - hot info -->
                            <div class="t-grid__section -hot-info-hero">
                                <OrganismsHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3"/>
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

                <div class="t-main -tab" v-if="place && place.length > 0">
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <div class="t-grid -world-ful">
                                <div class="t-grid__section -content">
                                    <section class="t-section -px-world -p0 mb-4">
                                        <div class="t-section__inner">
                                            <div class="t-grid -place-main-with-aside">
                                                <div class="t-grid__section -main">

                                                    <!-- SECTION - Elektrické zásuvky list -->
                                                    <section class="t-section -p0 -px-world my-2">
                                                        <div class="t-section__inner">
                                                            <OrganismsCoverTitleItemState type="elektricka-zasuvka" title="Elektrické zásuvky použivané ve státě" perex="Poskytujeme vám informace pro pohodlné připojení a dobíjení vašich zařízení během pobytu, abyste byli připraveni na místní elektrickou infrastrukturu." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - Elektrické zásuvky END -->

                                                </div>
                                                <div class="t-grid__section -aside-place-status">

                                                    <!-- SECTION - Visited button - sidebar -->
                                                    <section class="t-section -px-world my-1">
                                                        <div class="t-section__inner">
                                                            <OrganismsVisitedButton :account="account" :place="place[0].id" placeType="state" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - Visited button - sidebar - END -->

                                                </div>
                                                <div class="t-grid__section -aside-content">

                                                    <!-- SECTION - Account banner - sidebar -->
                                                    <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                                        <div class="t-section__inner">
                                                            <OrganismsAccountBanner :account="account" styleThema=" -green" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - Account banner - sidebar END -->

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
    let preTitle = ''
    let activeTab = 'elektricke-zasuvky'
    let activeTabName = 'Elektrické zásuvky'
    let showHero = true
    // DATA API
    const place = ref([])
    const imagePlace = ref([])
    const placeContinent = ref([])
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
            status: "link"
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

        // HEAD
        if (place.value && place.value.length > 0) {
            const tab = tabs.find(tab => tab.slug === activeTab)
            const tabLabel = tab ? tab.label || '' : ''

            // Meta
            headMeta.title = `${tabLabel} použivané ve státě ${place.value[0].name || 'Stát'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = ((place.value[0].information_author?.length > 0) ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : (place.value[0].name || 'Stát')))
            headMeta.keywords = ((place.value[0].seo_tags && place.value[0].seo_tags.length > 0) ? (place.value[0].name || '') + ', ' + place.value[0].seo_tags.map(item => item.tag).join(', ') + ', stát, elektrické zásuvky, redukce, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu' : (place.value[0].name || '') + ', stát, elektrické zásuvky, redukce, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu')
            headMeta.ogImage = `${(place.value[0].id_image_hero && imagePlace.value && imagePlace.value.length > 0) ? 'https://image.frytolnacestach.cz/storage/' + imagePlace.value.find(image => image.id === place.value[0].id_image_hero).source + imagePlace.value.find(image => image.id === place.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${tabLabel} použivané ve státě ${place.value[0].name || 'Stát'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = ((place.value[0].information_author?.length > 0) ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : (place.value[0].name || 'Stát')))
            headMeta.ogUrl = `https://www.frytolnacestach.cz/svet/stat/${place.value[0].slug}${activeTab !== 'default' ? `/${activeTab}` : ''}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]

            // Script
            headJsonld.name = place.value[0].name || ''
            headJsonld.description = ((place.value[0].information_author?.length > 0) ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ''))
            headJsonld.image = ((imagePlace.value && imagePlace.value.length > 0 && imagePlace.value[0].id) ? (`https://image.frytolnacestach.cz/storage/world/states/${imagePlace.value[0].name}.webp`) : '')
            headJsonld.area.value = place.value[0].area || ''
            headJsonld.population.value = place.value[0].population || ''
        }

        // SET PAGE
        preTitle = `${activeTabName} použivané ve státě`
    }
    await useAsyncData('dataAPI', () => loadData())

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