<template>
    <main class="t-main -blue -pt-menu" role="main">
        <div class="t-main__content">

            <!-- SECTION - Hero -->
            <section class="t-section -p0 pt-2 pb-1">
                <div class="t-section__inner">
                    <oHero :headline="headline" modifierCSS=" -blue" classCSS=" mt-2" />
                </div>
            </section>
            <!-- SECTION - Hero END -->

            <!-- SECTION - Form Password lost -->
            <section class="t-section -p0 pt-2 pb-1">
                <div class="t-section__inner">
                    <oFormPasswordLost />
                </div>
            </section>
            <!-- SECTION - Form Password lost END -->

        </div>
    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js'

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oFormPasswordLost from '~/components/organisms/oFormPasswordLost.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetZepomenuteHesloPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oFormPasswordLost,
            oHero
        },

        data() {
            return {
                headline: 'Zapomenuté Heslo'
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
            title = 'ZAPOMENUTÉ HESLO | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Zapomenuté Heslo k účtu na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'Cestovatelský portál, zapomenuté heslo, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/ucet/zapomenute-heslo`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ]
            }
        },

        mounted() {
            loginCheckLogin(this.$router)
        }
    }
</script>