<template>
    <!-- Print Front -->
    <oPrintFront />
    <!-- Print Front END -->
</template>

<script>
    import oPrintFront from '~/components/organisms/oPrintFront.vue'

    export default defineComponent({
        name: 'ComponentPrintFrontComponent',

        components: {
            oPrintFront
        }
    })
</script>