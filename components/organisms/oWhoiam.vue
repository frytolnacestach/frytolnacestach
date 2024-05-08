<template>
    <div class="o-whoiam">
        <div class="o-whoiam__outer">
            <div class="o-whoiam__inner">
                <div class="o-whoiam__image loading-image -gray">
                    <div class="o-whoiam__image-lazyload">
                        <aImage 
                            alt="Michal Fryč" 
                            :lazy=true
                            imageSource="/main/"
                            imageName="michal-fryc"
                            :sizes=imageSizes
                            :srcSet=imageSizesMedia
                            cssClassComponent="o-whoiam"
                        />
                    </div>
                </div>
                <div class="o-whoiam__text" v-if="base && base.length > 0">
                    <div class="o-whoiam__perex">
                        {{ base[0].iam }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoWhoiamComponent',

        components: {
            aImage
        },
        
        data() {
            return {
                base: this.base,
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 320
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 344
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 370
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 430
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 546
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 738
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 962
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 320
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 320,
                        "imageWidth": 320,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 344,
                        "imageWidth": 344,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 370,
                        "imageWidth": 370,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 430,
                        "imageWidth": 430,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 546,
                        "imageWidth": 546,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 738,
                        "imageWidth": 738,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 962,
                        "imageWidth": 962,
                        "orientation": "s-"
                    }
                ]
            }
        },

        head() {
            // Empty Array
            if (!this.base && this.base === null) {
                return { script: [] };
            }
            // Return
            const jsonldBase = {
                type: 'application/ld+json',
                json: {
                    "@context": "http://schema.org",
                    "@type": "Person",
                    "name": "Michal Fryč",
                    "alternateName": "Frytol na cestách",
                    "url": "https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach",
                    "image": "https://image.frytolnacestach.cz/storage/main/michal-fryc.webp",
                    "description": this.base[0].iam
                }
            }

            return { script: [jsonldBase] }
        },

        methods: {
            async fetchData() {
                // API - GET - Platforms
                const responseBase = await fetch("https://api.frytolnacestach.cz/api/base")
                this.base = await responseBase.json()
            }
        },

        mounted() {
            // GET Data
            this.fetchData()
        }
    })
</script>