<template>
    <div class="t-components">
        <!-- Print -->
        <ComponentPrintFront />
        <!-- END Print -->
        <!-- Login -->
        <ComponentLogin @userData="handleUserData" />
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
                user: []
            }
        },

        methods: {
            handleUserData(data) {
                this.loginStatus = data.loginStatus
                this.user = data.user
            }
        }
    }
</script>