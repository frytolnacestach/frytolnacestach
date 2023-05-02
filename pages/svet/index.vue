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
                <oWorldType :items="oWorldType" />
            </div>
        </section>
        <!-- SECTION - Typ místa END -->
    </main>
</template>

<script>
    import oSearch from '@/components/organisms/oSearch.vue'
    import oWorldType from '@/components/organisms/oWorldType.vue'

    export default {
        name: 'PageSvet',

        components: {
            oSearch,
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
                { name: 'keywords', content: 'Hledej místo, státy, města, cestování, svět' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' }
            ]
        }
    }
</script>