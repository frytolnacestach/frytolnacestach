<template>
    <footer class="t-footer">
        <div class="o-footer">
            <div class="o-footer__nav">
                <nav class="m-nav-footer">
                    <div class="m-nav-footer__outer">
                        <div class="m-nav-footer__inner">
                            <ul class="m-nav-footer__items">
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/">Úvod</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/blog">Blog</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/social">Kde mě najdeš</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/iam">Kdo jsem</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/donate">Podpořit</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/cookies">Zásady Cookies</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <router-link class="m-nav-footer__link" to="/conditions">Obchodní podmínky a zásady ochrany osobních údajů</router-link>
                                </li>
                                <li class="m-nav-footer__item">
                                    <a class="js_cookies-edit m-nav-footer__link">Upravit můj souhlas s cookies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="o-footer__copyright">
                <div class="o-copyright">
                    <div class="o-copyright__outer">
                        <div class="o-copyright__inner">
                            <span class="o-copyright__text">&copy; Všechna práva vyhrazena Frytol na cestách</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'ComponentFooter'
    }
</script>

<style scoped>

</style>