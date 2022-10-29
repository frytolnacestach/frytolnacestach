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
              <SectionArticlelisthp />
              <div class="flex flex-center mt-2">
                  <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/blog">Všechny články</NuxtLink>
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
              <div class="m-headline text-align-center">
                  <h2 class="m-headline__title">Jak mě podpořit</h2>
                  <p class="m-headline__perex pt-1">Podpořit mě můžetě samotním sledování, odběrem a sdílením mé tvorby. Každa reakce v podobě lajku nebo komentáře je dúležitá a uspokoji algoritmus YouTube nebo jiné platformy. Pro ty ostatní co by mě chtěli podpořit finančně jsem založil Patreon.</p>
              </div>
              <SectionSupport />
              <div class="flex flex-center">
                  <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/donate">Podpora</NuxtLink>
              </div>
          </div>
      </section>

      <section class="t-section pb-2">
          <div class="flex flex-center">
              <div class="o-ad-homepage-1">
                  <!-- Homepage - 1 -->
                  <ins class="adsbygoogle"
                      :style="adStyle"
                      :data-ad-client="adClient"
                      :data-ad-slot="adSlot"
                      :data-ad-format="adFormat"
                      :data-full-width-responsive="adResponsive">
                  </ins>
              </div>
          </div>
      </section>
  </main>
</template>

<script>

  import SectionHerobig from '../components/SectionHerobig.vue'
  import SectionWhoiam from '../components/SectionWhoiam.vue'
  import SectionPlatform from '../components/SectionPlatform.vue'
  import SectionArticlelisthp from '../components/SectionArticlelisthp.vue'
  import SectionYoutube from '../components/SectionYoutube.vue'
  import SectionSupport from '../components/SectionSupport.vue'

  export default {
    name: 'IndexPage',
    
    components: {
        SectionHerobig,
        SectionWhoiam,
        SectionPlatform,
        SectionArticlelisthp,
        SectionYoutube,
        SectionSupport
    },

    props: {
        adStyle: {
            type: String,
            requred: false,
            default: "display:block"
        },

        adClient: {
            type: String,
            requred: false,
            default: "ca-pub-5217753750259737"
        },

        adSlot: {
            type: String,
            requred: false,
            default: "9966412055"
        },

        adFormat: {
            type: String,
            requred: false,
            default: "auto"
        },

        adResponsive: {
            type: String,
            requred: false,
            default: "true"
        }

    },

    methods:{
        adsenseAddLoad(){
            let inlineScript   = document.createElement("script");
            inlineScript.type  = "text/javascript";
            inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
            document.getElementsByTagName('body')[0].appendChild(inlineScript);
        }
    },

    mounted() {
        this.adsenseAddLoad();
    },

    head: {
        title: 'Frytol na cestách',
        meta: [
            { hid: 'description', name: 'description', content: 'Úvodní stránka webu Frytol na cestách' }
        ]
    }
  }
</script>