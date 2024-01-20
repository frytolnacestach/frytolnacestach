<template>
    <div class="o-directory-subpages">
        <div class="o-directory-subpages__outer">
            <div class="o-directory-subpages__inner">
                <ul class="o-directory-subpages__items">
                    
                    <li class="o-directory-subpages__item" v-if="data.tabWhatToSee">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[1].slug">
                            <div class="o-directory-subpages__icon -what-to-see"></div>
                            <span class="o-directory-subpages__title">{{ tabs[1].label }}</span>
                            <span class="o-directory-subpages__result">Zjistit více</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabPrice">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[2].slug">
                            <div class="o-directory-subpages__icon -price"></div>
                            <span class="o-directory-subpages__title">{{ tabs[2].label }}</span>
                            <span class="o-directory-subpages__result">Zjistit více</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabPeople">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[3].slug">
                            <div class="o-directory-subpages__icon -people"></div>
                            <span class="o-directory-subpages__title">{{ tabs[3].label }}</span>
                            <span class="o-directory-subpages__result">Zjistit více</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabTrip">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[4].slug">
                            <div class="o-directory-subpages__icon -trip"></div>
                            <span class="o-directory-subpages__title">{{ tabs[4].label }}</span>
                            <span class="o-directory-subpages__result">Zjistit více</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabContact">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[5].slug">
                            <div class="o-directory-subpages__icon -contacts"></div>
                            <span class="o-directory-subpages__title">{{ tabs[5].label }}</span>
                            <span class="o-directory-subpages__result">Zjistit více</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabHotel">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[6].slug">
                            <div class="o-directory-subpages__icon -hotel"></div>
                            <span class="o-directory-subpages__title">{{ tabs[6].label }}</span>
                            <span class="o-directory-subpages__result">Zjistit více</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabVideos > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[7].slug">
                            <div class="o-directory-subpages__icon -videos"></div>
                            <span class="o-directory-subpages__title">{{ tabs[7].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabVideos }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabArticles > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[8].slug">
                            <div class="o-directory-subpages__icon -articles"></div>
                            <span class="o-directory-subpages__title">{{ tabs[8].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabArticles }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabNeighboring">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[9].slug">
                            <div class="o-directory-subpages__icon -neighboring"></div>
                            <span class="o-directory-subpages__title">{{ tabs[9].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabNeighboring }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabWallSockets > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[10].slug">
                            <div class="o-directory-subpages__icon -wall-sockets"></div>
                            <span class="o-directory-subpages__title">{{ tabs[10].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabWallSockets }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabChains > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[11].slug">
                            <div class="o-directory-subpages__icon -chains"></div>
                            <span class="o-directory-subpages__title">{{ tabs[11].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabChains }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabFauna > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[12].slug">
                            <div class="o-directory-subpages__icon -fauna"></div>
                            <span class="o-directory-subpages__title">{{ tabs[12].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabFauna }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabFlora > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[13].slug">
                            <div class="o-directory-subpages__icon -flora"></div>
                            <span class="o-directory-subpages__title">{{ tabs[13].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabFlora }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabFoods > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[14].slug">
                            <div class="o-directory-subpages__icon -foods"></div>
                            <span class="o-directory-subpages__title">{{ tabs[14].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabFoods }}</span>
                        </NuxtLink>
                    </li>

                    <li class="o-directory-subpages__item" v-if="data.tabBrands > 0">
                        <NuxtLink class="o-directory-subpages__link" :to="'/svet/stat/' + placeSlug + '/' + tabs[15].slug">
                            <div class="o-directory-subpages__icon -brands"></div>
                            <span class="o-directory-subpages__title">{{ tabs[15].label }}</span>
                            <span class="o-directory-subpages__result">Počet položek: {{ data.tabBrands }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoDirectorySubpagesComponent',

        props: {
            placeSlug: {
                type: String,
                required: true
            },
            tabs: {
                type: Array,
                required: true
            },
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>