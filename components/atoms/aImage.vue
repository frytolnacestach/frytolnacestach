<template>
    <img :class="(cssClassComponent + '__image-file') + ' lazyload-file'"
        :data-sizes="generateSizes()"
        :data-srcset="generateSrcSet() + ',' + generateSrcSet('2x')"
        :data-src="'https://image.frytolnacestach.cz/storage' + imageSource + imageName + '.webp'"
        :alt="alt ? alt : 'Výchozí obrázek'"
        v-lazy
        v-if="lazy"
    >
    <img :class="cssClassComponent + '__image-file'"
        :sizes="generateSizes()"
        :srcset="generateSrcSet() + ',' + generateSrcSet('2x')"
        :src="'https://image.frytolnacestach.cz/storage' + imageSource + imageName + '.webp'"
        :alt="alt ? alt : 'Výchozí obrázek'"
        fetchpriority="high"
        v-else-if="!lazy"
    >
</template>

<script>
    export default {
        name: 'AtomsaImageComponent',
        
        props: {
            alt: {
                type: String,
                required: false
            },
            author: {
                type: String,
                required: false
            },
            lazy: {
                type: Boolean,
                required: false
            },
            imageSource: {
                type: String,
                required: true
            },
            imageName: {
                type: String,
                required: true
            },
            sizes: {
                type: Array,
                required: true
            },
            srcSet: {
                type: Array,
                required: true
            },
            cssClassComponent: {
                type: String,
                required: true
            }
        },

        methods: {
            generateSrcSet(type) {
                if (type === "2x") {
                    return this.sizes.map(size => {
                        return `https://image.frytolnacestach.cz/storage/${this.imageSource + size.orientation + this.imageName}-${size.imageWidth*2}-2x.webp ${size.elementWidth*2}w`
                    }).join(', ')
                } else {
                    return this.sizes.map(size => {
                        return `https://image.frytolnacestach.cz/storage/${this.imageSource + size.orientation + this.imageName}-${size.imageWidth}.webp ${size.elementWidth}w`
                    }).join(', ')
                }
            },

            generateSizes() {
                return this.srcSet.map((size, index) => {
                    if ( size.mediaQueriesWidth === null ) {
                        return `${size.elementWidth}px`
                    } else {
                        return `(max-width: ${size.mediaQueriesWidth}px) ${size.elementWidth}px`
                    }
                }).join(', ')
            }
        }
    }
</script>