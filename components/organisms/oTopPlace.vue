<template>
    <div class="o-top-place">
        <div class="o-top-place__outer">
            <div class="o-top-place__items">
                <div v-for="place in places" :key="place.id" class="o-top-place__item">
                    <div class="o-top-place__content">
                        <div class="o-top-place__image loading-image">
                            <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-top-place__image-lazyload">
                                <img class="o-top-place__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-180.webp 180w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-280.webp 280w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-380.webp 380w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-360-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-560-2x.webp 560w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-760-2x.webp 760w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                    :alt="place.name"
                                    v-lazy>
                            </div>
                            <div v-else class="o-top-place__image-lazyload">
                                <img class="o-top-place__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="place.name"
                                    v-lazy>
                            </div>
                        </div>
                        <h2 class="o-top-place__name">
                            <span class="o-top-place__name-type">
                                {{ place.type_place === 'city' ? 'Město' : place.type_place === 'state' ? 'Stát' : place.type_place === 'continent' ? 'Kontinent' : '' }}
                            </span>
                            {{ place.name }}
                        </h2>
                        <NuxtLink class="o-top-place__link" :to="`/svet/${place.type_place === 'continent' ? 'kontinent' : place.type_place === 'state' ? 'stat' : place.type_place === 'city' ? 'mesto' : ''}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoTopPlaceComponent',

        data() {
            return {
                topPlaces: this.topPlaces,
                places: this.places,
                placesContinents: this.placesContinents,
                placesStates: this.placesStates,
                placesCities: this.placesCities,
                images: this.images
            }
        },


        async fetch() {
            this.topPlaces = await fetch("https://frytolnacestach-api.vercel.app/api/top-places").then((res) => res.json());

            const topPlacesIDcontinents = this.topPlaces
                .filter(place => place.type === 'continent' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place);

            const topPlacesIDstates = this.topPlaces
                .filter(place => place.type === 'state' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place);

            const topPlacesIDcities = this.topPlaces
                .filter(place => place.type === 'city' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place);


            this.placesContinents = await fetch(`https://frytolnacestach-api.vercel.app/api/places-continents-array?id=${topPlacesIDcontinents.join(',')}`).then((res) => res.json());

            this.placesStates = await fetch(`https://frytolnacestach-api.vercel.app/api/places-states-array?id=${topPlacesIDstates.join(',')}`).then((res) => res.json());

            this.placesCities = await fetch(`https://frytolnacestach-api.vercel.app/api/places-cities-array?id=${topPlacesIDcities.join(',')}`).then((res) => res.json());

            this.places = (this.placesContinents ? this.placesContinents : []).concat(
                this.placesStates ? this.placesStates : [],
                this.placesCities ? this.placesCities : []
            );


            //load images for top Places
            const imagesPlaceID = this.places.map(place => place.id_image_cover).filter(id => id !== null && id !== '');

            this.images = await fetch(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlaceID.join(',')}`).then((res) => res.json());
        }
    }
</script>