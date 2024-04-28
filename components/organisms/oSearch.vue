<template>
    <div :class="'o-search' + (styleSize ? styleSize : '')" role="search">
        <div class="o-search__input">
            <input :class="'js_a-input-search a-input-search' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '')" type="text" v-model="searchQuery" @input="filterPlaces" placeholder="Které místo tě zajímá?">
        </div>
        <span class="o-search__condition" v-if="searchQuery.length < 3">Napiš alepoň 3 znaky</span>
        <div class="o-search__result">
            <mSearchResult :styleThema="(styleThema ? styleThema : '')" :styleSize="(styleSize ? styleSize : '')" :result="filteredPlaces" :query="searchQuery" @select="handleSelect" />
        </div>
    </div>
</template>

<script>
    import mSearchResult from '~/components/molecules/mSearchResult.vue'

    export default {
        name: 'OrganismsoSearchComponent',

        components: {
            mSearchResult
        },

        props: {
            styleThema: {
                type: String,
                required: true
            },
            styleSize: {
                type: String,
                required: false
            }
        },

        methods: {
            async searchPlaces() {
                try {
                    // API - GET - Items
                    const [placesContinents, placesStates, placesRegions, placesCities, placesSpots] = await Promise.all([
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-continents?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-states?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-regions?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-spots?showType=search&search=${this.searchQuery}`)
                    ])
                    
                    // DATA
                    this.placesContinents = placesContinents
                    this.placesRegions = placesRegions
                    this.placesStates = placesStates
                    this.placesCities = placesCities
                    this.placesSpots = placesSpots
                    this.filterPlaces()
                } catch (error) {
                    console.error(error)
                }
            },

            filterPlaces() {
                this.filteredPlaces = []

                if (!this.searchQuery) {
                    return
                }
                if (this.searchQuery.length >= 3) {
                    this.filteredPlaces = this.placesContinents.concat(this.placesStates).concat(this.placesCities).concat(this.placesRegions).concat(this.placesSpots).filter(place => place.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
                }
            },

            handleSelect(select) {
                if (select === true) {
                    this.searchQuery = ""
                }
            }
        },

        data() {
            return {
                placesContinents: [],
                placesStates: [],
                placesRegions: [],
                placesCities: [],
                placesSpots: [],
                placesSearch: '',
                searchQuery: '',
                filteredPlaces: [],
            }
        },

        computed: {
            hasResults() {
                return this.searchQuery.length >= 3 && this.filteredPlaces.length === 0
            }
        },

        watch: {
            searchQuery: function(newSearchQuery, oldSearchQuery) {
                if (newSearchQuery.length == 3) {
                    this.searchPlaces()
                } else if (newSearchQuery.substring(0, 3) !== oldSearchQuery.substring(0, 3)) {
                    this.searchPlaces()
                } else if (newSearchQuery.substring(0, 3) === oldSearchQuery.substring(0, 3)) {
                    if (this.filteredPlaces.length == 0) {
                        this.searchPlaces()
                    }
                } else if (newSearchQuery.length >= 3) {
                    this.filterPlaces()
                } else {
                    this.placesContinents = []
                    this.placesStates = []
                    this.placesRegions = []
                    this.placesCities = []
                    this.placesSpots = []
                    this.filteredPlaces = []
                }
            }
        }
    }
</script>