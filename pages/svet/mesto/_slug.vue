<template>
    <main class="t-main -green -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" />
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
                        <oHeroPlace :place="place" :images="imagePlace" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - map -->
                    <div class="t-grid__section -map" v-show="!isMobile || (isMobile && !showHero)">
                        <oMapGoogle :place="place" />
                    </div>
                    <!-- SECTION - map - END -->

                    <!-- SECTION - hot info -->
                    <div class="t-grid__section -hot-info-hero">
                        <oHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col4"/>
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

        <!-- SECTION - Alerts -->
        <section class="t-section -px-world-big -p0" v-if="placeState[0].alerts">
            <div class="t-section__inner">
                <oAlerts :alerts="placeState[0].alerts" />
            </div>
        </section>
        <!-- SECTION - Alerts END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-content-with-ad">
                    
                    <div class="t-grid__section -content">
                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="place[0].information_chatgpt && !place[0].information_author?.length > 0">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O městě ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - information by Author -->
                        <section class="t-section" v-if="place[0].information_author?.length > 0">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O městě ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" authorName="Michal Fryč" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" />
                            </div>
                        </section>
                        <!-- SECTION - information by Author END -->

                        <!-- SECTION - Place teaser -->
                        <section class="t-section my-2 -p0">
                            <div class="t-section__inner">
                                <oPlaceTeaser :headline="'Město ' + place[0].name + ' se nachází ve státě ' + placeState[0].name" :place="placeState" :image="imageState" type="stat" />
                            </div>
                        </section>
                        <!-- SECTION - Place teaser END -->

                        <!-- SECTION - Place teaser spots -->
                        <oPlaceTeaserSpots :headline="'Co vidět ve městě ' + place[0].name" :IDplace="place[0].id" v-if="place[0]" type="city" styleGap=" my-4" />
                        <!-- SECTION - Place teaser spots END -->

                        <!-- SECTION - Ubytování - information -->
                        <section class="t-section pb-2">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Ubytování ve městě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." v-if="place[0].affiliate.find(x => x.name === 'booking').value === true" />
                                <oInformationBlock :title="'Ubytování ve městě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Bohužel o ubytování v tomhle městě vám zatím moc neporadíme" v-else />
                            </div>
                        </section>
                        <!-- SECTION - Ubytování - information END -->

                        <!-- SECTION - Ubytování -->
                        <section class="t-section -px-world py-2 hidden-print" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true">
                            <div class="t-section__inner">
                                <div v-if="place[0].coordinates">
                                    <div v-for="coordinate in place[0].coordinates">
                                        <oWidgetBooking
                                            :landmarkName="`${ place[0].name ? place[0].name : '' }, ${ placeState[0].name ? placeState[0].name : '' }`"
                                            :address="`${ place[0].name ? place[0].name : '' }, ${ placeState[0].name ? placeState[0].name : '' }`"
                                            :latitude="`${ coordinate.latitude }`"
                                            :longitude="`${ coordinate.longitude }`"
                                            zoom=13
                                        />
                                    </div>
                                </div>
                                <div v-else>
                                    <div v-for="coordinate in placeState[0].coordinates">
                                        <oWidgetBooking
                                            :landmarkName="`${ placeState[0].name ? placeState[0].name : '' }`"
                                            :address="`${ placeState[0].name ? placeState[0].name : '' }`"
                                            :latitude="`${ coordinate.latitude }`"
                                            :longitude="`${ coordinate.longitude }`"
                                            zoom=13
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - Ubytování END -->

                        <!-- SECTION - Review -->
                        <oReviewItem :IDplace="place[0].id" type="city" v-if="place[0].id" />
                        <!-- SECTION - Review END -->
                
                    </div>

                    <div class="t-grid__section -ad">
                        <!-- SECTION - Visited button - sidebar -->
                        <section class="t-section -px-world">
                            <div class="t-section__inner">
                                <oVisitedButton :place="this.place[0].id" placeType="city" />
                            </div>
                        </section>
                        <!-- SECTION - Visited button - sidebar - END -->

                        <!-- SECTION - Account banner - sidebar -->
                        <section class="t-section -px-world my-1">
                            <div class="t-section__inner">
                                <oAccountBanner styleThema=" -green" />
                            </div>
                        </section>
                        <!-- SECTION - Account banner - sidebar END -->

                        <!-- SECTION - Parking - sidebar -->
                        <oSidebarParking :items="this.place[0].parking" />
                        <!-- SECTION - Parking - sidebar - END -->

                        <!-- SECTION - Events - sidebar -->
                        <oSidebarList :place="this.place[0].id" type="city" />
                        <!-- SECTION - Events - sidebar - END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world my-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
                            </div>
                        </section>
                        <!-- SECTION - ad-google - sidebar - END -->
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION END -->

        <!-- SECTION Videos, All cities and Articles -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-ful">
                    <div class="t-grid__section -content">

                        <!-- SECTION - videos -->
                        <section class="t-section -p0 -bg-extra-dark-gray py-4 hidden-print" v-if="videos[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Videa z obce" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleAlign=" -p-left" />
                            </div>
                        </section>
                        <!-- SECTION - videos END -->

                        <!-- SECTION - města - all -->
                        <section class="t-section -p0 -py4 -px-world-big -h-scroll">
                            <div class="t-section__inner">
                                <mHeadline title="Další města a obce ve státě" :titleValue="placeState[0].name" :url="`/svet/mesto?filterIDstate=` + placeState[0].id" urlText="všechna města" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" />
                            </div>
                        </section>
                        <!-- SECTION - města - all - END -->

                        <!-- SECTION - articles -->
                        <section class="t-section -p0 -bg-extra-dark-gray py-4 hidden-print" v-if="posts[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Články z obce" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleAlign=" -p-left" />
                            </div>
                        </section>
                        <!-- SECTION - articles END -->
            
                     </div>
                </div>
            </div>
        </section>
         <!-- SECTION Videos, All cities and Articles END -->
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBanner from '~/components/organisms/oAccountBanner.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oPlaceTeaserSpots from '~/components/organisms/oPlaceTeaserSpots.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarList from '~/components/organisms/oSidebarList.vue'
    import oSidebarParking from '~/components/organisms/oSidebarParking.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'

    export default {
        name: 'SvetMestoSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAccountBanner,
            oAdGoogleSidebar,
            oAlerts,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oHotInfoHero,
            oInformationBlock,
            oMapGoogle,
            oPlaceTeaserSpots,
            oPlaceTeaser,
            oReviewItem,
            oSidebarList,
            oSidebarParking,
            oSwitchHero,
            oVideoList,
            oVisitedButton,
            oWidgetBooking
        },

        data() {
            return {
                place: this.place,
                placeContinent: this.placeContinent,
                placeState: this.placeState,
                placesCities: this.placesCities,
                imagePlace: this.imagePlace,
                imageState: this.imageState,
                imagesCities: this.imagesCities,
                imagesVideos: this.imagesVideos,
                imagesPosts: this.imagesPosts,
                posts: this.posts,
                videos: this.videos,
                isMobile: false,
                showHero: true,
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
                        status: "link"
                    },
                    {
                        id: 6,
                        icon: true,
                        type: "city",
                        name: "Města",
                        url: "/svet/mesto",
                        status: "link"
                    },
                    {
                        id: 7,
                        icon: false,
                        type: "city",
                        name: "Město",
                        url: "/svet/mesto",
                        status: "span"
                    }
                ],
                oHotInfoHeroArray: [
                    {
                        id: 1,
                        title: "Stát",
                        name: "_NÁZEV STÁTU_",
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
                        title: "Nadmořská výška",
                        name: "_NADMOŘSKÁ VÝŠKA_",
                        type: "number",
                        subfix: " m n. m."
                    },
                    {
                        id: 4,
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
            }
        },

        mounted() {
            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize)

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
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 5) {
                    item.name = this.placeState[0].name
                    item.url = "/svet/stat/" + this.placeState[0].slug
                }
                return item
            })
            //city
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 7) {
                    item.name = this.place[0].name
                    item.url = "/svet/mesto/" + this.place[0].slug
                }
                return item
            })

            //Data for oHotInfoHero
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 1) {
                    item.name = this.placeState[0].name
                    item.url = `/svet/stat/${this.placeState[0].slug}`
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
                    item.name = this.place[0].altitude
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 4) {
                    item.name = this.place[0].population
                }
                return item
            })
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize);
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
            title = `${this.place[0].name ? this.place[0].name : 'Město'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Město'}`

            // keywolds
            let metaSeoTags
            if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', město, cestování, svět, cestovatelský portál, jaké další města tu jsou, plánování cesty, dovolená, pravidla, kultura, ceny'
            
            // ogImage
            ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet/mesto${this.place[0].slug}`

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

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - City detail
                    // Place
                    const place = await $axios.$get(`https://api.frytolnacestach.cz/api/places-city/${params.slug}`)
                    // Image
                    const imagePlace = place[0].id_image_hero && place[0].id_image_hero !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${place[0].id_image_hero}`) : []
                    // PlaceState
                    const placeState = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state-id/${place[0].id_state}`)
                    // Image - state
                    const imageState = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeState[0].id_image_hero}`)
                    // PlaceContinent
                    const placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${placeState[0].id_continent}`)


                    // COMPONENT - oCoverPlaceDetail
                    // PlaceCities
                    const placesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/places-cities-id-state/${placeState[0].id}?showType=list`)
                    // Image
                    let imagesCities
                    const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
                    if ( imagesPlacesCitiesID  !== null) {
                        imagesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)
                    } else {
                        imagesCities = null
                    }


                    // COMPONENT - oVideoList
                    // Videos
                    const videos = await $axios.$get(`https://api.frytolnacestach.cz/api/videos-id-city/${place[0].id}`)
                    // Image
                    let imagesVideos
                    if ( videos !== null) {
                        const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                        imagesVideos = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosID.join(',')}`)
                    } else {
                        imagesVideos = null
                    }


                    // COMPONENT - oArticleList
                    // Posts
                    const posts = await $axios.$get(`https://api.frytolnacestach.cz/api/posts-id-city/${place[0].id}`)
                    // Image
                    let imagesPosts
                    if ( videos !== null) {
                        const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                        imagesPosts = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsID.join(',')}`)
                    } else {
                        imagesPosts = null
                    }


                    data = {
                        place,
                        imagePlace,
                        placeState,
                        imageState,
                        placeContinent,
                        placesCities,
                        imagesCities,
                        videos,
                        imagesVideos,
                        posts,
                        imagesPosts
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - MĚSTO DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        }
    }
</script>