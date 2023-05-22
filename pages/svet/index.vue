<template>
    <main class="t-main -bg-world -vh100">

        <!-- SECTION - Vyhledávač -->
        <section class="t-section pt-8 pb-4 -bg-world">
            <div class="t-section__inner mt-4">
                <oSearch />
            </div>
        </section>
        <!-- SECTION - Vyhledávač END -->

        <!-- SECTION - Typ místa -->
        <section class="t-section py-4 -bg-world">
            <div class="t-section__inner">
                <mHeadline title="Nevíš kam vyrazit?" perex="Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -world" styleAlign=" -center" styleGap=" mb-2" />
                <oWorldType :items="oWorldType" />
            </div>
        </section>
        <!-- SECTION - Typ místa END -->

         <!-- SECTION - Top místa text -->
         <section class="t-section -bg-world pt-4">
            <div class="t-section__inner">
                <mHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -world" styleAlign=" -center" styleGap=" mb-2" />
            </div>
        </section>
        <!-- SECTION - Top místa END -->

        <!-- SECTION - Top místa -->
        <section class="t-section -bg-world -p0 pb-4">
            <div class="t-section__inner">
                <oTopPlace />
            </div>
        </section>
        <!-- SECTION - Top místa END -->
    </main>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oSearch from '@/components/organisms/oSearch.vue'
    import oTopPlace from '@/components/organisms/oTopPlace.vue'
    import oWorldType from '@/components/organisms/oWorldType.vue'

    export default {
        name: 'PageSvet',

        components: {
            mHeadline,
            oSearch,
            oTopPlace,
            oWorldType
        },

        data() {
            return {
                oWorldType: [
                    {
                        id: 1,
                        name: "Kontinenty",
                        url: "/svet/kontinent",
                        length: 7,
                        styleThemaItem: " -continent"

                    },
                    {
                        id: 2,
                        name: "Státy",
                        url: "/svet/stat",
                        length: 249,
                        styleThemaItem: " -state"

                    },
                    {
                        id: 3,
                        name: "Města",
                        url: "/svet/mesto",
                        length: 2491,
                        styleThemaItem: " -city"

                    }
                ],
            }
        },

        head: {
            title: 'Svět | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { name: 'keywords', content: 'hledej místo, státy, města, cestování, svět' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Svět | Frytol na cestách' },
                { hid: 'og:description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet` },
                { hid: 'og:type', content: 'website' }  
            ]
        }
    }
</script>