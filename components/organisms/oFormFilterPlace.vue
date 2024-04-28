<template>
    <div :class="'o-form-filter-place' + (styleThema ? styleThema : '')">
        <div class="o-form-filter-place__outer">
            <div class="o-form-filter-place__inner">
                <div class="o-form-filter-place__form">
                    <div :class="'m-select' + (styleThema ? styleThema : '')">
                        <select class="m-select__select" name="filterSelect" v-model="filterSelect" @change="handleFilterSelectChange">
                            <option value="">{{ typePlaceFilterName }}</option>
                            <option v-for="filterPlace in filterPlaces" :key="filterPlace.id" :value="filterPlace.id">{{filterPlace.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsFormFilterPlaceComponent',

        props: {
            styleThema: {
                type: String,
                required: false
            },
            typePlaceFilterName: {
                type: String,
                required: true
            },
            typePlaceFilter: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                filterPlaces: [],
                filterSelect: ''
            }
        },

        async created() {
            if (this.typePlaceFilter === "continents") {
                const filterIDcontinent = this.$route.query.filterIDcontinent
                if (filterIDcontinent) {
                    this.filterSelect = parseInt(filterIDcontinent, 10)
                }
            } else if (this.typePlaceFilter === "states") {
                const filterIDstate = this.$route.query.filterIDstate
                if (filterIDstate) {
                    this.filterSelect = parseInt(filterIDstate, 10)
                }
            }
            await this.loadPlaces()
        },

        methods: {
            async loadPlaces() {
                let placesResponse
                
                // API - GET - ITEMS
                if (this.typePlaceFilter === "continents") {
                    // API - GET - Continents
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-continents?showType=filter`)
                } else if (this.typePlaceFilter === "states") {
                    // API - GET - States
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-states?showType=filter`)
                }

                // DATA
                const { data: placesData } = placesResponse
                this.filterPlaces = placesData
                this.updateParentVariable(this.filterSelect)
            },

            handleFilterSelectChange() {
                const selectedPlaceId = this.filterSelect
                
                // Set URL query
                if (this.typePlaceFilter === "continents") {
                    this.$router.replace({ query: { filterIDcontinent: selectedPlaceId } })
                } else if (this.typePlaceFilter === "states") {
                    this.$router.replace({ query: { filterIDstate: selectedPlaceId } })
                }

                // Update in parent
                this.updateParentVariable(selectedPlaceId)
            },

            updateParentVariable(id) {
                const selectedFilterPlace = this.filterPlaces.find(place => place.id === id)
                
                if (selectedFilterPlace) {
                    this.$emit('update', { id, name: selectedFilterPlace.name })
                } else {
                    this.$emit('update', { id: null, name: null })
                }
            }
        }
    }
</script>