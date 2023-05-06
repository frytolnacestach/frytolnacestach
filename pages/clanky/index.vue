<template>
    <main class="t-main -bg-person -pt-menu" role="main">
       
        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Articles -->
        <section class="t-section -p0 py-1 px-2">
            <div class="t-section__inner">
                <oArticleList :posts="posts" :images="images" />
            </div>
        </section>
        <!-- SECTION - Articles END -->

        <!-- SECTION - Platforms -->
        <section class="t-section -p0 py-1 mt-2 px-2">
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
        name: 'PageClanky',

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

        head: {
            title: 'Články | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Članky z webu Frytol na cestách' },
                { name: 'keywords', content: `Články, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Články | Frytol na cestách' },
                { hid: 'og:description', content: 'Članky z webu Frytol na cestách' },
                { hid: 'og:url', content: `https://frytolnacestach.cz${this.$route.fullPath}` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async asyncData({ $axios }) {
            //posts
            const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts`)

            // Načtení informací o obrázku
            const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            return { posts, images }
        }
    }
</script>