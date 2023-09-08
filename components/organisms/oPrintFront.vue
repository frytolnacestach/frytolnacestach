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

        mounted() {
            if (process.client) {
                this.onDOMContentLoaded()
                this.observeTitleChanges()
            }
        },

        methods: {
            onDOMContentLoaded() {
                // title
                this.pageTitle = this.getPageTitleFromDOM() || 'Cestovatelský portál Frytol na cestách'
                this.getTitleArray(this.pageTitle)
                // url
                this.getActualUrl()
            },
            getPageTitleFromDOM() {
                const titleElement = document.querySelector('title')
                return titleElement.textContent
            },
            getTitleArray(pageTitle) {
                const titleParts = pageTitle.split('|')
                if (titleParts.length === 2) {
                    this.title = titleParts[0].trim()
                    this.subtitle = titleParts[1].trim()
                } else {
                    this.title = pageTitle
                }
                console.log('___Title:' + pageTitle)
            },
            getActualUrl() {
                this.pageUrl = window.location.href
            },
            observeTitleChanges() {
                const titleElement = document.querySelector('title')
                const observer = new MutationObserver(() => {
                    this.onDOMContentLoaded()
                })
                observer.observe(titleElement, { childList: true, characterData: true, subtree: true })
            }
        },

        watch: {
            $route(to, from) {
                if (process.client) {
                    this.onDOMContentLoaded()
                }
            }
        }
    }
</script>