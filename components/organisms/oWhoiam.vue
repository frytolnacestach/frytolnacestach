<template>
    <div class="o-whoiam">
        <div class="o-whoiam__outer">
            <div class="o-whoiam__inner">
                <div class="o-whoiam__image loading-image -gray">
                    <div class="o-whoiam__image-lazyload">
                        <img class="o-whoiam__image-file lazyload-file"
                            data-sizes="(max-width: 349px) 320px, (max-width: 374px) 344px, (max-width: 399px) 370px, (max-width: 459px) 430px, (max-width: 575px) 546px, (max-width: 767px) 738px, (max-width: 991px) 962px, 320px"
                            :data-srcset="`
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-320.webp 320w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-344.webp 344w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-370.webp 370w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-430.webp 430w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-556.webp 546w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-738.webp 738w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-962.webp 962w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-640-2x.webp 640w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-688-2x.webp 688w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-740-2x.webp 740w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-860-2x.webp 860w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-1112-2x.webp 1092w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-1476-2x.webp 1476w,
                                https://image.frytolnacestach.cz/storage/main/s-michal-fryc-1924-2x.webp 1924w
                                `"
                            :data-src="`https://image.frytolnacestach.cz/storage/main/michal-fryc.webp`"
                            alt="Michal Fryč"
                            v-lazy>
                    </div>
                </div>
                <div class="o-whoiam__text">
                    <div class="o-whoiam__perex">
                        {{ base[0].iam }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoWhoiamComponent',
        
        data() {
            return {
                base: []
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

        async fetch() {
            this.base = await fetch("https://api.frytolnacestach.cz/api/base").then((res) => res.json())
        }
    }
</script>