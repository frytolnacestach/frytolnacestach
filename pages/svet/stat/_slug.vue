<template>
    <main>
        <div class="t-main">
            
            <!-- SECTION - hero -->
            <section class="t-section">
                <div class="o-hero-place">
                    <div class="o-hero-place__image loading-image">
                        <div v-if="images && images.find(image => image.id === place[0].id_image_hero)" class="o-hero-place__image-lazyload">
                            <img
                                class="o-hero-place__image-file lazyload-file"
                                v-lazy="{
                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                    srcset: {
                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '1139': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '1219': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '911@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '1139@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '1219@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x'
                                    },
                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                                }"
                                :alt="place[0].name"
                            />
                        </div>
                        <div v-else class="o-hero-place__image-lazyload">
                            <img
                                class="o-hero-place__image-file lazyload-file"
                                v-lazy="{
                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                    srcset: {
                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '1139': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '1219': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '1139@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '1219@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                    },
                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                                }"
                                :alt="place[0].name"
                            />
                        </div>
                        
                        <div class="o-hero-place__outer">
                            <div class="o-hero-place__inner">
                                <h1 class="o-hero-place__headline" v-if="place[0].name">{{ place[0].name }}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SECTION - hot info -->
                <div class="js_o-hot-info-hero o-hot-info-hero">
                    <div class="o-hot-info-hero__outer">
                        <div class="o-hot-info-hero__inner">
                            <div class="o-hot-info-hero__items">
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Kontinent</span>
                                    <span class="o-hot-info-hero__value">{{ placeContinent[0].name }}</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Rozloha</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].area !== 0 ? place[0].area.toLocaleString('cs-CZ') : place[0].area }} km²</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Populace</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].population !== 0 ? place[0].population.toLocaleString('cs-CZ') : place[0].population }}</span>
                                </div>
                                <!--
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Počet měst</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].number_cities }}</span>
                                </div>
                                -->
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">MPZ</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].mpz }}</span>
                                </div>
                                <div class="o-hot-info-hero__item">
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

            <section class="t-section">
                <div class="m-nav-place">
                    <div class="m-nav-place__outer">
                        <div class="m-nav-place__inner">
                            <ul class="m-nav-place__items">
                                <li class="m-nav-place__item" v-for="tab in tabs" :key="tab.slug">
                                    <nuxt-link :to="`/svet/stat/${ place[0].slug }`" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug }" v-if="tab.slug === 'default'">
                                        {{ place[0].name }}
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

            <div class="t-main -tab">
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
                            <section class="t-section py-2" v-if="place[0].currency_name">
                                <div class="t-section__inner">
                                    <div class="o-information-block -bg-gray">
                                        <div class="o-information-block__outer">
                                            <div class="o-information-block__inner">
                                                <h2 class="o-information-block__title">Měna</h2>
                                                <div class="o-information-block__perex">
                                                    <div class="o-information-block_wysiwyg">{{ place[0].currency_name }} {{ place[0].currency_code !== null ? '(' + place[0].currency_code + ')' : '' }}</div>
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
                                <div class="m-headline mb-2">
                                    <h2 class="m-headline__title">Největší města ve státě {{ place[0].name }}</h2>
                                </div>
                                <div class="o-cover-place-detail">
                                    <div class="o-cover-place-detail__outer">
                                        <div class="o-cover-place-detail__inner">
                                            <div class="o-cover-place-detail__items">
                                                <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-cover-place-detail__item" v-if="placesCity.biggest === 'yes'">
                                                    <div class="o-cover-place-detail__content">

                                                        <div class="o-cover-place-detail__image loading-image">
                                                            <div v-if="images && images.find(image => image.id === placesCity.id_image_cover)" class="o-cover-place-detail__image-lazyload">
                                                                <img
                                                                    class="o-cover-place-detail__image-file lazyload-file"
                                                                    v-lazy="{
                                                                        src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                        srcset: {
                                                                            '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '1920': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '1921': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                            '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                            '1920@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                            '1921@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                        },
                                                                        sizes: '(max-width: 374px) 374px, (max-width: 1399px) 1399px, (max-width: 1920px) 1920px, 1921px'
                                                                    }"
                                                                    :alt="placesCity.name"
                                                                />
                                                            </div>
                                                            <div v-else class="o-cover-place-detail__image-lazyload">
                                                                <img
                                                                    class="o-cover-place-detail__image-file lazyload-file"
                                                                    v-lazy="{
                                                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        srcset: {
                                                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '1920': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '1921': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                            '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                            '1920@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                            '1921@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                                        },
                                                                        sizes: '(max-width: 374px) 374px, (max-width: 1399px) 1399px, (max-width: 1920px) 1920px, 1921px'
                                                                    }"
                                                                    :alt="placesCity.name"
                                                                />
                                                            </div>
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
                        <!-- SECTION - města - Biggest - END -->

                        <!-- SECTION - videos -->
                        <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="videos[0]">
                            <div class="t-section__inner">
                                <div class="m-headline -dark -p-left">
                                    <div class="m-headline mb-2">
                                        <h2 class="m-headline__title">Videa ze státu {{ place[0].name }}</h2>
                                    </div>
                                </div>
                                <div class="o-video-list -dark -p-left">
                                    <div class="o-video-list__outer">
                                        <div class="o-video-list__items">
                                            <div v-for="video in videos" :key="video.id" class="o-video-list__item" v-if="video.type === 'travel'">
                                                <div class="o-video-list__item-inner">
                                                    <div class="o-video-list__image loading-image">
                                                        <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list__image-lazyload">
                                                            <img
                                                                class="o-video-list__image-file lazyload-file"
                                                                v-lazy="{
                                                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                    srcset: {
                                                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'
                                                                    },
                                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                                }"
                                                                :alt="video.title"
                                                            />
                                                        </div>
                                                        <div v-else class="o-video-list__image-lazyload">
                                                            <img
                                                                class="o-video-list__image-file lazyload-file"
                                                                v-lazy="{
                                                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                    srcset: {
                                                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '439': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '992': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                                    },
                                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                                }"
                                                                :alt="video.title"
                                                            />
                                                        </div>
                                                        <NuxtLink class="o-video-list__image-link" :to="`/videa/${video.slug}`"></NuxtLink>
                                                    </div>
                                                    <div class="o-video-list__text">
                                                        <h3 class="o-video-list__title">
                                                            <NuxtLink class="o-video-list__title-link" :to="`/videa/${video.slug}`">{{ video.title }}</NuxtLink>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - videos END -->

                        <!-- SECTION - města - Biggest -->
                        <section v-if="hasCitiesToShow" class="t-section -bg-gray py-4">
                            <div class="t-section__inner">
                                <div class="m-headline mb-2">
                                    <h2 class="m-headline__title">Další města a obce ve státě {{ place[0].name }}</h2>
                                </div>
                                <div class="o-cover-place-detail">
                                    <div class="o-cover-place-detail__outer">
                                        <div class="o-cover-place-detail__inner">
                                            <div class="o-cover-place-detail__items">
                                                <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-cover-place-detail__item" v-if="placesCity.biggest !== 'yes'">
                                                    <div class="o-cover-place-detail__content">

                                                        <div class="o-cover-place-detail__image loading-image">
                                                            <div v-if="images && images.find(image => image.id === placesCity.id_image_cover)" class="o-cover-place-detail__image-lazyload">
                                                                <img
                                                                    class="o-cover-place-detail__image-file lazyload-file"
                                                                    v-lazy="{
                                                                        src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                        srcset: {
                                                                            '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '1920': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '1921': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp',
                                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                            '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                            '1920@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                            '1921@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesCity.id_image_cover).source + images.find(image => image.id === placesCity.id_image_cover).name + '.webp 2x',
                                                                        },
                                                                        sizes: '(max-width: 374px) 374px, (max-width: 1399px) 1399px, (max-width: 1920px) 1920px, 1921px'
                                                                    }"
                                                                    :alt="placesCity.name"
                                                                />
                                                            </div>
                                                            <div v-else class="o-cover-place-detail__image-lazyload">
                                                                <img
                                                                    class="o-cover-place-detail__image-file lazyload-file"
                                                                    v-lazy="{
                                                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        srcset: {
                                                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '1920': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '1921': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                            '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                            '1920@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                            '1921@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                                        },
                                                                        sizes: '(max-width: 374px) 374px, (max-width: 1399px) 1399px, (max-width: 1920px) 1920px, 1921px'
                                                                    }"
                                                                    :alt="placesCity.name"
                                                                />
                                                            </div>
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
                        <!-- SECTION - města - Biggest - END -->

                        <!-- SECTION - articles -->
                        <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="posts[0]">
                            <div class="t-section__inner">
                                <div class="m-headline -dark">
                                    <div class="m-headline mb-2">
                                        <h2 class="m-headline__title">Články ze státu {{ place[0].name }}</h2>
                                    </div>
                                </div>
                                <div class="o-article-list -dark -p-left">
                                    <div class="o-article-list-list__outer">
                                        <div class="o-article-list__items">
                                            <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                                                <div class="o-article-list__item-inner">
                                                    
                                                    <div class="o-article-list__image loading-image">
                                                        <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list__image-lazyload">
                                                            <img
                                                                class="o-article-list__image-file lazyload-file"
                                                                v-lazy="{
                                                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                    srcset: {
                                                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '1139': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '1219': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '1139@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '1219@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x'
                                                                    },
                                                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                                                                }"
                                                                :alt="post.title"
                                                            />
                                                        </div>
                                                        <div v-else class="o-article-list__image-lazyload">
                                                            <img
                                                                class="o-article-list__image-file lazyload-file"
                                                                v-lazy="{
                                                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                    srcset: {
                                                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '1139': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '1219': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '1139@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '1219@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                                    },
                                                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                                                                }"
                                                                :alt="post.title"
                                                            />
                                                        </div>
                                                        <NuxtLink class="o-article-list__image-link" :to="`/clanky/${post.slug}`"></NuxtLink>
                                                    </div>

                                                    <div class="o-article-list__text">
                                                        <h3 class="o-article-list__title">
                                                            <NuxtLink class="o-article-list__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                                                        </h3>
                                                        <p class="o-article-list__perex">
                                                            <NuxtLink class="o-article-list__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - videos END -->
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
                                                    <div class="o-information-block_wysiwyg">{{ place[0].currency_name }} {{ place[0].currency_code !== null ? '(' + place[0].currency_code + ')' : '' }}</div>
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
                                                                <span><strong>{{ money_price.name }}</strong> {{ money_price.value }} {{ place[0].currency_code }} <i class="o-information-block__list-info">({{ money_price.date_update }})</i></span>
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
                </template>
                <template v-else-if="activeTab === 'videa'">
                    <!-- SECTION -->
                    <div class="t-layout-full">
                        <!-- SECTION - videos -->
                        <section class="t-section pt-4 py-2 px-2" v-if="videos[0]">
                            <div class="t-section__inner">
                                <div class="m-headline -dark -p-left">
                                    <div class="m-headline mb-2">
                                        <h2 class="m-headline__title">Videa ze státu {{ place[0].name }}</h2>
                                    </div>
                                </div>
                                <div class="o-video-list">
                                    <div class="o-video-list__outer">
                                        <div class="o-video-list__items">
                                            <div v-for="video in videos" :key="video.id" class="o-video-list__item" v-if="video.type === 'travel'">
                                                <div class="o-video-list__item-inner">
                                                    <div class="o-video-list__image loading-image">
                                                        <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list__image-lazyload">
                                                            <img
                                                                class="o-video-list__image-file lazyload-file"
                                                                v-lazy="{
                                                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                    srcset: {
                                                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'
                                                                    },
                                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                                }"
                                                                :alt="video.title"
                                                            />
                                                        </div>
                                                        <div v-else class="o-video-list__image-lazyload">
                                                            <img
                                                                class="o-video-list__image-file lazyload-file"
                                                                v-lazy="{
                                                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                    srcset: {
                                                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '439': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '992': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                                    },
                                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                                }"
                                                                :alt="video.title"
                                                            />
                                                        </div>
                                                        <NuxtLink class="o-video-list__image-link" :to="`/videa/${video.slug}`"></NuxtLink>
                                                    </div>
                                                    <div class="o-video-list__text">
                                                        <h3 class="o-video-list__title">
                                                            <NuxtLink class="o-video-list__title-link" :to="`/videa/${video.slug}`">{{ video.title }}</NuxtLink>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - videos END -->
                    </div>
                    <!-- SECTION END -->
                </template>
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
                const hasTabPrice = !!this.place[0].currency_code || !!this.place[0].money_prices;
                const hasTabPeople = !!this.place[0].people_religion || !!this.place[0].people_education || !!this.place[0].people_nationality;
                const hasTabTrip = !!this.place[0].visitors_entry;
                const hasTabContacts = !!this.place[0]?.phone_numbers_emergency;
                const hasTabHotel = true;
                const hasTabVideos = !!this.videos[0];

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
                place: '',
                activeTab: 'default',
                tabs: [
                    { slug: 'default', label: 'state_name', visible: false },
                    { slug: 'ceny', label: 'Ceny', visible: false },
                    { slug: 'lide', label: 'Lidé', visible: false },
                    { slug: 'cesta', label: 'Cesta', visible: false },
                    { slug: 'kontakty', label: 'Kontakty', visible: false },
                    { slug: 'ubytovani', label: 'Ubytování', visible: false },
                    { slug: 'videa', label: 'Videa', visible: false },
                ]
            }
        },

        head() {
            const tab = this.tabs.find(tab => tab.slug === this.activeTab);
            const label = tab.label;
            var metaTitle = ''

            if (label == '' || tab.slug === 'default') {
                metaTitle = `${this.place[0].name} | Frytol na cestách`
            } else {
                metaTitle = `${label} ve státě ${this.place[0].name} | Frytol na cestách`
            }

            return {
                title: `${metaTitle}`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(3, 163) : this.place[0].name}` },
                    { name: 'keywords', content: `${this.place[0].name + ', stát, ceny, ubytování, lidé a kultura, cestování, svět'}` },
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