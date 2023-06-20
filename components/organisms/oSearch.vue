<template>
    <div class="o-search" role="search">
        <div class="o-search__input">
            <input class="a-input-search" type="text" v-model="searchQuery" @input="filterPlaces" placeholder="Které místo tě zajímá?">
        </div>
        <span class="o-search__condition" v-if="searchQuery.length < 3">Napiš alepoň 3 znaky</span>
        <div class="o-search__result">
            <div class="m-search-result">
                <ul class="m-search-result__items" v-if="filteredPlaces.length > 0">
                    <li v-for="placesSearch in filteredPlaces" :key="`${placesSearch.type_place}-${placesSearch.id}`" class="m-search-result__item">
                        <NuxtLink class="m-search-result__link" :to="`/svet/kontinent/${placesSearch.slug}`" v-if="placesSearch.type_place === 'continent'">
                            <span class="m-search-result__name">{{ placesSearch.name }}</span>
                            <span class="m-search-result__type">Kontinent</span>
                        </NuxtLink>

                        <NuxtLink class="m-search-result__link" :to="`/svet/stat/${placesSearch.slug}`" v-if="placesSearch.type_place === 'state'">
                            <span class="m-search-result__name">{{ placesSearch.name }}</span>
                            <span class="m-search-result__type">Stát</span>
                        </NuxtLink>

                        <NuxtLink class="m-search-result__link" :to="`/svet/region/${placesSearch.slug}`" v-if="placesSearch.type_place === 'region'">
                            <span class="m-search-result__name">{{ placesSearch.name }}</span>
                            <span class="m-search-result__type">Region</span>
                        </NuxtLink>

                        <NuxtLink class="m-search-result__link" :to="`/svet/mesto/${placesSearch.slug}`" v-if="placesSearch.type_place === 'city'">
                            <span class="m-search-result__name">{{ placesSearch.name }}</span>
                            <span class="m-search-result__type">Město</span>
                        </NuxtLink>

                        <NuxtLink class="m-search-result__link" :to="`/svet/misto/${placesSearch.slug}`" v-if="placesSearch.type_place === 'spot'">
                            <span class="m-search-result__name">{{ placesSearch.name }}</span>
                            <span class="m-search-result__type">Místo</span>
                        </NuxtLink>
                    </li>
                </ul>
                <span class="m-search-result__no-result" v-if="searchQuery.length >= 3 & filteredPlaces.length === 0">Tak tohle tu bohužel nenajdeš.. :/ <i>(zkus to ještě jednou)</i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsSearchComponent',

        methods: {
            async searchPlaces() {
                try {
                    const [placesContinents, placesStates, placesRegions, placesCities, placesSpots] = await Promise.all([
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-continents?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-states?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-regions?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities?showType=search&search=${this.searchQuery}`),
                        this.$axios.$get(`https://api.frytolnacestach.cz/api/places-spots?showType=search&search=${this.searchQuery}`)
                    ]);
                    this.placesContinents = placesContinents;
                    this.placesRegions = placesRegions;
                    this.placesStates = placesStates;
                    this.placesCities = placesCities;
                    this.placesSpots = placesSpots;

                    this.filterPlaces();
                } catch (error) {
                    console.error(error)
                }
            },

            filterPlaces() {
                this.filteredPlaces = [];

                if (!this.searchQuery) {
                    return;
                }
                if (this.searchQuery.length >= 3) {
                    this.filteredPlaces = this.placesContinents.concat(this.placesStates).concat(this.placesCities).concat(this.placesRegions).concat(this.placesSpots).filter(place => place.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
                return this.searchQuery.length >= 3 && this.filteredPlaces.length === 0;
            }
        },

        watch: {
            searchQuery: function(newSearchQuery, oldSearchQuery) {
                if (newSearchQuery.length == 3) {
                    this.searchPlaces();
                } else if (newSearchQuery.substring(0, 3) !== oldSearchQuery.substring(0, 3)) {
                    this.searchPlaces();
                } else if (newSearchQuery.substring(0, 3) === oldSearchQuery.substring(0, 3)) {
                    if (this.filteredPlaces.length == 0) {
                        this.searchPlaces();
                    }
                } else if (newSearchQuery.length >= 3) {
                    this.filterPlaces();
                } else {
                    this.placesContinents = [];
                    this.placesStates = [];
                    this.placesRegions = [];
                    this.placesCities = [];
                    this.placesSpots = [];
                    this.filteredPlaces = [];
                }
            }
        }
    }
</script>