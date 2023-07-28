<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero značky -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Značky" perex="Jaké značky a výrobky kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero značky END -->

        <!-- SECTION - Značky list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="brands" :images="images" type="znacka" />
            </div>
        </section>
        <!-- SECTION - Značky list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'ZnackaIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                brands: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        head: {
            title: 'Značky | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké značky a výrobky kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Značky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Fauna | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké značky a výrobky kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/znacka` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async mounted() {
            await this.loadItems();
            this.addScrollListener();
        },

        methods:{
            async loadItems() {
                //start loading
                this.isLoading = true;

                //load brands
                const [brandsResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/brands?showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: brandsData } = brandsResponse;

                //load images
                const imagesBrandsIDS = brandsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
                if (imagesBrandsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesBrandsIDS.join(',')}`);
                    const { data: imagesData } = imagesResponse;
                    this.images = this.images.concat(imagesData);
                
                    // add to placecesData to brands
                    this.brands = this.brands.concat(brandsData);
                } else {
                    // add to placecesData to brands
                    this.brands = this.brands.concat(brandsData);
                } 

                //no more items?
                if (brandsData.length === 0 || brandsData.length < this.perPage) {
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
                this.loadItems();
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
                    this.loadItems();
                }
            },
        },

        beforeDestroy() {
            this.removeScrollListener();
        }
    }
</script>