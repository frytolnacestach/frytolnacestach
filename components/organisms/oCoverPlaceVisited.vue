<template>
    <div class="o-cover-place-visited">
        <div class="o-cover-place-visited__outer">
            <div class="o-cover-place-visited__items">
                <div v-for="place in places" :key="place.id" class="o-cover-place-visited__item">
                    <div class="o-cover-place-visited__content">
                        <div class="o-cover-place-visited__image loading-image">
                            <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-visited__image-lazyload">
                                <img class="o-cover-place-visited__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-180.webp 180w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-280.webp 280w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-380.webp 380w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-360-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-560-2x.webp 560w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-760-2x.webp 760w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                    :alt="place.name"
                                    v-lazy>
                            </div>
                            <div v-else class="o-cover-place-visited__image-lazyload">
                                <img class="o-cover-place-visited__image-file lazyload-file"
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
                                    :alt="place.name"
                                    v-lazy>
                            </div>
                        </div>
                        <h2 class="o-cover-place-visited__name">
                            {{ place.name }}
                        </h2>
                        <NuxtLink class="o-cover-place-visited__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoCoverPlaceComponent',

        props: {
            places: {
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