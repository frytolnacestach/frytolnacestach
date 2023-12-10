<template>
    <div class="js_o-popup-search o-popup-search">
        <div class="js_o-popup-search__close o-popup-search__close"></div>
        <!-- SECTION - Vyhledávač -->
        <section class="t-section pt-6 pb-2 px-1">
            <div class="t-section__inner">
                <oSearch styleThema=" -gray" styleSize=" -full"/>
            </div>
        </section>
        <!-- SECTION - Vyhledávač END -->
    </div>
</template>

<script>
    import oSearch from '@/components/organisms/oSearch.vue'

    export default {
        name: 'MoleculesoPopupSearchComponent',

        components: {
            oSearch
        }
    }
</script>