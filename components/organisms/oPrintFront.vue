<template>
    <div class="o-print-front print-section">
        <div class="o-print-front__outer">
            <div class="o-print-front__inner">
                <div class="o-print-front__logotype">
                    <div class="o-print-front__image">
                        <div class="o-print-front__image-file"></div>
                    </div>
                </div>
                <div class="o-print-front__title">
                    {{ title }}
                </div>
                <div class="o-print-front__subtitle" v-if="subtitle">
                    {{ subtitle }}
                </div>
                <div class="o-print-front__url">
                    <div class="o-print-front__url-title">
                        Stránka
                    </div>
                    <div class="o-print-front__url-link">
                        {{ pageUrl }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoPrintFrontComponent',

        data() {
            return {
                pageTitle: '',
                pageUrl: '',
                title: '',
                subtitle: ''
            }
        },

        computed: {
            pageUrl() {
                if (process.client) {
                    return window.location.href
                } else {
                    return ''
                }
            }
        },

        created() {
            // title
            const pageTitle = this.getPageTitleFromDOM() || 'Cestovatelský portál Frytol na cestách'
            const titleParts = pageTitle.split('|')
            if (titleParts.length === 2) {
                this.title = titleParts[0].trim()
                this.subtitle = titleParts[1].trim()
            } else {
                this.title = pageTitle
            }

            //url
            if (process.client) {
                this.pageUrl = window.location.href
            }
        },

        methods: {
            getPageTitleFromDOM() {
                if (process.client) {
                    const titleElement = document.querySelector('title')
                    return titleElement ? titleElement.textContent : null
                }
            }
        }
    }
</script>