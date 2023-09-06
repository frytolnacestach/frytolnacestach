<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <!--<div class="skeleton-o-user-urls">
            <div class="skeleton-o-user-urls__outer">
                <div class="skeleton-o-user-urls__inner">
                    <div class="skeleton-o-user-urls__items">
                        <div v-for="index in 3" :key="index" class="skeleton-o-user-urls__item loading-image -skeleton-blue"></div>
                    </div>
                </div>
            </div>
        </div>-->
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="urls !== null">
            <div class="o-user-urls">
                <div class="o-user-urls__outer">
                    <div class="o-user-urls__inner">
                        <div class="o-user-urls__items">
                            <div class="o-user-urls__item" v-for="url in urls" :key="url.url">
                                <a class="o-user-urls__link" :href="url.url" :title="url.url">{{ url.url }}</a>
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
    export default {
        name: 'OrganismsoUserUrlsComponent',

        props: {
            urls: {
                type: Array,
                required: true
            }
        }
    }
</script>