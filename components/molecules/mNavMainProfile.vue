<template>
    <div class="m-nav-main-profile">
        <div class="m-nav-main-profile__icon">
            <NuxtLink class="m-nav-main-profile__icon-link -login" to="/ucet/profil" exact-active-class="-active" :class="{'-active': /^\/ucet/.test($route.path)}" :title="'Jsi přihlášen jako ' + nickname" v-if="nickname && nickname !== 'undefined'">
                <span class="m-nav-main-profile__icon-file"></span>
            </NuxtLink>

            <NuxtLink class="m-nav-main-profile__icon-link" to="/ucet" exact-active-class="-active" title="Přihlášení nebo registrace" :class="{'-active': /^\/ucet/.test($route.path)}" v-else>
                <span class="m-nav-main-profile__icon-file"></span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmNavMainProfileComponent',

        data() {
            return {
                nickname: this.nickname,
            }
        },

        mounted() {
            if (process.client) {
                this.nickname =  localStorage.getItem('nickname');
            }
        },

        watch: {
            '$route.path': {
                handler() {
                    if (process.client) {
                        this.nickname = localStorage.getItem('nickname');
                    }
                },
                immediate: true
            },
        },

        computed: {
            getTrimmedNickname() {
                const maxLength = 20;
                if (this.nickname.length > maxLength) {
                    return this.nickname.slice(0, maxLength) + '...';
                }
                return this.nickname;
            }
        }
    }
</script>