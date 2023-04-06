<template>
    <main>
        <div class="t-main">
            
            <!-- SECTION - hero -->
            <section class="t-section">
                <div class="o-hero-place" v-bind:style="{ 'background-image': 'url(' + (place[0].image_hero ? place[0].image_hero : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }">
                    <div class="o-hero-place__outer">
                        <div class="o-hero-place__inner">
                            <h1 class="o-hero-place__headline" v-if="place[0].name">{{ place[0].name }}</h1>
                        </div>
                    </div>
                </div>

                <!-- SECTION - hot info -->
                <div class="js_o-hot-info-hero o-hot-info-hero">
                    <div class="o-hot-info-hero__outer">
                        <div class="o-hot-info-hero__inner">
                            <div class="o-hot-info-hero__items">
                                <!--
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Kontinent</span>
                                    <span class="o-hot-info-hero__value">{{ placeContinent[0].name }}</span>
                                </div>
                                -->
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Stát</span>
                                    <span class="o-hot-info-hero__value">{{ placeState[0].name }}</span>
                                </div>
                                <!--
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Administrativní celek</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].id_administrative_unit }}</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Kraj</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].id_districts }}</span>
                                </div>
                                -->
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Rozloha</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].area }} km2</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Nadmořská výška</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].altitude }} m n. m.</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Populace</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].population }}</span>
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
                <div class="t-col2__content my-2">

                    <!-- SECTION - information by ChatGPT -->
                    <section class="t-section py-2" v-if="place[0].information_chatgpt">
                        <div class="t-section__inner">
                            <div class="o-information-block">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">O městě {{ place[0].name }}</h2>
                                        <div class="o-information-block__perex text-align-center-mobile text-align-left-desktop">
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
                                            <booking-widget
                                                :landmarkName="`${ place[0].name }, ${ placeState[0].name }`"
                                                :address="`${ place[0].name }, ${ placeState[0].name }`"
                                                :latitude="`${ coordinate.latitude }`"
                                                :longitude="`${ coordinate.longitude }`"
                                                zoom="13"
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

        </div>
    </main>
</template>

<script>
    export default {
        name: 'PageCitySlug',

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
            }
        },

        data() {
            return {
                place: ''
            }
        },

        head() {
            return {
                title: `${this.place[0].name} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt}` },
                    { property: 'og:image', content: `https://image.frytolnacestach.cz/storage/og/og-${this.place[0].slug}.jpg`} 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                // Načtení místa přes API podle slug
                const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city/${params.slug}`)

                // Načtení informací o státu
                const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${place[0].id_state}`)

                // Načtení informací o continentu
                const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)

                return { place, placeState, placeContinent }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>