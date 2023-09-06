<template>
    <div class="o-user-list">
        <div class="o-user-list__outer">
            <div class="o-user-list__items">
                <div v-for="item in items" :key="item.id" class="o-user-list__item">
                    <div class="o-user-list__content">
                        <div class="o-user-list__image loading-image -blue">
                            <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-user-list__image-lazyload">
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
                            </div>
                            <div v-else class="o-user-list__image-lazyload">
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
                            </div>
                        </div>
                        <h2 class="o-user-list__name">
                            {{ item.nickname }}
                        </h2>
                        <NuxtLink class="o-user-list__link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoUserListComponent',

        props: {
            items: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>