<template>
    <div class="t-components">
        <ComponentLogin @userData="handleUserData" />
        <ComponentHeader />
        <ComponentPrintFront />
        <Nuxt />
        <ComponentFooter />
        <ComponentPopupCookies />
    </div>
</template>

<script>
    export default {
        name: 'DefaultLayout',

        data() {
            return {
                loginStatus: 0,
                userEmail: '',
                userPasswordHash: '',
                userStatus: null,
                userNickname: ''
            }
        },

        methods: {
            handleUserData(data) {
                this.loginStatus = data.loginStatus
                this.userEmail = data.userEmail
                this.userPasswordHash = data.userPasswordHash
                this.userStatus = data.userStatus
                this.userNickname = data.userNickname
            }
        }
    }
</script>