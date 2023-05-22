<template>
    <div class="o-map-mapy">
        <div class="o-map-mapy__outer">
            <div class="o-map-mapy__inner">
                <div class="o-map-mapy__map">
                    <a class="o-map-mapy__map-link" :href="url" target="_blank">
                        
                        <div class="o-map-mapy__image loading-image">
                            <div v-if="images && images.find(image => image.id === idImageMap)" class="o-map-mapy__image-lazyload">
                                <img
                                    class="o-map-mapy__image-file lazyload-file"
                                    v-lazy="{
                                        src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                        srcset: {
                                            '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                            '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                            '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                            '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                            '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                            '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp',
                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp 2x',
                                            '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp 2x',
                                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp 2x',
                                            '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp 2x',
                                            '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp 2x',
                                            '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === idImageMap).source + images.find(image => image.id === idImageMap).name + '.webp 2x'
                                        },
                                        sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                    }"
                                    :alt="title"
                                />
                            </div>
                            <div v-else class="o-map-mapy__image-lazyload">
                                <img
                                    class="o-map-mapy__image-file lazyload-file"
                                    v-lazy="{
                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        srcset: {
                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '439': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '992': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '439@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '992@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                        },
                                        sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                    }"
                                    :alt="title"
                                />
                            </div>
                        </div>
                    </a>
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
            },
        }
    }
</script>