<template>
    <div class="o-form-filter-place" role="filter">
        <div class="o-form-filter-place__outer">
            <div class="o-form-filter-place__inner">
                <div class="o-form-filter-place__form">
                    <div class="m-select">
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
                    this.filterSelect = parseInt(filterIDcontinent, 10)
                }
            }
            await this.loadPlaces()
        },

        methods: {
            async loadPlaces() {
                // Variable
                let placesResponse
                
                // COMPONENT - oFormFilterPlace
                if (this.typePlaceFilter === "continents") {
                    // continents
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-continents?showType=filter`)
                    const { data: placesData } = placesResponse
                    this.filterPlaces = placesData
                } else if (this.typePlaceFilter === "states") {
                    // states
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-states?showType=filter`)
                    const { data: placesData } = placesResponse
                    this.filterPlaces = placesData
                }
                this.updateParentVariable(this.filterSelect)
            },

            handleFilterSelectChange() {
                const selectedPlaceId = this.filterSelect
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