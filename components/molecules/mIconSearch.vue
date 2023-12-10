<template>
    <div class="m-icon-search hidden-mobile">
        <div class="js_m-icon-search__icon m-icon-search__icon">
            <span class="m-icon-search__icon-file"></span>
        </div>
        <oPopupSearch />
    </div>
</template>

<script>
    import oPopupSearch from '@/components/organisms/oPopupSearch.vue'

    export default {
        name: 'MoleculesmIconSearchComponent',

        components: {
            oPopupSearch
        }
    }
</script>