<template>
    <section class="t-section -px-world mt-1 mb-2" v-if="travelDictionaries && travelDictionaries.length > 0">
        <div class="t-section__inner">
            <div class="o-sidebar-list-travel-dictionary">
                <div class="o-sidebar-list-travel-dictionary__outer">
                    <div class="o-sidebar-list-travel-dictionary__inner">
                        <h3 class="o-sidebar-list-travel-dictionary__header">Další výrazy</h3>
                        <div class="o-sidebar-list-travel-dictionary__items">
                            <div class="o-sidebar-list-travel-dictionary__item" v-for="event in travelDictionaries" :key="event.id">
                                <div class="o-sidebar-list-travel-dictionary__image-container">
                                    <div class="o-sidebar-list-travel-dictionary__image loading-image -green">
                                        <div v-if="images && images.find(image => image.id === event.id_image_hero)" class="o-sidebar-list-travel-dictionary__image-lazyload">
                                            <img class="o-sidebar-list-travel-dictionary__image-file lazyload-file"
                                                data-sizes="0px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === event.id_image_cover).source + images.find(image => image.id === event.id_image_cover).name}-100.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/${images.find(image => image.id === event.id_image_cover).source + images.find(image => image.id === event.id_image_cover).name}-200-2x.webp 200w,
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === event.id_image_cover).source + images.find(image => image.id === event.id_image_cover).name}.webp`"
                                                :alt="event.name ? event.name : 'Úvodní obrázek'"
                                                :preload="true"
                                                v-lazy>
                                        </div>
                                        <div v-else class="o-sidebar-list-travel-dictionary__image-lazyload">
                                            <img class="o-sidebar-list-travel-dictionary__image-file lazyload-file"
                                                data-sizes="0px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,
                                                    https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                                :alt="event.name ? event.name : 'Úvodní obrázek'"
                                                :preload="true"
                                                v-lazy>
                                        </div>
                                        <nuxtLink class="o-sidebar-list-travel-dictionary__image-link" :to="'/cestovatelsky-slovnik/' + event.slug"></nuxtLink>
                                    </div>
                                </div>
                                <div class="o-sidebar-list-travel-dictionary__text">
                                    <h4 class="o-sidebar-list-travel-dictionary__name"><nuxtLink class="o-sidebar-list-travel-dictionary__name-link" :to="'/cestovatelsky-slovnik/' + event.slug">{{ event.name }}</nuxtLink></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OrganismsoSidebarListTravelDictionaryComponent',

        props: {
            IDTravelDictionary: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                travelDictionaries: [],
                images: [],
                isLoading: false,
            }
        },

        async fetch() {
            //start loading
            this.isLoading = true;

            //load travelDictionaries
            const [travelDictionariesResponse] = await Promise.all([
                this.$axios.get(`https://api.frytolnacestach.cz/api/travel-dictionaries-random?showType=list&actualID=${this.IDTravelDictionary}&quantity=5`)

            ]);
            const { data: travelDictionariesData } = travelDictionariesResponse;

            //load images
            const imagesTravelDictionariesIDS  = travelDictionariesData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
            if (imagesTravelDictionariesIDS .length > 0) {
                const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesTravelDictionariesIDS .join(',')}`);
                const { data: imagesData } = imagesResponse;
                this.images = this.images.concat(imagesData);
            
                // add to placecesData to travelDictionaries
                this.travelDictionaries = this.travelDictionaries.concat(travelDictionariesData);
            } else {
                // add to placecesData to travelDictionaries
                this.travelDictionaries = this.travelDictionaries.concat(travelDictionariesData);
            } 

            //end loading
            this.isLoading = false;
        },
    }
</script>