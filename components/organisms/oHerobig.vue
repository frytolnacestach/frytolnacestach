<template>
    <div class="o-hero-big">
        <div class="o-hero-big__image loading-image">
            <div class="o-hero-big__image-lazyload">
                <img class="o-hero-big__image-file lazyload-file"
                    data-sizes="(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px"
                    :data-srcset="`
                        https://image.frytolnacestach.cz/storage/_default/hero-374.webp 374w,
                        https://image.frytolnacestach.cz/storage/_default/hero-575.webp 575w,
                        https://image.frytolnacestach.cz/storage/_default/hero-767.webp 767w,
                        https://image.frytolnacestach.cz/storage/_default/hero-991.webp 991w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1139.webp 1139w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1219.webp 1219w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1399.webp 1399w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1920.webp 1920w,
                        https://image.frytolnacestach.cz/storage/_default/hero-748-2x.webp 748w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1150-2x.webp 1150w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1534-2x.webp 1534w,
                        https://image.frytolnacestach.cz/storage/_default/hero-1982-2x.webp 1982w,
                        https://image.frytolnacestach.cz/storage/_default/hero-2278-2x.webp 2278w,
                        https://image.frytolnacestach.cz/storage/_default/hero-2438-2x.webp 2438w,
                        https://image.frytolnacestach.cz/storage/_default/hero-2798-2x.webp 2798w,
                        https://image.frytolnacestach.cz/storage/_default/hero-3840-2x.webp 3840w,
                        `"
                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                    :alt="headline"
                    v-lazy>
            </div>

            <div class="o-hero-big__outer">
                <div class="o-hero-big__inner">
                    <h1 class="o-hero-big__headline">{{ headline }}</h1>
                    <p class="o-hero-big__perex">Cestování a natáčení</p>
                    <div class="o-hero-big__buttons mt-2">
                        <a class="a-button-fill -big" href="https://youtube.com/@frytolnacestach" target="_blank">Youtube</a>
                        <NuxtLink class="a-button-fill -big -blue" to="/iam">Kdo jsem</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHeroBigComponent',

        props: {
            headline: {
                type: String,
                required: true
            }
        },
    }
</script>