<template>
    <main class="t-main -blue -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -blue" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Signpost -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oSignpost />
            </div>
        </section>
        <!-- SECTION - Signpost END -->

    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js'

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'
    import oSignpost from '~/components/organisms/oSignpost.vue'

    export default {
        name: 'UcetIndexPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oSignpost
        },

        data() {
            return {
                headline: 'Účet na cestovatelském portálu Frytol na cestách'
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
            title = 'ÚČET | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Účet na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'Cestovatelský portál, účet, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/ucet`

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

        mounted() {
            loginCheckLogin(this.$router)
        }
    }
</script>