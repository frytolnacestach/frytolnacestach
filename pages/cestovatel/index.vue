<template>
    <main class="t-main -blue -pt-menu" role="main">
       
        <section class="t-section print-section">
            <!-- SECTION - Hero -->
            <section class="t-section -p0 mb-1 mt-2">
                <div class="t-section__inner">
                    <oHero :headline="headline" :perex="'K cestovatelům na našem cestovatelském portálu se může připojit každý. Takže pokud zatím nemáš účet, stačí se <a href=\'https://www.frytolnacestach.cz/ucet/registrace\'>registrovat</a>, a pokud již účet máš, jednoduše se <a href=\'https://www.frytolnacestach.cz/ucet/prihlaseni\'>přihlásit</a>.'" modifierCSS=" -blue -w640" v-if="account && account.length === 0" />
                    <oHero :headline="headline" perex="Podívej se na další cestovatele, na místa, která navštívili, a jejich úspěchy." modifierCSS=" -blue -w640" v-if="account && account.length !== 0" />
                </div>
            </section>
            <!-- SECTION - Hero END -->

            <!-- SECTION - Articles -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oUserList :items="users" :images="images" />
                    <oUserList :items="null" :images="null" :skeleton=true v-if="isLoading" />
                    <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                        <span class="a-button-fill -big -blue" @click="loadMoreItems">Načíst další položky</span>
                    </div>
                </div>
            </section>
            <!-- SECTION - Articles END -->
        </section>

    </main>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oUserList from '~/components/organisms/oUserList.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'

    export default {
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
                account: [],
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

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = `Cestovatelé | Frytol na cestách`

            // description
            description = `Cestovatelé na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = 'Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ]
            }
        },

        async mounted() {
            await this.loadUsers()
            this.addScrollListener()
        },

        methods:{
            async loadUsers() {
                //start loading
                this.isLoading = true

                // Variable
                let usersResponse

                //load users
                usersResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/users?showType=list&page=${this.page}&items=${this.perPage}`)
                const { data: usersData } = usersResponse

                // add to placecesData to users
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

        beforeDestroy() {
            this.removeScrollListener()
        },

        watch: {
            '$store.state.account': {
                deep: true,
                immediate: true,
                handler() {
                    this.account = this.$store.state.account
                }
            }
        }
    }
</script>