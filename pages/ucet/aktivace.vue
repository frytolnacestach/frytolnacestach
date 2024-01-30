<template>
    <main class="t-main -blue -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -blue" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - FlashMassages -->
        <section class="t-section pt-2 pb-1">
            <div class="t-section__inner">
                <oFlashMessages :dataMessages="flashMessage" />
            </div>
        </section>
        <!-- SECTION - FlashMassages END -->

    </main>
</template>

<script>
    import { loginCheckLogoutInfo } from '~/utils/loginCheckLogoutInfo.js'

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oFlashMessages from '~/components/organisms/oFlashMessages.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetAktivacePage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oFlashMessages,
            oHero
        },

        data() {
            return {
                flashMessage: [],
                headline: 'Aktivace účtu',
                email: null,
                codeActivation: null
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
            title = 'AKTIVACE ÚČTU | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Aktivace účtu na cetovatelském portálu Frytol na cestách'

            // keywolds
            keywords = 'Cestovatelský portál, aktivace účtu, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/ucet/aktivace`

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

        mounted() {
            loginCheckLogoutInfo()
                .then((isLoggedIn) => {
                    if (isLoggedIn) {
                        this.email = this.$route.query.email || null
                        this.codeActivation = this.$route.query.activation_code || null
                        this.activation()
                    } else {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: `Musíte se přihlásit, abyste mohli aktivovat účet. <br><a href="/ucet/prihlaseni">Přihlásit se</a>`
                        })
                    }
                })
                .catch((error) => {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Chyba při ověřování přihlášení"
                    })
                })
        },


        methods: {  
            async activation() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-activation`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'email': this.email,
                            'code_activation': this.codeActivation
                        })
                    })

                    if (response.status === 200) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Aktivace vašeho účtu proběhla v pořádku"
                        })
                        localStorage.setItem("status",3)
                    } else if (response.status === 404) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Aktivace neproběhla v pořádku. Nebyl nalezen odpovídající záznam. Buď již aktivace proběhla nebo učet neexistuje."
                        })
                    } else {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Chyba při komunikaci s API"
                        })
                    }
                } catch (err) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Chyba připojení k API"
                    })
                    throw err
                }
            }
        }
    }
</script>