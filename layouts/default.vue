<template>
    <!-- Print -->
    <ComponentPrintFront />
    <!-- Print END -->

    <!-- Login -->
    <ComponentLogin @accountData="handleAccountData" />
    <!-- Login END -->

    <!-- Frontend -->
    <ComponentHeader />
    <slot />
    <ComponentFooter />
    <ComponentPopupCookies />
    <!-- Frontend END -->
</template>

<script>
    export default defineComponent({
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
    })
</script>