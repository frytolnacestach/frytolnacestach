<template>
    <div class="o-form-place-visited-add" role="search">
        <!-- SECTION - FlashMassages -->
        <oFlashMessages :text="errorForm" styleThema=" -error" />
        <oFlashMessages :text="successForm" styleThema=" -success" />
        <!-- SECTION - FlashMassages END -->
        <div class="o-form-place-visited-add__input">
            <input class="a-input-search -blue" type="text" v-model="searchQuery" @input="filterPlaces" :placeholder="'Který ' + placeTypeName + ' si navštívil?'">
        </div>
        <span class="o-form-place-visited-add__condition" v-if="searchQuery.length < 3">Napiš alepoň 3 znaky</span>
        <div class="o-form-place-visited-add__result">
            <div class="m-search-result -blue">
                <ul class="m-search-result__items" v-if="filteredPlaces.length > 0">
                    <li v-for="placesSearch in filteredPlaces" :key="`${placesSearch.type_place}-${placesSearch.id}`" class="m-search-result__item">
                        <div class="m-search-result__link" @click="editVisited(placesSearch.id)">
                            <span class="m-search-result__name">{{ placesSearch.name }}</span>
                            <span class="m-search-result__visited" v-if="hasVisited(placesSearch.id)">{{ placeTypeName }} si už navštívil(a)</span>
                        </div>
                    </li>
                </ul>
                <span class="m-search-result__no-result" v-if="searchQuery.length >= 3 & filteredPlaces.length === 0">Tak tohle tu bohužel nenajdeš.. :/ <i>(zkus to ještě jednou)</i></span>
            </div>
        </div>
    </div>
</template>

<script>
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsFormPlaceVisitedAddComponent',

        components: {
            oFlashMessages
        },

        props: {
            type: {
                type: String,
                required: true
            },
            visitedPlace: {
                type: Array,
                required: false
            }
        },

        data() {
            return {
                errorForm: '',
                successForm: '',
                places: [],
                placesSearch: '',
                searchQuery: '',
                filteredPlaces: [],
                email: this.email,
                passwordHash: this.passwordHash,
                placeTypeSlug: null,
                placeTypeApp: null,
                placeTypeName: null,
                placeType: [
                    { type: 'kontinent', placeTypeApp: 'continent', placeTypeName: 'kontinent' },
                    { type: 'stat', placeTypeApp: 'state', placeTypeName: 'stát' },
                    { type: 'region', placeTypeApp: 'region', placeTypeName: 'region' },
                    { type: 'mesto', placeTypeApp: 'city', placeTypeName: 'město' },
                    { type: 'misto', placeTypeApp: 'spot', placeTypeName: 'místo' }
                ]
            }
        },

        mounted() {
            const matchedPlace = this.placeType.find(place => place.type === this.type) || {}
            this.placeTypeSlug = matchedPlace.type
            this.placeTypeApp = matchedPlace.placeTypeApp
            this.placeTypeName = matchedPlace.placeTypeName

            // user login information
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')

                this.email = localStorageEmail;
                this.passwordHash = localStoragePasswordHash;
            }
        },

        methods: {
            async editVisited(placeID) {
                try {
                    this.placeID = placeID;
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place-edit`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "http://localhost:3000",
                                "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                            },
                            method: 'POST',
                            body: JSON.stringify({
                                'email': this.email,
                                'password_hash': this.passwordHash,
                                'id_place': this.placeID, 
                                'type': this.placeTypeApp,
                                'status': 1
                            })
                        });

                        if (response.ok) {
                            if (response.status === 201) {
                                console.log("Místo bylo přidáno mezi navštívené");
                                this.successForm = "Místo bylo přidáno mezi navštívené";
                                this.searchQuery = ''
                                this.emitAddNewPlaceEvent(this.placeID)
                            } else if (response.status === 200) {
                                console.log("Záznam odebrán");
                                this.successForm = "Záznam odebrán";
                            }
                        } else if (response.status === 404) {
                            console.log("Vypadá to že nejsi přihlášen ke svému účtu.");
                            this.errorForm = "Vypadá to, že nejsi přihlášen ke svému účtu.";
                        } else {
                            console.log("Chyba při komunikaci s API");
                            this.errorForm = "Chyba při komunikaci s API";
                        }
                    } catch (err) {
                        console.log(err);
                        this.errorForm = "Chyba připojení k API";
                        throw err;
                    }
                } catch (err) {
                    console.log(err);
                    this.errorForm = "Nastala chyba";
                }
            },

            async searchPlaces() {
                try {
                    if (this.placeTypeApp === "continent") {
                        this.places = await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-continents?showType=search&search=${this.searchQuery}`)
                    } else if (this.placeTypeApp === "state") {
                        this.places = await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-states?showType=search&search=${this.searchQuery}`)
                    } else if (this.placeTypeApp === "region") {
                        this.places = await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-regions?showType=search&search=${this.searchQuery}`)
                    } else if (this.placeTypeApp === "city") {
                        this.places = await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities?showType=search&search=${this.searchQuery}`)
                    } else if (this.placeTypeApp === "spot") {
                        this.places = await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-spots?showType=search&search=${this.searchQuery}`)
                    }

                    this.filterPlaces()
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
                    this.filteredPlaces = this.places.filter(place => place.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
                }
            },

            hasVisited(id) {
                return this.visitedPlace.some(place => place.id === id);
            },

            emitAddNewPlaceEvent(placeID) {
                this.$emit('add-place', placeID);
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
                    this.places = []
                    this.filteredPlaces = []
                }
            }
        }
    }
</script>