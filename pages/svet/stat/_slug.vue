<template>
    <main class="t-main -bg-world -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" />
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
                                        <div class="o-hot-info-hero__item" v-if="placeContinent[0].name">
                                            <div class="o-hot-info-hero__content">
                                                <div class="o-hot-info-hero__text">
                                                    <span class="o-hot-info-hero__title">Kontinent</span>
                                                    <span class="o-hot-info-hero__value">
                                                        <NuxtLink class="o-hot-info-hero__value-link" :to="`/svet/kontinent/${placeContinent[0].slug}`">{{ placeContinent[0].name }}</NuxtLink>
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
    
        <!-- SECTION - Nav place -->
        <section class="t-section -px-world-big -p0" v-if="place[0]">
            <div class="t-section__inner">
                
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

            </div>
        </section>
         <!-- SECTION - Nav place END -->

        <div class="t-main -tab" v-if="place[0]">
            <template v-if="activeTab === 'default'">
                
                <!-- SECTION -->
                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="place[0].information_chatgpt">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'O státu ' + place[0].name ? place[0].name : ''" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <div class="t-grid -world-information-adjacent">
                                    <div class="t-grid__section">
                                        <!-- SECTION - Měna -->
                                        <section class="t-section" v-if="place[0].currency_name">
                                            <div class="t-section__inner">
                                                <oInformationBlock title="Měna" :subtitle="place[0].currency_name" :perexWysiwyg="place[0].currency_code ? place[0].currency_code : ''" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - Měna END -->
                                    </div>

                                    <div class="t-grid__section">
                                        <!-- SECTION - MPZ -->
                                        <section class="t-section" v-if="place[0].mpz">
                                            <div class="t-section__inner">
                                                <oInformationBlock title="MPZ" subtitle="Mezinárodní poznávací značka" :perexWysiwyg="place[0].mpz" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - MPZ END -->
                                    </div>

                                    <div class="t-grid__section">
                                        <!-- SECTION - TLD -->
                                        <section class="t-section" v-if="place[0].tld">
                                            <div class="t-section__inner">
                                                <oInformationBlock title="TLD" subtitle="Národní internetová domána" :perexWysiwyg="place[0].tld" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - TLD END -->
                                    </div>
                                </div>

                                <!-- SECTION - navštevníci - podmínky vstupu -->
                                <section class="t-section" v-if="place[0].visitors_entry">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Podmínky cesty do země" :perexList="place[0].visitors_entry" styleThema=" -py1 -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - navštevníci - podmínky vstupu END -->
                        
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

                <!-- SECTION -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-ful">
                            <div class="t-grid__section -content">

                                <!-- SECTION - města - Biggest -->
                                <section class="t-section -p0 -py4 -px-world-big -h-scroll">
                                    <div class="t-section__inner">
                                        <mHeadline title="Největší města ve státě" :titleValue="place[0].name" styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" />
                                        <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" biggest="big" />
                                    </div>
                                </section>
                                <!-- SECTION - města - Biggest - END -->

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-extra-dark-gray py-4" v-if="videos[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleAlign=" -p-left" />
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->

                                <!-- SECTION - města - menší -->
                                <section v-if="hasCitiesToShow" class="t-section -p0 -py4 -px-world-big -h-scroll">
                                    <div class="t-section__inner">
                                        <mHeadline title="Další města a obce ve státě" :titleValue="place[0].name" styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" />
                                        <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" biggest="nobig" />
                                    </div>
                                </section>
                                <!-- SECTION - města - menší - END -->

                                <!-- SECTION - articles -->
                                <section class="t-section -p0 -bg-extra-dark-gray py-4" v-if="posts[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Články ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleAlign=" -p-left" />
                                    </div>
                                </section>
                                <!-- SECTION - articles END -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- SECTION END -->

            </template>
            <template v-if="activeTab === 'ceny'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <div class="t-grid -world-information-adjacent">
                                    <div class="t-grid__section">
                                        <!-- SECTION - Měna -->
                                        <section class="t-section" v-if="place[0].currency_name">
                                            <div class="t-section__inner">
                                                <oInformationBlock title="Měna" :subtitle="place[0].currency_name" :perexWysiwyg="place[0].currency_code ? place[0].currency_code : ''" styleThema=" -bg-world" />
                                            </div>
                                        </section>
                                        <!-- SECTION - Měna END -->
                                    </div>
                                </div>

                                <!-- SECTION - Ceny -->
                                <section class="t-section" v-if="place[0].money_prices">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Ceny" :perexList="place[0].money_prices" perexInfo="Ceny se můžou lišit v rámci sézony, místa a nebo míry a rychosti infalce. uvedená cena dálniční známky je ta nejnižší nabízená a může se ve skutečnosti razantně lišit." styleThema=" -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - Ceny END -->

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
            </template>
            <template v-else-if="activeTab === 'lide'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - Lidé náboženství -->
                                <section class="t-section" v-if="place[0].people_religion">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Náboženství" :perexList="place[0].people_religion" styleThema=" -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - Lidé náboženství END -->

                                <!-- SECTION - Lidé vzdělání -->
                                <section class="t-section" v-if="place[0].people_education">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Vzdělání" :perexList="place[0].people_education" styleThema=" -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - Lidé vzdělání END -->

                                <!-- SECTION - Lidé národnost -->
                                <section class="t-section" v-if="place[0].people_nationality">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Národnost" :perexList="place[0].people_nationality" styleThema=" -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - Lidé národnost END -->
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
            </template>
            <template v-else-if="activeTab === 'cesta'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - navštevníci - podmínky vstupu -->
                                <section class="t-section" v-if="place[0].visitors_entry">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Podmínky cesty do země" :perexList="place[0].visitors_entry" styleThema=" -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - navštevníci - podmínky vstupu END -->

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
            </template>
            <template v-else-if="activeTab === 'kontakty'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - Telefoní čísla(emergency) -->
                                <section class="t-section" v-if="place[0].phone_numbers_emergency">
                                    <div class="t-section__inner">
                                        <oInformationBlock title="Důležitá telefonní čísla" :subtitle="'Telefonní předvolba' + place[0].phone_prefix" :perexListNumber="place[0].phone_numbers_emergency" styleThema=" -bg-world -no-point" />
                                    </div>
                                </section>
                                <!-- SECTION - Telefoní čísla(emergency) END -->

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
            </template>
            <template v-else-if="activeTab === 'ubytovani'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - Ubytování -->
                                <section class="t-section py-2 px-2">
                                    <div class="t-section__inner">
                                        <mHeadline title="Ubytování" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <div v-for="coordinate in place[0].coordinates">
                                            <oWidgetBooking 
                                                :landmarkName="`${ place[0].name ? place[0].name : '' }`"
                                                :address="`${ place[0].name ? place[0].name : '' }`"
                                                :latitude="`${ coordinate.latitude }`"
                                                :longitude="`${ coordinate.longitude }`"
                                                zoom="8"
                                            />
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
            </template>
            <template v-else-if="activeTab === 'videa'">
                <!-- SECTION -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-ful">
                            <div class="t-grid__section -content">
                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-extra-dark-gray py-4" v-if="videos[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleAlign=" -p-left" />
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- SECTION END -->
            </template>
        </div>
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
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'


    export default {
        name: 'PageStateSlug',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAdGoogleSidebar,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oInformationBlock,
            oVideoList,
            oWidgetBooking
        },

        methods:{
            getTabLink(tab) {
                return {
                    name: 'stat-slug-tab',
                    params: { slug: this.$route.params.slug, tab: tab.slug },
                }
            }
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
                activeTabName: 'PLACE_NAME',
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
                        name: "Státy",
                        url: "/svet/stat",
                        status: "link"
                    }
                ]
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
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${metaTitle}` },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(3, 163) : this.place[0].name ? this.place[0].name : 'Stát'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/stat/${this.place[0].slug}${this.activeTab !== 'default' ? `/${this.activeTab}` : ''}` },
                    { hid: 'og:type', content: 'website' }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                // Načtení místa přes API podle slug
                const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state/${params.slug}`)

                // Načtení měst státu podle jeho id
                const placesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-id-state/${place[0].id}`)
                const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '');

                // Načtení informací o continentu
                const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)

                // Načtení videi z místa
                const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-state/${place[0].id}`)
                const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '');

                // Načtení článků z místa
                const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts-id-state/${place[0].id}`)
                const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '');


                // Načtení informací o obrázku pro místo
                const imagePlace = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${place[0].id_image_hero}`)

                // Načtení informací o obrázku pro státy
                const imagesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)

                // Načtení informací o obrázku pro videa
                const imagesVideos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesVideosID.join(',')}`)

                // Načtení informací o obrázku pro čláky
                const imagesPosts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPostsID.join(',')}`)

                return { place, placesCities, placeContinent, videos, posts, imagePlace, imagesCities, imagesVideos, imagesPosts }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
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
                }
            },

            activeTab: function(newActiveTab) {
                const selectedTab = this.tabs.find(tab => tab.slug === newActiveTab);
                this.activeTabName = selectedTab.label;
            }
        },
    }
</script>