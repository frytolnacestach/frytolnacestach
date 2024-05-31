<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <SkeletonOrganismsAchievements styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="!skeleton">
            <div class="o-achievements">
                <div class="o-achievements__outer">
                    <div class="o-achievements__inner">
                        <div class="o-achievements__items">
                            <div class="o-achievements__item print-section" :class="[item.type, { [item.value]: item.actual >= item.need }]" v-for="item in achievementsList" :key="item.id">
                                <div class="o-achievements__content">
                                    <div class="o-achievements__medal"></div>
                                    <div class="o-achievements__text">
                                        <h3 class="o-achievements__name">{{ item.name }}</h3>
                                        <p class="o-achievements__description" v-if="item.description">{{ item.description }}</p>
                                    </div>
                                    <div class="o-achievements__progress">
                                        <span class="o-achievements__progress-number"><span class="o-achievements__progress-number-actual">{{ item.actual > item.need ? item.need : item.actual }}</span>/<span class="o-achievements__progress-number-need">{{ item.need }}</span></span>
                                        <div class="o-achievements__progress-line">
                                            <div class="o-achievements__progress-line-full" :style="{ width: calculateWidth(item.need, item.actual) + '%' }"></div>
                                        </div>
                                    </div>
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
        name: 'OrganismsoAchievementsListComponent',

        props: {
            account: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            idUser: {
                type: Number,
                required: false
            }
        },

        data() {
            return {
                skeleton: true,
                achievements: [],
                achievementsList: [],
            }
        },

        methods: {
            calculateWidth(value, type) {
                if (type >= value) {
                    return 100
                } else {
                    return (type / value) * 100
                }
            },

            createAchievementsList(achievements) {
                return [
                    {
                        type: '-type-world-continent',
                        value: '-value-bronze',
                        actual: achievements[0].continent,
                        need: 2,
                        name: 'Bronzový Kontinentální Cestovatel',
                        description: ''
                    },
                    {
                        type: '-type-world-continent',
                        value: '-value-silver',
                        actual: achievements[0].continent,
                        need: 4,
                        name: 'Stříbrný Kontinentální Objevitel',
                        description: ''
                    },
                    {
                        type: '-type-world-continent',
                        value: '-value-gold',
                        actual: achievements[0].continent,
                        need: 6,
                        name: 'Zlatý Kontinentální Dobrodruh',
                        description: ''
                    },
                    {
                        type: '-type-world-continent',
                        value: '-value-diamond',
                        actual: achievements[0].continent,
                        need: 7,
                        name: 'Diamantový Kontinentální Mistr',
                        description: ''
                    },
                    {
                        type: '-type-world-state',
                        value: '-value-bronze',
                        actual: achievements[0].state,
                        need: 10,
                        name: 'Bronzový Státní Cestovatel',
                        description: ''
                    },
                    {
                        type: '-type-world-state',
                        value: '-value-silver',
                        actual: achievements[0].state,
                        need: 25,
                        name: 'Stříbrný Státní Objevitel',
                        description: ''
                    },
                    {
                        type: '-type-world-state',
                        value: '-value-gold',
                        actual: achievements[0].state,
                        need: 125,
                        name: 'Zlatý Státní Dobrodruh',
                        description: ''
                    },
                    {
                        type: '-type-world-state',
                        value: '-value-diamond',
                        actual: achievements[0].state,
                        need: 250,
                        name: 'Diamantový Státní Mistr',
                        description: ''
                    },
                    {
                        type: '-type-world-region',
                        value: '-value-bronze',
                        actual: achievements[0].region,
                        need: 20,
                        name: 'Bronzový Regionální Cestovatel',
                        description: ''
                    },
                    {
                        type: '-type-world-region',
                        value: '-value-silver',
                        actual: achievements[0].region,
                        need: 50,
                        name: 'Stříbrný Regionální Objevitel',
                        description: ''
                    },
                    {
                        type: '-type-world-region',
                        value: '-value-gold',
                        actual: achievements[0].region,
                        need: 250,
                        name: 'Zlatý Regionální Dobrodruh',
                        description: ''
                    },
                    {
                        type: '-type-world-region',
                        value: '-value-diamond',
                        actual: achievements[0].region,
                        need: 500,
                        name: 'Diamantový Regionální Mistr',
                        description: ''
                    },
                    {
                        type: '-type-world-city',
                        value: '-value-bronze',
                        actual: achievements[0].city,
                        need: 50,
                        name: 'Bronzový Městský Cestovatel',
                        description: ''
                    },
                    {
                        type: '-type-world-city',
                        value: '-value-silver',
                        actual: achievements[0].city,
                        need: 100,
                        name: 'Stříbrný Městský Objevitel',
                        description: ''
                    },
                    {
                        type: '-type-world-city',
                        value: '-value-gold',
                        actual: achievements[0].city,
                        need: 500,
                        name: 'Zlatý Městský Dobrodruhh',
                        description: ''
                    },
                    {
                        type: '-type-world-city',
                        value: '-value-diamond',
                        actual: achievements[0].city,
                        need: 1000,
                        name: 'Diamantový Městský Mistr',
                        description: ''
                    },
                    {
                        type: '-type-world-spot',
                        value: '-value-bronze',
                        actual: achievements[0].spot,
                        need: 100,
                        name: 'Bronzový Místní Cestovatel',
                        description: ''
                    },
                    {
                        type: '-type-world-spot',
                        value: '-value-silver',
                        actual: achievements[0].spot,
                        need: 300,
                        name: 'Stříbrný Místní Objevitel',
                        description: ''
                    },
                    {
                        type: '-type-world-spot',
                        value: '-value-gold',
                        actual: achievements[0].spot,
                        need: 1000,
                        name: 'Zlatý Místní Dobrodruh',
                        description: ''
                    },
                    {
                        type: '-type-world-spot',
                        value: '-value-diamond',
                        actual: achievements[0].spot,
                        need: 2500,
                        name: 'Diamantový Místní Mistr',
                        description: ''
                    }
                ]
            },

            async fetchData() {
                if (this.type === "account") {
                    if (this.account && this.account.length !== 0) {
                        if (process.client) {
                            // API - GET - Achievements
                            const responseAchievements = await fetch(`https://api.frytolnacestach.cz/api/user-achievements?id_user=${this.account[0].id}`)
                            this.achievements = await responseAchievements.json()
                            this.achievementsList = this.createAchievementsList(this.achievements)

                            // Final
                            this.skeleton = false
                        }
                    }
                } else {
                    if (process.client) {
                        // API - GET - Achievements
                        const responseAchievements = await fetch(`https://api.frytolnacestach.cz/api/user-achievements?id_user=${this.idUser}`)
                        this.achievements = await responseAchievements.json()
                        this.achievementsList = this.createAchievementsList(this.achievements)

                        // Final
                        this.skeleton = false
                    }
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