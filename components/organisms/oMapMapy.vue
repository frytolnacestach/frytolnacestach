<template>
    <div class="o-map-mapy">
        <div class="o-map-mapy__outer">
            <div class="o-map-mapy__inner">
                <div class="o-map-mapy__map">                        
                    <div class="o-map-mapy__map-image loading-image -gray">
                        <div v-if="images && images.find(image => image.id === idImageMap)" class="o-map-mapy__image-lazyload">
                            <img class="o-map-mapy__image-file lazyload-file"
                                data-sizes="(max-width: 349px) 320px, (max-width: 374px) 344px, (max-width: 399px) 370px, (max-width: 459px) 430px, (max-width: 575px) 546px, (max-width: 767px) 738px, 962px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-320.webp 320w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-344.webp 344w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-370.webp 370w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-430.webp 430w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-546.webp 546w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-738.webp 738w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-962.webp 962w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-640-2x.webp 640w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-2x.webp 688w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-740-2x.webp 740w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-860-2x.webp 860w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-1092-2x.webp 1092w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-1476-2x.webp 1476w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-1924-2x.webp 1924w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}.webp`"
                                :alt="title"
                                v-lazy>
                        </div>
                        <div v-else class="o-map-mapy__image-lazyload">
                            <img class="o-map-mapy__image-file lazyload-file"
                                data-sizes="(max-width: 349px) 320px, (max-width: 374px) 344px, (max-width: 399px) 370px, (max-width: 459px) 430px, (max-width: 575px) 546px, (max-width: 767px) 738px, 962px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/h-hero-320.webp 320w,
                                    https://image.frytolnacestach.cz/storage/h-hero-344.webp 344w,
                                    https://image.frytolnacestach.cz/storage/h-hero-370.webp 370w,
                                    https://image.frytolnacestach.cz/storage/h-hero-430.webp 430w,
                                    https://image.frytolnacestach.cz/storage/h-hero-546.webp 546w,
                                    https://image.frytolnacestach.cz/storage/h-hero-738.webp 738w,
                                    https://image.frytolnacestach.cz/storage/h-hero-962.webp 962w,
                                    https://image.frytolnacestach.cz/storage/h-hero-640-2x.webp 640w,
                                    https://image.frytolnacestach.cz/storage/h-hero-688-2x.webp 688w,
                                    https://image.frytolnacestach.cz/storage/h-hero-740-2x.webp 740w,
                                    https://image.frytolnacestach.cz/storage/h-hero-860-2x.webp 860w,
                                    https://image.frytolnacestach.cz/storage/h-hero-1092-2x.webp 1092w,
                                    https://image.frytolnacestach.cz/storage/h-hero-1476-2x.webp 1476w,
                                    https://image.frytolnacestach.cz/storage/h-hero-1924-2x.webp 1924w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                :alt="title"
                                v-lazy>
                        </div>
                        <a class="o-map-mapy__image-link" :href="url" target="_blank"></a>
                    </div>
                </div>
                <a class="o-map-mapy__link" :href="url" target="_blank">zobrazit mapu na mapy.cz</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoMapMapyComponent',

        props: {
            idImageMap: {
                type: Number,
                required: true
            }, 
            url: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
        }
    }
</script>