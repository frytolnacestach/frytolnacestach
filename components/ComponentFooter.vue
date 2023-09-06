<template>
    <footer class="t-footer" role="contentinfo">
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
    import oAnimationFlight from '~/components/organisms/oAnimationFlight.vue'
    import oCopyright from '~/components/organisms/oCopyright.vue'

    export default {
        name: 'ComponentFooterComponent',

        components: {
            mNavFooter,
            oAnimationFlight,
            oCopyright
        }
    }
</script>