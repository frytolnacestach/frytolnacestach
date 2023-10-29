<template>
    <main class="t-main -gray -pt-menu" role="main">
       
        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline"  modifierCSS=" -gray" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Articles -->
        <section class="t-section -p0 py-1 px-2 print-section">
            <div class="t-section__inner">
                <oArticleList :posts="posts" :images="images" />
            </div>
        </section>
        <!-- SECTION - Articles END -->

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
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'

    export default {
        name: 'ClankyIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oArticleList,
            oHero,
            oPlatform
        },

        data() {
            return {
                headline: "Články",
                posts: this.posts,
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
            title = 'Články | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Čti články na cestovatelském portáku Frytol na cestách Ať ti neuniknou žádné novinky o cestování.'

            // keywolds
            keywords = 'Články, novinky, travel hacky, rady, létání, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/clanky`

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

        //API STATIC
        async asyncData({ $axios }) {
            // PAGE - Posts list
            // Posts
            const posts = await $axios.$get(`https://api.frytolnacestach.cz/api/posts`)
            // Images
            const imagesPostsIDS = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)

            
            //return
            return {
                posts,
                images
            }
        }
    }
</script>