<template>
    <nav class="m-nav-footer">
        <div class="m-nav-footer__outer">
            <div class="m-nav-footer__inner">
                <span class="m-nav-footer__headline">Co dělám</span>
                <ul class="m-nav-footer__items">
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/">Úvod</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/clanky">Články</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/videa">Videa</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/social">Kde mě najdeš</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/iam">Kdo jsem</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/donate">Podpořit</NuxtLink>
                    </li>
                </ul>
            </div>


            <div class="m-nav-footer__inner">
                <span class="m-nav-footer__headline">Objevuj svět</span>
                <ul class="m-nav-footer__items">
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/svet/kontinent">Kontinenty</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/svet/stat">Státy</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/svet/region">Regiony</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/svet/mesto">Města</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/svet/misto">Místa</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/jidlo">Tradiční jídla</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/fauna">Fauna</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/flora">Flóra</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/znacka">Značky</NuxtLink>
                    </li>
                </ul>
            </div>


            <div class="m-nav-footer__inner">
                <span class="m-nav-footer__headline">Frytolnacestach.cz</span>
                <ul class="m-nav-footer__items">
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/cookies">Zásady Cookies</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="m-nav-footer__link" to="/conditions">Obchodní podmínky a zásady ochrany osobních údajů</NuxtLink>
                    </li>
                    <li class="m-nav-footer__item">
                        <NuxtLink class="js_cookies-edit m-nav-footer__link" to="#" rel="nofollow">Upravit můj souhlas s cookies</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
</template>

<script>
    export default {
        name: 'MoleculesmNavFootewComponent',
    }
</script>