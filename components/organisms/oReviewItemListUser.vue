<template>
    <section class="t-section my-2 -p0">
        <div class="t-section__inner">
            <mHeadline title="Napsané recenze" styleThema=" -account -blue" styleAlign="" styleGap="" />
            <section class="t-component-skeleton">
                
                <!-- SHOW - skeleton -->
                <skeletonoReviewItemList styleThema=" -skeleton-blue" v-if="reviews === null" />
                <!-- SHOW - skeleton END -->

                <!-- SHOW - client -->
                <client-only v-if="reviews !== null">
                    <div class="o-review-item-list-user" v-if="reviews && reviews.length > 0 && places && places.length > 0">
                        <div class="o-review-item-list-user__outer">
                            <div class="o-review-item-list-user__inner">
                                <div class="o-review-item-list-user__items">
                                    <div class="o-review-item-list-user__item print-section" v-for="review in reviews" :key="review.id">
                                        <div class="o-review-item-list-user__content">
                                            <div class="o-review-item-list-user__image loading-image -blue">
                                                <div class="o-review-item-list-user__image-lazyload" v-if="images && images.find( image => places.find(place => place.slug === image.name && place.type_place === image.type && place.type_place === review.type && place.id === review.id_place ))">
                                                    <aImage 
                                                        :alt="places.find(place => place.id === review.id_place && place.type_place === review.type).name ? places.find(place => place.id === review.id_place && place.type_place === review.type).name : 'Místo'"  
                                                        :author="images.find( image => places.find(place => place.slug === image.name && place.type_place === image.type && place.type_place === review.type && place.id === review.id_place )).author"
                                                        :lazy=true
                                                        :imageSource="images.find( image => places.find(place => place.slug === image.name && place.type_place === image.type && place.type_place === review.type && place.id === review.id_place )).source"
                                                        :imageName="images.find( image => places.find(place => place.slug === image.name && place.type_place === image.type && place.type_place === review.type && place.id === review.id_place )).name"
                                                        :sizes=imageSizes
                                                        :srcSet=imageSizesMedia
                                                        cssClassComponent="o-review-item-list-user"
                                                    />
                                                </div>
                                                <div class="o-review-item-list-user__image-lazyload" v-else >
                                                    <aImage 
                                                        :alt="places.find(place => place.id === review.id_place && place.type_place === review.type).name ? places.find(place => place.id === review.id_place && place.type_place === review.type).name : 'Místo'"  
                                                        :lazy=true
                                                        imageSource="/_default/"
                                                        imageName="no-image"
                                                        :sizes=imageSizes
                                                        :srcSet=imageSizesMedia
                                                        cssClassComponent="o-review-item-list-user"
                                                    />
                                                </div>
                                                <NuxtLink class="o-review-item-list-user__image-link" :to="`/${mapType(review.type)}/${places.find(place => place.id === review.id_place && place.type_place === review.type).slug}`" :aria-label="`Přejít na místo ${places.find(place => place.id === review.id_place && place.type_place === review.type).name}`"></NuxtLink>
                                            </div>
                                            <div class="o-review-item-list-user__text">
                                                <div class="o-review-item-list-user__review">
                                                    <div class="o-review-item-list-user__stars">
                                                        <div class="o-review-item-list-user__star" :class="{'-active': review.rating > 0}"></div>
                                                        <div class="o-review-item-list-user__star" :class="{'-active': review.rating > 1}"></div>
                                                        <div class="o-review-item-list-user__star" :class="{'-active': review.rating > 2}"></div>
                                                        <div class="o-review-item-list-user__star" :class="{'-active': review.rating > 3}"></div>
                                                        <div class="o-review-item-list-user__star" :class="{'-active': review.rating > 4}"></div>
                                                    </div>
                                                    <h3 class="o-review-item-list-user__name">
                                                        <NuxtLink  class="o-review-item-list-user__name-link" :to="`/${mapType(review.type)}/${places.find(place => place.id === review.id_place && place.type_place === review.type).slug}`" :aria-label="`Přejít na profil uživatele ${places.find(place => place.id === review.id_place && place.type_place === review.type).nickname}`">{{ places.find(place => place.id === review.id_place && place.type_place === review.type).name }}</NuxtLink>
                                                    </h3>
                                                    <p class="o-review-item-list-user__perex">{{ review.text }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </client-only>
                <client-only v-if="reviews && Array.isArray(reviews) && reviews.length === 0">
                    <p>
                        Cestovatel zatím nenapsal žadnou recenzi.
                    </p>
                </client-only>
                <!-- SHOW - client END -->

            </section>
        </div>
    </section>
</template>

<script>
    import skeletonoReviewItemList from '~/components/skeleton/skeletonoReviewItemList.vue'
    import aImage from '~/components/atoms/aImage.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'

    export default {
        name: 'OrganismsoReviewItemListUserComponent',

        components: {
            skeletonoReviewItemList,
            aImage,
            mHeadline
        },

        props: {
            user: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                reviews: null,
                places: [],
                images: [],
                placesContinents: this.placesContinents,
                imagesPlacesContinents: this.imagesPlacesContinents,
                placesStates: this.placesStates,
                imagesPlacesStates: this.imagesPlacesStates,
                placesCities: this.placesCities,
                imagesPlacesCities: this.imagesPlacesCities,
                placesRegions: this.placesRegions,
                imagesPlacesRegions: this.imagesPlacesRegions,
                placesSpots: this.placesSpots,
                imagesPlacesSpots: this.imagesPlacesSpots,
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 40
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 50
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 70
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 40,
                        "imageWidth": 40,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 50,
                        "imageWidth": 50,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 70,
                        "imageWidth": 70,
                        "orientation": "h-"
                    }
                ]
            }
        },

        methods: {
            mapType(type) {
                if (type === 'continent') {
                    return 'svet/kontinent'
                } else if (type === 'state') {
                    return 'svet/stat'
                } else if (type === 'region') {
                    return 'svet/region'
                } else if (type === 'city') {
                    return 'svet/mesto'
                } else if (type === 'spot') {
                    return 'svet/misto'
                }
            }
        },

        async mounted() {
            let success = false
            let data = null

            while (!success) {
                try {
                    // API - GET - Reviews
                    const reviews = await this.$axios.$get(`https://api.frytolnacestach.cz/api/reviews-id-user?id_user=${this.user[0].id}`)
                    // API - GET - Data ready
                    const placesContinentsID = reviews.filter(review => review.type === 'continent').map(review => review.id_place) || []
                    const placesStatesID = reviews.filter(review => review.type === 'state').map(review => review.id_place) || []
                    const placesCitiesID = reviews.filter(review => review.type === 'city').map(review => review.id_place) || []
                    const placesRegionsID = reviews.filter(review => review.type === 'region').map(review => review.id_place) || []
                    const placesSpotsID = reviews.filter(review => review.type === 'spot').map(review => review.id_place) || []
                    // API - GET - Continents
                    const placesContinents = placesContinentsID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=${placesContinentsID.join(',')}`) : []
                    // API - GET - Images
                    const imagesPlacesContinentsID = placesContinents.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesPlacesContinents = imagesPlacesContinentsID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesContinentsID.join(',')}`) : []
                    // API - GET - States
                    const placesStates = placesStatesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${placesStatesID.join(',')}`) : []
                    // API - GET - Images
                    const imagesPlacesStatesID = placesStates.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesPlacesStates = imagesPlacesStatesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`) : []
                    // API - GET - Cities
                    const placesCities = placesCitiesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=${placesCitiesID.join(',')}`) : []
                    // API - GET - Images
                    const imagesPlacesCitiesID = placesCities.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesPlacesCities = imagesPlacesCitiesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesID.join(',')}`) : []
                    // API - GET - Regions
                    const placesRegions = placesRegionsID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=${placesRegionsID.join(',')}`) : []
                    // API - GET - Images
                    const imagesPlacesRegionsID = placesRegions.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesPlacesRegions = imagesPlacesRegionsID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesRegionsID.join(',')}`) : []
                    // API - GET - Spots
                    const placesSpots = placesSpotsID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=${placesSpotsID.join(',')}`) : []
                    // API - GET - Images
                    const imagesPlacesSpotsID = placesSpots.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const imagesPlacesSpots = imagesPlacesSpotsID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesSpotsID.join(',')}`) : []

                    // DATA
                    const places = [
                        ...placesContinents,
                        ...placesStates,
                        ...placesCities,
                        ...placesRegions,
                        ...placesSpots
                    ]
                    const images = [
                        ...imagesPlacesContinents,
                        ...imagesPlacesStates,
                        ...imagesPlacesCities,
                        ...imagesPlacesRegions,
                        ...imagesPlacesSpots
                    ]
                    data = {
                        reviews,
                        places,
                        images,
                        placesContinents,
                        imagesPlacesContinents,
                        placesStates,
                        imagesPlacesStates,
                        placesCities,
                        imagesPlacesCities,
                        placesRegions,
                        imagesPlacesRegions,
                        placesSpots,
                        imagesPlacesSpots
                    }

                    // FINAL
                    success = true
                } catch (error) {
                    console.log(`API ERROR - CESTOVATEL - HODNOCENÍ`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        }
    }
</script>