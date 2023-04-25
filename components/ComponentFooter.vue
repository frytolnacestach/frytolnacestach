<template>
    <footer class="t-footer" role="contentinfo">
        <div class="o-footer">

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
        name: 'ComponentFooter',

        components: {
            mNavFooter,
            oCopyright
        }
    }
</script>