<template>
    <header class="t-header">
        <div class="o-header">
            <div class="o-header__outer">
                <div class="o-header__inner">

                    <!-- LOGOTYPE -->
                    <mLogotype />
                    <!-- LOGOTYPE END -->

                    <!-- NAV - Main -->
                    <mNavMain />
                    <!-- NAV - Main END -->

                    <!-- NAV - Hamburger -->
                    <mHamburger />
                    <!-- NAV - Hamburger END -->

                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import mLogotype from '~/components/molecules/mLogotype.vue.js'
    import mNavMain from '~/components/molecules/mNavMain.vue.js'
    import mHamburger from '~/components/molecules/mHamburger.vue.js'

    export default {
        name: 'ComponentHeader',

        components: {
            mLogotype,
            mNavMain,
            mHamburger
        }
    }
</script>