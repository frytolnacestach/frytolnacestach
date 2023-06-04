<template>
    <div class="o-flash-messages" v-if="text" >
        <div class="o-flash-messages__items">
            <div :class="'o-flash-messages__item' + (styleThema ? styleThema : '')">
                <div class="o-flash-messages__outer">
                    <div class="o-flash-messages__inner">
                        <span class="o-flash-messages__text" v-html="text"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoFlashMessagesComponent',
        props: {
            text: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: true
            }
        },
    }
</script>