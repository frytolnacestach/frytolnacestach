<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero flora -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Flóra" perex="Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero flora END -->

        <!-- SECTION - Flora list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="floras" :images="images" type="flora" />
            </div>
        </section>
        <!-- SECTION - Flora list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'FloraIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                floras: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        head: {
            title: 'Flóra co roste ve světě | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Flóra co roste ve světě | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/flora` },
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

                //load floras
                const [florasResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/floras?showType=list&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: florasData } = florasResponse;

                //load images
                const imagesFlorasIDS = florasData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
                if (imagesFlorasIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFlorasIDS.join(',')}`);
                    const { data: imagesData } = imagesResponse;
                    this.images = this.images.concat(imagesData);
                
                    // add to placecesData to floras
                    this.floras = this.floras.concat(florasData);
                } else {
                    // add to placecesData to floras
                    this.floras = this.floras.concat(florasData);
                } 

                //no more items?
                if (florasData.length === 0 || florasData.length < this.perPage) {
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