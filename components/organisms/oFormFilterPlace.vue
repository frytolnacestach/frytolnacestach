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
                // Získání hodnoty z URL parametru filterIDcontinent
                const urlParams = new URLSearchParams(window.location.search)
                const filterIDcontinent = urlParams.get('filterIDcontinent')

                // Nastavení hodnoty filterSelect na základě URL parametru
                if (filterIDcontinent) {
                    this.filterSelect = filterIDcontinent
                    this.updateParentVariable(this.filterSelect)
                }
            } else if (this.typePlaceFilter === "states") {
                // Získání hodnoty z URL parametru filterIDstate
                const urlParams = new URLSearchParams(window.location.search)
                const filterIDstate = urlParams.get('filterIDstate')

                // Nastavení hodnoty filterSelect na základě URL parametru
                if (filterIDstate) {
                    this.filterSelect = filterIDstate
                    this.updateParentVariable(this.filterSelect)
                }
            }
            await this.loadPlaces()
        },

        methods: {
            async loadPlaces() {
                // COMPONENT - oFormFilterPlace
                if (this.typePlaceFilter === "continents") {
                    // continents
                    const [placesResponse] = await Promise.all([
                        this.$axios.get(`https://api.frytolnacestach.cz/api/places-continents?showType=filter`)
                    ])
                    const { data: placesData } = placesResponse
                    this.filterPlaces = placesData
                } else if (this.typePlaceFilter === "states") {
                    // states
                    const [placesResponse] = await Promise.all([
                        this.$axios.get(`https://api.frytolnacestach.cz/api/places-states?showType=filter`)
                    ])
                    const { data: placesData } = placesResponse
                    this.filterPlaces = placesData
                }
            },

            handleFilterSelectChange() {
                const selectedPlaceId = this.filterSelect
                this.updateParentVariable(selectedPlaceId)
            },

            updateParentVariable(id) {
                const newValue = id
                this.$emit('update', newValue)
            }
        }
    }
</script>