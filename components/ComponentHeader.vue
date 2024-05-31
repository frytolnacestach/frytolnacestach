<template>
    <header class="t-header hidden-print" role="banner">
        <div class="o-header">
            <div class="o-header__outer">
                <div class="o-header__inner">

                    <!-- LOGOTYPE -->
                    <MoleculesLogotype />
                    <!-- LOGOTYPE END -->

                    <!-- NAV - Main -->
                    <MoleculesNavMain />
                    <!-- NAV - Main END -->

                    <!-- NAV - Icon search -->
                    <MoleculesIconSearch />
                    <!-- NAV - Icon search END -->

                    <!-- NAV - Main profile -->
                    <MoleculesNavMainProfile />
                    <!-- NAV - Main profile END -->

                    <!-- NAV - Hamburger -->
                    <MoleculesHamburger />
                    <!-- NAV - Hamburger END -->

                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default defineComponent({
        name: 'ComponentHeaderComponent'
    })
</script>