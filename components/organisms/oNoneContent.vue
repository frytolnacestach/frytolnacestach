<template>
    <div :class="'o-none-content' + (styleThema ? styleThema : '')">
        <div class="o-none-content__outer">
            <div :class="'o-none-content__inner' + (styleGap ? styleGap : '')">
                <span>{{ text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoNoneContentComponent',

        props: {
            text: {
                type: Array,
                required: true
            },
            styleThema: {
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