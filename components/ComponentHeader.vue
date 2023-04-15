<template>
    <header class="t-header">
        <div class="o-header">
            <div class="o-header__outer">
                <div class="o-header__inner">

                    <div class="m-logotype">
                        <div class="m-logotype__image">
                            <div class="m-logotype__image-file">
                                <NuxtLink class="m-logotype__image-link" to="/"></NuxtLink>
                            </div>
                        </div>
                        <div class="m-logotype__text">
                            <span class="m-logotype__text-main">FRYTOL NA CESTÁCH</span>
                        </div>
                    </div>

                    <nav class="js_m-nav-main m-nav-main">
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

                    <span class="js_m-hamburger m-hamburger" data-hamburger="close">
                        <span class="m-hamburger__texts">
                            <span class="m-hamburger__text m-hamburger__text--open">Menu</span>
                            <span class="m-hamburger__text m-hamburger__text--close">Zavřít</span>
                        </span>
                        <span class="m-hamburger__lines">
                            <span class="m-hamburger__line m-hamburger__line--1"></span>
                            <span class="m-hamburger__line m-hamburger__line--2"></span>
                            <span class="m-hamburger__line m-hamburger__line--3"></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'ComponentHeader'
    }
</script>