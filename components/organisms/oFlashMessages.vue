<template>
    <div class="o-flash-messages" v-if="messages && messages.length > 0">
        <div class="o-flash-messages__items">
            <div :class="'o-flash-messages__item' + (item.status ? (' -' + item.status) : '')" v-for="(item, index) in messages" :key="index">
                <div class="o-flash-messages__outer">
                    <div class="o-flash-messages__inner">
                        <span class="o-flash-messages__text" v-html="item.message"></span>
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
        dataMessages: {
            type: Array,
            required: true
        }
    },
  
    data() {
        return {
            messages: []
        }
    },
  
    watch: {
        dataMessages: {
            handler(newData) {
                this.messages = this.dataMessages
            },
            immediate: true
        },

        messages: {
            handler(newMessage) {
                console.log('Změna message:', newMessage)
            },
            deep: true
        }
    }
}
</script>
  