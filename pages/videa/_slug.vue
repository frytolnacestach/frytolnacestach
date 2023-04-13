<template>
    <main>
        <div class="t-main">

            <section>
                <div class="o-hero-article lazyload" 
                    :style="{ 'background-image': 'url(' + (image ? 'https://image.frytolnacestach.cz/storage' + image[0].source + image[0].name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }"
                >
                    <div class="o-hero-article__outer">
                        <div class="o-hero-article__inner">
                            <h1 class="o-hero-article__headline" v-if="video[0].title">{{ video[0].title }}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div class="t-col2">
                <div class="t-col2__content my-2">

                    <!-- SECTION - perex -->
                    <section class="t-section py-2" v-if="video[0].perex">
                        <div class="t-section__inner">
                            <div class="o-information-block">
                                <div class="o-information-block__outer">
                                    <div class="o-information-block__inner">
                                        <div class="o-information-block__perex">
                                            <div class="o-information-block_wysiwyg" v-html="video[0].perex"></div>
                                            <div class="o-information-block__author">
                                                <i class="m-author">zdroj. <a class="m-author__link" href="#">Michal Fryč</a></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - perex END -->

                    <!-- SECTION - video -->
                    <section class="t-section py-2" v-if="video[0].url">
                        <div class="t-section__inner">
                            <div class="o-youtube">
                                <div class="o-youtube__outer">
                                    <div class="o-youtube__inner">
                                        <div class="o-youtube__video">
                                            <iframe class="o-youtube__video-iframe" :src="'https://www.youtube.com/embed/' + getSlugURL(video[0].url)" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - video END -->

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

            <div class="t-layout-full" v-if="video[0].id_continent || video[0].id_state || video[0].id_city">

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
                    <div class="flex px-1">

                        <!-- SECTION - place -->
                        <div class="o-place-block" v-if="video[0].id_continent">
                            <div class="o-place-block__outer">
                                <div class="o-place-block__inner">
                                    <div class="o-place-block__content">

                                        <div class="o-place-block__image loading-image">
                                            <div v-if="imageContinent" class="o-place-block__image-lazyload">
                                                <img
                                                    class="o-place-block__image-file lazyload-file"
                                                    v-lazy="{
                                                        src: 'https://image.frytolnacestach.cz/storage/' + imageContinent[0].source + imageContinent[0].name + '.webp',
                                                        srcset: {
                                                            '374': 'https://image.frytolnacestach.cz/storage/' + imageContinent[0].source + imageContinent[0].name + '.webp',
                                                            '575': 'https://image.frytolnacestach.cz/storage/' + imageContinent[0].source + imageContinent[0].name + '.webp',
                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + imageContinent[0].source + imageContinent[0].name + '.webp 2x',
                                                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + imageContinent[0].source + imageContinent[0].name + '.webp 2x'
                                                        },
                                                        sizes: '(max-width: 374px) 374px, 375px'
                                                    }"
                                                    :alt="placeContinent[0].name"
                                                />
                                            </div>
                                            <div v-else class="o-place-block__image-lazyload">
                                                <img
                                                    class="o-place-block__image-file lazyload-file"
                                                    v-lazy="{
                                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        srcset: {
                                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                            '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                            '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                        },
                                                        sizes: '(max-width: 374px) 374px, 375px'
                                                    }"
                                                    :alt="placeContinent[0].name"
                                                />
                                            </div>
                                            <div class="o-place-block__filter">
                                                <span class="o-place-block__name">{{ placeContinent[0].name }}</span>
                                            </div>
                                        </div>

                                        <div class="o-place-block__text">
                                            <div class="o-place-block__wysiwyg" v-if="placeContinent[0].information_chatgpt" v-html="placeContinent[0].information_chatgpt.slice(0, 220)"></div>
                                            <NuxtLink class="o-place-block__more" :to="`/svet/kontinent/${placeContinent[0].slug}`">Číst více</NuxtLink>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- SECTION - place -->

                        <!-- SECTION - place -->
                        <div class="o-place-block" v-if="video[0].id_state">
                            <div class="o-place-block__outer">
                                <div class="o-place-block__inner">
                                    <div class="o-place-block__content">
                                        <div class="o-place-block__image loading-image">
                                            <div v-if="imageState" class="o-place-block__image-lazyload">
                                                <img
                                                    class="o-place-block__image-file lazyload-file"
                                                    v-lazy="{
                                                        src: 'https://image.frytolnacestach.cz/storage/' + imageState[0].source + imageState[0].name + '.webp',
                                                        srcset: {
                                                            '374': 'https://image.frytolnacestach.cz/storage/' + imageState[0].source + imageState[0].name + '.webp',
                                                            '575': 'https://image.frytolnacestach.cz/storage/' + imageState[0].source + imageState[0].name + '.webp',
                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + imageState[0].source + imageState[0].name + '.webp 2x',
                                                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + imageState[0].source + imageState[0].name + '.webp 2x'
                                                        },
                                                        sizes: '(max-width: 374px) 374px, 375px'
                                                    }"
                                                    :alt="placeState[0].name"
                                                />
                                            </div>
                                            <div v-else class="o-place-block__image-lazyload">
                                                <img
                                                    class="o-place-block__image-file lazyload-file"
                                                    v-lazy="{
                                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        srcset: {
                                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                            '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                            '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                        },
                                                        sizes: '(max-width: 374px) 374px, 375px'
                                                    }"
                                                    :alt="placeState[0].name"
                                                />
                                            </div>
                                            <div class="o-place-block__filter">
                                                <span class="o-place-block__name">{{ placeState[0].name }}</span>
                                            </div>
                                        </div>
                                        <div class="o-place-block__text">
                                            <div class="o-place-block__wysiwyg" v-if="placeState[0].information_chatgpt" v-html="placeState[0].information_chatgpt.slice(0, 220)"></div>
                                            <NuxtLink class="o-place-block__more" :to="`/svet/stat/${placeState[0].slug}`">Číst více</NuxtLink>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- SECTION - place -->

                        <!-- SECTION - place -->
                        <div class="o-place-block" v-if="video[0].id_city">
                            <div class="o-place-block__outer">
                                <div class="o-place-block__inner">
                                    <div class="o-place-block__content">
                                        <div class="o-place-block__image loading-image">
                                            <div v-if="imageCity" class="o-place-block__image-lazyload">
                                                <img
                                                    class="o-place-block__image-file lazyload-file"
                                                    v-lazy="{
                                                        src: 'https://image.frytolnacestach.cz/storage/' + imageCity[0].source + imageCity[0].name + '.webp',
                                                        srcset: {
                                                            '374': 'https://image.frytolnacestach.cz/storage/' + imageCity[0].source + imageCity[0].name + '.webp',
                                                            '575': 'https://image.frytolnacestach.cz/storage/' + imageCity[0].source + imageCity[0].name + '.webp',
                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + imageCity[0].source + imageCity[0].name + '.webp 2x',
                                                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + imageCity[0].source + imageCity[0].name + '.webp 2x'
                                                        },
                                                        sizes: '(max-width: 374px) 374px, 375px'
                                                    }"
                                                    :alt="placeCity[0].name"
                                                />
                                            </div>
                                            <div v-else class="o-place-block__image-lazyload">
                                                <img
                                                    class="o-place-block__image-file lazyload-file"
                                                    v-lazy="{
                                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        srcset: {
                                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                            '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                            '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                        },
                                                        sizes: '(max-width: 374px) 374px, 375px'
                                                    }"
                                                    :alt="placeCity[0].name"
                                                />
                                            </div>
                                            <div class="o-place-block__filter">
                                                <span class="o-place-block__name">{{ placeCity[0].name }}</span>
                                            </div>
                                        </div>
                                        <div class="o-place-block__text">
                                            <div class="o-place-block__wysiwyg" v-if="placeCity[0].information_chatgpt" v-html="placeCity[0].information_chatgpt.slice(0, 220)"></div>
                                            <NuxtLink class="o-place-block__more" :to="`/svet/mesto/${placeCity[0].slug}`">Číst více</NuxtLink>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- SECTION - place -->
                    </div>
                </section>
            </div>

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
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            }
        },

        data() {
            return {
                video: ''
            }
        },

        head() {
            return {
                title: `${this.video[0].title} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.video[0].title}` },
                    { property: 'og:image', content: `https://image.frytolnacestach.cz/storage/og/og-${this.video[0].slug}.jpg`} 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                //video
                const video = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/video/${params.slug}`)

                // Načtení informací o obrázku
                const image = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${video[0].id_image}`)

                // Načtení informací o městu
                const placeCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city-id/${video[0].id_city}`)

                // Načtení informací o obrázku
                const imageCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeCity[0].id_image_hero}`)

                // Načtení informací o státu
                const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${video[0].id_state}`)

                // Načtení informací o obrázku
                const imageState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeState[0].id_image_hero}`)

                // Načtení informací o continentu
                const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${video[0].id_continent}`)

                // Načtení informací o obrázku
                const imageContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeContinent[0].id_image_hero}`)

                return { video, image, placeCity, placeState, placeContinent, imageCity, imageState, imageContinent }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>