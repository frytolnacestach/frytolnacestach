<template>
    <div class="a-tooltip">{{ text }}</div>
</template>

<script>
    export default {
        name: 'AtomsaTooltipComponent',
        
        props: {
            text: {
                type: String,
                required: true
            }
        },
    }
</script>