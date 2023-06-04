<template>
    <nav class="m-nav-account" role="navigation">
        <div class="m-nav-account__outer">
            <div class="m-nav-account__inner">
                <ul class="m-nav-account__items">                    
                    <li class="m-nav-account__item -special" v-if="email">
                        <NuxtLink class="js_m-nav-account__link m-nav-account__link" to="/ucet/profil">{{ email }}</NuxtLink>
                    </li>
                    <li class="m-nav-account__item">
                        <a class="js_m-nav-account__link m-nav-account__link" href="#">Odhlásit se</a>
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

        mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email');
                this.email = localStorageEmail;
            }
        },
    }
</script>