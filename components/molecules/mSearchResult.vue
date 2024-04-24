<template>
    <div :class="'m-search-result' + (styleThema ? styleThema : '') + (styleSize ? styleSize : '')">
        <ul class="m-search-result__items" v-if="result && result.length > 0">
            <li v-for="placesSearch in result" :key="`${placesSearch.type_place}-${placesSearch.id}`" class="m-search-result__item" @click="closePopup">
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
        <span class="m-search-result__no-result" v-if="query & query.length >= 3 && result && result.length === 0">Tak tohle tu bohužel nenajdeš.. :/ <i>(zkus to ještě jednou)</i></span>
    </div>
</template>

<script>
    export default {
        name: 'ModulesmSearchResult',

        props: {
            styleThema: {
                type: String,
                required: true
            },
            styleSize: {
                type: String,
                required: false
            },
            result: {
                type: Array,
                required: true
            },
            query: {
                type: String,
                required: true
            }
        },

        methods: {
            closePopup() {
                // Popup Search
                document.querySelector(".js_o-popup-search").classList.remove("open")
                document.documentElement.classList.remove("no-scroll")
                document.body.classList.remove("no-scroll")
                // Nav Main
                var hamburger = document.querySelector(".js_m-hamburger");
                hamburger.setAttribute("data-hamburger", "close");
                hamburger.classList.remove("open");
                document.querySelector(".js_m-nav-main").classList.remove("open");
                document.documentElement.classList.remove("no-scroll");
                document.body.classList.remove("no-scroll");

                this.$emit('select', true);
            }
        }
    }
</script>