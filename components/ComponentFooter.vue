<template>
    <footer class="t-footer" role="contentinfo">
        <div class="o-footer">
            <div class="o-footer__animation">
                <ul class="o-footer__animation-items">
                    <li class="o-footer__animation-item-mountains-3"></li>
                    <li class="o-footer__animation-item-mountains-2"></li>
                    <li class="o-footer__animation-item-mountains-1"></li>
                    <li class="o-footer__animation-item-aircraft-1"></li>
                    <li class="o-footer__animation-item-aircraft-2"></li>
                </ul>
            </div>

            <!-- NAV - Footer -->
            <div class="o-footer__nav">
                <mNavFooter />
            </div>
            <!-- NAV - Footer END -->

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
    import oCopyright from '~/components/organisms/oCopyright.vue'

    export default {
        name: 'ComponentFooterComponent',

        components: {
            mNavFooter,
            oCopyright
        }
    }
</script>