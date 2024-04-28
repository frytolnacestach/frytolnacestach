<template>
    <div class="o-platform">
        <div class="o-platform__outer">
            <div class="o-platform__inner">
                <div class="o-platform__items">
                    <div class="o-platform__item" v-for="platform in platforms" :key="platform.id">
                        <div class="o-platform__item-content">
                            <div class="o-platform__icon">
                                <a :class="'o-platform__icon-file -' + platform.slug" :href="platform.url" target="_blank" rel="noopener" :title="platform.name"></a>
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
                platforms: []
            }
        },

        head() {
            // Empty Array
            if (!this.platforms && this.platforms === null) {
                return { script: [] };
            }
            // Return
            const jsonldPlatforms = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Sociální Sítě",
                    "itemListElement": this.platforms.map((platform, index) => {
                        return {
                            "@type": "WebPage",
                            "position": index + 1,
                            "name": platform.name,
                            "url": platform.url,
                            "description": platform.perex
                        }
                    })
                }
            }

            return { script: [jsonldPlatforms] }
        },

        async fetch() {
            // API - GET - Platforms
            this.platforms = await fetch("https://api.frytolnacestach.cz/api/platforms").then((res) => res.json())
        }
    }
</script>