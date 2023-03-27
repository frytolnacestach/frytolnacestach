<template>
    <header class="t-header">
        <div class="o-header">
            <div class="o-header__outer">
                <div class="o-header__inner">
                    <nav class="m-nav-main">
                        <div class="m-nav-main__outer">
                            <div class="m-nav-main__inner">
                                <ul class="m-nav-main__items">
                                    <li class="m-nav-main__item">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/">Úvod</NuxtLink>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/svet">Svět<span class="m-nav-main__link-subfix">BETA</span></NuxtLink>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/clanky">Články</NuxtLink>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/videa">Videa</NuxtLink>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/social">Kde mě najdeš</NuxtLink>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/iam">Kdo jsem</NuxtLink>
                                    </li>
                                    <li class="m-nav-main__item m-nav-main__item--special">
                                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/donate">Podpořit</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'MenuMain'
    }
</script>