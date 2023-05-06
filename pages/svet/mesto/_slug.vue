<template>
    <main class="t-main -bg-world -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->
        
        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-place">
                        <oHeroPlace :place="place" :images="imagePlace" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - hot info -->
                    <div class="t-grid__section -hot-info-hero">
                        <div class="js_o-hot-info-hero o-hot-info-hero">
                            <div class="o-hot-info-hero__outer">
                                <div class="o-hot-info-hero__inner">
                                    <div class="o-hot-info-hero__items">
                                        <div class="o-hot-info-hero__item" v-if="placeState[0].name">
                                            <div class="o-hot-info-hero__content">
                                                <div class="o-hot-info-hero__text">
                                                    <span class="o-hot-info-hero__title">Stát</span>
                                                    <span class="o-hot-info-hero__value">
                                                        <NuxtLink class="o-hot-info-hero__value-link" :to="`/svet/stat/${placeState[0].slug}`">{{ placeState[0].name }}</NuxtLink>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-hot-info-hero__item" v-if="place[0].area">
                                            <div class="o-hot-info-hero__content">
                                                <div class="o-hot-info-hero__text">
                                                    <span class="o-hot-info-hero__title">Rozloha</span>
                                                    <span class="o-hot-info-hero__value">{{ place[0].area !== 0 ? place[0].area.toLocaleString('cs-CZ') : place[0].area }} km²</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-hot-info-hero__item" v-if="place[0].altitude">
                                            <div class="o-hot-info-hero__content">
                                                <div class="o-hot-info-hero__text">
                                                    <span class="o-hot-info-hero__title">Nadmořská výška</span>
                                                    <span class="o-hot-info-hero__value">{{ place[0].altitude !== 0 ? place[0].altitude.toLocaleString('cs-CZ') : place[0].altitude }} m n. m.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-hot-info-hero__item" v-if="place[0].population">
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
                                <oInformationBlock :title="'O městě ' + place[0].name ? place[0].name : ''" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
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

                        <!-- SECTION - Ubytování -->
                        <section class="t-section py-2 px-2">
                            <div class="t-section__inner">
                                <mHeadline title="Ubytování" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                <div v-for="coordinate in placeState[0].coordinates">
                                    <oWidgetBooking
                                        :landmarkName="`${ place[0].name ? place[0].name : '' }, ${ placeState[0].name ? placeState[0].name : '' }`"
                                        :address="`${ place[0].name ? place[0].name : '' }, ${ placeState[0].name ? placeState[0].name : '' }`"
                                        :latitude="`${ coordinate.latitude }`"
                                        :longitude="`${ coordinate.longitude }`"
                                        zoom=13
                                    />
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - Ubytování END -->
                
                    </div>

                    <div class="t-grid__section -ad">

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section my-2">
                            <div class="t-section__inner">
                                
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
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'

    export default {
        name: 'PageCitySlug',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oInformationBlock,
            oPlaceTeaser,
            oVideoList,
            oWidgetBooking
        },

        data() {
            return {
                place: this.place,
                placesCities: this.placesCities,
                posts: this.posts,
                videos: this.videos,
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

        head() {
            return {
                title: `${this.place[0].name ? this.place[0].name : 'Město'}  | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(3, 163) : this.place[0].name ? this.place[0].name : 'Město'}` },
                    { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + ', město, cestování, svět'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.place[0].name ? this.place[0].name : 'Město'}  | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(3, 163) : this.place[0].name ? this.place[0].name : 'Město'}` },
                    { hid: 'og:url', content: `https://frytolnacestach.cz${this.$route.fullPath}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {

                // Načtení města
                const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city/${params.slug}`)

                // Načtení informací o státu
                const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${place[0].id_state}`)

                // Načtení informací o kontinentu
                const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)


                // Načtení dalších měst ve státě 
                const placesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-id-state/${placeState[0].id}`)
                const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '');

                // Načtení videi z místa
                const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-city/${place[0].id}`)
                const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '');

                // Načtení článků z místa
                const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts-id-city/${place[0].id}`)
                const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '');


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

                return { place, placeState, placeContinent, placesCities, videos, posts, imagePlace, imageState, imagesCities, imagesVideos, imagesPosts }
            } catch (error) {
                console.error(error)
            }
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        }
    }
</script>