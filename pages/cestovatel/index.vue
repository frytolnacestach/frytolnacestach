<template>
    <main class="t-main -blue -pt-menu" role="main">
       
        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline"  modifierCSS=" -blue" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Articles -->
        <section class="t-section -p0 py-1 px-2">
            <div class="t-section__inner">
                <oUserList :items="users" :images="images" />
            </div>
        </section>
        <!-- SECTION - Articles END -->

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
                images: this.images
            }
        },

        head: {
            title: 'Cestovatelé | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Cestovatelé na cestovatelském portáku Frytol na cestách Ať ti neuniknou žádné novinky o cestování.' },
                { name: 'keywords', content: `Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Cestovatelé | Frytol na cestách' },
                { hid: 'og:description', content: 'Cestovatelé na cestovatelském portáku Frytol na cestách Ať ti neuniknou žádné novinky o cestování.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/clanky` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async asyncData({ $axios }) {
            //users
            const users = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/users`)

            return { users }
        }
    }
</script>