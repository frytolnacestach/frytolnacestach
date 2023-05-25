<template>
    <main class="t-main -bg-world -pt-menu" role="main">
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
                    <a v-if="!showHero" @click="showHero = true" class="a-button-pure-icon -cover">Obrázek</a>
                    <a v-else @click="showHero = false" class="a-button-pure-icon -map">Mapa</a>
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
                        <div class="js_o-hot-info-hero o-hot-info-hero -col4">
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
                                        <div class="o-hot-info-hero__item" v-if="place[0].area">
                                            <div class="o-hot-info-hero__container">
                                                <div class="o-hot-info-hero__content">
                                                    <div class="o-hot-info-hero__text">
                                                        <span class="o-hot-info-hero__title">Rozloha</span>
                                                        <span class="o-hot-info-hero__value">{{ place[0].area !== 0 ? place[0].area.toLocaleString('cs-CZ') : place[0].area }} km²</span>
                                                    </div>
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
                                        <div class="o-hot-info-hero__item" v-if="place[0].population">
                                            <div class="o-hot-info-hero__container">
                                                <div class="o-hot-info-hero__content">
                                                    <div class="o-hot-info-hero__text">
                                                        <span class="o-hot-info-hero__title">Populace</span>
                                                        <span class="o-hot-info-hero__value">{{ place[0].population !== 0 ? place[0].population.toLocaleString('cs-CZ') : place[0].population }}</span>
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
                        <section class="t-section" v-if="place[0].information_chatgpt">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O městě ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - Place teaser -->
                        <section class="t-section my-2 -p0">
                            <div class="t-section__inner">
                                <oPlaceTeaser :headline="'Město ' + place[0].name + ' se nachází ve státě ' + placeState[0].name" :place="placeState" :image="imageState" type="stat" />
                            </div>
                        </section>
                        <!-- SECTION - Place teaser END -->

                        <!-- SECTION - Ubytování - information -->
                        <section class="t-section pb-2">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Ubytování ve městě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." v-if="place[0].affiliate.find(x => x.name === 'booking').value === true" />
                                <oInformationBlock :title="'Ubytování ve městě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Bohužel o ubytování v tomhle městě vám zatím moc neporadíme" v-else />
                            </div>
                        </section>
                        <!-- SECTION - Ubytování - information END -->

                        <!-- SECTION - Ubytování -->
                        <section class="t-section -px-world py-2" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true">
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
                
                    </div>

                    <div class="t-grid__section -ad">
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
                                <mHeadline title="Videa z obce" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleAlign=" -p-left" />
                            </div>
                        </section>
                        <!-- SECTION - videos END -->

                        <!-- SECTION - města - all -->
                        <section class="t-section -p0 -py4 -px-world-big -h-scroll">
                            <div class="t-section__inner">
                                <mHeadline title="Další města a obce ve státě" :titleValue="placeState[0].name" styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" />
                                <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" />
                            </div>
                        </section>
                        <!-- SECTION - města - all - END -->

                        <!-- SECTION - articles -->
                        <section class="t-section -p0 -bg-extra-dark-gray py-4" v-if="posts[0]">
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
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'

    export default {
        name: 'SvetMestoSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAdGoogleSidebar,
            oAlerts,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oInformationBlock,
            oMapGoogle,
            oPlaceTeaser,
            oVideoList,
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
                        name: "Svět",
                        url: "/svet",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "Města",
                        url: "/svet/mesto",
                        status: "link"
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
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize);
        },

        head() {
            return {
                title: `${this.place[0].name ? this.place[0].name : 'Město'}  | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Město'}` },
                    { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + ', město, cestování, svět'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.place[0].name ? this.place[0].name : 'Město'}  | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Město'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/mesto${this.place[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // Načtení města
                    const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city/${params.slug}`)

                    // Načtení informací o kontinentu
                    const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)

                    // Načtení informací o státu
                    const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${place[0].id_state}`)

                    // Načtení dalších měst ve státě 
                    const placesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-id-state/${placeState[0].id}`)

                    // Načtení videi z místa
                    const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-city/${place[0].id}`)

                    // Načtení článků z místa
                    const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts-id-city/${place[0].id}`)


                    //images Array
                    const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                    const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')


                    // Načtení informací o obrázku pro místo
                    const imagePlace = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${place[0].id_image_hero}`)

                    // Načtení informací o obrázku pro stát
                    const imageState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeState[0].id_image_hero}`)

                    // Načtení informací o obrázku pro města
                    const imagesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)

                    // Načtení informací o obrázku pro videa
                    const imagesVideos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesVideosID.join(',')}`)

                    // Načtení informací o obrázku pro čláky
                    const imagesPosts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPostsID.join(',')}`)


                    data = { place, placeContinent, placeState, placesCities, videos, posts, imagePlace, imageState, imagesCities, imagesVideos, imagesPosts }
                    
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
            window.lazySizes && window.lazySizes.update();
        }
    }
</script>