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
                            <div class="o-hot-info-hero__item" v-if="placeContinent[0].name">
                                <span class="o-hot-info-hero__title">Kontinent</span>
                                <span class="o-hot-info-hero__value">{{ placeContinent[0].name }}</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].area">
                                <span class="o-hot-info-hero__title">Rozloha</span>
                                <span class="o-hot-info-hero__value">{{ place[0].area !== 0 ? place[0].area.toLocaleString('cs-CZ') : place[0].area }} km²</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].population">
                                <span class="o-hot-info-hero__title">Populace</span>
                                <span class="o-hot-info-hero__value">{{ place[0].population !== 0 ? place[0].population.toLocaleString('cs-CZ') : place[0].population }}</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].number_cities">
                                <span class="o-hot-info-hero__title">Počet měst</span>
                                <span class="o-hot-info-hero__value">{{ place[0].number_cities }}</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].mpz">
                                <span class="o-hot-info-hero__title">MPZ</span>
                                <span class="o-hot-info-hero__value">{{ place[0].mpz }}</span>
                            </div>
                            <div class="o-hot-info-hero__item" v-if="place[0].tld">
                                <span class="o-hot-info-hero__title">TLD</span>
                                <span class="o-hot-info-hero__value">{{ place[0].tld }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SECTION - hot info - END -->
        </section>
        <!-- SECTION - hero - END -->

        <section class="t-section" v-if="place[0]">
            <div class="m-nav-place">
                <div class="m-nav-place__outer">
                    <div class="m-nav-place__inner">
                        <ul class="m-nav-place__items">
                            <li class="m-nav-place__item" v-for="tab in tabs" :key="tab.slug">
                                <nuxt-link :to="`/svet/stat/${ place[0].slug }`" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug }" v-if="tab.slug === 'default'">
                                    {{ place[0].name ? place[0].name : 'Stát' }}
                                </nuxt-link>
                                <nuxt-link :to="getTabLink(tab)" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug }" v-if="tab.slug !== 'default' && tab.visible === true">
                                    {{ tab.label }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div class="t-main -tab" v-if="place[0]">
            <template v-if="activeTab === 'default'">
                
                <!-- SECTION -->
                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section py-2" v-if="place[0].information_chatgpt">
                            <div class="t-section__inner">
                                <div class="o-information-block">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">O státu {{ place[0].name ? place[0].name : '' }}</h2>
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
                        <section class="t-section py-2" v-if="place[0].currency_name">
                            <div class="t-section__inner">
                                <div class="o-information-block -bg-gray">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Měna</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block_wysiwyg">{{ place[0].currency_name }} {{ place[0].currency_code ? '(' + place[0].currency_code + ')' : '' }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - Měna END -->

                        <!-- SECTION - navštevníci - podmínky vstupu -->
                        <section class="t-section py-2" v-if="place[0].visitors_entry">
                            <div class="t-section__inner">
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Podmínky cesty do země</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block__list">
                                                    <ul class="o-information-block__list-ul">
                                                        <li class="o-information-block__list-li" v-for="item in place[0].visitors_entry" v-bind:key="item.name">
                                                            <span><strong>{{ item.name }}</strong> {{ item.value }} <i class="o-information-block__list-info">({{ item.date_update }})</i></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - navštevníci - podmínky vstupu END -->
                
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

                    <!-- SECTION - města - Biggest -->
                    <section class="t-section -bg-gray py-4">
                        <div class="t-section__inner">
                            <mHeadline title="Největší města ve státě" :titleValue="place[0].name" styleAlign=" -p-left" styleGap=" mb-2" />
                            <oCoverPlaceDetail :places="placesCities" :images="images" type="mesto" biggest="big" />
                        </div>
                    </section>
                    <!-- SECTION - města - Biggest - END -->

                    <!-- SECTION - videos -->
                    <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="videos[0]">
                        <div class="t-section__inner">
                            <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -dark" styleAlign=" -p-left" styleGap=" mb-2" />
                            <oVideoList :videos="videos" :images="images" type="travel" styleThema=" -dark" styleAlign=" -p-left" />
                        </div>
                    </section>
                    <!-- SECTION - videos END -->

                    <!-- SECTION - města - menší -->
                    <section v-if="hasCitiesToShow" class="t-section -bg-gray py-4">
                        <div class="t-section__inner">
                            <mHeadline title="Další města a obce ve státě" :titleValue="place[0].name" styleAlign=" -p-left" styleGap=" mb-2" />
                            <oCoverPlaceDetail :places="placesCities" :images="images" type="mesto" biggest="nobig" />
                        </div>
                    </section>
                    <!-- SECTION - města - menší - END -->

                    <!-- SECTION - articles -->
                    <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="posts[0]">
                        <div class="t-section__inner">
                            <mHeadline title="Články ze státu" :titleValue="place[0].name" styleThema=" -dark" styleAlign=" -p-left" styleGap=" mb-2" />
                            <oArticleList :posts="posts" :images="images" styleThema=" -dark" styleAlign=" -p-left" />
                        </div>
                    </section>
                    <!-- SECTION - articles END -->

                </div>
            </template>
            <template v-if="activeTab === 'ceny'">
                <!-- SECTION -->
                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - Měna -->
                        <section class="t-section py-2" v-if="place[0].currency_name">
                            <div class="t-section__inner">
                                <div class="o-information-block -bg-gray">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Měna</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block_wysiwyg">{{ place[0].currency_name }} {{ place[0].currency_code ? '(' + place[0].currency_code + ')' : '' }}</div>
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
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Ceny</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block__list">
                                                    <ul class="o-information-block__list-ul">
                                                        <li class="o-information-block__list-li" v-for="money_price in place[0].money_prices" v-bind:key="money_price.name">
                                                            <span><strong>{{ money_price.name }}</strong> {{ money_price.value }} {{ place[0].currency_name }} {{ place[0].currency_code ? '(' + place[0].currency_code + ')' : '(Místní měna)' }} <i class="o-information-block__list-info">({{ money_price.date_update }})</i></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <i class="o-information-block__info">Ceny se můžou lišit v rámci sézony, místa a nebo míry a rychosti infalce. uvedená cena dálniční známky je ta nejnižší nabízená a může se ve skutečnosti razantně lišit.</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - Ceny END -->

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
            </template>
            <template v-else-if="activeTab === 'lide'">
                <!-- SECTION -->
                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - Lidé náboženství -->
                        <section class="t-section py-2" v-if="place[0].people_religion">
                            <div class="t-section__inner">
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Náboženství</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block__list">
                                                    <ul class="o-information-block__list-ul">
                                                        <li class="o-information-block__list-li" v-for="item in place[0].people_religion" v-bind:key="item.name">
                                                            <span><strong>{{ item.name }}</strong> {{ item.value }}</span>
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
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Vzdělání</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block__list">
                                                    <ul class="o-information-block__list-ul">
                                                        <li class="o-information-block__list-li" v-for="item in place[0].people_education" v-bind:key="item.name">
                                                            <span><strong>{{ item.name }}</strong> {{ item.value }}</span>
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
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Národnost</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block__list">
                                                    <ul class="o-information-block__list-ul">
                                                        <li class="o-information-block__list-li" v-for="item in place[0].people_nationality" v-bind:key="item.name">
                                                            <span><strong>{{ item.name }}</strong> {{ item.value }}</span>
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
            </template>
            <template v-else-if="activeTab === 'cesta'">
                <!-- SECTION -->
                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - navštevníci - podmínky vstupu -->
                        <section class="t-section py-2" v-if="place[0].visitors_entry">
                            <div class="t-section__inner">
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Podmínky cesty do země</h2>
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block__list">
                                                    <ul class="o-information-block__list-ul">
                                                        <li class="o-information-block__list-li" v-for="item in place[0].visitors_entry" v-bind:key="item.name">
                                                            <span><strong>{{ item.name }}</strong> {{ item.value }} <i class="o-information-block__list-info">({{ item.date_update }})</i></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - navštevníci - podmínky vstupu END -->

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
            </template>
            <template v-else-if="activeTab === 'kontakty'">
                <!-- SECTION -->
                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - Telefoní čísla(emergency) -->
                        <section class="t-section py-2" v-if="place[0].phone_numbers_emergency">
                            <div class="t-section__inner">
                                <div class="o-information-block -bg-gray -no-point">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Důležitá telefonní čísla</h2>
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
            </template>
            <template v-else-if="activeTab === 'ubytovani'">
                <!-- SECTION -->
                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - Ubytování -->
                        <section class="t-section py-2">
                            <div class="t-section__inner">
                                <div class="o-information-block">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <h2 class="o-information-block__title">Ubytování</h2>
                                            <div class="o-information-block__widget" v-for="coordinate in place[0].coordinates">
                                                <booking-widget 
                                                    :landmarkName="`${ place[0].name ? place[0].name : '' }`"
                                                    :address="`${ place[0].name ? place[0].name : '' }`"
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
            </template>
            <template v-else-if="activeTab === 'videa'">
                <!-- SECTION -->
                <div class="t-layout-full">

                    <!-- SECTION - videos -->
                    <section class="t-section pt-4 py-2 px-2" v-if="videos[0]">
                        <div class="t-section__inner">
                            <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -dark" styleAlign=" -p-left" styleGap=" mb-2" />
                            <oVideoList :videos="videos" :images="images" type="travel" styleThema=" -dark" styleAlign=" -p-left" />
                        </div>
                    </section>
                    <!-- SECTION - videos END -->

                </div>
                <!-- SECTION END -->
            </template>
        </div>
    </main>
</template>

<script>

    import mHeadline from '@/components/mHeadline.vue'
    import BookingWidget from '@/components/BookingWidget.vue'
    import oArticleList from '@/components/oArticleList.vue'
    import oCoverPlaceDetail from '@/components/oCoverPlaceDetail.vue'
    import oHeroPlace from '@/components/oHeroPlace.vue'
    import oVideoList from '@/components/oVideoList.vue'

    export default {
        name: 'PageStateSlug',

        components: {
            BookingWidget,
            mHeadline,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oVideoList
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
            },
            getTabLink(tab) {
                return {
                    name: 'stat-slug-tab',
                    params: { slug: this.$route.params.slug, tab: tab.slug },
                };
            },
        },

        computed: {
            hasCitiesToShow() {
                return this.placesCities.some(place => place.biggest !== 'yes');
            },
            updatedTabs() {
                const hasTabDefault = true;
                const hasTabPrice = this.place[0] && (!!this.place[0].currency_name || !!this.place[0].money_prices);
                const hasTabPeople = this.place[0] && (!!this.place[0].people_religion || !!this.place[0].people_education || !!this.place[0].people_nationality);
                const hasTabTrip = this.place[0] && (!!this.place[0].visitors_entry);
                const hasTabContacts = this.place[0] && (!!this.place[0]?.phone_numbers_emergency);
                const hasTabHotel = true;
                const hasTabVideos = this.place[0] && (!!this.videos[0]);

                const newTabs = [
                    { slug: 'default', label: 'Výchozí', visible: hasTabDefault },
                    { slug: 'ceny', label: 'Ceny', visible: hasTabPrice },
                    { slug: 'lide', label: 'Lidé', visible: hasTabPeople },
                    { slug: 'cesta', label: 'Cesta', visible: hasTabTrip },
                    { slug: 'kontakty', label: 'Kontakty', visible: hasTabContacts },
                    { slug: 'ubytovani', label: 'Ubytování', visible: hasTabHotel },
                    { slug: 'videa', label: 'Videa', visible: hasTabVideos },
                ];

                this.tabs = newTabs;
            }

        },

        data() {
            return {
                place: this.place,
                placesCities: this.placesCities,
                activeTab: 'default',
                tabs: [
                    { slug: 'default', label: 'state_name', visible: false },
                    { slug: 'ceny', label: 'Ceny', visible: false },
                    { slug: 'lide', label: 'Lidé', visible: false },
                    { slug: 'cesta', label: 'Cesta', visible: false },
                    { slug: 'kontakty', label: 'Kontakty', visible: false },
                    { slug: 'ubytovani', label: 'Ubytování', visible: false },
                    { slug: 'videa', label: 'Videa', visible: false },
                ],
                posts: this.posts,
                images: this.images,
                videos: this.videos
            }
        },

        head() {
            const tab = this.tabs.find(tab => tab.slug === this.activeTab);
            const label = tab.label;
            var metaTitle = ''

            if (label == '' || tab.slug === 'default') {
                metaTitle = `${this.place[0].name ? this.place[0].name : 'Stát'}  | Frytol na cestách`
            } else {
                metaTitle = `${label} ve státě ${this.place[0].name ? this.place[0].name : ''} | Frytol na cestách`
            }

            return {
                title: `${metaTitle}`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(3, 163) : this.place[0].name ? this.place[0].name : 'Stát'}` },
                    { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + ', stát, ceny, ubytování, lidé a kultura, cestování, svět'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.images.find(image => image.id === this.place[0].id_image_hero).source + this.images.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/og-default.png'}`} 
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

                // Načtení videi z místa
                const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-state/${place[0].id}`)

                // Načtení článků z místa
                const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts-id-state/${place[0].id}`)

                // Načtení informací o obrázku
                const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
                
                return { place, placesCities, placeContinent, videos, posts, images }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
            this.adsenseAddLoad();
            this.activeTab = this.$route.params.tab || 'default';
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        },

        watch: {
            updatedTabs: {
                immediate: true,
                handler() {
                    const defaultTab = this.tabs.find(tab => tab.slug === 'default');
                    const visibleTabs = this.tabs.filter(tab => tab.visible);
                    const activeTab = visibleTabs.length > 0 ? visibleTabs[0] : defaultTab;
                    this.activeTab = activeTab.slug;
                },
            },
        },
    }
</script>