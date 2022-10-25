<template>
    <main class="t-main">
        <section>
            <div class="o-hero o-hero--small">
                <div class="o-hero__outer">
                    <div class="o-hero__inner">
                        <h1 class="o-hero__headline">Podpořit</h1>
                    </div>
                </div>
            </div>
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
                    <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</router-link>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionSupport from '../components/SectionSupport.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageDonate',
        components: {
            SectionSupport,
            SectionPlatform
        }
    }
</script>