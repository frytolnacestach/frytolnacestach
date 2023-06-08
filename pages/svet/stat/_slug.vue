<template>
    <main class="t-main -green -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" />
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
                        <div class="js_o-hot-info-hero o-hot-info-hero">
                            <div class="o-hot-info-hero__outer">
                                <div class="o-hot-info-hero__inner">
                                    <div class="o-hot-info-hero__items">
                                        <div class="o-hot-info-hero__item -link" v-if="placeContinent[0].name">
                                            <div class="o-hot-info-hero__container">
                                                <div class="o-hot-info-hero__content">
                                                    <NuxtLink class="o-hot-info-hero__link" :to="`/svet/kontinent/${placeContinent[0].slug}`">
                                                        <div class="o-hot-info-hero__text">
                                                            <span class="o-hot-info-hero__title">Kontinent</span>
                                                            <span class="o-hot-info-hero__value">
                                                                {{ placeContinent[0].name }}
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
                                        <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - Place teaser -->
                                <section class="t-section my-2 -p0" v-if="place[0].id_city_main">
                                    <div class="t-section__inner">
                                        <oPlaceTeaser :headline="'Hlavním městem ve státě ' + place[0].name + ' je ' + placeCityMain[0].name" :place="placeCityMain" :image="imageCityMain" type="mesto" />
                                    </div>
                                </section>
                                <!-- SECTION - Place teaser END -->

                                <!-- SECTION - Neighboring Place list -->
                                <section class="t-section my-2 py-1 -p0" v-if="placesStatesNeighboring">
                                    <div class="t-section__inner">
                                        <mHeadline title="Sousední státy státu " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oCoverItemState :items="placesStatesNeighboring" :images="imagesStatesNeighboring" type="svet/stat" />
                                    </div>
                                </section>
                                <!-- SECTION - Neighboring Place list END -->
                                
                                <!-- SECTION - Food -->
                                <section class="t-section my-2 py-1 -p0" v-if="foods[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Tradiční jídla ve státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oCoverItemState :items="foods" :images="imagesFoods" type="jidlo" />
                                    </div>
                                </section>
                                <!-- SECTION - Food END -->

                                <!-- SECTION - Fauna list -->
                                <section class="t-section my-2 py-1 -p0" v-if="fauna[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Nebezpečná Fauna ve státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oCoverItemState :items="fauna" :images="imagesFauna" type="fauna" />
                                    </div>
                                </section>
                                <!-- SECTION - Fauna list END -->

                                <!-- SECTION - Flora list -->
                                <section class="t-section my-2 py-1 -p0" v-if="flora[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Nebezpečná Flóra ve státě " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oCoverItemState :items="flora" :images="imagesFlora" type="flora" />
                                    </div>
                                </section>
                                <!-- SECTION - Flora list END -->

                                <!-- SECTION - Značky list -->
                                <section class="t-section my-2 py-1 -p0" v-if="brands[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Značky a výrobky ze státu " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oCoverItemState :items="brands" :images="imagesBrands" type="znacka" />
                                    </div>
                                </section>
                                <!-- SECTION - Flora Značky END -->
                        
                            </div>

                            <div class="t-grid__section -ad">

                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                                <!-- SECTION - Měna -->
                                <section class="t-section" v-if="place[0].currency_name">
                                    <div class="t-section__inner">
                                        <oBlockItem title="Měna" :subtitle="place[0].currency_name" :perexWysiwyg="place[0].currency_code ? place[0].currency_code : ''" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - Měna END -->

                                <!-- SECTION - MPZ -->
                                <section class="t-section" v-if="place[0].mpz">
                                    <div class="t-section__inner">
                                        <oBlockItem title="MPZ" subtitle="Mezinárodní poznávací značka" :perexWysiwyg="place[0].mpz" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - MPZ END -->

                                <!-- SECTION - TLD -->
                                <section class="t-section" v-if="place[0].tld">
                                    <div class="t-section__inner">
                                        <oBlockItem title="TLD" subtitle="Národní internetová domána" :perexWysiwyg="place[0].tld" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - TLD END -->

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
                                <section class="t-section -p0 -py4 -px-world-big -h-scroll" v-if="placesCities[0]">
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
                                <section class="t-section -p0 -py4 -px-world-big -h-scroll" v-if="hasCitiesToShow">
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

                                <!-- SECTION - Ceny -->
                                <section class="t-section" v-if="place[0].money_prices">
                                    <div class="t-section__inner">
                                        <mHeadline title="Ceny v zemi" perex="Ceny se můžou lišit v rámci sézony, místa a nebo míry a rychosti infalce. Proto je berte jen jako orientační." styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oBlockList :items="place[0].money_prices" :perexListItemValueSubfix="place[0].currency_code" />
                                    </div>
                                </section>
                                <!-- SECTION - Ceny END -->

                                <!-- SECTION - Ceny ubytování -->
                                <section class="t-section mt-4" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'Ubytování ve státě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Jestli vás zajímá cena ubytování v této zemi. Kouknete se do záložky ubytování, kde najdete aktuální cenu ubytování na platformě Booking." />
                                    </div>
                                </section>
                                <!-- SECTION - Ceny END -->

                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                                <!-- SECTION - Měna -->
                                <section class="t-section" v-if="place[0].currency_name">
                                    <div class="t-section__inner">
                                        <oBlockItem title="Měna" :subtitle="place[0].currency_name" :perexWysiwyg="place[0].currency_code ? place[0].currency_code : ''" styleThema=" -bg-world" />
                                    </div>
                                </section>
                                <!-- SECTION - Měna END -->

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
                                <section class="t-section -px-world -p0" v-if="place[0].people_religion">
                                    <div class="t-section__inner">
                                        <oChartPie :data="place[0].people_religion" title="Náboženství" chartID="chart-nabozenstvi" />
                                    </div>
                                </section>
                                <!-- SECTION - Lidé náboženství END -->

                                <!-- SECTION - Lidé národnost -->
                                <section class="t-section -px-world -p0" v-if="place[0].people_nationality">
                                    <div class="t-section__inner">
                                        <oChartPie :data="place[0].people_nationality" title="Národnosti" chartID="chart-narodnosti" />
                                    </div>
                                </section>
                                <!-- SECTION - Lidé národnost END -->
                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

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

                                <!-- SECTION - Podmínky vstupu -->
                                <section class="t-section" v-if="place[0].visitors_entry">
                                    <div class="t-section__inner">
                                        <mHeadline title="Podmínky cesty do země" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oBlockList :items="place[0].visitors_entry" />
                                    </div>
                                </section>
                                <!-- SECTION - Podmínky vstupu END -->

                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

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
                                        <mHeadline title="Důležitá telefonní čísla" :perex="'Telefonní předvolba: ' + place[0].phone_prefix" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oBlockList :items="place[0].phone_numbers_emergency" />
                                    </div>
                                </section>
                                <!-- SECTION - Telefoní čísla(emergency) END -->

                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

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

                                <!-- SECTION - Ubytování - information -->
                                <section class="t-section">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'Ubytování ve státě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." v-if="place[0].affiliate.find(x => x.name === 'booking').value === true" />
                                        <oInformationBlock :title="'Ubytování ve státě ' + (place[0].name ? place[0].name : '')" perexWysiwyg="Bohužel o ceně ubytování v tomhle státě vám zatím moc neporadíme." v-else />
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování - information END -->

                                <!-- SECTION - Ubytování -->
                                <section class="t-section -px-world py-2" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <div v-for="coordinate in place[0].coordinates">
                                            <oWidgetBooking 
                                                :landmarkName="`${ place[0].name ? place[0].name : '' }`"
                                                :address="`${ place[0].name ? place[0].name : '' }`"
                                                :latitude=parseFloat(coordinate.latitude)
                                                :longitude= parseFloat(coordinate.longitude)
                                                :zoom=place[0].zoom[0].booking
                                            />
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování END -->

                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

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
                                <section class="t-section -p0 -px-world my-2" v-if="videos[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world-tab" styleAlign=" -p-left" />
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
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oBlockItem from '~/components/organisms/oBlockItem.vue'
    import oBlockList from '~/components/organisms/oBlockList.vue'
    import oCoverItemState from '~/components/organisms/oCoverItemState.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oChartPie from '@/components/organisms/oChartPie.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'


    export default {
        name: 'SvetStatSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAdGoogleSidebar,
            oAlerts,
            oArticleList,
            oBlockItem,
            oBlockList,
            oCoverItemState,
            oCoverPlaceDetail,
            oHeroPlace,
            oInformationBlock,
            oMapGoogle,
            oChartPie,
            oPlaceTeaser,
            oVideoList,
            oVisitedButton,
            oWidgetBooking
        },

        data() {
            return {
                place: this.place,
                placesStatesNeighboring: this.placesStatesNeighboring,
                placeContinent: this.placeContinent,
                placesCities: this.placesCities,
                placeCityMain: this.placeCityMain,
                brands: this.brands,
                foods: this.foods,
                fauna: this.fauna,
                flora: this.flora,
                videos: this.videos,
                posts: this.posts,
                imagePlace: this.imagePlace,
                imageBrands: this.imageBrands,
                imagesStatesNeighboring: this.imagesStatesNeighboring,
                imagesCities: this.imagesCities,
                imageCityMain: this.imageCityMain,
                imagesVideos: this.imagesVideos,
                imagesPosts: this.imagesPosts,
                activeTab: 'default',
                activeTabName: 'PLACE_NAME',
                isMobile: false,
                showHero: true,
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
                        status: "span"
                    }
                ],
                educationData: [
                    {
                    name: "Neúplné základní vzdělání",
                    value: "0.3%"
                    },
                    {
                    name: "Základní vzdělání",
                    value: "16.7%"
                    },
                    {
                    name: "Střední vzdělání",
                    value: "37.4%"
                    },
                    {
                    name: "Vysokoškolské vzdělání",
                    value: "45.6%"
                    },
                    {
                    name: "Jiné vzdělání",
                    value: "0.1%"
                    }
                ]
            }
        },

        methods:{
            getTabLink(tab) {
                return {
                    name: 'stat-slug-tab',
                    params: { slug: this.$route.params.slug, tab: tab.slug },
                }
            },

            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992;
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
                const hasTabHotel = this.place[0].affiliate.find(x => x.name === 'booking').value;
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
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}` },
                    { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${metaTitle}` },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/stat/${this.place[0].slug}${this.activeTab !== 'default' ? `/${this.activeTab}` : ''}` },
                    { hid: 'og:type', content: 'website' }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) { 
                try {

                    let placeCityMain = null;
                    let imageCityMain = null;
                    let placesStatesNeighboring = null;
                    let imagesStatesNeighboring = null;


                    // Načtení místa přes API podle slug
                    const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state/${params.slug}`)

                    if (place[0].ids_neighboring_countries !== null ) {
                        //other Array
                        const idsNeighboringCountries = place[0].ids_neighboring_countries.map(item => item.id);

                        // Načtení informací sousedních státech
                        placesStatesNeighboring = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states-array?id=${idsNeighboringCountries.join(',')}`)
                    }

                    // Načtení informací o continentu
                    const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${place[0].id_continent}`)

                    // Načtení měst státu podle jeho id
                    const placesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-id-state/${place[0].id}`)

                    // Načtení hlavního města podle jeho id
                    if (place[0].id_city_main !== null) {
                        placeCityMain = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city-id/${place[0].id_city_main}`)
                    }

                    // Načtení značek z místa
                    const brands = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/brands-id-state/${place[0].id}`)

                    // Načtení jídla z místa
                    const foods = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/foods-id-state/${place[0].id}`)

                    // Načtení fauny z místa
                    const fauna = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/faunas-id-state/${place[0].id}`)

                    // Načtení flory z místa
                    const flora = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/floras-id-state/${place[0].id}`)

                    // Načtení videi z místa
                    const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-state/${place[0].id}`)

                    // Načtení článků z místa
                    const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts-id-state/${place[0].id}`)


                    //images Array
                    const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesBrandsID = brands.map(brand => brand.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesFoodsID = foods.map(food => food.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesFaunaID = fauna.map(fauna => fauna.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesFloraID = flora.map(flora => flora.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                    const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')

                    // Načtení informací o obrázku pro místo
                    const imagePlace = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${place[0].id_image_hero}`)

                    // Načtení informací o obrázku pro sousední státy
                    if (placesStatesNeighboring !== null ) {
                        const imagesplaceStatesNeighboringID = placesStatesNeighboring.map(placesStateNeighboring => placesStateNeighboring.id_image_cover).filter(id => id !== null && id !== '')
                        imagesStatesNeighboring = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesplaceStatesNeighboringID.join(',')}`)
                    }

                    // Načtení informací o obrázku pro státy
                    const imagesCities = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)

                    // Načtení informací o obrázku pro místo
                    if (place[0].id_city_main !== null && placeCityMain && placeCityMain[0].id_image_cover !== null ) {
                        imageCityMain = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeCityMain[0].id_image_cover}`)
                    }

                    // Načtení informací o obrázku pro značky
                    const imagesBrands = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesBrandsID.join(',')}`)

                    // Načtení informací o obrázku pro jídla
                    const imagesFoods = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesFoodsID.join(',')}`)

                    // Načtení informací o obrázku pro faunu
                    const imagesFauna = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesFaunaID.join(',')}`)

                    // Načtení informací o obrázku pro floru
                    const imagesFlora = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesFloraID.join(',')}`)

                    // Načtení informací o obrázku pro videa
                    const imagesVideos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesVideosID.join(',')}`)

                    // Načtení informací o obrázku pro čláky
                    const imagesPosts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPostsID.join(',')}`)


                    data = { place, placesStatesNeighboring, placeContinent, placesCities, placeCityMain, brands, foods, fauna, flora, videos, posts, imagePlace, imagesStatesNeighboring, imagesCities, imageCityMain, imagesBrands, imagesFoods, imagesFauna, imagesFlora, imagesVideos, imagesPosts }

                    success = true
                } catch (error) {
                    console.log(`API ERROR - STÁT DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
            return data;
        },

        mounted() {
            this.activeTab = this.$route.params.tab || 'default';

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
            if(this.activeTab === 'undefined' || this.activeTab === 'default') {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name;
                        item.url = "/svet/stat/" + this.place[0].slug;
                        item.status = "span"
                    }
                    return item;
                });
            } else {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name;
                        item.url = "/svet/stat/" + this.place[0].slug;
                        item.status = "link"
                    }
                    return item;
                });
            }
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize);
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