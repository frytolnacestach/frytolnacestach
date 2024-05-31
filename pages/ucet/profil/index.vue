<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - FlashMassagesAccount -->
                <OrganismsFlashMessagesAccount :account="account" />
                <!-- SECTION - FlashMassagesAccount END -->

                <section class="t-section -padding-x -padding-y -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -account">
                            <div class="t-grid__section -nav">

                                <!-- SECTION - account headline - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesAccountHeader :account="account" @update="menuAccountUpdate" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesNavAccount :statusOpen="mNavAccountOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - Number places -->
                                <section class="t-section -padding-x -p0 mb-2">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Počet navštívených míst" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsNumberPlaces :account="account" />
                                    </div>
                                </section>
                                <!-- SECTION - Number places END -->

                                <!-- SECTION - Form - profile -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Základní informace" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsFormProfile :account="account" />
                                    </div>
                                </section>
                                <!-- SECTION - Form - profile END -->

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    export default defineComponent({
        name: 'UcetProfilPage',

        data() {
            return {
                account: useAccountData().accountData,
                mNavAccountOpen: false
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'MŮJ PROFIL | Cestovatelský portál Frytol na cestách',
                description: 'Profil účtu na cetovatelském portálu Frytol na cestách.',
                keywords: 'můj profil, cestovatelský portál, statistiky',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'MŮJ PROFIL | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Profil účtu na cetovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/ucet/profil`,
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
            loginCheckLogout(this.$router)
        },

        methods: {
            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue
            }
        }
    })
</script>