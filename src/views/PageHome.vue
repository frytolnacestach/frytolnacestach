<template>
    <main class="t-main">
        <section>
            <div class="o-hero">
                <div class="o-hero__outer">
                    <div class="o-hero__inner">
                        <h1 class="o-hero__headline">Frytol na cestách</h1>
                        <p class="o-hero__perex">Cestování a natáčení</p>
                        <div class="o-hero__buttons mt-2">
                            <a class="a-button-fill a-button-fill--big" href="https://youtube.com/@frytolnacestach" target="_blank">Youtube</a>
                            <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/iam">Kdo jsem</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="t-section py-4">
            <div class="t-section__inner">
                <div class="o-whoiam">
                    <div class="o-whoiam__outer">
                        <div class="o-whoiam__inner">
                            <div class="o-whoiam__image">
                                <div class="o-whoiam__image-ring">
                                    <div class="o-whoiam__image-file"></div>
                                </div>
                                <div class="o-whoiam__text mt-2">
                                    <div class="o-whoiam__perex">
                                        Ahoj, jmenuji se Michal. V osobním životě podnikám jako webový kódér ale už od mala mě to táhlo k natáčení a bavilo mě cestovat a tak jsem tyto dvě věci spojil a v roce 2018 založil "značku" Frytol na cestách. Nejdříve jsem se zaměřoval pouze na cestování ale postupně jsem začal točit i názorová videa nebo také stavění Lega.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="t-section t-section--gray">
            <div class="t-section__inner">
                <div class="m-headline mt-4 text-align-center">
                    <h2 class="m-headline__title">Platformy kde jsem</h2>
                </div>

                <div class="o-platform">
                    <div class="o-platform__outer">
                        <div class="o-platform__inner">
                            <div class="o-platform__items">
                                <div class="o-platform__item">
                                    <div class="o-platform__icon">
                                        <a class="o-platform__icon-file o-platform__icon-file--tiktok" href="https://www.tiktok.com/@frytol_na_cestach" target="_blank" title="TikTok"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--youtube" href="https://youtube.com/@frytolnacestach" target="_blank" title="YouTube"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--instagram" href="https://www.instagram.com/frytolnacestach/" target="_blank" title="Instagram"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--facebook" href="https://www.facebook.com/frytolnacestach" target="_blank" title="Facebook"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--twitter" href="https://twitter.com/frytolnacestach" target="_blank" title="Twitter"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--twitch" href="https://www.twitch.tv/frytolnacestach" target="_blank" title="Twitch"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--reddit" href="https://www.reddit.com/user/FrytolNaCestach" target="_blank" title="Reddit"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--pinterest" href="https://cz.pinterest.com/frytolnacestach/" target="_blank" title="Pinterest"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--discord" href="https://discord.com/channels/610780694096117760/610780694096117762" target="_blank" title="Discord"></a>
                                    </div>
                                </div>

                                <div class="o-platform__item">
                                    <div class="o-box-platform__icon">
                                        <a class="o-box-platform__icon-file o-box-platform__icon-file--patreon" href="https://www.patreon.com/frytolnacestach" target="_blank" title="Patreon"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-center mb-4">
                    <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</router-link>
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
                            <div class="o-article-list-hp__item">
                                <div class="o-article-list-hp__item-inner">
                                    <div class="o-article-list-hp__image">
                                        <div class="o-article-list-hp__image-file" style="background-image: url('/images/articles/trikrizovy-vrch/hero-trikrizovy-vrch.jpg');">
                                            <router-link class="o-article-list-hp__image-link" to="/clanky/trikrizovy-vrch"></router-link>
                                        </div>
                                    </div>
                                    <div class="o-article-list-hp__text">
                                        <h3 class="o-article-list-hp__title">
                                            <router-link class="o-article-list-hp__title-link" to="/clanky/trikrizovy-vrch">Tříkřížový vrch</router-link>
                                        </h3>
                                        <p class="o-article-list-hp__perex">
                                            <router-link class="o-article-list-hp__perex-link" to="/clanky/trikrizovy-vrch">Tři křížě, tři panny a jeden rytíř</router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-center mt-2">
                    <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/blog">Všechny články</router-link>
                </div>
            </div>
        </section>

        <section class="t-section t-section--gray py-4">
            <div class="t-section__inner t-section__inner--w640">
                <div class="m-headline mb-4 text-align-center">
                    <h2 class="m-headline__title">Nejnovější video</h2>
                </div>

                <div class="o-youtube">
                    <div class="o-youtube__outer">
                        <div class="o-youtube__inner">
                            <div class="o-youtube__video">
                                <iframe class="o-youtube__video-iframe" src="https://www.youtube.com/embed/KVAVjrCRFiY" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

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

                <div class="o-support">
                    <div class="o-support__outer">
                        <div class="o-support__inner">
                            <div class="o-support__items">
                                <div class="o-support__item">
                                    <div class="o-support__logo">
                                        <a class="o-support__logo-file o-support__logo-file--patreon" href="https://www.patreon.com/frytolnacestach" target="_blank"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-center">
                    <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/donate">Podpora</router-link>
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
    export default {

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
        }
    }
</script>