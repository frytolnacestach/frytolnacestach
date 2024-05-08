<template>
    <nav class="js_m-nav-main m-nav-main" role="navigation">
        <div class="m-nav-main__outer">
            <div class="m-nav-main__inner">

                <!-- SECTION - Vyhledávač -->
                <section class="t-section pt-6 pb-2 px-1 hidden-desktop">
                    <div class="t-section__inner">
                        <oSearch styleThema=" -gray" styleSize=" -full"/>
                    </div>
                </section>
                <!-- SECTION - Vyhledávač END -->

                <ul class="m-nav-main__items">
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/svet" exact-active-class="-active" :class="{'-active': /^\/svet/.test($route.path)}">Svět</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/cestovatel" exact-active-class="-active" :class="{'-active': /^\/cestovatel/.test($route.path)}">Cestovatelé</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/clanky" exact-active-class="-active" :class="{'-active': /^\/clanky/.test($route.path)}">Články</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/videa" exact-active-class="-active" :class="{'-active': /^\/videa/.test($route.path)}">Videa</NuxtLink>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</template>

<script>
    import oSearch from '@/components/organisms/oSearch.vue'

    export default defineComponent({
        name: 'MoleculesmNavMainComponent',

        components: {
            oSearch
        }
    })
</script>