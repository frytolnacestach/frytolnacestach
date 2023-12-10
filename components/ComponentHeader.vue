<template>
    <header class="t-header hidden-print" role="banner">
        <div class="o-header">
            <div class="o-header__outer">
                <div class="o-header__inner">

                    <!-- LOGOTYPE -->
                    <mLogotype />
                    <!-- LOGOTYPE END -->

                    <!-- NAV - Main -->
                    <mNavMain />
                    <!-- NAV - Main END -->

                    <!-- NAV - Main profile -->
                    <mNavMainProfile />
                    <!-- NAV - Main profile END -->

                    <!-- NAV - Icon search -->
                    <mIconSearch />
                    <!-- NAV - Icon search END -->

                    <!-- NAV - Hamburger -->
                    <mHamburger />
                    <!-- NAV - Hamburger END -->

                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import mIconSearch from '~/components/molecules/mIconSearch.vue'
    import mLogotype from '~/components/molecules/mLogotype.vue'
    import mNavMain from '~/components/molecules/mNavMain.vue'
    import mNavMainProfile from '~/components/molecules/mNavMainProfile.vue'
    import mHamburger from '~/components/molecules/mHamburger.vue'

    export default {
        name: 'ComponentHeaderComponent',

        components: {
            mIconSearch,
            mLogotype,
            mNavMain,
            mNavMainProfile,
            mHamburger
        }
    }
</script>