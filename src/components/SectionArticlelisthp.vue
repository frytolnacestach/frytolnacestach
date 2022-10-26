<template>
    <div class="o-article-list-hp">
        <div class="o-article-list-hp__outer">
            <div class="o-article-list-hp__items">
                <div class="o-article-list-hp__item">
                    <div class="o-article-list-hp__item-inner">
                        <div class="o-article-list-hp__image">
                            <div class="o-article-list-hp__image-file" style="background-image: url('/images/articles/trikrizovy-vrch/hero-trikrizovy-vrch.jpg');">
                                <router-link class="o-article-list-hp__image-link" to="/clanky/trikrizovy-vrch"></router-link>
                            </div>
                        </div>
                        <div class="o-article-list-hp__text">
                            <h3 class="o-article-list-hp__title">
                                <router-link class="o-article-list-hp__title-link" to="/clanky/trikrizovy-vrch">Tříkřížový vrch</router-link>
                            </h3>
                            <p class="o-article-list-hp__perex">
                                <router-link class="o-article-list-hp__perex-link" to="/clanky/trikrizovy-vrch">Tři křížě, tři panny a jeden rytíř</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SectionArticlelisthp'
    }
</script>