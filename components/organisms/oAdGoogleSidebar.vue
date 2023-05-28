<template>
    <div class="o-ad-google-sidebar mt-2">
        <div class="o-ad-google-sidebar__outer">
            <div class="o-ad-google-sidebar__inner">
                <div class="o-ad-google-sidebar__content">
                    <ins class="adsbygoogle"
                        :style="adStyle"
                        :data-ad-client="adClient"
                        :data-ad-slot="adSlot"
                        :data-ad-format="adFormat"
                        :data-full-width-responsive="adResponsive">
                    </ins>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoAdGoogleSidebarComponent',

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
            }
        },

        mounted() {
            this.adsenseAddLoad();
        }
    }
</script>