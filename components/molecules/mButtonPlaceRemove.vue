<template>
    <div class="m-button-place-remove" @click="emitRemovePlaceEvent"></div>
</template>

<script>
    export default {
        name: 'MoleculesmButtonPlaceRemoveComponent',
        
        props: {
            IDPlace: {
                type: Number,
                required: true
            },
            typePlace: {
                type: String,
                required: true
            }
        },

        methods: {
            emitRemovePlaceEvent() {
                this.$emit('remove-place-clicked');
            }
        }
    }
</script>