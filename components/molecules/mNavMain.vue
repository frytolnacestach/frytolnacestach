<template>
    <nav class="js_m-nav-main m-nav-main" role="navigation">
        <div class="m-nav-main__outer">
            <div class="m-nav-main__inner">
                <ul class="m-nav-main__items">
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/svet" exact-active-class="-active" :class="{'-active': /^\/svet/.test($route.path)}">Svět</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/jidlo" exact-active-class="-active" :class="{'-active': /^\/jidlo/.test($route.path)}">Jídla</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/clanky" exact-active-class="-active" :class="{'-active': /^\/clanky/.test($route.path)}">Články</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/videa" exact-active-class="-active" :class="{'-active': /^\/videa/.test($route.path)}">Videa</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/social" exact-active-class="-active">Kde mě najdeš</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/iam" exact-active-class="-active">Kdo jsem</NuxtLink>
                    </li>
                    <li class="m-nav-main__item -special">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/donate" exact-active-class="-active">Podpořit</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MoleculesmNavMainComponent',
    }
</script>