<template>
    <main class="t-main">
        <section>
            <div class="o-hero o-hero--small">
                <div class="o-hero__outer">
                    <div class="o-hero__inner">
                        <h1 class="o-hero__headline">Kde mě najdeš</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <SectionBoxplatform />
        </section>
    </main>
</template>

<script>
    import SectionBoxplatform from '../components/SectionBoxplatform.vue'

    export default {
        name: 'PageSocial',
        components: {
            SectionBoxplatform
        }
    }
</script>