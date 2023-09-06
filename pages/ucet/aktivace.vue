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
                <oFlashMessages :text="errorForm" styleThema=" -error" />
                <oFlashMessages :text="successForm" styleThema=" -success" />
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
                headline: 'Aktivace účtu',
                errorForm: '',
                successForm: '',
                email: null,
                codeActivation: null
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
                        this.errorForm = `Musíte se přihlásit, abyste mohli aktivovat účet. <br><a href="/ucet/prihlaseni">Přihlásit se</a>`
                    }
                })
                .catch((error) => {
                    console.log(error)
                    this.errorForm = "Chyba při ověřování přihlášení"
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
                        this.successForm = "Aktivace vašeho účtu proběhla v pořádku"
                        localStorage.setItem("status",3)
                    } else if (response.status === 404) {
                        this.errorForm = "Aktivace neproběhla v pořádku. Nebyl nalezen odpovídající záznam. Buď již aktivace proběhla nebo učet neexistuje."
                    } else {
                        this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            }
        },

        head: {
            title: 'AKTIVACE ÚČTU | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Aktivace účtu na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Aktivace účtu | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Aktivace účtu na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>