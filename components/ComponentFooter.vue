<template>
    <footer class="t-footer">
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
    import mNavFooter from '@/components/mNavFooter.vue'
    import oCopyright from '@/components/oCopyright.vue'

    export default {
        name: 'ComponentFooter',

        components: {
            mNavFooter,
            oCopyright
        }
    }
</script>