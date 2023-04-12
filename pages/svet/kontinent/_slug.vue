<template>
    <main>
        <div class="t-main">
            
            <!-- SECTION - hero -->
            <section class="t-section">
                <div class="o-hero-place">
                    <div class="o-hero-place__image loading-image">
                        <div class="o-hero-place__image-file lazyload" 
                            :style="{
                                'background-image': 'url(' + (images && images.find(image => image.id === place[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === place[0].id_image_hero).source + images.find(image => image.id === place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')',
                            }"
                        >
                            <div class="o-hero-place__outer">
                                <div class="o-hero-place__inner">
                                    <h1 class="o-hero-place__headline" v-if="place[0].name">{{ place[0].name }}</h1>
                                </div>
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
                                    <span class="o-hot-info-hero__title">Počet států</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].number_states }}</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Rozloha</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].area }} km2</span>
                                </div>
                                <div class="o-hot-info-hero__item">
                                    <span class="o-hot-info-hero__title">Počet obyvatel na km2</span>
                                    <span class="o-hot-info-hero__value">{{ place[0].population_density }}</span>
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
                                        <h2 class="o-information-block__title">O kontinentu {{ place[0].name }}</h2>
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
                <!-- SECTION - státy -->
                <section class="t-section -bg-gray py-4">
                    <div class="t-section__inner">
                        <div class="m-headline mb-2">
                            <h2 class="m-headline__title">Všechny státy na kontinentu {{ place[0].name }}</h2>
                        </div>
                        <div class="o-cover-place-detail">
                            <div class="o-cover-place-detail__outer">
                                <div class="o-cover-place-detail__inner">
                                    <div class="o-cover-place-detail__items">
                                        <div v-for="placesState in placesStates" :key="placesState.id" class="o-cover-place-detail__item">
                                            <div class="o-cover-place-detail__content">
                                                <div class="o-cover-place-detail__image loading-image">
                                                    <div class="o-cover-place-detail__image-file lazyload" 
                                                        :style="{
                                                            'background-image': 'url(' + (images && images.find(image => image.id === placesState.id_image_cover) ? 'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')',
                                                        }"
                                                    ></div>
                                                </div>
                                                <h3 class="o-cover-place-detail__name">
                                                    {{ placesState.name }}
                                                </h3>
                                                <NuxtLink class="o-cover-place-detail__link" :to="`/svet/stat/${placesState.slug}`"></NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- SECTION - státy - END -->

                <!-- SECTION - videos -->
                <section class="t-section -bg-extra-dark-gray pt-4 py-2 px-2" v-if="videos[0]">
                    <div class="t-section__inner">
                        <div class="o-video-list -dark">
                            <div class="o-video-list__outer">
                                <div class="o-video-list__items">
                                    <div v-for="video in videos" :key="video.id" class="o-video-list__item" v-if="video.type === 'travel'">
                                        <div class="o-video-list__item-inner">
                                            <div class="o-video-list__image loading-image">
                                                <div v-if="images && images.find(image => image.id === video.id_image)" class="o-cover-place__image-lazyload">
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

        </div>
    </main>
</template>

<script>

    export default {
        name: 'PageContinentSlug',

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
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt}` },
                    { property: 'og:image', content: `${this.place[0].image_hero ? this.place[0].image_hero : 'https://image.frytolnacestach.cz/storage/_default/hero.png'}`} 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                // Načtení místa přes API podle slug
                const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent/${params.slug}`)

                // Načtení státu  podle jeho id
                const placesStates = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states-continent/${place[0].id}`)

                // Načtení videi z místa
                const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-continent/${place[0].id}`)

                // Načtení informací o obrázku
                const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)

                return { place, placesStates, videos, images }
            } catch (error) {
                console.error(error)
            }
        },

        mounted() {
            this.adsenseAddLoad();
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        }
    }
</script>