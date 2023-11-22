<template>
    <div class="t-components">
        <!-- Print -->
        <ComponentPrintFront />
        <!-- END Print -->
        <!-- Login -->
        <ComponentLogin @accountData="handleAccountData" />
        <!-- END Login -->
        <!-- Frontend -->
        <ComponentHeader />
        <Nuxt />
        <ComponentFooter />
        <ComponentPopupCookies />
        <!-- END Frontend -->
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