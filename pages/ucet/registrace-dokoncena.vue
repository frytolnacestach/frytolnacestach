<template>
    <main class="t-main -blue -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -blue" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Text -->
		<section class="t-section pt-2 pb-1">
            <div class="t-section__inner">
                <p class="flex flex-center">
                    Veše registrace byla úspěšná. Teď se <nuxtLink to="/ucet/prihlaseni">přihlašte</nuxtLink> a následně aktivujte účet.
                </p>
            </div>
        </section>

        <!-- SECTION - Text END -->

    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js'

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetRegistraceDokoncenaPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero
        },

        data() {
            return {
                headline: 'Vaše registrace byla dokončena'
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
            title = 'REGISTRACE DOKONČENA | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Registrace na cetovatelském portálu Frytol na cestách byla dokončena.'

            // keywolds
            keywords = 'Cestovatelský portál, registrace dokončena, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/ucet/registrace-dokoncena`

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