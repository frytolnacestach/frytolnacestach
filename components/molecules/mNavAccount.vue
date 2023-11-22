<template>
    <nav class="m-nav-account" :class="{'-open': statusOpen}" role="navigation">
        <div class="m-nav-account__outer">
            <div class="m-nav-account__inner">
                <ul class="m-nav-account__items">                    
                    <li class="m-nav-account__item" v-if="email">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -setting" to="/ucet/profil" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil'}">Základní informace</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -trophy" to="/ucet/profil/achievementy" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/achievementy'}">Achievementy</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -flag" to="/ucet/profil/navstivena-mista" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/navstivena-mista'}">Navštívená místa</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -calendar" to="/ucet/profil/chci-navstivit" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/chci-navstivit'}">Chci navštívit</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -user" to="/ucet/profil/sleduji" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/sleduji'}">Sleduji</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -review" to="/ucet/profil/recenze" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/recenze'}">Recenzoval jsem</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -post" to="/ucet/profil/clanky" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/clanky'}">Články</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -video" to="/ucet/profil/videa" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/videa'}">Videa</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -key" to="/ucet/profil/zmena-hesla" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/zmena-hesla'}">Změna hesla</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -data" to="/ucet/profil/moje-data" exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/moje-data'}">Moje data</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link -trash" to="/ucet/profil/smazani-uctu">Smazaní účtu</NuxtLink>
                    </li>
                    <li class="m-nav-account__item -logout">
                        <a class="js_m-nav-account__link m-nav-account__link -exit" @click="logout">Odhlásit se</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MoleculesmNavAccountComponent',

        props: {
            statusOpen: {
                type: Boolean,
                required: true
            }
        },

        data() {
            return {
                email: this.email
            }
        },

        methods: {
            logout() {
                //Nastavení localStorage
                localStorage.setItem("accountEmail","undefined")
                localStorage.setItem("accountPasswordHash","undefined")
                localStorage.setItem("accountStatus","undefined")
                localStorage.setItem("accountNickname","undefined")
                //Delete cookies
                document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                //router
                this.$router.push('/ucet/prihlaseni')
            }
        },

        mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem("accountEmail")
                this.email = localStorageEmail
            }
        }
    }
</script>