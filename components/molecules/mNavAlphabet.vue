<template>
    <div class="m-nav-alphabet">
        <div class="m-nav-alphabet__outer">
            <div class="m-nav-alphabet__inner">
                <ul class="m-nav-alphabet__items">
                    <li class="m-nav-alphabet__item" v-for="letter in alphabet" :key="letter" :class="{ '-active': isActive(letter) }">
                        <a class="m-nav-alphabet__link" href="#" @click.prevent="getPlaces(letter)">
                            <span class="m-nav-alphabet__span">{{ letter }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmNavAlphabetComponent',

        props: {
            alphabet: {
                type: Array,
                required: true
            }
        },

        methods:{
            async getPlaces(letter) {
                try {
                    const [placesCities] = await Promise.all([
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities-initial/${letter}`)
                    ]);

                    this.placesCities = placesCities;
                    this.selectedLetter = letter;
                } catch (error) {
                    console.error(error)
                }
            },
            
            isActive(letter) {
                return letter === this.selectedLetter;
            }
        },
    }
</script>