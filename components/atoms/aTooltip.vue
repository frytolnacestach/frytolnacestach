<template>
    <div class="a-tooltip">{{ text }}</div>
</template>

<script>
    export default defineComponent({
        name: 'AtomsaTooltipComponent',
        
        props: {
            text: {
                type: String,
                required: true
            }
        }
    })
</script>