<template>
    <section>
        
        <div class="o-box-platform">
            <div class="o-box-platform__outer">
                <div class="o-box-platform__inner">
                    <div class="o-box-platform__items">
                        <div class="o-box-platform__item" v-for="platform in platforms" :key="platform.id">

                            <div :class="'o-box-platform__icon -' + platform.slug">
                                <div class="o-box-platform__icon-file"></div>
                            </div>

                            <div class="o-box-platform__text">
                                
                                <h3 class="o-box-platform__headline">{{ platform.name }}</h3>
                                <p class="o-box-platform__perex">
                                    {{ platform.perex }}
                                </p>

                                <div class="o-box-platform__statistic">
                                    <div class="o-box-platform__statistic-items">
                                        <div class="o-box-platform__statistic-item" v-for="fact in platform.facts" v-bind:key="fact.name">
                                            <span class="o-box-platform__statistic-name">{{ fact.name }}: </span><span class="o-box-platform__statistic-value">{{ fact.value }}</span>
                                        </div>
                                    </div>
                                    <span class="o-box-platform__statistic-info">{{ platform.date }}</span>
                                </div>

                                <div class="o-box-platform__button">
                                    <a :class="'a-button-fill-social -social-' + platform.slug" :href="platform.url" target="_blank" :title="platform.name">Přejít na {{ platform.name }}</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'OrganismsoBoxPlatformComponent',

        data() {
            return {
                platforms: []
            }
        },

        async fetch() {
            this.platforms = await fetch("https://api.frytolnacestach.cz/api/platforms").then((res) => res.json())
        }
    }
</script>