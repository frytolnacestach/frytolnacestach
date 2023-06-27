<template>
    <div class="o-world-type">
        <div class="o-world-type__outer">
            <div class="o-world-type__inner">
                <div class="o-world-type__items">
                    <div class="o-world-type__item" v-for="item in items" :key="item.id">
                        <div class="o-world-type__container">
                            <div class="o-world-type__image">
                                <div :class="'o-world-type__image-file' + item.styleThemaItem">
                                    <NuxtLink class="o-world-type__image-link" :to="item.url" :alt="item.name"></NuxtLink>
                                </div>
                            </div>
                            <h2 class="o-world-type__text">
                                <NuxtLink class="o-world-type__link" :to="item.url">
                                    <span class="o-world-type__link-title">{{ item.name }}</span>
                                    <span class="o-world-type__link-length">
                                        (&nbsp;<div class="o-world-type__link-length-number -loader" v-if="item.length === 0"></div><span class="o-world-type__link-length-number -number" v-if="item.length !== 0">{{ item.length }}</span>&nbsp;položek&nbsp;)
                                    </span>
                                </NuxtLink>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoWorldTypeComponent',

        data() {
            return { 
                count: this.count,
                items: [
                    {
                        id: 1,
                        name: "Kontinenty",
                        url: "/svet/kontinent",
                        length: 0,
                        styleThemaItem: " -continent"

                    },
                    {
                        id: 2,
                        name: "Státy",
                        url: "/svet/stat",
                        length: 0,
                        styleThemaItem: " -state"

                    },
                    {
                        id: 3,
                        name: "Regiony",
                        url: "/svet/region",
                        length: 0,
                        styleThemaItem: " -region"

                    },
                    {
                        id: 4,
                        name: "Města",
                        url: "/svet/mesto",
                        length: 0,
                        styleThemaItem: " -city"

                    },
                    {
                        id: 5,
                        name: "Místa",
                        url: "/svet/misto",
                        length: 0,
                        styleThemaItem: " -spot"

                    }
                ],
            }
        },

        async fetch() {
            const response = await fetch("https://api.frytolnacestach.cz/api/places-count");
            const data = await response.json();

            const countObj = {
                places_cities: data.places_cities,
                places_continents: data.places_continents,
                places_regions: data.places_regions,
                places_spots: data.places_spots,
                places_states: data.places_states
            };

            this.items[0].length = countObj.places_continents;
            this.items[1].length = countObj.places_states;
            this.items[2].length = countObj.places_regions;
            this.items[3].length = countObj.places_cities;
            this.items[4].length = countObj.places_spots;

            this.count = [countObj];
        }
    }
</script>