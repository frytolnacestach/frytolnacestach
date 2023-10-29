<template>
    <main class="t-main -gray -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray"/>
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - videos -->
        <section class="t-section -p0 py-1 px-2 print-section" v-if="videos[0]">
            <div class="t-section__inner">
                <oVideoList :videos="videos" :images="images" />
            </div>
        </section>
        <!-- SECTION - videos END -->

        <!-- SECTION - Platforms -->
        <section class="t-section -p0 py-1 mt-2 px-2 print-section">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                <oPlatform />
                <div class="flex flex-center mb-4">
                    <aButtonFillFull url="/social" text="Více informací o platformách" styleThema=" -green" target="internal" />
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->
    </main>
</template>

<script>

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'

    export default {
        name: 'VideaIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oPlatform,
            oVideoList
        },

        data() {
            return {
                headline: "Videa",
                videos: this.videos,
                images: this.images
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
            title = 'Videa | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Cestovatelská videa z různích míst naší krásné planety.'

            // keywolds
            keywords = 'cestovatelská videa, youtube, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/videa`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        //API STATIC
        async asyncData({ $axios }) {
            // PAGE - Videos list
            // Video
            const videos = await $axios.$get(`https://api.frytolnacestach.cz/api/videos`)
            // Images
            const imagesVideosIDS = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)


            //return
            return {
                videos,
                images
            }
        }
    }
</script>