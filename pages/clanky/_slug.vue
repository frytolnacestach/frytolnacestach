<template>
    <main class="t-main -bg-person -pt-menu" role="main">

        <!-- SECTION - Hero article -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHeroArticle :post="post" :images="imagePostHero" />
            </div>
        </section>
        <!-- SECTION - Hero article END -->

        <!-- SECTION - Hot info -->
        <section class="t-section -p0 px-2" v-if="post[0].locations">
            <div class="t-section__inner">
                <oHotInfo :locations="post[0].locations" />
            </div>
        </section>
        <!-- SECTION - Hot info END -->

        <div class="t-col2">
            <div class="t-col2__content my-2">

                <!-- SECTION - Opener text -->
                <section class="t-section pt-2" v-if="post[0].text_opener">
                    <div class="t-section__inner">
                        <oOpenerText :text="post[0].text_opener" />
                    </div>
                </section>
                <!-- SECTION - Opener text END -->

                <!-- SECTION - Wysiwyg -->
                <section class="t-section pb-2" v-if="post[0].text_author">
                    <div class="t-section__inner">
                        <oWysiwyg :text="post[0].text_author" />
                    </div>
                </section>
                <!-- SECTION - Wysiwyg END -->

                <!-- SECTION - Youtube -->
                <section class="t-section py-2" v-if="post[0].url_youtube">
                    <div class="t-section__inner">
                        <oYoutube :url="post[0].url_youtube" />
                    </div>
                </section>
                <!-- SECTION - Youtube END -->

                <!-- SECTION - Map mapy -->
                <section class="t-section t-section--hidden-desktop my-2" v-if="post[0].url_map">
                    <div class="t-section__inner">
                        <oMapMapy :idImageMap="post[0].id_image_map" :url="post[0].url_map" :title="post[0].title" :images="imagePostMap" />
                    </div>
                </section>
                <!-- SECTION - Map mapy -->

                <!-- SECTION - Wiki -->
                <section class="t-section py-2" v-if="post[0].text_wiki">
                    <div class="t-section__inner">
                        <oWiki :wysiwyg="post[0].text_wiki" :source="post[0].url_wiki" />
                    </div>
                </section>
                <!-- SECTION - Wiki END -->

                <!-- SECTION - Transport -->
                <section class="t-section py-2" v-if="post[0].travels">
                    <div class="t-section__inner">
                        <oTransport title="Jak se sem dostat" :items="post[0].travels" />
                    </div>
                </section>
                <!-- SECTION - Transport END -->

                <!-- SECTION - Trip information -->
                <section class="t-section py-2" v-if="post[0].prices">
                    <div class="t-section__inner">
                        <oTripInformation title="Ceny" :perex="post[0].perex_price" :items="post[0].prices" styleThema=" -bg-brand1-a" />
                    </div>
                </section>
                <!-- SECTION - Trip information END -->

                <!-- SECTION - Trip information -->
                <section class="t-section py-2" v-if="post[0].triplengths">
                    <div class="t-section__inner">
                        <oTripInformation title="Délka výletu" :perex="post[0].perex_triplength" :items="post[0].triplengths" styleThema=" -bg-brand2-a" />
                    </div>
                </section>
                <!-- SECTION - Trip information END -->

                <!-- SECTION - Trip information -->
                <section class="t-section py-2" v-if="post[0].times">
                    <div class="t-section__inner">
                        <oTripInformation title="Časová náročnost" :perex="post[0].perex_time" :items="post[0].times" styleThema=" -bg-brand2-a" />
                    </div>
                </section>
                <!-- SECTION - Trip information END -->

                <!-- SECTION - Review -->
                <section class="t-section py-2" v-if="post[0].review_text">
                    <div class="t-section__inner">
                        <oReview :reviewText="post[0].review_text" :reviewValue="post[0].review_value" />
                    </div>
                </section>
                <!-- SECTION - Review END -->

                <!-- SECTION - Update information -->
                <section class="t-section py-2" v-if="post[0].date_information">
                    <div class="t-section__inner">
                        <oUpdateInformation :date="post[0].date_information" />
                    </div>
                </section>
                <!-- SECTION - Update information END -->

            </div>

            <div class="t-col2__sidebar my-2">

                <!-- SECTION - Sidebar map mapy -->
                <section class="t-section t-section--hidden-mobile my-2" v-if="post[0].urlMap">
                    <div class="t-section__inner">
                        <oSidebarMapMapy :idImageMap="post[0].id_image_map" :url="post[0].urlMap" :title="post[0].title" :images="imagePostMap" />
                    </div>
                </section>
                <!-- SECTION - Sidebar map mapy END -->

                <!-- SECTION - Sidebar tag -->
                <section class="t-section my-2" v-if="post[0].tags">
                    <div class="t-section__inner">
                        <oSidebarTag :tags="post[0].tags" />
                    </div>
                </section>
                <!-- SECTION - Sidebar tag END -->

                <!-- SECTION - ad-google - sidebar -->
                <section class="t-section -px-world my-2">
                    <div class="t-section__inner">
                        <oAdGoogleSidebar />
                    </div>
                </section>
                <!-- SECTION - ad-google - sidebar - END -->
            </div>
        </div>

        <div class="t-layout-full" v-if="post[0].id_continent || post[0].id_state || post[0].id_city">

            <!-- SECTION - place -->
            <section class="t-section -p0 -bg-gray pt-2 pb-1">
                <div class="t-section__inner">
                    <mHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />

                    <div class="flex mx-1">
                        <oPlaceBlock :place="placeContinent" :image="imageContinent" type="kontinent" />
                        <oPlaceBlock :place="placeState" :image="imageState" type="stat" />
                        <oPlaceBlock :place="placeRegion" :image="imageRegion" type="region" />
                        <oPlaceBlock :place="placeCity" :image="imageCity" type="mesto" />
                        <oPlaceBlock :place="placeSpot" :image="imageRegion" type="misto" />
                    </div>
                </div>
            </section>
            <!-- SECTION - place END -->

            <!-- SECTION - videos -->
            <section class="t-section -p0 -bg-extra-dark-gray pt-4 py-2 px-2" v-if="videos[0]">
                <div class="t-section__inner">
                    <mHeadline title="Videa z města" :titleValue="placeCity[0].name" styleThema=" -dark" styleAlign=" -p-left" styleGap=" mb-2" />
                    <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -dark" styleAlign=" -p-left" />
                </div>
            </section>
            <!-- SECTION - videos END -->
        </div>
    </main>
</template>

<script>

    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oHeroArticle from '~/components/organisms/oHeroArticle.vue'
    import oHotInfo from '~/components/organisms/oHotInfo.vue'
    import oMapMapy from '~/components/organisms/oMapMapy.vue'
    import oOpenerText from '~/components/organisms/oOpenerText.vue'
    import oPlaceBlock from '~/components/organisms/oPlaceBlock.vue'
    import oReview from '~/components/organisms/oReview.vue'
    import oSidebarMapMapy from '~/components/organisms/oSidebarMapMapy.vue'
    import oSidebarTag from '~/components/organisms/oSidebarTag.vue'
    import oTransport from '~/components/organisms/oTransport.vue'
    import oTripInformation from '~/components/organisms/oTripInformation.vue'
    import oUpdateInformation from '~/components/organisms/oUpdateInformation.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oWiki from '~/components/organisms/oWiki.vue'
    import oWysiwyg from '~/components/organisms/oWysiwyg.vue'
    import oYoutube from '~/components/organisms/oYoutube.vue'

    export default {
        name: 'ClankySlugPage',

        components: {
            mHeadline,
            oAdGoogleSidebar,
            oHeroArticle,
            oHotInfo,
            oMapMapy,
            oOpenerText,
            oPlaceBlock,
            oReview,
            oSidebarMapMapy,
            oSidebarTag,
            oTransport,
            oTripInformation,
            oUpdateInformation,
            oVideoList,
            oWiki,
            oWysiwyg,
            oYoutube
        },

        data() {
            return {
                post: this.post,
                videos: this.videos,
                placeContinent: this.placeContinent,
                placeState: this.placeState,
                placeRegion: this.placeRegion,
                placeCity: this.placeCity,
                placeSpot: this.placeSpot,
                imageContinent: this.imageContinent,
                imageState: this.imageState,
                imageRegion: this.imageRegion,
                imageCity: this.imageCity,
                imageSpot: this.imageSpot
            }
        },

        head() {
            return {
                title: `${this.post[0].title} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.post[0].textOpener ? this.post[0].textOpener.slice(0, this.post[0].textOpener.lastIndexOf(' ', 150)) : this.post[0].title ? this.post[0].title : 'Článek'}` },
                    { name: 'keywords', content: `${this.post[0].title + ', článek, cestování, svět, rady, cestovatelský portál'}` },
                    { property: 'og:image', content: this.imagePostOg && this.imagePostOg.find(image => image.id === this.post[0].id_image_og) ? 'https://image.frytolnacestach.cz/storage' + this.imagePostOg.find(image => image.id === this.post[0].id_image_og).source + this.imagePostOg.find(image => image.id === this.post[0].id_image_og).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'},
                    { hid: 'og:title', content: `${this.post[0].title} | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.post[0].textOpener ? this.post[0].textOpener.slice(0, this.post[0].textOpener.lastIndexOf(' ', 150)) : this.post[0].title ? this.post[0].title : 'Článek'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/clanky/${this.post[0].slug}` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    //post
                    const post = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/post/${params.slug}`)

                    // Načtení videi z města
                    const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos-id-city/${post[0].id_city}`)

                    // Načtení informací o continentu
                    const placeContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continent-id/${post[0].id_continent}`)

                    // Načtení informací o státu
                    const placeState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state-id/${post[0].id_state}`)

                    // Načtení informací o regionu
                    const placeRegion = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-region-id/${post[0].id_region}`)

                    // Načtení informací o městu
                    const placeCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city-id/${post[0].id_city}`)

                    // Načtení informací o místě
                    const placeSpot = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-spot-id/${post[0].id_spot}`)

                    
                    
                    //images Array
                    const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '');


                    // Načtení informací o obrázku pro článek
                    const imagePostHero = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${post[0].id_image_hero}`)

                    // Načtení informací o obrázku pro článek
                    const imagePostMap = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${post[0].id_image_map}`)

                    // Načtení informací o obrázku pro článek
                    const imagePostOg = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${post[0].id_image_og}`)

                    // Načtení informací o obrázku pro videa
                    const imagesVideos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesVideosID.join(',')}`)


                    // Načtení informací o obrázku
                    const imageContinent = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeContinent[0].id_image_hero}`)

                    // Načtení informací o obrázku
                    const imageState = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeState[0].id_image_hero}`)

                    // Načtení informací o obrázku
                    const imageRegion = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeRegion[0].id_image_hero}`)

                    // Načtení informací o obrázku
                    const imageCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeCity[0].id_image_hero}`)

                    // Načtení informací o obrázku
                    const imageSpot = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${placeSpot[0].id_image_hero}`)


                    data = { post, videos, placeContinent, placeState, placeRegion, placeCity, placeSpot, imagePostHero, imagePostMap, imagePostOg, imagesVideos, imageContinent, imageState, imageRegion, imageCity, imageSpot }
                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - POST DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>