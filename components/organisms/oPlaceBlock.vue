<template>
    <div class="o-place-block">
        <div class="o-place-block__outer">
            <div class="o-place-block__inner">
                <div class="o-place-block__content">
                    <div class="o-place-block__image loading-image">
                        <div v-if="image" class="o-place-block__image-lazyload">
                            <img
                                class="o-place-block__image-file lazyload-file"
                                v-lazy="{
                                    src: 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                    srcset: {
                                        '374': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                        '575': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',
                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x'
                                    },
                                    sizes: '(max-width: 374px) 374px, 375px'
                                }"
                                :alt="place[0].name"
                            />
                        </div>
                        <div v-else class="o-place-block__image-lazyload">
                            <img
                                class="o-place-block__image-file lazyload-file"
                                v-lazy="{
                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                    srcset: {
                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                    },
                                    sizes: '(max-width: 374px) 374px, 375px'
                                }"
                                :alt="place[0].name"
                            />
                        </div>
                        <div class="o-place-block__filter">
                            <span class="o-place-block__name">{{ place[0].name }}</span>
                        </div>
                    </div>
                    <div class="o-place-block__text">
                        <div class="o-place-block__wysiwyg" v-if="place[0].information_chatgpt" v-html="place[0].information_chatgpt.slice(0, 220)"></div>
                        <NuxtLink class="o-place-block__more" :to="`/svet/${type}/${place[0].slug}`">Číst více</NuxtLink>                                   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            place: {
                type: Array,
                required: true
            },
            image: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        }
    }
</script>