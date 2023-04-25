<template>
    <div class="o-sidebar-map-mapy">
        <div class="o-sidebar-map-mapy__outer">
            <div class="o-sidebar-map-mapy__inner">
                <div class="o-sidebar-map-mapy__map">
                    <a class="o-sidebar-map-mapy__map-link" :href="url" target="_blank">
                        
                        <div class="o-sidebar-map-mapy__image loading-image">
                            <div v-if="images && images.find(image => image.id === idImageMap)" class="o-sidebar-map-mapy__image-lazyload">
                                <img class="o-sidebar-map-mapy__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 340px, (max-width: 439px) 420px, (max-width: 575px) 550px, (max-width: 767px) 740px, (max-width: 991px) 980px, 300px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-300.webp 300w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-420.webp 420w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-550.webp 550w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-740.webp 740w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-600-2x.webp 600w
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-820-2x.webp 820w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-1100-2x.webp 1100w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}-1480-2x.webp 1480w,
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}.webp`"
                                    :alt="title"
                                    v-lazy>
                            </div>
                            <div v-else class="o-sidebar-map-mapy__image-lazyload">
                                <img class="o-sidebar-map-mapy__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 340px, (max-width: 439px) 420px, (max-width: 575px) 550px, (max-width: 767px) 740px, (max-width: 991px) 980px, 992px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-420.webp 420w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-550.webp 550w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-740.webp 740w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-980.webp 980w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-820-2x.webp 820w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1100-2x.webp 1100w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1480-2x.webp 1480w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1960-2x.webp 1960w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="title"
                                    v-lazy>
                            </div>
                        </div>
                    </a>
                </div>
                <a class="o-sidebar-map-mapy__link" :href="url" target="_blank">zobrazit mapu na mapy.cz</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            idImageMap: {
                type: Array,
                required: true
            }, 
            url: {
                type: Array,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>