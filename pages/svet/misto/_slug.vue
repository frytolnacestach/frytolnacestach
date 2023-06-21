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
        <section class="t-section -px-world mt-1" v-if="isMobile">
            <div class="t-section__inner">
                <div class="flex flex-end-all">
                    <span v-if="!showHero" @click="showHero = true" class="a-button-pure-icon -cover">Obrázek</span>
                    <span v-else @click="showHero = false" class="a-button-pure-icon -map">Mapa</span>
                </div>
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
                        <div class="js_o-hot-info-hero o-hot-info-hero -col2">
                            <div class="o-hot-info-hero__outer">
                                <div class="o-hot-info-hero__inner">
                                    <div class="o-hot-info-hero__items">
                                        <div class="o-hot-info-hero__item -link" v-if="placeState[0].name">
                                            <div class="o-hot-info-hero__container">
                                                <div class="o-hot-info-hero__content">
                                                    <NuxtLink class="o-hot-info-hero__link" :to="`/svet/stat/${placeState[0].slug}`">
                                                        <div class="o-hot-info-hero__text">
                                                            <span class="o-hot-info-hero__title">Stát</span>
                                                            <span class="o-hot-info-hero__value">
                                                                {{ placeState[0].name }}
                                                            </span>
                                                        </div>
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-hot-info-hero__item" v-if="place[0].altitude">
                                            <div class="o-hot-info-hero__container">
                                                <div class="o-hot-info-hero__content">
                                                    <div class="o-hot-info-hero__text">
                                                        <span class="o-hot-info-hero__title">Nadmořská výška</span>
                                                        <span class="o-hot-info-hero__value">{{ place[0].altitude !== 0 ? place[0].altitude.toLocaleString('cs-CZ') : place[0].altitude }} m n. m.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SECTION - hot info - END -->

                </div>
            </div>
        </section>
        <!-- SECTION - hero + hot info - END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-content-with-ad">
                    
                    <div class="t-grid__section -content">
                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="place[0].information_chatgpt">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O místě ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->
                    </div>


                    <div class="t-grid__section -ad">
                        <!-- SECTION - Visited button - sidebar -->
                        <section class="t-section -px-world">
                            <div class="t-section__inner">
                                <oVisitedButton :place="this.place[0].id" placeType="spot" />
                            </div>
                        </section>
                        <!-- SECTION - Visited button - sidebar - END -->

                        <!-- SECTION - Events - sidebar -->
                        <oSidebarList :place="this.place[0].id" type="spot" />
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


        <section class="t-section -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-ful">
                    <div class="t-grid__section -content">

                       <!-- SECTION - videos -->
                       <section class="t-section -p0 -bg-extra-dark-gray py-4" v-if="videos[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Videa z místa" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleAlign=" -p-left" />
                            </div>
                        </section>
                        <!-- SECTION - videos END -->

                        <!-- SECTION - articles -->
                        <section class="t-section -p0 -bg-extra-dark-gray py-4" v-if="posts[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Články z místa" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleAlign=" -p-left" />
                            </div>
                        </section>
                        <!-- SECTION - articles END -->

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oSidebarList from '~/components/organisms/oSidebarList.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'

    export default {
        name: 'SvetMistoSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAdGoogleSidebar,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oInformationBlock,
            oMapGoogle,
            oSidebarList,
            oVideoList,
            oVisitedButton
        },

        data() {
            return {
                place: this.place,
                placeContinent: this.placeContinent,
                placeState: this.placeState,
                placeCity: this.placeCity,
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
                        url: "/svet/",
                        status: "link"
                    },
                    {
                        id: 7,
                        icon: false,
                        type: "city",
                        name: "Město",
                        url: "/svet/mesto",
                        status: "link"
                    },
                    {
                        id: 8,
                        icon: true,
                        type: "spot",
                        name: "Místa",
                        url: "/svet/misto",
                        status: "link"
                    },
                    {
                        id: 9,
                        icon: false,
                        type: "spot",
                        name: "Místa",
                        url: "/svet/misto",
                        status: "span"
                    }
                ]
            }
        },

        methods:{
            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992;
            },
        },

        mounted() {
            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992;

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize);

            //Data for mNavBreadcrumbsPlaceArray 
            //continent
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 3) {
                    item.name = this.placeContinent[0].name;
                    item.url = "/svet/kontinent/" + this.placeContinent[0].slug;
                }
                return item;
            });
            //state
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 5) {
                    item.name = this.placeState[0].name;
                    item.url = "/svet/stat/" + this.placeState[0].slug;
                }
                return item;
            });
            //city
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 7) {
                    item.name = this.placeCity[0].name;
                    item.url = "/svet/mesto/" + this.placeCity[0].slug;
                }
                return item;
            });
            //region
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 9) {
                    item.name = this.place[0].name;
                    item.url = "/svet/misto/" + this.place[0].slug;
                }
                return item;
            });
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize);
        },

        head() {
            return {
                title: `${this.place[0].name ? this.place[0].name : 'Místo'} | Cestovatelský portál Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name}` },
                    { name: 'keywords', content: `${this.place[0].name + ', místo, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.place[0].name ? this.place[0].name : 'Místo'} | Cestovatelský portál Frytol na cestách` },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Místo'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/misto/${this.place[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // PAGE - Spot detail
                    // Place
                    const place = await $axios.$get(`https://api.frytolnacestach.cz/api/places-spot/${params.slug}`)
                    // Image
                    const imagePlace = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${place[0].id_image_hero}`)
                    // PlaceCity
                    const placeCity = await $axios.$get(`https://api.frytolnacestach.cz/api/places-city-id/${place[0].id_city}`)
                    // PlaceState
                    const placeState = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state-id/${place[0].id_state}`)
                    // PlaceContinent
                    const placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${placeState[0].id_continent}`)


                    // COMPONENT - oVideoList
                    // Videos
                    const videos = await $axios.$get(`https://api.frytolnacestach.cz/api/videos-id-spot/${place[0].id}`)
                    // Images
                    let imagesVideos
                    if ( videos !== null) {
                        const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                        imagesVideos = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosID.join(',')}`)
                    } else {
                        imagesVideos = null
                    }


                    // COMPONENT - oArticleList
                    // Posts
                    const posts = await $axios.$get(`https://api.frytolnacestach.cz/api/posts-id-spot/${place[0].id}`)
                    // Images
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
                        placeCity,
                        placeState,
                        placeContinent,
                        videos,
                        imagesVideos,
                        posts,
                        imagesPosts
                    }
                    

                    success = true
                } catch (error) {
                    console.log(`API ERROR - MÍSTO DETAIL: ${params.slug}`)
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