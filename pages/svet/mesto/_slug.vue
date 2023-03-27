<template>
    <main>
        <div class="t-main">
            
            <!-- SECTION - hero -->
            <section>
                <div class="o-hero-article" v-bind:style="{ 'background-image': 'url(' + place[0].imageHero + ')'}">
                    <div class="o-hero-article__outer">
                        <div class="o-hero-article__inner">
                            <h1 class="o-hero-article__headline" v-if="place[0].name">{{ place[0].name }}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- SECTION - hero - END -->

            <!-- SECTION - hot info -->
            <section>
                <div class="o-hot-info">
                    <div class="o-hot-info__outer">
                        <div class="o-hot-info__inner">
                            <div class="o-hot-info__items">
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Kontinent</h4>
                                    <span class="o-hot-info__value">{{ place[0].id_continent }}</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Stát</h4>
                                    <span class="o-hot-info__value">{{ place[0].id_state }}</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Administrativní celek</h4>
                                    <span class="o-hot-info__value">{{ place[0].id_administrative_unit }}</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Kraj</h4>
                                    <span class="o-hot-info__value">{{ place[0].id_districts }}</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Nadmořská výška</h4>
                                    <span class="o-hot-info__value">{{ place[0].altitude }} m n. m.</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Rozloha</h4>
                                    <span class="o-hot-info__value">{{ place[0].area }} km2</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">Populace</h4>
                                    <span class="o-hot-info__value">{{ place[0].population }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- SECTION - hot info - END -->

            <!-- SECTION -->
            <div class="t-col2">
                <div class="t-col2__content my-2">
                    
                </div>

                <div class="t-col2__sidebar my-2">
                    <section class="t-section my-2">
                        <div class="t-section__inner">
                            <div class="o-ad-sidebar-article-detail">
                                <!-- sidebar-article-detail -->
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
                </div>
            </div>
            <!-- SECTION END -->

        </div>
    </main>
</template>

<script>

    export default {
        name: 'PageBlogSlug',

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
                    { hid: 'description', name: 'description', content: `${this.place[0].perex}` },
                    { property: 'og:image', content: `https://image.frytolnacestach.cz/storage/og/og-${this.place[0].slug}.jpg`} 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city/${params.slug}`)
            return { place: place }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>