<template>
    <main class="t-main">
        <section>
            <div class="o-hero-article">
                <div class="o-hero-article__image loading-image">
                    <div v-if="images && images.find(image => image.id === post[0].id_image_hero)" class="o-hero-place__image-lazyload">
                        <img
                            class="o-hero-place__image-file lazyload-file"
                            v-lazy="{
                                src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                srcset: {
                                    '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '1139': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '1219': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                                    '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '911@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '1139@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '1219@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                                    '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x'
                                },
                                sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                            }"
                            :alt="post[0].title"
                        />
                    </div>
                    <div v-else class="o-hero-article__image-lazyload">
                        <img
                            class="o-hero-article__image-file lazyload-file"
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
                            :alt="post[0].title"
                        />
                    </div>

                    <div class="o-hero-article__outer">
                        <div class="o-hero-article__inner">
                            <h1 class="o-hero-article__headline" v-if="post[0].title">{{ post[0].title }}</h1>
                            <p class="o-hero-article__perex" v-if="post[0].perex">{{ post[0].perex }}</p>
                            <span class="o-hero-article__date" v-if="post[0].date">{{ formatDate(post[0].date) }} <span v-if="post[0].dateUpdate">(aktualizace {{ formatDate(post[0].dateUpdate) }})</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="post[0].locations">
            <div class="o-hot-info">
                <div class="o-hot-info__outer">
                    <div class="o-hot-info__inner">
                        <div class="o-hot-info__items">
                            <div class="o-hot-info__item" v-for="location in post[0].locations" v-bind:key="location.type">
                                <h4 class="o-hot-info__title">{{ location.type }}</h4>
                                <span class="o-hot-info__value">{{ location.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="t-col2">
            <div class="t-col2__content my-2">

                <section class="t-section pt-2" v-if="post[0].textOpener">
                    <div class="t-section__inner">
                        <div class="o-opener-text">
                            <p class="o-opener-text__perex">
                                {{ post[0].textOpener }}
                            </p>
                        </div>
                    </div>
                </section>

                <section class="t-section pb-2" v-if="post[0].textAuthor">
                    <div class="t-section__inner">
                        <div class="o-wysiwyg" v-html="post[0].textAuthor"></div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].urlYoutube">
                    <div class="t-section__inner">
                        <div class="o-youtube">
                            <div class="o-youtube__outer">
                                <div class="o-youtube__inner">
                                    <div class="o-youtube__video">
                                        <iframe class="o-youtube__video-iframe" :src="post[0].urlYoutube" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section t-section--hidden-desktop my-2" v-if="post[0].urlMap">
                    <div class="t-section__inner">
                        <div class="o-map-mapy">
                            <div class="o-map-mapy__outer">
                                <div class="o-map-mapy__inner">
                                    <div class="o-map-mapy__map">
                                        <a class="o-map-mapy__map-link" :href="post[0].urlMap" target="_blank">
                                            <img class="o-map-mapy__map-image" :src="post[0].imageMap">
                                        </a>
                                    </div>
                                    <a class="o-map-mapy__link" :href="post[0].urlMap" target="_blank">zobrazit mapu na mapy.cz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].textWiki">
                    <div class="t-section__inner">
                        <div class="o-wiki">
                            <div class="o-wiki__outer">
                                <div class="o-wiki__inner">
                                    <h2 class="o-wiki__title">Wikipedia</h2>
                                    <div class="o-wiki__perex text-align-center-mobile text-align-left-desktop">
                                        <div class="o-wysiwyg" v-html="post[0].textWiki"></div>
                                        <div class="o-wiki__author">
                                            <i class="m-author">zdroj. <a class="m-author__link" :href="post[0].urlWiki" target="_blank">Wikipedia</a></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].travels">
                    <div class="t-section__inner">
                        <div class="o-transport">
                            <div class="o-transport__outer">
                                <div class="o-transport__inner">
                                    <h2 class="o-transport__title">Jak se sem dostat</h2>
                                    <div class="o-transport__items">
                                        <div class="o-transport__item" v-for="travel in post[0].travels" v-bind:key="travel.name">
                                            <div class="o-transport__icon">
                                                <div :class="'o-transport__icon-file o-transport__icon-file--' + travel.icon"></div>
                                            </div>
                                            <div class="o-transport__text">
                                                <h4 class="o-transport__name">{{ travel.name }}</h4>
                                                <p class="o-transport__text">{{ travel.text }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].prices">
                    <div class="t-section__inner">
                        <div class="o-trip-information o-trip-information--bg-brand1-a">
                            <div class="o-trip-information__outer">
                                <div class="o-trip-information__inner">
                                    <h2 class="o-trip-information__title">Ceny</h2>
                                    <p class="o-trip-information__perex">{{ post[0].perexPrice }}</p>
                                    <div class="o-trip-information__items">
                                        <div class="o-trip-information__item" v-for="price in post[0].prices" v-bind:key="price.name">
                                            <h4 class="o-trip-information__name">{{ price.name }}<span class="o-trip-information__name-sub"> {{ price.subname }}</span></h4>
                                            <span class="o-trip-information__value">{{ price.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].triplengths">
                    <div class="t-section__inner">
                        <div class="o-trip-information o-trip-information--bg-brand2-a">
                            <div class="o-trip-information__outer">
                                <div class="o-trip-information__inner">
                                    <h2 class="o-trip-information__title">Délka výletu</h2>
                                    <p class="o-trip-information__perex">{{ post[0].perexTriplength }}</p>
                                    <div class="o-trip-information__items">
                                        <div class="o-trip-information__item" v-for="triplength in post[0].triplengths" v-bind:key="triplength.name">
                                            <h4 class="o-trip-information__name">{{ triplength.name }}<span class="o-trip-information__name-sub"> {{ triplength.subname }}</span></h4>
                                            <span class="o-trip-information__value">{{ triplength.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].times">
                    <div class="t-section__inner">
                        <div class="o-trip-information o-trip-information--bg-brand2-a">
                            <div class="o-trip-information__outer">
                                <div class="o-trip-information__inner">
                                    <h2 class="o-trip-information__title">Časová náročnost</h2>
                                    <p class="o-trip-information__perex">{{ post[0].perexTime }}</p>
                                    <div class="o-trip-information__items">
                                        <div class="o-trip-information__item" v-for="time in post[0].times" v-bind:key="time.name">
                                            <h4 class="o-trip-information__name">{{ time.name }}<span class="o-trip-information__name-sub"> {{ time.subname }}</span></h4>
                                            <span class="o-trip-information__value">{{ time.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].reviewText">
                    <div class="t-section__inner">
                        <div class="o-review">
                            <div class="o-review__outer">
                                <div class="o-review__inner">
                                    <h2 class="o-review__title">Hodnocení</h2>
                                    <p class="o-review__perex">
                                        {{ post[0].reviewText }}
                                    </p>
                                    <span class="o-review__number">{{ post[0].reviewValue }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section py-2" v-if="post[0].dateInformation">
                    <div class="t-section__inner">
                        <div class="o-information">
                            <div class="o-information__outer">
                                <div class="o-information__inner">
                                    <div class="o-information__text">
                                        <p class="o-information__perex">
                                            Informace jsou platné k {{ formatDate(post[0].dateInformation) }}. Jestli tu najdete informaci, která již není platná budu rád za nahlašení na email <a href="mailto:frytolnacestach@gmail.com" target="_blank">frytolnacestach@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="t-col2__sidebar my-2">

                <section class="t-section t-section--hidden-mobile my-2" v-if="post[0].urlMap">
                    <div class="t-section__inner">
                        <div class="o-sidebar-map-mapy">
                            <div class="o-sidebar-map-mapy__outer">
                                <div class="o-sidebar-map-mapy__inner">
                                    <div class="o-sidebar-map-mapy__map">
                                        <a class="o-sidebar-map-mapy__map-link" :href="post[0].urlMap" target="_blank">
                                            
                                            <div class="o-sidebar-map-mapy__image loading-image">
                                                <div v-if="images && images.find(image => image.id === post[0].id_image_map)" class="o-sidebar-map-mapy__image-lazyload">
                                                    <img
                                                        class="o-sidebar-map-mapy__image-file lazyload-file"
                                                        v-lazy="{
                                                            src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                            srcset: {
                                                                '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                                '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                                '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                                '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                                '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                                '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp',
                                                                '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp 2x',
                                                                '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp 2x',
                                                                '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp 2x',
                                                                '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp 2x',
                                                                '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp 2x',
                                                                '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_map).source + images.find(image => image.id === post[0].id_image_map).name + '.webp 2x'
                                                            },
                                                            sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                        }"
                                                        :alt="post.title"
                                                    />
                                                </div>
                                                <div v-else class="o-sidebar-map-mapy__image-lazyload">
                                                    <img
                                                        class="o-sidebar-map-mapy__image-file lazyload-file"
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
                                                        :alt="post.title"
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <a class="o-sidebar-map-mapy__link" :href="post[0].urlMap" target="_blank">zobrazit mapu na mapy.cz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section my-2" v-if="post[0].tags">
                    <div class="t-section__inner">
                        <div class="o-sidebar-tag__outer">
                            <div class="o-sidebar-tag__inner">
                                <div class="o-sidebar-tag__items">
                                    <div class="o-sidebar-tag__item" v-for="tag in post[0].tags" v-bind:key="tag.name">
                                        <a class="o-sidebar-tag__link">{{ tag.name }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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

        <div class="t-layout-full" v-if="post[0].id_continent || post[0].id_state || post[0].id_city">

            <!-- SECTION - napis -->
            <section class="t-section -bg-gray pt-4">
                <div class="t-section__inner">
                    <div class="o-information-block">
                        <div class="o-information-block__outer">
                            <div class="o-information-block__inner">
                                <h2 class="o-information-block__title">Více informací o místě</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- SECTION - nadpis END -->

            <section class="t-section -bg-gray pt-2 pb-1">
                <div class="t-section__inner">
                    <mHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mb-2" />

                    <div class="flex px-1">

                        <!-- SECTION - place -->
                        <oPlaceBlock :place="placeContinent" :image="imageContinent" type="kontinent" />
                        <oPlaceBlock :place="placeState" :image="imageState" type="stat" />
                        <oPlaceBlock :place="placeCity" :image="imageCity" type="mesto" />
                        <!-- SECTION - place END -->

                    </div>
                </div>
            </section>

            <!-- SECTION - videos -->
            <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="videos[0]">
                <div class="t-section__inner">
                    <div class="m-headline -dark">
                        <div class="m-headline mb-2">
                            <h2 class="m-headline__title">Videa z města {{ placeCity[0].name }}</h2>
                        </div>
                    </div>

                    <oVideoList :videos="videos" :images="images" type="travel" styleThema=" -dark" styleAlign=" -p-left" />

                </div>
            </section>
            <!-- SECTION - videos END -->
        </div>
    </main>
</template>

<script>

    import mHeadline from '@/components/mHeadline.vue'
    import oPlaceBlock from '@/components/oPlaceBlock.vue'
    import oVideoList from '@/components/oVideoList.vue'

    export default {
        name: 'PageBlogSlug',

        components: {
            mHeadline,
            oPlaceBlock,
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
            }
        },

        data() {
            return {
                post: '',
                placeContinent: this.placeContinent,
                placeState: this.placeState,
                placeCity: this.placeCity,
                imageContinent: this.imageContinent,
                imageState: this.imageState,
                imageCity: this.imageCity
            }
        },

        head() {
            return {
                title: `${this.post[0].title} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.post[0].perex}` },
                    { property: 'og:image', content: this.images && this.images.find(image => image.id === this.post[0].id_image_og) ? 'https://image.frytolnacestach.cz/storage/' + this.images.find(image => image.id === this.post[0].id_image_og).source + this.images.find(image => image.id === this.post[0].id_image_og).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/og-default.png'}
                ]
            }
        },

        async asyncData({ $axios, params }) {
            //post
            const post = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/post/${params.slug}`)

            // Načtení informací o obrázku
            const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images/`)

            // Načtení informací o městu
            const placeCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city-id/${post[0].id_city}`)

            // Načtení informací o obrázku
            const imageCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeCity[0].id_image_hero}`)

            // Načtení informací o státu
            const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${post[0].id_state}`)

            // Načtení informací o obrázku
            const imageState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeState[0].id_image_hero}`)

            // Načtení informací o continentu
            const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${post[0].id_continent}`)

            // Načtení informací o obrázku
            const imageContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeContinent[0].id_image_hero}`)

            // Načtení videi z města
            const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-city/${post[0].id_city}`)

            return { post, images, placeCity, placeState, placeContinent, imageCity, imageState, imageContinent, videos }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>