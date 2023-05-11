<template>
    <main class="t-main -bg-person -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Wysiwyg -->
        <section class="t-section t-section--wysiwyg py-4">
            <div class="t-section__inner">
                <oWysiwyg :text="base[0].conditions" />
            </div>
        </section>
        <!-- SECTION - Wysiwyg END -->

    </main>
</template>

<script>
    import oHero from '../components/organisms/oHero.vue'
    import oWysiwyg from '~/components/organisms/oWysiwyg.vue'

    export default {
        name: 'PageConditions',

        components: {
            oHero,
            oWysiwyg
        },

        data() {
            return {
                headline: "Obchodní podmínky a zásady ochrany osobních údajů",
                base: this.base
            }
        },

        head: {
            title: 'Obchodní podmínky a zásady ochrany osobních údajů | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách' },
                { name: 'keywords', content: `podmínky, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Obchodní podmínky a zásady ochrany osobních údajů | Frytol na cestách' },
                { hid: 'og:description', content: 'Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách' },
                { hid: 'og:url', content: `${process.env.baseUrl}/conditions` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async fetch() {
            this.base = await fetch("https://frytolnacestach-api.vercel.app/api/base").then((res) => res.json());
        }
    }
</script>