<template>
    <div class="js_o-popup-cookies o-popup-cookies">
        <div class="o-popup-cookies__outer">
            <div class="o-popup-cookies__inner">
                <div class="js_o-popup-cookies__page--welcome o-popup-cookies__page -welcome open">
                    <div class="o-popup-cookies__text">
                        <h4 class="o-popup-cookies__headline">Tato webová stránka používá cookies</h4>
                        <p class="o-popup-cookies__perex">Cookies nám pomáhají zlepšovat uživatelskou zkušenost našeho webu. Používáme je k anonymní analýze návštěvnosti a chování na webu, personalizaci obsahu, nebo cílení reklamy. Data o využívání našeho webu můžeme s Vaším souhlasem posílat i do systémů našich partnerů, abychom mohli plně využívat jejich nástroje. Partneři tyto údaje mohou zkombinovat s dalšími informacemi, které jste jim poskytli nebo které získali v důsledku toho, že používáte jejich služby. Více informací najdete v našich <NuxtLink to="/conditions">zásadách ochrany osobních údajů</NuxtLink> a <NuxtLink to="/cookies">zásadách cookies</NuxtLink>.</p>
                    </div>
                    <div class="o-popup-cookies__buttons">
                        <a class="js_o-popup-cookies__button--setting o-popup-cookies__button -setting">Upravit preference</a>
                        <a class="js_o-popup-cookies__button--all o-popup-cookies__button">Přijmám vše</a>
                    </div>
                </div>
                <div class="js_o-popup-cookies__page--setting o-popup-cookies__page -setting">
                    <div class="o-popup-cookies__form">
                        <div class="o-popup-cookies__items">
                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <h5 class="o-popup-cookies__type">Nezbytné <br><i class="o-popup-cookies__type-name">(functionality_storage, security_storage)</i></h5>
                                    <span class="o-popup-cookies__setting -active"></span>
                                </div>
                                <p class="o-popup-cookies__why">Nezbytné cookies pomáhají, aby byla webová stránka použitelná tak, že umožní základní funkce jako navigace stránky nebo zobrazení správného obsahu. Webová stránka nemůže správně fungovat bez těchto cookies.</p>
                            </div>

                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <h5 class="o-popup-cookies__type">Preferenční <br><i class="o-popup-cookies__type-name">(personalization_storage)</i></h5>
                                    <span class="js_o-popup-cookies__setting--user o-popup-cookies__setting" data-c-user="off"></span>
                                </div>
                                <p class="o-popup-cookies__why">Preferenční cookies umožňují, aby si webová stránka zapamatovala informace, které mění, jak se webová stránka chová nebo jak vypadá. Je to například preferovaný jazyk nebo region, kde se nacházíte.</p>
                            </div>

                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <h5 class="o-popup-cookies__type">Statistické <br><i class="o-popup-cookies__type-name">(analytics_storage)</i></h5>
                                    <span class="js_o-popup-cookies__setting--statistic o-popup-cookies__setting" data-c-statistic="off"></span>
                                </div>
                                <p class="o-popup-cookies__why">Statistické cookies nám pomáhají pochopit, jak uživatelé používají náš web. Sbírají anonymní data, které pak můžeme analyzovat.</p>
                            </div>

                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <h5 class="o-popup-cookies__type">Marketingové <br><i class="o-popup-cookies__type-name">(ad_storage)</i></h5>
                                    <span class="js_o-popup-cookies__setting--marketing o-popup-cookies__setting"  data-c-marketing="off"></span>
                                </div>
                                <p class="o-popup-cookies__why">Marketingové cookies používáme pro zobrazování a vyhodnocování reklamy na základě aktivity na webu. Cílem je zobrazit relevantní reklamy pro naše návštěvníky (bez toho, abychom znali skutečnou identitu uživatelů).</p>
                            </div>
                        </div>
                    </div>
                    <div class="o-popup-cookies__buttons">
                        <a class="js_o-popup-cookies__button--technical o-popup-cookies__button -technical">Povolit pouze nezbytné</a>
                        <a class="js_o-popup-cookies__button--select o-popup-cookies__button -select">Povolit vybrané</a>
                        <a class="js_o-popup-cookies__button--all o-popup-cookies__button">Přijmám vše</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'oPopupCookies'
    }
</script>