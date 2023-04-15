<template>
    <main class="t-main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <SectionHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section my-4">
            <div class="t-section__inner">
                <oArticleList :posts="posts" :images="images" />
            </div>
        </section>

        <section class="t-section t-section--gray">

            <div class="m-headline mt-4 text-align-center">
                <h2 class="m-headline__title">Další obsah</h2>
            </div>

            <SectionPlatform />
            
            <div class="flex flex-center mb-4">
                <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
            </div>
            
        </section>
    </main>
</template>

<script>

    import oArticleList from '@/components/oArticleList.vue'
    import SectionHero from '../../components/SectionHero.vue'
    import SectionPlatform from '../../components/SectionPlatform.vue'

    export default {
        name: 'PageClanky',

        components: {
            oArticleList,
            SectionHero,
            SectionPlatform
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
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
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