<template>
    <div class="o-switch-hero flex flex-end-all">
        <span v-if="!showHero" @click="toggleHero" class="a-button-pure-icon -cover">Obrázek</span>
        <span v-else @click="toggleHero" class="a-button-pure-icon -map">Mapa</span>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoSwitchHeroComponent',

        data() {
            return {
                showHero: true
            }
        },

        methods: {
            toggleHero() {
                this.showHero = !this.showHero
                this.$emit('update:showHero', this.showHero)
            }
        }
    }
</script>