<template>
    <div :class="'m-headline' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '') + (styleGap ? styleGap : '')">
        <h2 class="m-headline__title">{{ title }} {{ titleValue ? titleValue : '' }}</h2>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            titleValue: {
                type: String,
                required: false
            },
            styleThema: {
                type: String,
                required: false
            },
            styleAlign: {
                type: String,
                required: false
            },
            styleGap: {
                type: String,
                required: false
            }
        }
    }
</script>