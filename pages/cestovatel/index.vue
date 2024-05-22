<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero -->
                    <section class="t-section -p0 mb-1 mt-2">
                        <div class="t-section__inner">
                            <oHero :headline="headline" :perex="'K cestovatelům na našem cestovatelském portálu se může připojit každý. Takže pokud zatím nemáš účet, stačí se <a href=\'https://www.frytolnacestach.cz/ucet/registrace\'>registrovat</a>, a pokud již účet máš, jednoduše se <a href=\'https://www.frytolnacestach.cz/ucet/prihlaseni\'>přihlásit</a>.'" modifierCSS=" -blue -w640" classCSS=" mt-2" v-if="account && account.length === 0" />
                            <oHero :headline="headline" perex="Podívej se na další cestovatele, na místa, která navštívili, a jejich úspěchy." modifierCSS=" -blue -w640" classCSS=" mt-2" v-if="account && account.length !== 0" />
                        </div>
                    </section>
                    <!-- SECTION - Hero END -->

                    <!-- SECTION - UserList -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <oUserList :items="users" :images="images" v-if="users && users.length > 0" />
                            <oUserList :items="[]" :images="[]" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -blue" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - UserList END -->
                    
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oUserList from '~/components/organisms/oUserList.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'

    export default defineComponent({
        name: 'CestovateleIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oUserList,
            oHero,
            oPlatform
        },

        data() {
            return {
                account: useAccountData().accountData,
                headline: "Cestovatelé",
                users: [],
                images: [],
                staticUser: this.staticUser,
                mNavUserOpen: false,
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Cestovatelé | Cestovatelský portál Frytol na cestách',
                description: 'Cestovatelé na cestovatelském portálu Frytol na cestách.',
                keywords: 'Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Cestovatelé | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Cestovatelé na cestovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/cestovatel`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": headMeta.title,
                "description": headMeta.description,
                "url": headMeta.ogUrl,
                "datePublished": "2024-01-31",
                "author": {
                    "@type": "Organization",
                    "name": "Frytol na cestách",
                    "url": "https://www.frytolnacestach.cz/"
                }
            })

            useHead({
                title: headMeta.title,
                meta: [
                    { name: 'description', content: headMeta.description },
                    { name: 'keywords', content: headMeta.keywords },
                    { property: 'og:image', content: headMeta.ogImage },
                    { property: 'og:title', content: headMeta.ogTitle },
                    { property: 'og:description', content: headMeta.ogDescription },
                    { property: 'og:url', content: headMeta.ogUrl },
                    { property: 'og:type', content: headMeta.ogType }
                ],
                link: headLink
            })

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        },

        methods:{
            async loadUsers() {
                //start loading
                this.isLoading = true

                //load users
                const responseUsers = await fetch(`https://api.frytolnacestach.cz/api/users?showType=list&page=${this.page}&items=${this.perPage}`)
                const usersData = await responseUsers.json() || []
                this.users = this.users.concat(usersData)
     
                //no more items?
                if (usersData.length === 0 || usersData.length < this.perPage) {
                    this.noMoreItems = true
                }

                //end loading
                this.isLoading = false
            },

            addScrollListener() {
                window.addEventListener('scroll', this.handleScroll)
            },

            removeScrollListener() {
                window.removeEventListener('scroll', this.handleScroll)
            },

            loadMoreItems() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return
                }
                // loading more items
                this.page++
                this.loadUsers()
            },

            handleScroll() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return
                }

                // Document for scroll point
                const windowHeight = window.innerHeight
                const documentHeight = document.documentElement.scrollHeight
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

                // Footer height
                const tFooterElement = document.querySelector('.t-footer')
                const tFooterHeight = tFooterElement.offsetHeight

                // Point for loading
                if (scrollTop + windowHeight >= documentHeight - tFooterHeight) {
                    // loading more items
                    this.page++
                    this.loadUsers()
                }
            },
        },

        mounted() {
            this.loadUsers()
            this.addScrollListener()
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>