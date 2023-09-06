<template>
    <div class="o-platform">
        <div class="o-platform__outer">
            <div class="o-platform__inner">
                <div class="o-platform__items">

                    <div class="o-platform__item" v-for="platform in platforms" :key="platform.id">
                        <div class="o-platform__item-content">
                            <div class="o-platform__icon">
                                <a :class="'o-platform__icon-file -' + platform.slug" :href="platform.url" target="_blank" :title="platform.name"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoPlatformComponent',

        data() {
            return {
                platforms: this.platforms
            }
        },

        async fetch() {
            this.platforms = await fetch("https://api.frytolnacestach.cz/api/platforms").then((res) => res.json())
        }
    }
</script>