<template>
    <NuxtLayout name="default">
        <main class="t-main -green -vh100">
            <div class="t-main__content">

                <!-- SECTION - Typ místa -->
                <section class="t-section pt-8 pb-4 print-section">
                    <div class="t-section__inner">
                        <OrganismsHero headline="Kam vycestovat?" modifierCSS=" -green" classCSS=" mt-2" />
                        <MoleculesHeadline perex="Nevíš, kam vyrazit na dovolenou nebo za dobrodružstvím? Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
                        <OrganismsWorldType styleThema=" -green" skeletonThema=" -skeleton-green" />
                    </div>
                </section>
                <!-- SECTION - Typ místa END -->

                <!-- SECTION - Top místa -->
                <section class="t-section -p0 pb-4 print-section">
                    <div class="t-section__inner">
                        <MoleculesHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
                        <OrganismsTopPlace styleThema=" -green" skeletonThema=" -skeleton-green" />
                    </div>
                </section>
                <!-- SECTION - Top místa END -->
                
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'SvetIndexPage',

        setup() {
            let headMeta = reactive({
                title: 'Svět | Cestovatelský portál Frytol na cestách',
                description: 'Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká.',
                keywords: 'Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Svět | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká.',
                ogUrl: `https://www.frytolnacestach.cz/svet`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": headMeta.title,
                "description": headMeta.description,
                "url": headMeta.ogUrl,
                "datePublished": "2024-01-31",
                "author": {
                    "@type": "Organization",
                    "name": "Frytol na cestách",
                    "url": "https://www.frytolnacestach.cz/"
                }
            })

            useHead({
                title: headMeta.title,
                meta: [
                    { name: 'description', content: headMeta.description },
                    { name: 'keywords', content: headMeta.keywords },
                    { property: 'og:image', content: headMeta.ogImage },
                    { property: 'og:title', content: headMeta.ogTitle },
                    { property: 'og:description', content: headMeta.ogDescription },
                    { property: 'og:url', content: headMeta.ogUrl },
                    { property: 'og:type', content: headMeta.ogType }
                ],
                link: headLink
            })

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        }
    })
</script>