<template>
    <main class="t-main -pt-menu">
        
        <!-- SECTION - Hero video -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHeroVideo :image="image" :title="video[0].title" />
            </div>
        </section>
        <!-- SECTION - Hero video END -->

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

                <!-- SECTION - youtube -->
                <section class="t-section py-2" v-if="video[0].url">
                    <div class="t-section__inner">
                        <oYoutube :url="video[0].url" />
                    </div>
                </section>
                <!-- SECTION - youtube END -->

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

            <!-- SECTION - place -->
            <section class="t-section -bg-gray pt-2 pb-1">
                <div class="t-section__inner">
                    <mHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mb-2" />

                    <div class="flex px-1">
                        <oPlaceBlock :place="placeContinent" :image="imageContinent" type="kontinent" />
                        <oPlaceBlock :place="placeState" :image="imageState" type="stat" />
                        <oPlaceBlock :place="placeCity" :image="imageCity" type="mesto" />
                    </div>
                </div>
            </section>
            <!-- SECTION - place END -->

        </div>

    </main>
</template>

<script>

    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHeroVideo from '~/components/organisms/oHeroVideo.vue'
    import oPlaceBlock from '~/components/organisms/oPlaceBlock.vue'
    import oYoutube from '~/components/organisms/oYoutube.vue'

    export default {
        name: 'PageBlogSlug',

        components: {
            mHeadline,
            oHeroVideo,
            oPlaceBlock,
            oYoutube
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

        data() {
            return {
                video: this.video,
                image: this.image,
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
                title: `${this.video[0].title} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.video[0].title}` },
                    { property: 'og:image', content: this.video[0].id_image ? 'https://image.frytolnacestach.cz/storage/main/og-default.png' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'} 
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