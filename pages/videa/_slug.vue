<template>
    <main class="t-main -gray -pt-menu" role="main">
        
        <!-- SECTION - Hero video -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHeroVideo :image="imageVideo" :title="video[0].title" v-if="video[0].title" />
            </div>
        </section>
        <!-- SECTION - Hero video END -->

        <div class="t-col2">
            <div class="t-col2__content mb-2">

                <!-- SECTION - perex -->
                <section class="t-section py-2" v-if="video[0].perex">
                    <div class="t-section__inner">

                        <div class="o-information-block">
                            <div class="o-information-block__outer">
                                <div class="o-information-block__inner">
                                    <div class="o-information-block__perex">
                                        <div class="o-information-block_wysiwyg" v-html="video[0].perex"></div>
                                        <div class="o-information-block__author">
                                            <mAuthor :author="video[0].id_user" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <!-- SECTION - perex END -->

                <!-- SECTION - youtube -->
                <section class="t-section py-2 hidden-print" v-if="video[0].url">
                    <div class="t-section__inner">
                        <oYoutube :url="video[0].url" />
                    </div>
                </section>
                <!-- SECTION - youtube END -->

            </div>

            <div class="t-col2__sidebar my-2">

                <!-- SECTION - author - sidebar -->
                <section class="t-section -px-world mb-2 -p0" v-if="video[0].id_user">
                    <div class="t-section__inner">
                        <oAuthorSidebar :author="video[0].id_user"/>
                    </div>
                </section>
                <!-- SECTION - author - sidebar - END -->

                <!-- SECTION - ad-google - sidebar -->
                <section class="t-section -px-world mt-4 mb-2">
                    <div class="t-section__inner">
                        <oAdGoogleSidebar styleThema=" -gray" />
                    </div>
                </section>
                <!-- SECTION - ad-google - sidebar - END -->
                
            </div>

        </div>

        <div class="t-layout-full" v-if="video[0].id_continent || video[0].id_state || video[0].id_region || video[0].id_city || video[0].id_spot">

            <!-- SECTION - place -->
            <section class="t-section -p0 pt-2 pb-1 print-section">
                <div class="t-section__inner">
                    <mHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />

                    <div class="flex mx-1">
                        <oPlaceBlock :placeID="video[0].id_continent" type="kontinent" v-if="video[0].id_continent" />
                        <oPlaceBlock :placeID="video[0].id_state" type="stat" v-if="video[0].id_state" />
                        <oPlaceBlock :placeID="video[0].id_region" type="region" v-if="video[0].id_region" />
                        <oPlaceBlock :placeID="video[0].id_city" type="mesto" v-if="video[0].id_city" />
                        <oPlaceBlock :placeID="video[0].id_spot" type="misto" v-if="video[0].id_spot" />
                    </div>
                </div>
            </section>
            <!-- SECTION - place END -->

        </div>

    </main>
</template>

<script>
    import mAuthor from '~/components/molecules/mAuthor.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAuthorSidebar from '~/components/organisms/oAuthorSidebar.vue'
    import oHeroVideo from '~/components/organisms/oHeroVideo.vue'
    import oPlaceBlock from '~/components/organisms/oPlaceBlock.vue'
    import oYoutube from '~/components/organisms/oYoutube.vue'

    export default {
        name: 'VideaSlugPage',

        components: {
            mAuthor,
            mHeadline,
            oAdGoogleSidebar,
            oAuthorSidebar,
            oHeroVideo,
            oPlaceBlock,
            oYoutube
        },

        data() {
            return {
                video: []
            }
        },

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = `${this.video[0].title} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.video[0].perex ? this.video[0].perex.slice(0, this.video[0].perex.lastIndexOf(' ', 150)) : this.video[0].title ? this.video[0].title : 'Video'}`

            // keywolds
            let metaSeoTags
            if (this.video[0].seo_tags && this.video[0].seo_tags.length > 0) {
                metaSeoTags = this.video[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.video[0].title ? this.video[0].title : '') + metaSeoTags + ', cestovatelské video, cestování, svět, cetovatelský portál'
            
            // ogImage
            ogImage = `${this.video[0].id_image ? 'https://image.frytolnacestach.cz/storage' + this.imageVideo[0].source + this.imageVideo[0].name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/videa/${this.video[0].slug}`

            // ogType
            ogType = 'website'

            // script
            let jsonldVideo
            if (this.video && this.video.length > 0) {
                jsonldVideo = {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": (this.video[0].title ? this.video[0].title : ""),
                        "thumbnailUrl": (this.imageVideo && this.imageVideo.find(image => image.id === this.video[0].id_image)) ? ("https://image.frytolnacestach.cz/storage" + (this.imageVideo.find(image => image.id === this.video[0].id_image).source + this.imageVideo.find(image => image.id === this.video[0].id_image).name) + ".webp") : "",
                        "url": 'https://frytolnacestach.cz' + `/videa/${this.video[0].slug}`,
                        "description": (this.video[0].perex ? this.video[0].perex.replace(/<\/?[^>]+(>|$)/g, '') : ""),
                    }
                }
            } else {
                jsonldVideo = []
            }

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ],
                script: [jsonldVideo],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - Video detail
                    // Video
                    const video = await $axios.$get(`https://api.frytolnacestach.cz/api/video/${params.slug}`)
                    // Image
                    let imageVideo = null
                    try {
                        imageVideo = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${video[0].id_image}`)
                    } catch (error) {
                        console.log(`API ERROR - IMAGE VIDEO`)
                    }


                    data = {
                        video,
                        imageVideo
                    }


                    success = true;
                } catch (error) {
                    console.log(`API ERROR - VIDEO DETAIL: ${params.slug}`)
                    console.error(error)
                    await new Promise((resolve) => setTimeout(resolve, 1000))
                }
            }

            return data
        }
    }
</script>