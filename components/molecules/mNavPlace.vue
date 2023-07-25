<template>
    <div class="m-nav-place">
        <div class="m-nav-place__outer">
            <div class="m-nav-place__inner">
                <ul class="m-nav-place__items">
                    <li class="m-nav-place__item" v-for="tab in tabs" :key="tab.slug">
                        <nuxt-link :to="`/svet/stat/${ place.slug }`" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug }" v-if="tab.slug === 'default'">
                            {{ place.name ? place.name : 'Stát' }}
                        </nuxt-link>
                        <nuxt-link :to="getTabLink(tab)" class="m-nav-place__link" :class="{ '-active': activeTab === tab.slug }" v-if="tab.slug !== 'default' && tab.visible === true">
                            {{ tab.label }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmNavPlaceComponent',

        props: {
            place: {
                type: Object,
                required: true
            },
            tabs: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                activeTab: 'default',
                activeTabName: 'PLACE_NAME',
            }
        },

        methods:{
            getTabLink(tab) {
                return {
                    name: 'stat-slug-tab',
                    params: { slug: this.$route.params.slug, tab: tab.slug },
                }
            }
        },

        mounted() {
            this.activeTab = this.$route.params.tab || 'default';
        },

        watch: {
            updatedTabs: {
                immediate: true,
                handler() {
                    const defaultTab = this.tabs.find(tab => tab.slug === 'default');
                    const visibleTabs = this.tabs.filter(tab => tab.visible);
                    const activeTab = visibleTabs.length > 0 ? visibleTabs[0] : defaultTab;
                    this.activeTab = activeTab.slug;
                }
            },

            activeTab: function(newActiveTab) {
                const selectedTab = this.tabs.find(tab => tab.slug === newActiveTab);
                this.activeTabName = selectedTab.label;
            }
        },
    }
</script>