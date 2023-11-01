<template>
    <main class="t-main -blue -pt-menu" role="main">
       
        <section class="t-section print-section">
            <!-- SECTION - Hero -->
            <section class="t-section -p0 mb-1 mt-2">
                <div class="t-section__inner">
                    <oHero :headline="headline"  modifierCSS=" -blue" />
                </div>
            </section>
            <!-- SECTION - Hero END -->

            <!-- SECTION - Articles -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oUserList :items="users" :images="images" />
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
                headline: "Cestovatelé",
                users: this.users,
                staticUser: this.staticUser,
                videos: [],
                images: [],
                mNavUserOpen: false
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
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        async asyncData({ $axios }) {
            // PAGE - Users list
            // Users
            const users = await $axios.$get(`https://api.frytolnacestach.cz/api/users`)


            return {
                users
            }
        }
    }
</script>