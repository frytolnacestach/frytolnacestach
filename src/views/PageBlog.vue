<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="o-article-list">
                    <div class="o-article-list__outer">
                        <div class="o-article-list__items">
                            <div class="o-article-list__item">
                                <div class="o-article-list__item-inner">
                                    <div class="o-article-list__image">
                                        <div class="o-article-list__image-file" style="background-image: url('/images/articles/trikrizovy-vrch/hero-trikrizovy-vrch.jpg');">
                                            <router-link class="o-article-list__image-link" to="/clanky/trikrizovy-vrch"></router-link>
                                        </div>
                                    </div>
                                    <div class="o-article-list__text">
                                        <h3 class="o-article-list__title">
                                            <router-link class="o-article-list__title-link" to="/clanky/trikrizovy-vrch">Tříkřížový vrch</router-link>
                                        </h3>
                                        <p class="o-article-list__perex">
                                            <router-link class="o-article-list__perex-link" to="/clanky/trikrizovy-vrch">Tři křížě, tři panny a jeden rytíř</router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="t-section t-section--gray">
            <div class="m-headline mt-4 text-align-center">
                <h2 class="m-headline__title">Další obsah</h2>
            </div>

            <SectionPlatform />
            
            <div class="flex flex-center mb-4">
                <router-link class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</router-link>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageBlog',
        components: {
            SectionHero,
            SectionPlatform
        },
        data() {
            return {
                headline: "Články"
            }
        }
    }
</script>