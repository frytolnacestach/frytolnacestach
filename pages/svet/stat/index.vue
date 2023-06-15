<template>
    <main class="t-main -green -pt-menu" role="main">
        
        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -state" title="Státy" perex="Najdete zde nejen 190 oficiálních států, ale také mnoho ostrovních a městských států, celkem 249 území, která stojí za návštěvu a objevování." />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Place list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesStates" :images="images" type="stat" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oCoverPlace :places="null" :images="null" type="stat" :skeleton=true v-if="isLoading" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetStatIndexPage',

        components: {
            oCoverPlace,
            oHeroPlaceType
        },

        methods:{

        },

        data() {
            return {
                images: [],
                placesStates: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        head: {
            title: 'Státy | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Objevuj všechny státy světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                { name: 'keywords', content: `státy, ostrovy, území, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Státy | Frytol na cestách' },
                { hid: 'og:description', content: 'Objevuj všechny státy světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/stat` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async mounted() {
            await this.loadPlaces();
            this.addScrollListener();
        },

        methods: {
            async loadPlaces() {
                //start loading
                this.isLoading = true;

                //load places
                const [placesResponse] = await Promise.all([
                    this.$axios.get(`https://frytolnacestach-api.vercel.app/api/places-states?page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: placesData } = placesResponse;

                //load images
                const imagesPlacesStatesID = placesData.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '');
                const imagesResponse = await this.$axios.get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesStatesID.join(',')}`);
                const { data: imagesData } = imagesResponse;

                //add to data
                this.placesStates = this.placesStates.concat(placesData);
                this.images = this.images.concat(imagesData);

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
                this.page++;
                this.loadPlaces();
            },


            handleScroll() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return;
                }

                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

                if (scrollTop + windowHeight >= documentHeight - 100) {
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