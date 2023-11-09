<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoUserList styleThema=" -skeleton-blue" v-if="items === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="items !== null && items.length !== 0 && skeleton !== true">
            <div class="o-user-list">
                <div class="o-user-list__outer">
                    <div class="o-user-list__items">
                        <div v-for="item in items" :key="item.id" class="o-user-list__item">
                            <div class="o-user-list__content-outer">
                                <div class="o-user-list__content-inner">
                                    <div class="o-user-list__image">
                                        <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-user-list__image-lazyload loading-image -blue">
                                            <img class="o-user-list__image-file lazyload-file"
                                                data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 160w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 186w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-230.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-274.webp 274w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-230.webp 230w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-230.webp 224w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-230.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-256.webp 256w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-360.webp 360w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 320w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 372w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-460-2x.webp 432w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-548-2x.webp 548w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-460-2x.webp 460w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-460-2x.webp 448w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-460-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-512-2x.webp 512w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-720-2x.webp 720w 

                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}.webp`"
                                                :alt="item.nickname"
                                                v-lazy>
                                            <NuxtLink class="o-user-list__image-link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`"></NuxtLink>
                                        </div>
                                        <div v-else class="o-user-list__image-lazyload loading-image -blue">
                                            <img class="o-user-list__image-file lazyload-file"
                                                data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 160w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 216w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 230w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 224w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 220w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 320w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 432w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 460w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 448w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 440w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,
                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w 
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                                :alt="item.nickname"
                                                v-lazy>
                                            <NuxtLink class="o-user-list__image-link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`"></NuxtLink>
                                        </div>
                                    </div>
                                    <div class="o-user-list__text">
                                        <span class="o-user-list__nickname">
                                            <NuxtLink class="o-user-list__nickname-link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`">{{ item.nickname }}</NuxtLink>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoUserList from '~/components/skeleton/skeletonoUserList.vue'

    export default {
        name: 'OrganismsoUserListComponent',

        components: {
            skeletonoUserList
        },

        props: {
            items: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            skeleton: {
                type: Boolean,
                required: false
            }
        }
    }
</script>