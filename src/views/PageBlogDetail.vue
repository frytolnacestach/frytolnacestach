<template>
    <main class="t-main" v-for="post in posts" :key="post.id">
        <div v-if="post.idname === $route.params.idname">
            <section>
                <div class="o-hero-article" v-bind:style="{ 'background-image': 'url(' + post.imageHero + ')'}">
                    <div class="o-hero-article__outer">
                        <div class="o-hero-article__inner">
                            <h1 class="o-hero-article__headline">{{ post.name }}</h1>
                            <p class="o-hero-article__perex">{{ post.perex }}</p>
                            <span class="o-hero-article__date">{{ post.date }} <span>(aktualizace {{ post.dateUpdate }})</span></span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="o-hot-info">
                    <div class="o-hot-info__outer">
                        <div class="o-hot-info__inner">
                            <div class="o-hot-info__items">
                                <div class="o-hot-info__item" v-for="location in post.locations" v-bind:key="location">
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
                    <section class="t-section pt-2">
                        <div class="t-section__inner">
                            <div class="o-opener-text">
                                <p class="o-opener-text__perex">
                                    {{ post.textOpener }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section class="t-section pb-2">
                        <div class="t-section__inner">
                            <div class="o-wysiwyg" v-html="post.textAuthor"></div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-youtube">
                                <div class="o-youtube__outer">
                                    <div class="o-youtube__inner">
                                        <div class="o-youtube__video">
                                            <iframe class="o-youtube__video-iframe" :src="post.urlYoutube" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section t-section--hidden-desktop my-2">
                        <div class="t-section__inner">
                            <div class="o-map-mapy">
                                <div class="o-map-mapy__outer">
                                    <div class="o-map-mapy__inner">
                                        <div class="o-map-mapy__map">
                                            <a class="o-map-mapy__map-link" href="{{ post.urlmap }}" target="_blank">
                                                <img class="o-map-mapy__map-image" :src="post.imagemap">
                                            </a>
                                        </div>
                                        <a class="o-map-mapy__link" :href="post.urlMap" target="_blank">zobrazit mapu na mapy.cz</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-wiki">
                                <div class="o-wiki__outer">
                                    <div class="o-wiki__inner">
                                        <h2 class="o-wiki__title">Wikipedia</h2>
                                        <div class="o-wiki__perex text-align-center-mobile text-align-left-desktop">
                                            <div class="o-wysiwyg" v-html="post.textWiki"></div>
                                            <div class="o-wiki__author">
                                                <i class="m-author">zdroj. <a class="m-author__link" :href="post.urlWiki" target="_blank">Wikipedia</a></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-transport">
                                <div class="o-transport__outer">
                                    <div class="o-transport__inner">
                                        <h2 class="o-transport__title">Jak se sem dostat</h2>
                                        <div class="o-transport__items">
                                            <div class="o-transport__item" v-for="travel in post.travels" v-bind:key="travel">
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

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-trip-information o-trip-information--bg-brand1-a">
                                <div class="o-trip-information__outer">
                                    <div class="o-trip-information__inner">
                                        <h2 class="o-trip-information__title">Ceny</h2>
                                        <p class="o-trip-information__perex">{{ post.perexPrice }}</p>
                                        <div class="o-trip-information__items">
                                            <div class="o-trip-information__item" v-for="price in post.prices" v-bind:key="price">
                                                <h4 class="o-trip-information__name">{{ price.name }}<span class="o-trip-information__name-sub"> {{ price.subname }}</span></h4>
                                                <span class="o-trip-information__value">{{ price.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-trip-information o-trip-information--bg-brand2-a">
                                <div class="o-trip-information__outer">
                                    <div class="o-trip-information__inner">
                                        <h2 class="o-trip-information__title">Délka výletu</h2>
                                        <p class="o-trip-information__perex">{{ post.perexTriplength }}</p>
                                        <div class="o-trip-information__items">
                                            <div class="o-trip-information__item" v-for="triplength in post.triplengths" v-bind:key="triplength">
                                                <h4 class="o-trip-information__name">{{ triplength.name }}<span class="o-trip-information__name-sub"> {{ triplength.subname }}</span></h4>
                                                <span class="o-trip-information__value">{{ triplength.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-trip-information o-trip-information--bg-brand2-a">
                                <div class="o-trip-information__outer">
                                    <div class="o-trip-information__inner">
                                        <h2 class="o-trip-information__title">Časová náročnost</h2>
                                        <p class="o-trip-information__perex">{{ post.perexTime }}</p>
                                        <div class="o-trip-information__items">
                                            <div class="o-trip-information__item" v-for="time in post.times" v-bind:key="time">
                                                <h4 class="o-trip-information__name">{{ time.name }}<span class="o-trip-information__name-sub"> {{ time.subname }}</span></h4>
                                                <span class="o-trip-information__value">{{ time.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-review">
                                <div class="o-review__outer">
                                    <div class="o-review__inner">
                                        <h2 class="o-review__title">Hodnocení</h2>
                                        <p class="o-review__perex">
                                            {{ post.reviewText }}
                                        </p>
                                        <span class="o-review__number">{{ post.reviewValue }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section py-2">
                        <div class="t-section__inner">
                            <div class="o-information">
                                <div class="o-information__outer">
                                    <div class="o-information__inner">
                                        <div class="o-information__text">
                                            <p class="o-information__perex">
                                                Informace jsou platné k {{ post.dateInformation }}. Jestli tu najdete informaci, která již není platná budu rád za nahlašení na email <a href="mailto:frytolnacestach@gmail.com" target="_blank">frytolnacestach@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="t-col2__sidebar my-2">

                    <section class="t-section t-section--hidden-mobile my-2">
                        <div class="t-section__inner">
                            <div class="o-sidebar-map-mapy">
                                <div class="o-sidebar-map-mapy__outer">
                                    <div class="o-sidebar-map-mapy__inner">
                                        <div class="o-sidebar-map-mapy__map">
                                            <a class="o-sidebar-map-mapy__map-link" href="{{ post.urlMap }}" target="_blank">
                                                <img class="o-sidebar-map-mapy__map-image" :src="post.imageMap">
                                            </a>
                                        </div>
                                        <a class="o-sidebar-map-mapy__link" :href="post.urlMap" target="_blank">zobrazit mapu na mapy.cz</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section my-2">
                        <div class="t-section__inner">
                            <div class="o-sidebar-tag__outer">
                                <div class="o-sidebar-tag__inner">
                                    <div class="o-sidebar-tag__items">
                                        <div class="o-sidebar-tag__item" v-for="tag in post.tags" v-bind:key="tag">
                                            <a class="o-sidebar-tag__link">{{ tag }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="t-section my-2">
                        <div class="t-section__inner">
                            <div class="o-ad-sidebar-article-detail">
                                <!-- sidebar-article-detail -->
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-5217753750259737"
                                    data-ad-slot="5043852899"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'PageBlogDetail',
        data() {
            return {
                posts: []
            }
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
          }
        },

        mounted() {
            this.adsenseAddLoad();
        }, 

        created() {
            axios.get('https://api.npoint.io/043202fb7002160460f2')
            .then(response => {
                this.posts = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
</script>