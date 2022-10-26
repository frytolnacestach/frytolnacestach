<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero 
                :headline="headline"
                :perex="perex"
            />
        </section>

        <section class="t-section">
            <div class="o-build">
                <div class="o-build__outer">
                    <div class="o-build__inner">
                        <div class="o-build__text">
                            SEKCE SE PŘIPRAVUJE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'

    export default {
        name: 'PageNotfound',
        components: {
            SectionHero
        },
        data() {
            return {
                headline: "Error 404",
                perex: "Je mi to líto ale tato stránka neexistuje"
            }
        }
    }
</script>