<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section pb-4">
            <div class="t-section__inner">
                <div class="m-headline my-4 text-align-center">
                    <p class="m-headline__perex">Podpořit mě můžetě samotním sledování, odběrem a sdílením mé tvorby. Každa reakce v podobě lajku nebo komentáře je dúležitá a uspokoji algoritmus YouTube nebo jiné platformy. Pro ty ostatní co by mě chtěli podpořit finančně jsem založil Patreon.</p>
                </div>
                <SectionSupport />
            </div>
        </section>

        <section class="t-section t-section--gray">
            <div class="t-section__inner">
                <div class="m-headline mt-4 text-align-center">
                    <h2 class="m-headline__title">Tady mě najdeš</h2>
                </div>
                <SectionPlatform />
                <div class="flex flex-center mb-4">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'
    import SectionSupport from '../components/SectionSupport.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageDonate',

        components: {
            SectionHero,
            SectionSupport,
            SectionPlatform
        },

        data() {
            return {
                headline: "Podpořit"
            }
        },

        head: {
            title: 'Podpořit | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Podpořit web Frytol na cestách' }
            ]
        }
    }
</script>