<template>
    <nav class="js_m-nav-main m-nav-main" role="navigation">
        <div class="m-nav-main__outer">
            <div class="m-nav-main__inner">
                <ul class="m-nav-main__items">
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/svet" exact-active-class="-active" :class="{'-active': /^\/svet/.test($route.path)}">Svět</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/jidlo" exact-active-class="-active" :class="{'-active': /^\/jidlo/.test($route.path)}">Tradiční jídla</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/clanky" exact-active-class="-active" :class="{'-active': /^\/clanky/.test($route.path)}">Články</NuxtLink>
                    </li>
                    <li class="m-nav-main__item">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/videa" exact-active-class="-active" :class="{'-active': /^\/videa/.test($route.path)}">Videa</NuxtLink>
                    </li>
                    <li class="m-nav-main__item -special" v-if="email">
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/ucet/profil" exact-active-class="-active">{{ email }}</NuxtLink>
                    </li>
                    <li class="m-nav-main__item -special" v-else>
                        <NuxtLink class="js_m-nav-main__link m-nav-main__link" to="/ucet" exact-active-class="-active">Přihlásit se</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MoleculesmNavMainComponent',

        data() {
            return {
                email: this.email,
            }
        },

        mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email');
                this.email = localStorageEmail;
            }
        },
    }
</script>