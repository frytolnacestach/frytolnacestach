<template>
    <div class="o-cover-item-state">
        <div class="o-cover-item-state__outer">
            <div class="o-cover-item-state__items">
                <div v-for="item in items" :key="item.id" class="o-cover-item-state__item">
                    <div class="o-cover-item-state__content">
                        <div class="o-cover-item-state__image loading-image -green">
                            <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-item-state__image-lazyload">
                                <img class="o-cover-item-state__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-180.webp 180w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-280.webp 280w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-380.webp 380w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-360-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-560-2x.webp 560w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-760-2x.webp 760w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === item.id_image_cover).source + images.find(image => image.id === item.id_image_cover).name}.webp`"
                                    :alt="item.name"
                                    v-lazy>
                            </div>
                            <div v-else class="o-cover-item-state__image-lazyload">
                                <img class="o-cover-item-state__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="item.name"
                                    v-lazy>
                            </div>
                        </div>
                        <h2 class="o-cover-item-state__name">
                            {{ item.name }}
                        </h2>
                        <NuxtLink class="o-cover-item-state__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o jídle ${item.name}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoCoverItemstateComponent',

        props: {
            items: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },
    }
</script>