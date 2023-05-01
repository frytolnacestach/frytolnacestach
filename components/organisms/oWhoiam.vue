<template>
    <div class="o-whoiam">
        <div class="o-whoiam__outer">
            <div class="o-whoiam__inner">
                <div class="o-whoiam__image loading-image">
                    <div class="o-whoiam__image-lazyload">
                        <img class="o-whoiam__image-file lazyload-file"
                            data-sizes="(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px"
                            :data-srcset="`
                                https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 340w,
                                https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 400w,
                                https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 540w,
                                https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 680w,
                                https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 800w,
                                https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 1080w
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
        name: 'oWhoiam',
        
        data() {
            return {
                base: this.base
            }
        },

        async fetch() {
            this.base = await fetch("https://frytolnacestach-api.vercel.app/api/base").then((res) => res.json());
        }
    }
</script>