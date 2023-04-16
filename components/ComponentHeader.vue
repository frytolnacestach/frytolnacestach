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
    import mLogotype from '@/components/mLogotype.vue'
    import mNavMain from '@/components/mNavMain.vue'
    import mHamburger from '@/components/mHamburger.vue'

    export default {
        name: 'ComponentHeader',

        components: {
            mLogotype,
            mNavMain,
            mHamburger
        }
    }
</script>