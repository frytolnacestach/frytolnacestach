<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -spot" title="Místa" perex="Informace o místech" />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Place list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesSpots" :images="images" type="misto" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oCoverPlace :places="null" :images="null" type="misto" :skeleton=true v-if="isLoading" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetMistoIndexPage',

        components: {
            oCoverPlace,
            oHeroPlaceType
        },

        data() {
            return {
                images: [],
                placesSpots: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        head: {
            title: 'Místa | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Zjisti si základní informace o místech za pomocí cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `místa, informace o místech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Regiony | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Zjisti si základní informace o místech za pomocí cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/misto` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async mounted() {
            await this.loadPlaces();
            this.addScrollListener();
        },

        methods:{
            async loadPlaces() {
                //start loading
                this.isLoading = true;

                //load places
                const [placesResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/places-spots?showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: placesData } = placesResponse;
                this.placesSpots = this.placesSpots.concat(placesData);

                //load images
                const imagesPlacesSpotsIDS = placesData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
                if (imagesPlacesSpotsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesSpotsIDS.join(',')}`);
                    const { data: imagesData } = imagesResponse;
                    this.images = this.images.concat(imagesData);
                }    

                //no more items?
                if (placesData.length === 0 || placesData.length < this.perPage) {
                    this.noMoreItems = true;
                }

                //end loading
                this.isLoading = false;
            },

            addScrollListener() {
                window.addEventListener('scroll', this.handleScroll);
            },

            removeScrollListener() {
                window.removeEventListener('scroll', this.handleScroll);
            },

            loadMoreItems() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return;
                }
                // loading more items
                this.page++;
                this.loadPlaces();
            },

            handleScroll() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return;
                }

                // Document for scroll point
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

                // Footer height
                const tFooterElement = document.querySelector('.t-footer');
                const tFooterHeight = tFooterElement.offsetHeight;

                // Point for loading
                if (scrollTop + windowHeight >= documentHeight - tFooterHeight) {
                    // loading more items
                    this.page++;
                    this.loadPlaces();
                }
            },
        },

        beforeDestroy() {
            this.removeScrollListener();
        }
    }
</script>