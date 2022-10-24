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
                                        <router-link class="js_m-nav-main__link m-nav-main__link" to="/">Úvod</router-link>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <router-link class="js_m-nav-main__link m-nav-main__link" to="/blog">Články</router-link>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <router-link class="js_m-nav-main__link m-nav-main__link" to="/social">Kde mě najdeš</router-link>
                                    </li>
                                    <li class="m-nav-main__item">
                                        <router-link class="js_m-nav-main__link m-nav-main__link" to="/iam">Kdo jsem</router-link>
                                    </li>
                                    <li class="m-nav-main__item m-nav-main__item--special">
                                        <router-link class="js_m-nav-main__link m-nav-main__link" to="/donate">Podpořit</router-link>
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

<style scoped>

</style>