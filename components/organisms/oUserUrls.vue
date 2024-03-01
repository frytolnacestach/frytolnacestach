<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <!--<skeletonoUserUrls styleThema=" -skeleton-blue" v-if="urls === null" />-->
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="urls !== null">
            <div class="o-user-urls">
                <div class="o-user-urls__outer">
                    <div class="o-user-urls__inner">
                        <div class="o-user-urls__items">
                            <div class="o-user-urls__item" v-for="url in urls" :key="url.url">
                                <div class="o-user-urls__content">
                                    <a :class="'o-user-urls__link' + (' -' + (url.url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)\//) ? url.url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)\//)[1].replace(/\.\w+$/, '') : ''))" :href="url.url" :title="url.url">
                                        <span class="o-user-urls__link-text">{{ (url.url.match(/\/([^\/]+)\/?$/)) ? url.url.match(/\/([^\/]+)\/?$/)[1] : url.url.replace(/^(https?:\/\/)?(?:www\.)?/, '').replace(/\/$/, '') }}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <client-only v-if="urls === null || urls.length === 0">
            Cestovatel nemá vyplňěné žádné odkazy.
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoUserUrls from '~/components/skeleton/skeletonoUserUrls.vue'

    export default {
        name: 'OrganismsoUserUrlsComponent',

        components: {
            skeletonoUserUrls
        },

        props: {
            urls: {
                type: Array,
                required: true
            }
        }
    }
</script>