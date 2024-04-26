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
        },

        mounted() {
            window.addEventListener("load", mIconSearch)

            function mIconSearch() {
                const iconSearch = document.querySelector(".js_m-icon-search__icon")
                const iconSearchClose = document.querySelector(".js_o-popup-search__close")

                iconSearch.addEventListener("click", function() {
                    document.querySelector(".js_o-popup-search").classList.add("open")
                    document.documentElement.classList.add("no-scroll")
                    document.body.classList.add("no-scroll")
                    // Activation write to input
                    const inputSearch = document.querySelector('.js_o-popup-search .js_a-input-search')
                    inputSearch.focus()
                    inputSearch.removeAttribute('readonly')
                })

                iconSearchClose.addEventListener("click", function() {
                    document.querySelector(".js_o-popup-search").classList.remove("open")
                    document.documentElement.classList.remove("no-scroll")
                    document.body.classList.remove("no-scroll")
                })
            }
        }
    }
</script>