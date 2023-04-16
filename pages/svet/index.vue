<template>
    <main class="t-main -bg-brand3 -vh100">

        <!-- SECTION - Vyhledávač -->
        <section class="t-section pt-8 pb-4 -bg-brand3">
            <div class="t-section__inner mt-4">
                <div class="o-search">
                    <div class="o-search__input">
                        <input class="a-input-search" type="text" v-model="searchQuery" @input="filterPlaces" placeholder="Které místo tě zajímá?">
                    </div>
                    <span class="o-search__condition" v-if="searchQuery.length < 3">Napiš alepoň 3 znaky</span>
                    <div class="o-search__result">
                        <div class="m-search-result">
                            <ul class="m-search-result__items" v-if="filteredPlaces.length > 0">
                                <li v-for="placesSearch in filteredPlaces" :key="placesSearch.id" class="m-search-result__item">
                                    <NuxtLink class="m-search-result__link" :to="`/svet/kontinent/${placesSearch.slug}`" v-if="placesSearch.type_place === 'continent'">
                                        <span class="m-search-result__name">{{ placesSearch.name }}</span>
                                        <span class="m-search-result__type">Kontinent</span>
                                    </NuxtLink>

                                    <NuxtLink class="m-search-result__link" :to="`/svet/stat/${placesSearch.slug}`" v-if="placesSearch.type_place === 'state'">
                                        <span class="m-search-result__name">{{ placesSearch.name }}</span>
                                        <span class="m-search-result__type">Stát</span>
                                    </NuxtLink>

                                    <NuxtLink class="m-search-result__link" :to="`/svet/mesto/${placesSearch.slug}`" v-if="placesSearch.type_place === 'city'">
                                        <span class="m-search-result__name">{{ placesSearch.name }}</span>
                                        <span class="m-search-result__type">Město</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                            <span class="m-search-result__no-result" v-if="searchQuery.length >= 3 & filteredPlaces.length === 0">Tak tohle tu bohužel nenajdeš.. :/ <i>(zkuz to ještě jednou)</i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION - Vyhledávač END -->

        <!-- SECTION - Typ místa -->
        <section class="t-section py-4 -bg-brand3">
            <div class="t-section__inner">
                <div class="o-world-type">
                    <div class="o-world-type__outer">
                        <div class="o-world-type__inner">
                            <div class="o-world-type__items">
                                
                                <div class="o-world-type__item">
                                    <div class="o-world-type__container">
                                        <div class="o-world-type__image">
                                            <div class="o-world-type__image-file -continent">
                                                <NuxtLink class="o-world-type__image-link" :to="`/svet/kontinent`"></NuxtLink>
                                            </div>
                                        </div>
                                        <h2 class="o-world-type__text">
                                            <NuxtLink class="o-world-type__link" :to="`/svet/kontinent`">KONTINENTY<span class="o-world-type__link-length"> (7 položek) </span></NuxtLink>
                                        </h2>
                                    </div>
                                </div>

                                <div class="o-world-type__item">
                                    <div class="o-world-type__container">
                                        <div class="o-world-type__image">
                                            <div class="o-world-type__image-file -state">
                                                <NuxtLink class="o-world-type__image-link" :to="`/svet/stat`"></NuxtLink>
                                            </div>
                                        </div>
                                        <h2 class="o-world-type__text">
                                            <NuxtLink class="o-world-type__link" :to="`/svet/stat`">STÁTY<span class="o-world-type__link-length"> (249 položek) </span></NuxtLink>
                                        </h2>
                                    </div>
                                </div>

                                <div class="o-world-type__item">
                                    <div class="o-world-type__container">
                                        <div class="o-world-type__image">
                                            <div class="o-world-type__image-file -city">
                                                <NuxtLink class="o-world-type__image-link" :to="`/svet/mesto`"></NuxtLink>
                                            </div>
                                        </div>
                                        <h2 class="o-world-type__text">
                                            <NuxtLink class="o-world-type__link" :to="`/svet/mesto`">MĚSTA<span class="o-world-type__link-length"> (2491 položek) </span></NuxtLink>
                                        </h2>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

    export default {
        name: 'PageSvet',

        components: {

        },

        methods: {
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            },

            async searchPlaces() {
                try {
                    const [placesContinents, placesStates, placesCities] = await Promise.all([
                        this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents?search=${this.searchQuery}`),
                        this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states?search=${this.searchQuery}`),
                        this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities?search=${this.searchQuery}`)
                    ]);
                    this.placesContinents = placesContinents;
                    this.placesStates = placesStates;
                    this.placesCities = placesCities;
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
                    this.filteredPlaces = this.placesContinents.concat(this.placesStates).concat(this.placesCities).filter(place => place.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
                }
            }
        },

        data() {
            return {
                placesContinents: [],
                placesStates: [],
                placesCities: [],
                placesSearch: '',
                searchQuery: '',
                filteredPlaces: []
            }
        },

        computed: {
            hasResults() {
                return this.searchQuery.length >= 3 && this.filteredPlaces.length === 0;
            }
        },

        head: {
            title: 'Svět | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { name: 'keywords', content: 'Hledej místo, státy, města, cestování, svět' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        },

        watch: {
            searchQuery: function (newSearchQuery, oldSearchQuery) {
                if (newSearchQuery.length == 3) {
                    this.searchPlaces();
                }

                else if (newSearchQuery.substring(0, 3) !== oldSearchQuery.substring(0, 3)) {
                    this.searchPlaces();
                }

                else if (newSearchQuery.substring(0, 3) === oldSearchQuery.substring(0, 3)) {
                    if (filteredPlaces.length == 0 ){
                        this.searchPlaces();
                    }
                } 
                
                else if (newSearchQuery.length >= 3) {
                    filterPlaces()
                }

                else {
                    this.placesContinents = [];
                    this.placesStates = [];
                    this.placesCities = [];
                    this.filteredPlaces = [];
                }
            }
        }
    }
</script>