<template>
  <main class="t-main">
      <section>
          <SectionHerobig />
      </section>

      <section class="t-section py-4">
          <div class="t-section__inner">
              <SectionWhoiam />
          </div>
      </section>

      <section class="t-section t-section--gray">
          <div class="t-section__inner">
              <div class="m-headline mt-4 text-align-center">
                  <h2 class="m-headline__title">Platformy kde jsem</h2>
              </div>
              <SectionPlatform />
              <div class="flex flex-center mb-4">
                  <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
              </div>
          </div>
      </section>


      <section class="t-section py-4">
          <div class="t-section__inner">
              <div class="m-headline mb-2 text-align-center">
                  <h2 class="m-headline__title">Nejnovější články</h2>
              </div>
              <div class="o-article-list-hp">
                <div class="o-article-list-hp__outer">
                    <div class="o-article-list-hp__items">
                        <div v-for="post in posts" :key="post.id" class="o-article-list-hp__item">
                            <div class="o-article-list-hp__item-inner">
                                <div class="o-article-list-hp__image">
                                    <div class="o-article-list-hp__image-file" v-bind:style="{ 'background-image': 'url(' + post.imageList + ')'}">
                                        <NuxtLink class="o-article-list-hp__image-link" :to="`/clanky/${post.slug}`"></NuxtLink>
                                    </div>
                                </div>
                                <div class="o-article-list-hp__text">
                                    <h3 class="o-article-list-hp__title">
                                        <NuxtLink class="o-article-list-hp__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                                    </h3>
                                    <p class="o-article-list-hp__perex">
                                        <NuxtLink class="o-article-list-hp__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <div class="flex flex-center mt-2">
                  <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/clanky">Všechny články</NuxtLink>
              </div>
          </div>
      </section>

      <section class="t-section t-section--gray py-4">
          <div class="t-section__inner t-section__inner--w640">
              <div class="m-headline mb-4 text-align-center">
                  <h2 class="m-headline__title">Nejnovější video</h2>
              </div>
              <SectionYoutube />
              <div class="flex flex-center mt-2">
                  <a class="a-button-fill a-button-fill--big a-button-fill--blue" href="https://www.youtube.com/channel/UCQnsNK3Xd5Tj3zcVWQDMi8A/videos" target="_blank">Všechna videa (YouTube)</a>
              </div>
          </div>
      </section>

      <section class="t-section py-4">
          <div class="t-section__inner">
                <SectionDonate :showHeadline="1" />
                <SectionSupport />
                <div class="flex flex-center">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/donate">Podpora</NuxtLink>
                </div>
          </div>
      </section>
  </main>
</template>

<script>

  import SectionHerobig from '../components/SectionHerobig.vue'
  import SectionWhoiam from '../components/SectionWhoiam.vue'
  import SectionPlatform from '../components/SectionPlatform.vue'
  import SectionYoutube from '../components/SectionYoutube.vue'
  import SectionDonate from '../components/SectionDonate.vue'
  import SectionSupport from '../components/SectionSupport.vue'

  export default {
    name: 'IndexPage',
    components: {
        SectionHerobig,
        SectionWhoiam,
        SectionPlatform,
        SectionYoutube,
        SectionDonate,
        SectionSupport
    },

    head: {
        title: 'Frytol na cestách',
        meta: [
            { hid: 'description', name: 'description', content: 'Úvodní stránka webu Frytol na cestách' },
            { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
        ]
    },

    async asyncData({ $axios }) {
        const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts`)
        return { posts }
    }
  }
</script>