<template>
    <main>
        <div class="t-main">
            
            <!-- SECTION - hero -->
            <section>
                <div class="o-hero-article" v-bind:style="{ 'background-image': 'url(' + (place[0].image_hero ? place[0].image_hero : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }">
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
                                    <h4 class="o-hot-info__title">Počet měst</h4>
                                    <span class="o-hot-info__value">{{ place[0].number_cities }}</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">MPZ</h4>
                                    <span class="o-hot-info__value">{{ place[0].mpz }}</span>
                                </div>
                                <div class="o-hot-info__item">
                                    <h4 class="o-hot-info__title">TLD</h4>
                                    <span class="o-hot-info__value">{{ place[0].tld }}</span>
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

                    <!-- SECTION - information by ChatGPT -->
                    <section class="t-section py-2" v-if="place[0].information_chatgpt">
                        <div class="t-section__inner">
                            <div class="o-information-block">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">O státu {{ place[0].name }}</h2>
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
                    
                    <!-- SECTION - města -->
                    <section class="t-section my-4">
                        <div class="t-section__inner">
                            <div class="m-headline mb-2 text-align-center">
                                <h2 class="m-headline__title">Největší města ve státě {{ place[0].name }}</h2>
                            </div>
                            <div class="o-place-list">
                                <div class="o-place-list__outer">
                                    <div class="o-place-list__items">
                                        <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-place-list__item">
                                            <div class="o-place-list__item-inner">
                                                <div class="o-place-list__text">
                                                    <h3 class="o-place-list__title">
                                                        <NuxtLink class="o-place-list__title-link" :to="`/svet/mesto/${placesCity.slug}`">{{ placesCity.name }}</NuxtLink>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - města - END -->

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
            const [place, placesCities] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state/${params.slug}`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities`)
            ]);
            return { place, placesCities };
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>