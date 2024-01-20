<template>
    <footer class="t-footer hidden-print" role="contentinfo">
        <div class="o-footer">

            <!-- ANIMATION Flight -->
            <div class="o-footer__animation">
                <oAnimationFlight />
            </div>
            <!-- ANIMATION Flight END-->

            <!-- NAV Footer -->
            <div class="o-footer__nav">
                <mNavFooter />
            </div>
            <!-- NAV Footer END -->

            <!-- Social icons-->
            <div class="o-footer__nav">
                <mSocialIcons />
            </div>
            <!-- Social icons END -->

            <!-- COPYRIGHT -->
            <div class="o-footer__copyright">
                <oCopyright />
            </div>
            <!-- COPYRIGHT END -->

        </div>
    </footer>
</template>

<script>
    import mNavFooter from '~/components/molecules/mNavFooter.vue'
    import mSocialIcons from '~/components/molecules/mSocialIcons.vue'
    import oAnimationFlight from '~/components/organisms/oAnimationFlight.vue'
    import oCopyright from '~/components/organisms/oCopyright.vue'

    export default {
        name: 'ComponentFooterComponent',

        components: {
            mNavFooter,
            mSocialIcons,
            oAnimationFlight,
            oCopyright
        }
    }
</script>