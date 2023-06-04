<template>
    <nav class="m-nav-account" role="navigation">
        <div class="m-nav-account__outer">
            <div class="m-nav-account__inner">
                <ul class="m-nav-account__items">                    
                    <li class="m-nav-account__item -special" v-if="email">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link" to="/ucet/profil">{{ email }}</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <a class="js_m-nav-account__link m-nav-account__link" href="#" @click="logout">Odhlásit se</a>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link" to="/ucet/profil/zmena-hesla">Změna hesla</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link" to="/ucet/profil/moje-data">Moje data</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link" to="/ucet/profil/smazani-uctu">Smazaní účtu</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MoleculesmNavAccountComponent',

        data() {
            return {
                email: this.email,
            }
        },

        methods: {
            logout() {
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("passworld_hash","undefined")
                localStorage.setItem("status","undefined")
                localStorage.setItem("nickname","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
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