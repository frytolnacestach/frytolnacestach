<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="o-article-list">
                    <div class="o-article-list__outer">
                        <div class="o-article-list__items">
                            <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                                <div class="o-article-list__item-inner">
                                    <div class="o-article-list__image">
                                        <div class="o-article-list__image-file" v-bind:style="{ 'background-image': 'url(' + post.imageList + ')'}">
                                            <NuxtLink class="o-article-list__image-link" :to="`/clanky/${post.slug}`"></NuxtLink>
                                        </div>
                                    </div>
                                    <div class="o-article-list__text">
                                        <h3 class="o-article-list__title">
                                            <NuxtLink class="o-article-list__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                                        </h3>
                                        <p class="o-article-list__perex">
                                            <NuxtLink class="o-article-list__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    import SectionHero from '../../components/SectionHero.vue'
    import SectionPlatform from '../../components/SectionPlatform.vue'

    export default {
        name: 'PageClanky',

        components: {
            SectionHero,
            SectionPlatform
        },

        data() {
            return {
                headline: "Články"
            }
        },

        head: {
            title: 'Články | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Članky z webu Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
            ]
        },

        async asyncData({ $axios }) {
            const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts`)
            return { posts }
        }
    }
</script>