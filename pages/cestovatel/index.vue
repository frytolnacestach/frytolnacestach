<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero -->
                    <section class="t-section -p0 mb-1 mt-2">
                        <div class="t-section__inner">
                            <OrganismsHero :headline="headline" :perex="'K cestovatelům na našem cestovatelském portálu se může připojit každý. Takže pokud zatím nemáš účet, stačí se <a href=\'https://www.frytolnacestach.cz/ucet/registrace\'>registrovat</a>, a pokud již účet máš, jednoduše se <a href=\'https://www.frytolnacestach.cz/ucet/prihlaseni\'>přihlásit</a>.'" modifierCSS=" -blue -w640" classCSS=" mt-2" v-if="account && account.length === 0" />
                            <OrganismsHero :headline="headline" perex="Podívej se na další cestovatele, na místa, která navštívili, a jejich úspěchy." modifierCSS=" -blue -w640" classCSS=" mt-2" v-if="account && account.length !== 0" />
                        </div>
                    </section>
                    <!-- SECTION - Hero END -->

                    <!-- SECTION - UserList -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsUserList :items="users" :images="images" v-if="users && users.length > 0" />
                            <OrganismsUserList :items="[]" :images="[]" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -blue" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - UserList END -->
                    
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    // DATA
    let headline = "Cestovatelé"
    let staticUser = []
    let mNavUserOpen = false
    let account = useAccountData().accountData
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 20   
    // DATA API
    const users = ref([])
    const images = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Cestovatelé | Cestovatelský portál Frytol na cestách',
        description: 'Cestovatelé na cestovatelském portálu Frytol na cestách.',
        keywords: 'Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Cestovatelé | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Cestovatelé na cestovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/cestovatel`,
        ogType: 'website'
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
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

    // META - Head
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
    // META - Head - JSONld
    useJsonld(() => headJsonld)

    // LOAD DATA
    const loadData = async () => {
        isLoading = true

        // Users
        const usersResponse = await $fetch(`https://api.frytolnacestach.cz/api/users?showType=list&page=${page}&items=${perPage}`)
        const usersData = JSON.parse(usersResponse) || []
        users.value = users.value.concat(usersData)

        if (usersData.length === 0 || usersData.length < perPage) {
            noMoreItems = true
        }

        isLoading = false
    }
    await useAsyncData('dataAPI', () => loadData())

    // OTHER
    const loadMoreItems = () => {
        if (isLoading || noMoreItems) {
            return
        }
        page++
        loadData()
    }

    const handleScroll = () => {
        if (isLoading || noMoreItems) {
            return
        }

        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const tFooterElement = document.querySelector('.t-footer')
        const tFooterHeight = tFooterElement ? tFooterElement.offsetHeight : 0

        if (scrollTop + windowHeight >= documentHeight - tFooterHeight) {
            page++
            loadData()
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>