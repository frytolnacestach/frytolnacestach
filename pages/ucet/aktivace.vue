<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner">
                        <oHero :headline="headline" modifierCSS=" -blue" classCSS=" mt-2" />
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

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import { loginCheckLogoutInfo } from '~/utils/loginCheckLogoutInfo.js'

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oFlashMessages from '~/components/organisms/oFlashMessages.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default defineComponent({
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

        setup() {
            let headMeta = reactive({
                title: 'AKTIVACE ÚČTU | Cestovatelský portál Frytol na cestách',
                description: 'Aktivace účtu na cetovatelském portálu Frytol na cestách',
                keywords: 'Cestovatelský portál, aktivace účtu, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'AKTIVACE ÚČTU | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Aktivace účtu na cetovatelském portálu Frytol na cestách',
                ogUrl: `https://www.frytolnacestach.cz/ucet/aktivace`,
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
    })
</script>