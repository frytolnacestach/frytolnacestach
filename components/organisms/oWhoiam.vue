<template>
    <div class="o-whoiam">
        <div class="o-whoiam__outer">
            <div class="o-whoiam__inner">
                <div class="o-whoiam__ring mt-2">
                    <div class="o-whoiam__ring-content">
                        <div class="o-whoiam__image loading-image">
                            <div class="o-whoiam__image-lazyload">
                                <img class="o-whoiam__image-file lazyload-file"
                                    data-sizes="130px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/main/michal-fryc-130.webp 130w,
                                        https://image.frytolnacestach.cz/storage/main/michal-fryc-260-2x.webp 260w,
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/main/michal-fryc.webp`"
                                    alt="Michal Fryč"
                                    v-lazy>
                            </div>
                        </div>
                    </div>
                    <div class="o-whoiam__text mt-2">
                        <div class="o-whoiam__perex">
                            {{ base[0].iam }}
                        </div>
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