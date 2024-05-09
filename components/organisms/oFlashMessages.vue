<template>
    <div class="o-flash-messages" v-if="messages && messages.length > 0">
        <div class="o-flash-messages__items">
            <div :class="'o-flash-messages__item' + (item.status ? (' -' + item.status) : '')" v-for="(item, index) in filteredMessages" :key="index" >
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
    export default defineComponent({
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

        methods: {
            updateMessageVisibility(index, visibility) {
                this.$set(this.messages[index], 'visibility', visibility);
            },
        },

        computed: {
            filteredMessages() {
                return this.messages.filter(item => item.visibility !== 'hidden');
            }
        },
    
        watch: {
            dataMessages: {
                handler(newData) {
                    this.messages = newData.map((item) => ({
                        ...item,
                        visibility: 'visible',
                    }))

                    this.messages.forEach((item, index) => {
                        if (item.date) {
                            const currentTime = new Date().getTime();
                            const expirationTime = new Date(item.date).getTime() + item.duration

                            const timeout = expirationTime - currentTime

                            if (timeout > 0) {
                                setTimeout(() => {
                                    this.updateMessageVisibility(index, 'hidden')
                                }, timeout);
                            } else {
                                this.updateMessageVisibility(index, 'hidden')
                            }
                        }
                    })
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
    })
</script>
  