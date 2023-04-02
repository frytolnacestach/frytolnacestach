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
                                <div class="o-hot-info-hero__item">
                                    <h4 class="o-hot-info-hero__title">Kontinent</h4>
                                    <span class="o-hot-info-hero__value">{{ placeContinent[0].name }}</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <h4 class="o-hot-info-hero__title">Rozloha</h4>
                                    <span class="o-hot-info-hero__value">{{ place[0].area }} km2</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <h4 class="o-hot-info-hero__title">Populace</h4>
                                    <span class="o-hot-info-hero__value">{{ place[0].population }}</span>
                                </div>
                                <!--
                                <div class="o-hot-info-hero__item">
                                    <h4 class="o-hot-info-hero__title">Počet měst</h4>
                                    <span class="o-hot-info-hero__value">{{ place[0].number_cities }}</span>
                                </div>
                                -->
                                <div class="o-hot-info-hero__item">
                                    <h4 class="o-hot-info-hero__title">MPZ</h4>
                                    <span class="o-hot-info-hero__value">{{ place[0].mpz }}</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <h4 class="o-hot-info-hero__title">TLD</h4>
                                    <span class="o-hot-info-hero__value">{{ place[0].tld }}</span>
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
                                        <h2 class="o-information-block__title">O státu {{ place[0].name }}</h2>
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

                    <!-- SECTION - Měna -->
                    <section class="t-section py-2" v-if="place[0].information_chatgpt">
                        <div class="t-section__inner">
                            <div class="o-information-block -bg-gray">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Měna</h2>
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block_wysiwyg">{{ place[0].currency_name }} ({{ place[0].currency_code }})</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Měna END -->

                    <!-- SECTION - Ceny -->
                    <section class="t-section py-2" v-if="place[0].money_prices">
                        <div class="t-section__inner">
                            <div class="o-information-block -bg-gray">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Ceny</h2>
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block__list">
                                                <ul class="o-information-block__list-ul">
                                                    <li class="o-information-block__list-li" v-for="money_price in place[0].money_prices" v-bind:key="money_price.name">
                                                        <span><strong>{{ money_price.name }}</strong> {{ money_price.price }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Ceny END -->

                    <!-- SECTION - Telefoní čísla(emergency) -->
                    <section class="t-section py-2" v-if="place[0].phone_numbers_emergency">
                        <div class="t-section__inner">
                            <div class="o-information-block -bg-gray">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Důležitá telefoní čísla</h2>
                                        <span class="o-information-block__subtitle">Telefonní předvolba {{ place[0].phone_prefix }}</span>
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block__list">
                                                <ul class="o-information-block__list-ul">
                                                    <li class="o-information-block__list-li" v-for="phone_number_emergency in place[0].phone_numbers_emergency" v-bind:key="phone_number_emergency.name">
                                                        <span><strong>{{ phone_number_emergency.name }}</strong> {{ phone_number_emergency.number }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Telefoní čísla(emergency) END -->

                    <!-- SECTION - Lidé náboženství -->
                    <section class="t-section py-2" v-if="place[0].people_religion">
                        <div class="t-section__inner">
                            <div class="o-information-block -bg-gray">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Náboženství</h2>
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block__list">
                                                <ul class="o-information-block__list-ul">
                                                    <li class="o-information-block__list-li" v-for="item in place[0].people_religion" v-bind:key="item.name">
                                                        <span><strong>{{ item.name }}</strong> {{ item.representation }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Lidé náboženství END -->

                    <!-- SECTION - Lidé vzdělání -->
                    <section class="t-section py-2" v-if="place[0].people_education">
                        <div class="t-section__inner">
                            <div class="o-information-block -bg-gray">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Vzdělání</h2>
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block__list">
                                                <ul class="o-information-block__list-ul">
                                                    <li class="o-information-block__list-li" v-for="item in place[0].people_education" v-bind:key="item.name">
                                                        <span><strong>{{ item.name }}</strong> {{ item.representation }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Lidé vzdělání END -->

                    <!-- SECTION - Lidé národnost -->
                    <section class="t-section py-2" v-if="place[0].people_nationality">
                        <div class="t-section__inner">
                            <div class="o-information-block -bg-gray">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Národnost</h2>
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block__list">
                                                <ul class="o-information-block__list-ul">
                                                    <li class="o-information-block__list-li" v-for="item in place[0].people_nationality" v-bind:key="item.name">
                                                        <span><strong>{{ item.name }}</strong> {{ item.representation }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Lidé národnost END -->

                    <!-- SECTION - Ubytování -->
                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-information-block">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <h2 class="o-information-block__title">Ubytování</h2>
                                        <div class="o-information-block__widget" v-for="coordinate in place[0].coordinates">
                                            <booking-widget 
                                                :landmarkName="`${ place[0].name }`"
                                                :address="`${ place[0].name }`"
                                                :latitude="`${ coordinate.latitude }`"
                                                :longitude="`${ coordinate.longitude }`"
                                                zoom="8"
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


            <div class="t-layout-full">
                <!-- SECTION - města -->
                <section class="t-section -bg-gray py-4">
                    <div class="t-section__inner">
                        <div class="m-headline mb-2">
                            <h2 class="m-headline__title">Největší města ve státě {{ place[0].name }}</h2>
                        </div>
                        <div class="o-cover-place-detail">
                            <div class="o-cover-place-detail__outer">
                                <div class="o-cover-place-detail__inner">
                                    <div class="o-cover-place-detail__items">
                                        <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-cover-place-detail__item">
                                            <div class="o-cover-place-detail__content">
                                                <div class="o-cover-place-detail__image">
                                                    <div class="o-cover-place-detail__image-file" v-bind:style="{ 'background-image': 'url(' + (placesCity.image_cover ? placesCity.image_cover : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }"></div>
                                                </div>
                                                <h3 class="o-cover-place-detail__name">
                                                    {{ placesCity.name }}
                                                </h3>
                                                <NuxtLink class="o-cover-place-detail__link" :to="`/svet/mesto/${placesCity.slug}`"></NuxtLink>
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

        </div>
    </main>
</template>

<script>

    import BookingWidget from '../../../components/BookingWidget.vue'

    export default {
        name: 'PageStateSlug',

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
            try {
                // Načtení místa přes API podle slug
                const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state/${params.slug}`)

                // Načtení měst státu podle jeho id
                const placesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-state/${place[0].id}`)

                // Načtení informací o continentu
                const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)

                return { place, placesCities, placeContinent }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>