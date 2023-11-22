<template>
    <div class="m-nav-main-profile">
        <div class="m-nav-main-profile__icon">
            <NuxtLink class="m-nav-main-profile__icon-link -login" to="/ucet/profil" exact-active-class="-active" :class="{'-active': /^\/ucet/.test($route.path)}" :title="'Jsi přihlášen jako ' + getTrimmedNickname(account[0].nickname)" v-if="account && account.length > 0">
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
                account: []
            }
        },
        
        methods: {
            getTrimmedNickname(nickname) {
                const maxLength = 20
                if (nickname.length > maxLength) {
                    return nickname.slice(0, maxLength) + '...'
                }
                return nickname
            }
        },

        watch: {
            '$store.state.account': {
                deep: true,
                immediate: true,
                handler() {
                    this.account = this.$store.state.account
                }
            }
        }
    }
</script>