<template>
    <main class="t-main -gray -pt-menu" role="main">
        
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
            <section class="t-section -p0 pt-2 pb-1">
                <div class="t-section__inner">
                    <mHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />

                    <div class="flex mx-1">
                        <oPlaceBlock :place="placeContinent" :image="imageContinent" type="kontinent" v-if="placeContinent" />
                        <oPlaceBlock :place="placeState" :image="imageState" type="stat" v-if="placeState" />
                        <oPlaceBlock :place="placeRegion" :image="imageRegion" type="region" v-if="placeRegion" />
                        <oPlaceBlock :place="placeCity" :image="imageCity" type="mesto" v-if="placeCity" />
                        <oPlaceBlock :place="placeSpot" :image="imageRegion" type="misto" v-if="placeSpot" />
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
        name: 'VideaSlugPage',

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
                placeContinent: [],
                placeState: [],
                placeRegion: [],
                placeCity: [],
                placeSpot: [],
                imageContinent: [],
                imageState: [],
                imageRegion: [],
                imageCity: [],
                imageSpot: []
            }
        },

        head() {
            return {
                title: `${this.video[0].title} | Cestovatelský portál Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.video[0].perex ? this.video[0].perex.slice(0, this.video[0].perex.lastIndexOf(' ', 150)) : this.video[0].title ? this.video[0].title : 'Video'}` },
                    { name: 'keywords', content: `${this.video[0].title ? this.video[0].title +',' : ''} cestovatelské video, cestování, svět, cetovatelský portál` },
                    { property: 'og:image', content: `${this.video[0].id_image ? 'https://image.frytolnacestach.cz/storage' + this.imageVideo[0].source + this.imageVideo[0].name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.video[0].title} | Cestovatelský portál Frytol na cestách` },
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
                    // načtení videa
                    const video = await $axios.$get(`https://api.frytolnacestach.cz/api/video/${params.slug}`)

                    // načtení informací o continentu
                    let placeContinent = null;
                    try {
                        placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${video[0].id_continent}`)
                    } catch (error) {
                        console.log(`API ERROR - PLACE CONTINENT: ${video[0].id_continent}`)
                    }

                    // načtení informací o státu
                    let placeState = null;
                    try {
                        placeState = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state-id/${video[0].id_state}`)
                    } catch (error) {
                        console.log(`API ERROR - PLACE STATE: ${video[0].id_state}`)
                    }

                    // načtení informací o regionu
                    let placeRegion = null;
                    try {
                        placeRegion = await $axios.$get(`https://api.frytolnacestach.cz/api/places-region-id/${video[0].id_region}`)
                    } catch (error) {
                        console.log(`API ERROR - PLACE REGION: ${video[0].id_region}`)
                    }

                    // načtení informací o městu
                    let placeCity = null;
                    try {
                        placeCity = await $axios.$get(`https://api.frytolnacestach.cz/api/places-city-id/${video[0].id_city}`)
                    } catch (error) {
                        console.log(`API ERROR - PLACE CITY: ${video[0].id_city}`)
                    }

                    // načtení informací o místu
                    let placeSpot = null;
                    try {
                        placeSpot = await $axios.$get(`https://api.frytolnacestach.cz/api/places-spot-id/${video[0].id_spot}`)
                    } catch (error) {
                        console.log(`API ERROR - PLACE SPOT: ${video[0].id_spot}`)
                    }


                    // načtení informací o obrázku pro článek
                    let imageVideo = null;
                    try {
                        imageVideo = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${video[0].id_image}`)
                    } catch (error) {
                        console.log(`API ERROR - IMAGE VIDEO`)
                    }

                    // načtení informací o obrázku
                    let imageContinent = null;
                    if (placeContinent) {
                        try {
                            imageContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeContinent[0].id_image_hero}`)
                        } catch (error) {
                            console.log(`API ERROR - IMAGE PLACE CONTINENT`)
                        }
                    }

                    // načtení informací o obrázku
                    let imageState = null;
                    if (placeState) {
                        try {
                            imageState = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeState[0].id_image_hero}`)
                        } catch (error) {
                            console.log(`API ERROR - IMAGE PLACE STATE`)
                        }
                    }

                    // načtení informací o obrázku
                    let imageRegion = null;
                    if (placeRegion) {
                        try {
                            imageRegion = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeRegion[0].id_image_hero}`)
                        } catch (error) {
                            console.log(`API ERROR - IMAGE PLACE CONTINENT`)
                        }
                    }

                    // načtení informací o obrázku
                    let imageCity = null;
                    if (placeCity) {
                        try {
                            imageCity = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeCity[0].id_image_hero}`)
                        } catch (error) {
                            console.log(`API ERROR - IMAGE PLACE CITY`)
                        }
                    }

                    // načtení informací o obrázku
                    let imageSpot = null;
                    if (placeSpot) {
                        try {
                            imageSpot = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${placeSpot[0].id_image_hero}`)
                        } catch (error) {
                            console.log(`API ERROR - IMAGE PLACE SPOT`)
                        }
                    }

                    data = {
                        video,
                        placeContinent,
                        placeState,
                        placeRegion,
                        placeCity,
                        placeSpot,
                        imageVideo,
                        imageContinent,
                        imageState,
                        imageRegion,
                        imageCity,
                        imageSpot
                    }

                    success = true;
                } catch (error) {
                    console.log(`API ERROR - VIDEO DETAIL: ${params.slug}`);
                    console.error(error);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }
            }

            return data;
        }

    }
</script>