<template>
    <div class="o-hero-article">
        <div class="o-hero-article__image loading-image -gray">
            <div v-if="images && images.find(image => image.id === post[0].id_image_hero)" class="o-hero-article__image-lazyload">
                <img class="o-hero-article__image-file lazyload-file"
                    data-sizes="(max-width: 349px) 230px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 1019px) 980px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px"
                    :data-srcset="`
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-230.webp 230w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-248.webp 248w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-146.webp 146w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-170.webp 170w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-216.webp 216w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-310.webp 310w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-206.webp 206w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-172.webp 172w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-200.webp 200w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-278.webp 278w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-460-2x.webp 460w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-680-2x.webp 680w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-720-2x.webp 720w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-840-2x.webp 840w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-1072-2x.webp 1072w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-1456-2x.webp 1456w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-1960-2x.webp 1960w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-2360-2x.webp 2360w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-2720-2x.webp 2720w,
                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + 'h-' + images.find(image => image.id === post[0].id_image_cover).name}-3760-2x.webp 3760w
                        `"
                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name}.webp`"
                    :alt="post[0].title"
                    :srr="true"
                    v-lazy>
            </div>
            <div v-else class="o-hero-article__image-lazyload">
                <img class="o-hero-article__image-file lazyload-file"
                    data-sizes="(max-width: 349px) 230px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 1019px) 980px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px"
                    :data-srcset="`
                        https://image.frytolnacestach.cz/storage/h-hero-230.webp 230w,
                        https://image.frytolnacestach.cz/storage/h-hero-340.webp 340w,
                        https://image.frytolnacestach.cz/storage/h-hero-360.webp 360w,
                        https://image.frytolnacestach.cz/storage/h-hero-420.webp 420w,
                        https://image.frytolnacestach.cz/storage/h-hero-536.webp 536w,
                        https://image.frytolnacestach.cz/storage/h-hero-728.webp 728w,
                        https://image.frytolnacestach.cz/storage/h-hero-980.webp 980w,
                        https://image.frytolnacestach.cz/storage/h-hero-1180.webp 1180w,
                        https://image.frytolnacestach.cz/storage/h-hero-1360.webp 1360w,
                        https://image.frytolnacestach.cz/storage/h-hero-1880.webp 1880w,
                        https://image.frytolnacestach.cz/storage/h-hero-460-2x.webp 460w,
                        https://image.frytolnacestach.cz/storage/h-hero-680-2x.webp 680w,
                        https://image.frytolnacestach.cz/storage/h-hero-720-2x.webp 720w,
                        https://image.frytolnacestach.cz/storage/h-hero-840-2x.webp 840w,
                        https://image.frytolnacestach.cz/storage/h-hero-1072-2x.webp 1072w,
                        https://image.frytolnacestach.cz/storage/h-hero-1456-2x.webp 1456w,
                        https://image.frytolnacestach.cz/storage/h-hero-1960-2x.webp 1960w,
                        https://image.frytolnacestach.cz/storage/h-hero-2360-2x.webp 2360w,
                        https://image.frytolnacestach.cz/storage/h-hero-2720-2x.webp 2720w,
                        https://image.frytolnacestach.cz/storage/h-hero-3760-2x.webp 3760w
                        `"
                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                    :alt="post[0].title"
                    :srr="true"
                    v-lazy>
            </div>

            <div class="o-hero-article__outer">
                <div class="o-hero-article__inner">
                    <h1 class="o-hero-article__headline" v-if="post[0].title">{{ post[0].title }}</h1>
                    <p class="o-hero-article__perex" v-if="post[0].perex">{{ post[0].perex }}</p>
                    <span class="o-hero-article__date" v-if="post[0].date">{{ formatDate(post[0].date) }} <span v-if="post[0].dateUpdate">(aktualizace {{ formatDate(post[0].dateUpdate) }})</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroArticleComponent',

        props: {
            post: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        },

        methods:{
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        }
    }
</script>