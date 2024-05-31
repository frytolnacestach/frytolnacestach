<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <SkeletonOrganismsNumberPlaces styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- SHOW - skeleton END -->
        
        <!-- SHOW - client -->
        <client-only v-if="numberPlaces[0] && !skeleton">
            <div class="o-number-places">
                <div class="o-number-places__outer">
                    <div class="o-number-places__inner">
                        <div class="o-number-places__items">
                            <div class="o-number-places__item">
                                <div class="o-number-places__content">
                                    <h3 class="o-number-places__headline">Kontinentů</h3>
                                    <span class="o-number-places__number">{{ numberPlaces[0].continent }}</span>
                                </div>
                            </div>
                            <div class="o-number-places__item">
                                <div class="o-number-places__content">
                                    <h3 class="o-number-places__headline">Států</h3>
                                    <span class="o-number-places__number">{{ numberPlaces[0].state }}</span>
                                </div>
                            </div>
                            <div class="o-number-places__item">
                                <div class="o-number-places__content">
                                    <h3 class="o-number-places__headline">Regionů</h3>
                                    <span class="o-number-places__number">{{ numberPlaces[0].region }}</span>
                                </div>
                            </div>
                            <div class="o-number-places__item">
                                <div class="o-number-places__content">
                                    <h3 class="o-number-places__headline">Měst</h3>
                                    <span class="o-number-places__number">{{ numberPlaces[0].city }}</span>
                                </div>
                            </div>
                            <div class="o-number-places__item">
                                <div class="o-number-places__content">
                                    <h3 class="o-number-places__headline">Míst</h3>
                                    <span class="o-number-places__number">{{ numberPlaces[0].spot }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- SHOW - client END -->

    </section>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoNumberPlacesComponent',

        props: {
            account: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                numberPlaces: [],
                skeleton: true
            }
        },

        methods: {
            async fetchData() {
                if (this.account && this.account.length !== 0) {
                    // API - GET - UserAchievements
                    if (process.client) {
                        const responseNumberPlaces = await fetch(`https://api.frytolnacestach.cz/api/user-achievements?id_user=${this.account[0].id}`)
                        this.numberPlaces = await responseNumberPlaces.json()
                    }

                    // FINAL
                    this.skeleton = false
                }
            }
        },

        watch: {
            account: {
                handler: 'fetchData',
                immediate: true
            }
        }
    })
</script>