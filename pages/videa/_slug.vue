<template>
    <main>
        <div class="t-main">

            <section>
                <div class="o-hero-article" v-bind:style="{ 'background-image': 'url(https://img.youtube.com/vi/' + getSlugURL(video[0].url) + '/0.jpg)'}">
                    <div class="o-hero-article__outer">
                        <div class="o-hero-article__inner">
                            <h1 class="o-hero-article__headline" v-if="video[0].title">{{ video[0].title }}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div class="t-col2">
                <div class="t-col2__content my-2">
                    <section class="t-section py-2" v-if="video[0].url">
                        <div class="t-section__inner">
                            <div class="o-youtube">
                                <div class="o-youtube__outer">
                                    <div class="o-youtube__inner">
                                        <div class="o-youtube__video">
                                            <iframe class="o-youtube__video-iframe" :src="'https://www.youtube.com/embed/' + getSlugURL(video[0].url)" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="t-col2__sidebar my-2">
                    <section class="t-section my-2">
                        <div class="t-section__inner">
                            <div class="o-ad-sidebar-article-detail">
                                <!-- sidebar-article-detail -->
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
                </div>
            </div>
        </div>
    </main>
</template>

<script>

    export default {
        name: 'PageBlogSlug',

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
                default: "5043852899"
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
            },
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            }
        },

        data() {
            return {
                video: ''
            }
        },

        head() {
            return {
                title: `${this.video[0].title} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.video[0].title}` },
                    { property: 'og:image', content: `https://image.frytolnacestach.cz/storage/og/og-${this.video[0].slug}.jpg`} 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            const video = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/video/${params.slug}`)
            return { video: video }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>