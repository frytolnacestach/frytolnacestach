<template>
    <main class="t-main -green -vh100">

        <!-- SECTION - Vyhledávač -->
        <section class="t-section pt-8 pb-4">
            <div class="t-section__inner">
                <oSearch />
            </div>
        </section>
        <!-- SECTION - Vyhledávač END -->

        <!-- SECTION - Typ místa -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <mHeadline title="Nevíš kam vyrazit?" perex="Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
                <oWorldType :items="oWorldType" />
            </div>
        </section>
        <!-- SECTION - Typ místa END -->

         <!-- SECTION - Top místa text -->
         <section class="t-section pt-4">
            <div class="t-section__inner">
                <mHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
            </div>
        </section>
        <!-- SECTION - Top místa END -->

        <!-- SECTION - Top místa -->
        <section class="t-section -p0 pb-4">
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
        name: 'SvetIndexPage',

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
                        name: "Regiony",
                        url: "/svet/region",
                        length: 1,
                        styleThemaItem: " -region"

                    },
                    {
                        id: 4,
                        name: "Města",
                        url: "/svet/mesto",
                        length: 2488,
                        styleThemaItem: " -city"

                    },
                    {
                        id: 5,
                        name: "Místa",
                        url: "/svet/misto",
                        length: 19,
                        styleThemaItem: " -spot"

                    }
                ],
            }
        },

        head: {
            title: 'Svět | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká.' },
                { name: 'keywords', content: 'Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Svět | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet` },
                { hid: 'og:type', content: 'website' }  
            ]
        }
    }
</script>