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
        <section class="t-section -px-world mt-1 -p0 hidden-print" v-if="isMobile">
            <div class="t-section__inner">
                <oSwitchHero :show-hero.sync="showHero" />
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
                        <oHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3"/>
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
                <mNavPlace :tabs="tabs" :place="place[0]" />
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
                                <section class="t-section" v-if="place[0].information_chatgpt && !place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - information by Author -->
                                <section class="t-section" v-if="place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'O státu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" authorName="Michal Fryč" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" />
                                    </div>
                                </section>
                                <!-- SECTION - information by Author END -->

                                <!-- SECTION - Place teaser -->
                                <section class="t-section my-2 -p0 print-section" v-if="place[0].id_city_main">
                                    <div class="t-section__inner">
                                        <oPlaceTeaser :headline="'Hlavním městem ve státě ' + place[0].name + ' je ' + placeCityMain[0].name" :place="placeCityMain" :image="imageCityMain" type="mesto" />
                                    </div>
                                </section>
                                <!-- SECTION - Place teaser END -->

                                <!-- SECTION - Neighboring Place list -->
                                <section class="t-section my-2 py-1 -p0 print-section" v-if="placesStatesNeighboring">
                                    <div class="t-section__inner">
                                        <mHeadline title="Sousední státy státu " :titleValue="place[0].name" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oCoverNeighboring :items="placesStatesNeighboring" :images="imagesStatesNeighboring" />
                                    </div>
                                </section>
                                <!-- SECTION - Neighboring Place list END -->
                                
                                <!-- SECTION - Food -->
                                <oCoverItemState type="jidlo" title="Tradiční jídla ve státě" :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                                <!-- SECTION - Food END -->

                                <!-- SECTION - Fauna list -->
                                <oCoverItemState type="fauna" title="Nebezpečná Fauna ve státě" :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                                <!-- SECTION - Fauna list END -->

                                <!-- SECTION - Flora list -->
                                <oCoverItemState type="flora" title="Nebezpečná Flóra ve státě" :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                                <!-- SECTION - Flora list END -->

                                <!-- SECTION - Značky list -->
                                <oCoverItemState type="znacka" title="Značky a výrobky ze státu" :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place[0].id" />
                                <!-- SECTION - Flora Značky END -->

                                <!-- SECTION - Review -->
                                <oReviewItem :IDplace="place[0].id" type="state" v-if="place[0].id" />
                                <!-- SECTION - Review END -->
                        
                            </div>

                            <div class="t-grid__section -ad">

                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

                                <!-- SECTION - time - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oSidebarTime :mpz="this.place[0].mpz" />
                                    </div>
                                </section>
                                <!-- SECTION - time - sidebar - END -->

                                <section class="t-section-print">
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
                                </section>

                                <!-- SECTION - Events - sidebar -->
                                <oSidebarList :place="this.place[0].id" type="state" />
                                <!-- SECTION - Events - sidebar - END -->

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
                                <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="placesCities[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Největší města ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                        <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" importance="biggest" />
                                    </div>
                                </section>
                                <!-- SECTION - města - Biggest - END -->

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-extra-dark-gray py-4 hidden-print" v-if="videos[0]">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa ze státu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleAlign=" -p-left" />
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->

                                <!-- SECTION - města - menší -->
                                <section class="t-section -p0 -py4 -px-world-big -h-scroll print-section" v-if="hasCitiesToShow">
                                    <div class="t-section__inner">
                                        <mHeadline title="Další města a obce ve státě" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                        <oCoverPlaceDetail :places="placesCities" :images="imagesCities" type="mesto" :importance=null />
                                    </div>
                                </section>
                                <!-- SECTION - města - menší - END -->

                                <!-- SECTION - articles -->
                                <section class="t-section -p0 -bg-extra-dark-gray py-4 hidden-print" v-if="posts[0]">
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
            <template v-if="activeTab === 'co-videt'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">
                                <!-- SECTION - Place teaser spots -->
                                <oPlaceTeaserSpots :headline="'Jaké místa vidět ve státě ' + place[0].name" :IDplace="place[0].id" v-if="place[0]" type="state" styleGap=" mt-2 mb-4" />
                                <oPlaceTeaserRegions :headline="'Jaké regiony vidět ve státě ' + place[0].name" :IDplace="place[0].id" v-if="place[0]" type="state" styleGap=" mt-2 mb-4" />
                                <oPlaceTeaserCities :headline="'Jaké města vidět ve státě ' + place[0].name" :IDplace="place[0].id" v-if="place[0]" type="state" styleGap=" mt-2 mb-4" />
                                <!-- SECTION - Place teaser spots END -->
                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

                                <!-- SECTION - Events - sidebar -->
                                <oSidebarList :place="this.place[0].id" type="state" />
                                <!-- SECTION - Events - sidebar - END -->

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
            <template v-if="activeTab === 'ceny'">
                <!-- SECTION -->
                <section class="t-section -px-world -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - Ceny -->
                                <section class="t-section" v-if="place[0].money_prices">
                                    <div class="t-section__inner">
                                        <mHeadline title="Ceny v zemi" perex="Ceny se můžou lišit v rámci sézony, místa a nebo míry a rychlosti inflace. Proto je berte jen jako orientační." styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
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

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

                                <section class="t-section-print">
                                    <!-- SECTION - Měna -->
                                    <section class="t-section" v-if="place[0].currency_name">
                                        <div class="t-section__inner">
                                            <oBlockItem title="Měna" :subtitle="place[0].currency_name" :perexWysiwyg="place[0].currency_code ? place[0].currency_code : ''" styleThema=" -bg-world" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Měna END -->
                                </section>

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

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

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

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

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

                                <!-- SECTION - Organizace -->
                                <section class="t-section mt-4" v-if="place[0].organization">
                                    <div class="t-section__inner">
                                        <mHeadline title="Organizace ve kterých se stát nachází" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oOrganizationList :items="this.place[0].organization" />
                                    </div>
                                </section>
                                <!-- SECTION - Organizace END -->
                            </div>

                            <div class="t-grid__section -ad">
                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oVisitedButton :place="this.place[0].id" placeType="state" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

                                <!-- SECTION - links - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oSidebarLinks :items="this.place[0].links" headline="Užitečné odkazy" />
                                    </div>
                                </section>
                                <!-- SECTION - links - sidebar - END -->

                                <!-- SECTION - apps - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oSidebarLinks :items="this.place[0].apps" headline="Užitečné aplikace" />
                                    </div>
                                </section>
                                <!-- SECTION - apps - sidebar - END -->

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
                                <section class="t-section -px-world py-2 hidden-print" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true">
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

                                <!-- SECTION - Account banner - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oAccountBanner styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner - sidebar END -->

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
    import mNavPlace from '~/components/molecules/mNavPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBanner from '~/components/organisms/oAccountBanner.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oBlockItem from '~/components/organisms/oBlockItem.vue'
    import oBlockList from '~/components/organisms/oBlockList.vue'
    import oCoverItemState from '~/components/organisms/oCoverItemState.vue'
    import oCoverNeighboring from '~/components/organisms/oCoverNeighboring.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oChartPie from '@/components/organisms/oChartPie.vue'
    import oOrganizationList from '~/components/organisms/oOrganizationList.vue'
    import oPlaceTeaserCities from '~/components/organisms/oPlaceTeaserCities.vue'
    import oPlaceTeaserRegions from '~/components/organisms/oPlaceTeaserRegions.vue'
    import oPlaceTeaserSpots from '~/components/organisms/oPlaceTeaserSpots.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarLinks from '~/components/organisms/oSidebarLinks.vue'
    import oSidebarList from '~/components/organisms/oSidebarList.vue'
    import oSidebarTime from '~/components/organisms/oSidebarTime.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'


    export default {
        name: 'SvetStatSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mNavPlace,
            mHeadline,
            oAccountBanner,
            oAdGoogleSidebar,
            oAlerts,
            oArticleList,
            oBlockItem,
            oBlockList,
            oCoverItemState,
            oCoverNeighboring,
            oCoverPlaceDetail,
            oHeroPlace,
            oHotInfoHero,
            oInformationBlock,
            oMapGoogle,
            oChartPie,
            oOrganizationList,
            oPlaceTeaserCities,
            oPlaceTeaserRegions,
            oPlaceTeaserSpots,
            oPlaceTeaser,
            oReviewItem,
            oSidebarLinks,
            oSidebarList,
            oSidebarTime,
            oSwitchHero,
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
                videos: this.videos,
                posts: this.posts,
                imagePlace: this.imagePlace,
                imagesStatesNeighboring: this.imagesStatesNeighboring,
                imagesCities: this.imagesCities,
                imageCityMain: this.imageCityMain,
                imagesVideos: this.imagesVideos,
                imagesPosts: this.imagesPosts,
                activeTab: 'default',
                activeTabName: 'PLACE_NAME',
                isMobile: false,
                showHero: true,
                metaTitle: '',
                tabs: [
                    { slug: 'default', label: 'state_name', visible: false },
                    { slug: 'co-videt', label: 'Co vidět', visible: false },
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
                oHotInfoHeroArray: [
                    {
                        id: 1,
                        title: "Kontinent",
                        name: "_NÁZEV KONTINENTU_",
                        url: `_ODKAZ_`,
                        type: "string",
                    },
                    {
                        id: 2,
                        title: "Rozloha",
                        name: "_ROZLOHA_",
                        type: "number",
                        subfix: " km²"
                    },
                    {
                        id: 3,
                        title: "Populace",
                        name: "_POPULACE_",
                        type: "number"
                    }
                ]
            }
        },

        methods:{
            getTabLink(tab) {
                return {
                    name: 'stat-slug-tab',
                    params: { slug: this.$route.params.slug, tab: tab.slug }
                }
            },

            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992
            }
        },

        computed: {
            hasCitiesToShow() {
                return this.placesCities.some(place => place.importance !== 'biggest')
            },

            updatedTabs() {
                const hasTabDefault = true;
                const hasTabShow = this.place[0] && (!!this.placesCities[0])
                const hasTabPrice = this.place[0] && (!!this.place[0].currency_name || !!this.place[0].money_prices)
                const hasTabPeople = this.place[0] && (!!this.place[0].people_religion || !!this.place[0].people_education || !!this.place[0].people_nationality)
                const hasTabTrip = this.place[0] && (!!this.place[0].visitors_entry)
                const hasTabContacts = this.place[0] && (!!this.place[0]?.phone_numbers_emergency)
                const hasTabHotel = this.place[0].affiliate.find(x => x.name === 'booking').value
                const hasTabVideos = this.place[0] && (!!this.videos[0])

                const newTabs = [
                    { slug: 'default', label: 'Výchozí', visible: hasTabDefault },
                    { slug: 'co-videt', label: 'Co vidět', visible: hasTabShow },
                    { slug: 'ceny', label: 'Ceny', visible: hasTabPrice },
                    { slug: 'lide', label: 'Lidé', visible: hasTabPeople },
                    { slug: 'cesta', label: 'Cesta', visible: hasTabTrip },
                    { slug: 'kontakty', label: 'Kontakty', visible: hasTabContacts },
                    { slug: 'ubytovani', label: 'Ubytování', visible: hasTabHotel },
                    { slug: 'videa', label: 'Videa', visible: hasTabVideos }
                ]

                this.tabs = newTabs
            }
        },

        head() {
            const placeName = this.place && this.place.length > 0 ? this.place[0].name : 'Stát'
            const defaultTitle = `${placeName} | Cestovatelský portál Frytol na cestách`
            let title = defaultTitle

            if (this.$route.params.tab) {
                const tab = this.tabs.find(tab => tab.slug === this.$route.params.tab)
                const label = tab.label || ''
                const tabTitle = `${label} ve státě ${placeName} | Cestovatelský portál Frytol na cestách`
                title = tabTitle
            }

            let metaSeoTags = this.place[0].seo_tags.map(item => item.tag).join(", ")

            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}` },
                    { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + metaSeoTags + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/stat/${this.place[0].slug}${this.activeTab !== 'default' ? `/${this.activeTab}` : ''}` },
                    { hid: 'og:type', content: 'website' }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) { 
                try {
                    // PAGE - Place state detail
                    // Place
                    const place = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state/${params.slug}`)
                    // Image
                    const imagePlace = place[0].id_image_hero && place[0].id_image_hero !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${place[0].id_image_hero}`) : []
                    // PlaceContinent
                    const placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${place[0].id_continent}`)


                    // COMPONENT - Main city
                    // PlaceCityMain
                    let placeCityMain = null
                    if (place[0].id_city_main !== null) {
                        placeCityMain = await $axios.$get(`https://api.frytolnacestach.cz/api/places-city-id/${place[0].id_city_main}`)
                    }
                    // Images
                    let imageCityMain = null
                    if (place[0].id_city_main !== null && placeCityMain && placeCityMain[0].id_image_cover !== null ) {
                        imageCityMain = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeCityMain[0].id_image_cover}`)
                    }


                    // COMPONENT - Neighboring states
                    // PlacesStatesNeighboring
                    let placesStatesNeighboring
                    if (place[0].ids_neighboring_countries !== null ) {
                        const idsNeighboringCountries = place[0].ids_neighboring_countries.map(item => item.id)
                        placesStatesNeighboring = await $axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${idsNeighboringCountries.join(',')}`)
                    } else {
                        placesStatesNeighboring = null
                    }
                    // Images
                    let imagesStatesNeighboring
                    if (placesStatesNeighboring) {
                        const imagesplaceStatesNeighboringID = placesStatesNeighboring.map(placesStateNeighboring => placesStateNeighboring.id_image_cover).filter(id => id !== null && id !== '')
                        imagesStatesNeighboring = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesplaceStatesNeighboringID.join(',')}`)
                    } else {
                        imagesStatesNeighboring = null
                    }


                    // COMPONENT - Města ve státě
                    // placesCities
                    const placesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/places-cities-id-state/${place[0].id}?showType=list`)
                    // Images
                    let imagesCities
                    const imagesPlacesCitiesID = placesCities.map(placeCity => placeCity.id_image_cover).filter(id => id !== null && id !== '')
                    if ( imagesPlacesCitiesID  !== null) {
                        imagesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesID.join(',')}`)
                    } else {
                        imagesCities = null
                    }
                

                    // COMPONENT - oVideoList
                    // Videos
                    const videos = await $axios.$get(`https://api.frytolnacestach.cz/api/videos-id-state/${place[0].id}?showType=list`)
                    // Images
                    let imagesVideos
                    if ( videos !== null) {
                        const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                        imagesVideos = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosID.join(',')}`)
                    } else {
                        imagesVideos = null
                    }


                    // COMPONENT - Články z místa
                    // Posts
                    const posts = await $axios.$get(`https://api.frytolnacestach.cz/api/posts-id-state/${place[0].id}?showType=list`)
                    // Images
                    let imagesPosts
                    if ( videos !== null) {
                        const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                        imagesPosts = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsID.join(',')}`)
                    } else {
                        imagesPosts = null
                    }


                    data = {
                        place,
                        imagePlace,
                        placesStatesNeighboring,
                        imagesStatesNeighboring,
                        placeContinent,
                        placesCities,
                        imagesCities,
                        placeCityMain,
                        imageCityMain,
                        videos,
                        imagesVideos,
                        posts,
                        imagesPosts
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - STÁT DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
            return data
        },

        mounted() {
            this.activeTab = this.$route.params.tab || 'default'

            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize)

            //Data for mNavBreadcrumbsPlaceArray 
            //continent
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 3) {
                    item.name = this.placeContinent[0].name
                    item.url = "/svet/kontinent/" + this.placeContinent[0].slug
                }
                return item
            })
            //state
            if(this.activeTab === 'undefined' || this.activeTab === 'default') {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name
                        item.url = "/svet/stat/" + this.place[0].slug
                        item.status = "span"
                    }
                    return item
                })
            } else {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name
                        item.url = "/svet/stat/" + this.place[0].slug
                        item.status = "link"
                    }
                    return item
                })
            }

            //Data for oHotInfoHero
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 1) {
                    item.name = this.placeContinent[0].name
                    item.url = `/svet/kontinent/${this.placeContinent[0].slug}`
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 2) {
                    item.name = this.place[0].area
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 3) {
                    item.name = this.place[0].population
                }
                return item
            })
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize)
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        watch: {
            updatedTabs: {
                immediate: true,
                handler() {
                    const defaultTab = this.tabs.find(tab => tab.slug === 'default')
                    const visibleTabs = this.tabs.filter(tab => tab.visible)
                    const activeTab = visibleTabs.length > 0 ? visibleTabs[0] : defaultTab
                    this.activeTab = activeTab.slug
                }
            },

            activeTab: function(newActiveTab) {
                const selectedTab = this.tabs.find(tab => tab.slug === newActiveTab)
                this.activeTabName = selectedTab.label
            }
        }
    }
</script>