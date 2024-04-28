<template>
    <div class="t-components">
        <!-- Print -->
        <ComponentPrintFront />
        <!-- Print END -->

        <!-- Login -->
        <ComponentLogin @accountData="handleAccountData" />
        <!-- Login END -->

        <!-- Frontend -->
        <ComponentHeader />
        <Nuxt />
        <ComponentFooter />
        <ComponentPopupCookies />
        <!-- Frontend END -->
    </div>
</template>

<script>
    export default {
        name: 'DefaultLayout',

        data() {
            return {
                loginStatus: 0,
                account: []
            }
        },

        methods: {
            handleAccountData(data) {
                this.loginStatus = data.loginStatus
                this.account = data.account
            }
        }
    }
</script>