<template>
    <div class="m-button-place-add hidden-print" :class="{'-first': type === 'first'}" @click="emitAddPlaceEvent">
        <div class="m-button-place-add__content">
            <div class="m-button-place-add__box">
                <span class="m-button-place-add__text" v-if="type === 'first'">Přidat první místo</span>
                <span class="m-button-place-add__text" v-if="type === 'next'">Přidat místo</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmButtonPlaceAddComponent',
        
        props: {
            type: {
                type: String,
                required: true
            }
        },

        methods: {
            emitAddPlaceEvent() {
                this.$emit('add-place-clicked')
            }
        }
    }
</script>