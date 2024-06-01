<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsEventArray" :item="event[0]" v-if="event && event.length > 0" />
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
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')" v-if="event && event.length > 0">
                                <OrganismsHeroItemDetail :item="event" :images="imageEvent" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')" v-if="event && event.length > 0">
                                <OrganismsMapGoogle :place="event" />
                            </div>
                            <!-- SECTION - map - END -->

                        </div>
                    </div>
                </section>
                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content mb-4">

                                <!-- SECTION - information -->
                                <section class="t-section" v-if="event && event.length > 0 && event[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'O události ' + (event[0].name ? event[0].name : '')" :perexWysiwyg="event[0].description" authorName="Michal Fryč (frytolnacestach)" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information END -->

                                <!-- SECTION - prices -->
                                <section class="t-section my-4 print-section" v-if="event && event.length > 0 && event[0].prices && event[0].prices.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Cena akce" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <OrganismsPrices :items="event[0].prices" />
                                    </div>
                                </section>
                                <!-- SECTION - prices END -->

                                <!-- SECTION - Ubytování - information -->
                                <section class="t-section print-section" v-if="event && event.length > 0 && event[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'Ubytování blízko události ' + (event[0].name ? event[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." />
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování - information END -->

                                <!-- SECTION - Ubytování -->
                                <section class="t-section -px-world py-2 hidden-print" v-if="event && event.length > 0 && placeCity && placeCity.length > 0 && event[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <div v-for="coordinate in event[0].coordinates">
                                            <OrganismsAffilateBooking 
                                                :landmarkName="`${ placeCity[0].name ? placeCity[0].name : '' }`"
                                                :address="`${ placeCity[0].name ? placeCity[0].name : '' }`"
                                                :latitude=parseFloat(coordinate.latitude)
                                                :longitude=parseFloat(coordinate.longitude)
                                                :zoom=event[0].zoom[0].booking
                                                :dateStart=event[0].date_start
                                                :dateEnd=event[0].date_end
                                            />
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování END -->

                            </div>
                            <div class="t-grid__section -ad">
                                
                                <!-- SECTION - Date of Event - sidebar -->
                                <section class="t-section -px-world my-2 print-section" v-if="(event && event.length > 0 && event[0].date_start) || (event && event.length > 0 && event[0].date_end)">
                                    <div class="t-section__inner">
                                        <OrganismsDateOfEvent :dateStart="event[0].date_start" :dateEnd="event[0].date_end" />
                                    </div>
                                </section>
                                <!-- SECTION - Date of Event - sidebar - END -->

                                <!-- SECTION - links -->
                                <section class="t-section -px-world my-2 print-section" v-if="event && event.length > 0 && event[0].links && event[0].links.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsLinks :items="event[0].links" />
                                    </div>
                                </section>
                                <!-- SECTION - links END -->

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
                <div class="t-layout-full" v-if="(event && event.length > 0 && event[0].id_continent) || (event && event.length > 0 && event[0].id_state) || (event && event.length > 0 && event[0].id_region) || (event && event.length > 0 && event[0].id_city) || (event && event.length > 0 && event[0].id_spot)">

                    <!-- SECTION - place -->
                    <section class="t-section -p0 pt-2 pb-1 print-section" v-if="event && event.length > 0">
                        <div class="t-section__inner">
                            <MoleculesHeadline title="Více informací o místě" styleThema=" -green" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />
                            <div class="flex mx-1">
                                <OrganismsPlaceBlock :placeID="event[0].id_continent" type="kontinent" styleThema=" -green" v-if="event[0].id_continent" />
                                <OrganismsPlaceBlock :placeID="event[0].id_state" type="stat" styleThema=" -green" v-if="event[0].id_state" />
                                <OrganismsPlaceBlock :placeID="event[0].id_region" type="region" styleThema=" -green" v-if="event[0].id_region" />
                                <OrganismsPlaceBlock :placeID="event[0].id_city" type="mesto" styleThema=" -green" v-if="event[0].id_city" />
                                <OrganismsPlaceBlock :placeID="event[0].id_spot" type="misto" styleThema=" -green" v-if="event[0].id_spot" />
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - place END -->

                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()
    
    // DATA
    const mNavBreadcrumbsEventArray = [
        {
            id: 1,
            name: "Události",
            url: "/udalost",
            status: "link"
        }
    ]   
    // DATA API
    const event = ref([])
    const imageEvent = ref([])
    const placeCity = []
    const showHero = true
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail události | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu události',
        keywords: 'Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail události | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu události',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "",
        "startDate": "",
        "endDate": "",
        "location": {
            "@type": "Place",
            "name": ""
        },
        "description": "",
        "image": ""
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
        // Event
        const eventResponse = await $fetch(`https://api.frytolnacestach.cz/api/event/${route.params.slug}`)
        const eventData = JSON.parse(eventResponse)
        event.value = eventData || []

        if (event.value && event.value.length > 0) {
            // Image (event)
            const imageEventResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${event.value[0].id_image_hero}`)
            const imageEventData = JSON.parse(imageEventResponse)
            imageEvent.value = imageEventData || []

            // PlaceCity
            if (this.event[0].id_city && this.event[0].id_city !== 0) {
                const placeCityResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-city-id/${event.value[0].id_city}`)
                const placeCityData = JSON.parse(placeCityResponse)
                placeCity.value = placeCityData || []
            }

            // META - head
            headMeta.title = `${(event.value[0].name) ? event.value[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${(event.value[0].description) ? event.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, event.value[0].description.lastIndexOf(' ', 160)) : event.value[0].name}`
            if (event.value[0].seo_tags && event.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + event.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = ((event.value[0].name) ? event.value[0].name : '') + metaSeoTags + ', událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            } else {
                headMeta.keywords = ((event.value[0].name) ? event.value[0].name : '') + ', událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            }
            headMeta.ogImage = `${(event.value[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + image.value.find(image => image.id === event.value[0].id_image_hero).source + image.value.find(image => image.id === event.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${(event.value[0].name) ? event.value[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${(event.value[0].description) ? event.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, event.value[0].description.lastIndexOf(' ', 160)) : event.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/udalost/${(event.value[0].slug) ? event.value[0].slug : 'slug_event'}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (event.value[0].name ? event.value[0].name : "")
            headJsonld.description = (event.value[0].description ? event.value[0].description : "")
            headJsonld.image = ((image.value[0] && image.value[0].id) ? ("https://image.frytolnacestach.cz/storage/events/" + image.value[0].name + ".webp") : "")
            headJsonld.startDate = (event.value[0].date_start ? event.value[0].date_start : "")
            headJsonld.endDate = (event.value[0].date_end ? event.value[0].date_end : "")
            headJsonld.location = {
                name: ((placeCity.value[0]) ? (placeCity.value[0].name ? placeCity.value[0].name : "") : "")
            }
        }               
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
</script>