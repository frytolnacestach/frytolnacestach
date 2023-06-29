<template>
    <div class="o-cover-neighboring">
        <div class="o-cover-neighboring__outer">
            <div class="o-cover-neighboring__items">
                <div v-for="item in items" :key="item.id" class="o-cover-neighboring__item">
                    <div class="o-cover-neighboring__content">
                        <div class="o-cover-neighboring__image loading-image -green">
                            <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-neighboring__image-lazyload">
                                <img class="o-cover-neighboring__image-file lazyload-file"
                                    data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-166.webp 160w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 172w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 180w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-210.webp 210w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-274.webp 274w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-240.webp 240w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-240.webp 234w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-186.webp 166w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-210.webp 202w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-306.webp 306w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-232-2x.webp 320w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 344w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-420-2x.webp 420w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-548-2x.webp 548w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-480-2x.webp 480w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-480-2x.webp 468w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-372-2x.webp 332w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-420-2x.webp 404w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + 's-' + images.find(image => image.id === item.id_image_cover).name}-612-2x.webp 612w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}.webp`"
                                    :alt="item.name"
                                    v-lazy>
                            </div>
                            <div v-else class="o-cover-neighboring__image-lazyload">
                                <img class="o-cover-neighboring__image-file lazyload-file"
                                    data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 180w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 210w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 240w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 234w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 166w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 202w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 306w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-232-2x.webp 320w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 420w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 480w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 468w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 332w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 404w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 612w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="item.name"
                                    v-lazy>
                            </div>
                        </div>
                        <h2 class="o-cover-neighboring__name">
                            {{ item.name }}
                        </h2>
                        <NuxtLink class="o-cover-neighboring__link" :to="`/svet/stat/${item.slug}`" :aria-label="`Čti více o jídle ${item.name}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoCoverNeighboringComponent',

        props: {
            items: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        },
    }
</script>