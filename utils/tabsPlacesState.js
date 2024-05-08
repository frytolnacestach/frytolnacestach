export function updatedTabs(tabsLoad) {
    const hasTabDefault = true
    const hasTabShow = (tabsLoad && tabsLoad.tabWhatToSee) ? tabsLoad.tabWhatToSee : false
    const hasTabPrice = (tabsLoad && tabsLoad.tabPrice) ? tabsLoad.tabPrice : false
    const hasTabPeople = (tabsLoad && tabsLoad.tabPeople) ? tabsLoad.tabPeople : false
    const hasTabTrip = (tabsLoad && tabsLoad.tabTrip) ? tabsLoad.tabTrip : false
    const hasTabContacts = (tabsLoad && tabsLoad.tabContact) ? tabsLoad.tabWhatToSee : false
    const hasTabHotel = (tabsLoad && tabsLoad.tabHotel) ? tabsLoad.tabContact : false
    const hasTabVideos = (tabsLoad && tabsLoad.tabVideos) ? (tabsLoad.tabVideos > 0 ? true : false) : false
    const hasTabPosts = (tabsLoad && tabsLoad.tabArticles) ? (tabsLoad.tabArticles > 0 ? true : false) : false
    const hasTabNeighboring = (tabsLoad && tabsLoad.tabNeighboring) ? (tabsLoad.tabNeighboring > 0 ? true : false) : false
    const hasTabWallSockets = (tabsLoad && tabsLoad.tabWallSockets) ? (tabsLoad.tabWallSockets > 0 ? true : false) : false
    const hasTabChains = (tabsLoad && tabsLoad.tabChains) ? (tabsLoad.tabChains > 0 ? true : false) : false
    const hasTabFauna = (tabsLoad && tabsLoad.tabFauna) ? (tabsLoad.tabFauna > 0 ? true : false) : false
    const hasTabFlora = (tabsLoad && tabsLoad.tabFlora) ? (tabsLoad.tabFlora > 0 ? true : false) : false
    const hasTabFoods = (tabsLoad && tabsLoad.tabFoods) ? (tabsLoad.tabFoods > 0 ? true : false) : false
    const hasTabBrands = (tabsLoad && tabsLoad.tabBrands) ? (tabsLoad.tabBrands > 0 ? true : false) : false

    const newTabs = [
        { slug: 'default', label: 'Výchozí', visible: hasTabDefault },
        { slug: 'co-videt', label: 'Co vidět', visible: hasTabShow },
        { slug: 'ceny', label: 'Ceny', visible: hasTabPrice },
        { slug: 'lide', label: 'Lidé', visible: hasTabPeople },
        { slug: 'cesta', label: 'Cesta', visible: hasTabTrip },
        { slug: 'kontakty', label: 'Kontakty', visible: hasTabContacts },
        { slug: 'ubytovani', label: 'Ubytování', visible: hasTabHotel },
        { slug: 'videa', label: 'Videa', visible: hasTabVideos },
        { slug: 'clanky', label: 'Články', visible: hasTabPosts },
        { slug: 'sousedni-staty', label: 'Sousední státy', visible: hasTabNeighboring },
        { slug: 'elektricke-zasuvky', label: 'Elektrické zásuvky', visible: hasTabWallSockets },
        { slug: 'retezce', label: 'Řetězce', visible: hasTabChains },
        { slug: 'fauna', label: 'Fauna', visible: hasTabFauna },
        { slug: 'flora', label: 'Flora', visible: hasTabFlora },
        { slug: 'jidlo', label: 'Jídlo', visible: hasTabFoods },
        { slug: 'vyrobky', label: 'Výrobky', visible: hasTabBrands }
    ]

    return newTabs
}