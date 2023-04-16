<template>
    <footer class="t-footer">
        <div class="o-footer">

            <div class="o-footer__nav">
                <mNavFooter />
            </div>

            <div class="o-footer__copyright">
                <oCopyright />
            </div>

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