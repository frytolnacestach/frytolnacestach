<template>
    <div :class="'o-ad-google-wysiwyg' + (styleThema ? styleThema : '') +  ' mt-2 hidden-print'">
        <div class="o-ad-google-wysiwyg__outer">
            <div class="o-ad-google-wysiwyg__inner">
                <div class="o-ad-google-wysiwyg__content">
                    <ins class="adsbygoogle"
                        style="display:block; text-align:center;"
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        :data-ad-client="adClient"
                        :data-ad-slot="adSlot">
                    </ins>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoAdGoogleWysiwygComponent',

        props: {
            styleThema: {
                type: String,
                requred: false
            },
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
                default: "1014992718"
            }
        },

        methods:{
            adsenseAddLoad() {
                let inlineScript   = document.createElement("script")
                inlineScript.type  = "text/javascript"
                inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
                document.getElementsByTagName('body')[0].appendChild(inlineScript)
            },

            adsenseTitle() {
                let elementIframe = document.querySelector('.o-ad-google-wysiwyg iframe')
                if (elementIframe) {
                    elementIframe.setAttribute('title', 'Reklama')
                } else {
                    setTimeout(this.adsenseTitle, 100)
                }
            },

            checkAdStatus() {
                let adElement = document.querySelector('.o-ad-google-wysiwyg .adsbygoogle')
                if (adElement && adElement.dataset.adStatus === "unfilled") {
                    this.adsenseAddLoad()
                } else {
                    setTimeout(this.checkAdStatus, 500)
                }
            }
        },

        mounted() {
            this.adsenseAddLoad()
            this.adsenseTitle()
            this.checkAdStatus()
        }
    }
</script>