<template>
    <main class="t-main">
        <section>
            <div class="o-hero o-hero--small">
                <div class="o-hero__outer">
                    <div class="o-hero__inner">
                        <h1 class="o-hero__headline">Kdo jsem</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="t-section py-4">
            <div class="t-section__inner">
                <SectionWhoiam />
            </div>
        </section>

        <section class="t-section t-section--gray">
            <div class="m-headline mt-4 text-align-center">
                <h2 class="m-headline__title">Tady mě najdeš</h2>
            </div>
            <SectionPlatform />
            <div class="flex flex-center mb-4">
                <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</router-link>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionWhoiam from '../components/SectionWhoiam.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageIam',
        components: {
            SectionWhoiam,
            SectionPlatform
        }
    }
</script>