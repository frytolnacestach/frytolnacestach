<template>
    <main class="t-main -green -vh100">

        <!-- SECTION - Typ místa -->
        <section class="t-section pt-8 pb-4 print-section">
            <div class="t-section__inner">
                <oHero headline="Kam vycestovat?" modifierCSS=" -green" />
                <mHeadline perex="Nevíš, kam vyrazit na dovolenou nebo za dobrodružstvím? Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
                <oWorldType styleThema=" -green" skeletonThema=" -skeleton-green" />
            </div>
        </section>
        <!-- SECTION - Typ místa END -->

        <!-- SECTION - Top místa -->
        <section class="t-section -p0 pb-4 print-section">
            <div class="t-section__inner">
                <mHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
                <oTopPlace styleThema=" -green" skeletonThema=" -skeleton-green" />
            </div>
        </section>
        <!-- SECTION - Top místa END -->
    </main>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'
    import oTopPlace from '@/components/organisms/oTopPlace.vue'
    import oWorldType from '@/components/organisms/oWorldType.vue'

    export default {
        name: 'SvetIndexPage',

        components: {
            mHeadline,
            oHero,
            oTopPlace,
            oWorldType
        },

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = 'Svět | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká.'

            // keywolds
            keywords = 'Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ]
            }
        }
    }
</script>