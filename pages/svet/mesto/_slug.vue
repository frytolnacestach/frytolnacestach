<template>
    <main class="t-main">
        
        <!-- SECTION - hero -->
        <section class="t-section">

            <oHeroPlace :place="place" :images="images" />

            <!-- SECTION - hot info -->
            <div class="js_o-hot-info-hero o-hot-info-hero">
                <div class="o-hot-info-hero__outer">
                    <div class="o-hot-info-hero__inner">
                        <div class="o-hot-info-hero__items">
                            <!--<div class="o-hot-info-hero__item" v-if="placeContinent[0].name">
                                <span class="o-hot-info-hero__title">Kontinent</span>
                                <span class="o-hot-info-hero__value">{{ placeContinent[0].name }}</span>
                            </div>-->
                            <div class="o-hot-info-hero__item" v-if="placeState[0].name">
                                <span class="o-hot-info-hero__title">Stát</span>
                                <span class="o-hot-info-hero__value">
                                    <NuxtLink class="o-hot-info-hero__value-link" :to="`svet/stat/${placeState[0].slug}`">{{ placeState[0].name }}</NuxtLink>
                                </span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].area">
                                <span class="o-hot-info-hero__title">Rozloha</span>
                                <span class="o-hot-info-hero__value">{{ place[0].area !== 0 ? place[0].area.toLocaleString('cs-CZ') : place[0].area }} km²</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].altitude">
                                <span class="o-hot-info-hero__title">Nadmořská výška</span>
                                <span class="o-hot-info-hero__value">{{ place[0].altitude !== 0 ? place[0].altitude.toLocaleString('cs-CZ') : place[0].altitude }} m n. m.</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].population">
                                <span class="o-hot-info-hero__title">Populace</span>
                                <span class="o-hot-info-hero__value">{{ place[0].population !== 0 ? place[0].population.toLocaleString('cs-CZ') : place[0].population }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SECTION - hot info - END -->
        </section>
        <!-- SECTION - hero - END -->

        <!-- SECTION -->
        <div class="t-col2">
            <div class="t-col2__content my-2"  v-if="place[0]">

                <!-- SECTION - information by ChatGPT -->
                <section class="t-section py-2" v-if="place[0].information_chatgpt">
                    <div class="t-section__inner">
                        <div class="o-information-block">
                            <div class="o-information-block__outer">
                                <div class="o-information-block__inner">
                                    <h2 class="o-information-block__title">O městě {{ place[0].name ? place[0].name : '' }}</h2>
                                    <div class="o-information-block__perex">
                                        <div class="o-information-block_wysiwyg" v-html="place[0].information_chatgpt"></div>
                                        <div class="o-information-block__author">
                                            <i class="m-author">zdroj. <a class="m-author__link" href="https://chat.openai.com/chat" target="_blank">ChatGPT</a></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- SECTION - information by ChatGPT END -->

                <!-- SECTION - Ubytování -->
                <section class="t-section py-2">
                    <div class="t-section__inner">
                        <div class="o-information-block">
                            <div class="o-information-block__outer">
                                <div class="o-information-block__inner">
                                    <h2 class="o-information-block__title">Ubytování</h2>
                                    <div class="o-information-block__widget" v-for="coordinate in placeState[0].coordinates">
                                        <oWidgetBooking
                                            :landmarkName="`${ place[0].name ? place[0].name : '' }, ${ placeState[0].name ? placeState[0].name : '' }`"
                                            :address="`${ place[0].name ? place[0].name : '' }, ${ placeState[0].name ? placeState[0].name : '' }`"
                                            :latitude="`${ coordinate.latitude }`"
                                            :longitude="`${ coordinate.longitude }`"
                                            zoom=13
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- SECTION - Ubytování END -->
                
            </div>

            <div class="t-col2__sidebar my-2">
                <!-- SECTION - ad-google - sidebar -->
                <section class="t-section my-2">
                    <div class="t-section__inner">
                        <div class="o-ad-google-sidebar">
                            <ins class="adsbygoogle"
                                :style="adStyle"
                                :data-ad-client="adClient"
                                :data-ad-slot="adSlot"
                                :data-ad-format="adFormat"
                                :data-full-width-responsive="adResponsive">
                            </ins>
                        </div>
                    </div>
                </section>
                <!-- SECTION - ad-google - sidebar - END -->
            </div>
        </div>
        <!-- SECTION END -->

        <div class="t-layout-full" v-if="place[0]">
            
            <!-- SECTION - videos -->
            <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="videos[0]">
                <div class="t-section__inner">
                    <mHeadline title="Videa z obce" :titleValue="place[0].name" styleThema=" -dark" styleAlign=" -p-left" styleGap=" mb-2" />
                    <oVideoList :videos="videos" :images="images" type="travel" styleThema=" -dark" styleAlign=" -p-left" />
                </div>
            </section>
            <!-- SECTION - videos END -->

            <!-- SECTION - města - all -->
            <section class="t-section -bg-gray py-4">
                <div class="t-section__inner">
                    <mHeadline title="Další města a obce ve státě" :titleValue="placeState[0].name" styleAlign=" -p-left" styleGap=" mb-2" />
                    <oCoverPlaceDetail :places="placesCities" :images="images" type="mesto" />
                </div>
            </section>
            <!-- SECTION - města - all - END -->

            <!-- SECTION - articles -->
            <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="posts[0]">
                <div class="t-section__inner">
                    <mHeadline title="Články z obce" :titleValue="place[0].name" styleThema=" -dark" styleAlign=" -p-left" styleGap=" mb-2" />
                    <oArticleList :posts="posts" :images="images" styleThema=" -dark" styleAlign=" -p-left" />
                </div>
            </section>
            <!-- SECTION - articles END -->
            
        </div>
    </main>
</template>

<script>

    import mHeadline from '~/components/molecules/mHeadline.vue.js'
    import oArticleList from '~/components/organisms/oArticleList.vue.js'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue.js'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue.js'
    import oVideoList from '~/components/organisms/oVideoList.vue.js'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue.js'

    export default {
        name: 'PageCitySlug',

        components: {
            mHeadline,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oVideoList,
            oWidgetBooking
        },

        props: {
            adStyle: {
                type: String,
                requred: false,
                default: "display:block"
            },

            adClient: {
                type: String,
                requred: false,
                default: "ca-pub-5217753750259737"
            },

            adSlot: {
                type: String,
                requred: false,
                default: "5043852899"
            },

            adFormat: {
                type: String,
                requred: false,
                default: "auto"
            },

            adResponsive: {
                type: String,
                requred: false,
                default: "true"
            }
            
        },

        methods:{
            adsenseAddLoad(){
                let inlineScript   = document.createElement("script");
                inlineScript.type  = "text/javascript";
                inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
                document.getElementsByTagName('body')[0].appendChild(inlineScript);
            },
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('cs', options)
            },
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            }
        },

        data() {
            return {
                place: this.place,
                placesCities: this.placesCities,
                posts: this.posts,
                images: this.images,
                videos: this.videos
            }
        },

        head() {
            return {
                title: `${this.place[0].name ? this.place[0].name : 'Město'}  | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(3, 163) : this.place[0].name ? this.place[0].name : 'Město'}` },
                    { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + ', město, cestování, svět'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.images.find(image => image.id === this.place[0].id_image_hero).source + this.images.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/og-default.png'}`} 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                // Načtení místa přes API podle slug
                const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city/${params.slug}`)

                // Načtení informací o státu
                const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${place[0].id_state}`)

                // Načtení měst státu podle jeho id
                const placesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-state/${placeState[0].id}`)

                // Načtení informací o continentu
                const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)

                // Načtení videi z místa
                const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-city/${place[0].id}`)

                // Načtení článků z místa
                const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts-id-city/${place[0].id}`)

                // Načtení informací o obrázku
                const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)

                return { place, placeState, placesCities, placeContinent, videos, posts, images }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
            this.adsenseAddLoad();
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        }
    }
</script>