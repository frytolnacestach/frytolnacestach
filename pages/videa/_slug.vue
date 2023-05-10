<template>
    <main class="t-main -bg-person -pt-menu" role="main">
        
        <!-- SECTION - Hero video -->
        <section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHeroVideo :image="imageVideo" :title="video[0].title" />
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
                <section class="t-section -px-world my-2">
                    <div class="t-section__inner">
                        <oAdGoogleSidebar />
                    </div>
                </section>
                <!-- SECTION - ad-google - sidebar - END -->
                
            </div>

        </div>

        <div class="t-layout-full" v-if="video[0].id_continent || video[0].id_state || video[0].id_city">

            <!-- SECTION - place -->
            <section class="t-section -p0 -bg-gray pt-2 pb-1">
                <div class="t-section__inner">
                    <mHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />

                    <div class="flex mx-1">
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
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oHeroVideo from '~/components/organisms/oHeroVideo.vue'
    import oPlaceBlock from '~/components/organisms/oPlaceBlock.vue'
    import oYoutube from '~/components/organisms/oYoutube.vue'

    export default {
        name: 'PageBlogSlug',

        components: {
            mHeadline,
            oAdGoogleSidebar,
            oHeroVideo,
            oPlaceBlock,
            oYoutube
        },

        data() {
            return {
                video: this.video,
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
                    { hid: 'description', name: 'description', content: `${this.video[0].perex ? this.video[0].perex.slice(0, this.video[0].perex.lastIndexOf(' ', 150)) : this.video[0].title ? this.video[0].title : 'Video'}` },
                    { name: 'keywords', content: `video, cestování, svět` },
                    { property: 'og:image', content: `${this.video[0].id_image ? 'https://image.frytolnacestach.cz/storage' + this.imageVideo[0].source + this.imageVideo[0].name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.video[0].title} | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.video[0].perex ? this.video[0].perex.slice(0, this.video[0].perex.lastIndexOf(' ', 150)) : this.video[0].title ? this.video[0].title : 'Video'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/videa/${this.video[0].slug}` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    //video
                    const video = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/video/${params.slug}`)

                    // Načtení informací o continentu
                    const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${video[0].id_continent}`)

                    // Načtení informací o státu
                    const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${video[0].id_state}`)

                    // Načtení informací o městu
                    const placeCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city-id/${video[0].id_city}`)


                    // Načtení informací o obrázku pro článek
                    const imageVideo = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${video[0].id_image}`)

                    // Načtení informací o obrázku
                    const imageContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeContinent[0].id_image_hero}`)

                    // Načtení informací o obrázku
                    const imageState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeState[0].id_image_hero}`)

                    // Načtení informací o obrázku
                    const imageCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeCity[0].id_image_hero}`)


                    data = { video, placeContinent, placeState, placeCity, imageVideo, imageContinent, imageState, imageCity }
                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - VIDEO DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>