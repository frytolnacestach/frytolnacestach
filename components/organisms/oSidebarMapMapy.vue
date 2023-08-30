<template>
    <div class="o-sidebar-map-mapy">
        <div class="o-sidebar-map-mapy__outer">
            <div class="o-sidebar-map-mapy__inner">
                <div class="o-sidebar-map-mapy__map">
                    <div class="o-sidebar-map-mapy__image loading-image -gray">
                        <div v-if="images && images.find(image => image.id === idImageMap)" class="o-sidebar-map-mapy__image-lazyload">
                            <img class="o-sidebar-map-mapy__image-file lazyload-file"
                                data-sizes="320px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-320.webp 320w,
                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + 'h-' + images.find(image => image.id === idImageMap).name}-640-2x.webp 640w,
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name}.webp`"
                                :alt="title"
                                v-lazy>
                        </div>
                        <div v-else class="o-sidebar-map-mapy__image-lazyload">
                            <img class="o-sidebar-map-mapy__image-file lazyload-file"
                                data-sizes="320px"
                                :data-srcset="`
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,
                                    https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w
                                    `"
                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                :alt="title"
                                v-lazy>
                        </div>
                        <a class="o-sidebar-map-mapy__image-link" :href="url" target="_blank"></a>
                    </div>
                </div>
                <a class="o-sidebar-map-mapy__link" :href="url" target="_blank">zobrazit mapu na mapy.cz</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoSidebarMapMapyComponent',

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
            }
        }
    }
</script>