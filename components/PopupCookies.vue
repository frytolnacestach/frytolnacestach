<template>
    <div class="js_o-cookies-dialog o-cookies-dialog">
        <div class="o-cookies-dialog__outer">
            <div class="o-cookies-dialog__inner">
                <div class="js_o-cookies-dialog__page--welcome o-cookies-dialog__page o-cookies-dialog__page--welcome open">
                    <div class="o-cookies-dialog__text">
                        <h4 class="o-cookies-dialog__headline">Tato webová stránka používá cookies</h4>
                        <p class="o-cookies-dialog__perex">Cookies nám pomáhají zlepšovat uživatelskou zkušenost našeho webu. Používáme je k anonymní analýze návštěvnosti a chování na webu, personalizaci obsahu, nebo cílení reklamy. Data o využívání našeho webu můžeme s Vaším souhlasem posílat i do systémů našich partnerů, abychom mohli plně využívat jejich nástroje. Partneři tyto údaje mohou zkombinovat s dalšími informacemi, které jste jim poskytli nebo které získali v důsledku toho, že používáte jejich služby. Více informací najdete v našich <NuxtLink to="/conditions">zásadách ochrany osobních údajů</NuxtLink> a <NuxtLink to="/cookies">zásadách cookies</NuxtLink>.</p>
                    </div>
                    <div class="o-cookies-dialog__buttons">
                        <a class="js_o-cookies-dialog__button--setting o-cookies-dialog__button o-cookies-dialog__button--setting">Upravit preference</a>
                        <a class="js_o-cookies-dialog__button--all o-cookies-dialog__button">Přijmám vše</a>
                    </div>
                </div>
                <div class="js_o-cookies-dialog__page--setting o-cookies-dialog__page o-cookies-dialog__page--setting">
                    <div class="o-cookies-dialog__form">
                        <div class="o-cookies-dialog__items">
                            <div class="o-cookies-dialog__item">
                                <div class="o-cookies-dialog__header">
                                    <h5 class="o-cookies-dialog__type">Nezbytné <br><i class="o-cookies-dialog__type-name">(functionality_storage, security_storage)</i></h5>
                                    <span class="o-cookies-dialog__setting o-cookies-dialog__setting--active"></span>
                                </div>
                                <p class="o-cookies-dialog__why">Nezbytné cookies pomáhají, aby byla webová stránka použitelná tak, že umožní základní funkce jako navigace stránky nebo zobrazení správného obsahu. Webová stránka nemůže správně fungovat bez těchto cookies.</p>
                            </div>

                            <div class="o-cookies-dialog__item">
                                <div class="o-cookies-dialog__header">
                                    <h5 class="o-cookies-dialog__type">Preferenční <br><i class="o-cookies-dialog__type-name">(personalization_storage)</i></h5>
                                    <span class="js_o-cookies-dialog__setting--user o-cookies-dialog__setting" data-c-user="off"></span>
                                </div>
                                <p class="o-cookies-dialog__why">Preferenční cookies umožňují, aby si webová stránka zapamatovala informace, které mění, jak se webová stránka chová nebo jak vypadá. Je to například preferovaný jazyk nebo region, kde se nacházíte.</p>
                            </div>

                            <div class="o-cookies-dialog__item">
                                <div class="o-cookies-dialog__header">
                                    <h5 class="o-cookies-dialog__type">Statistické <br><i class="o-cookies-dialog__type-name">(analytics_storage)</i></h5>
                                    <span class="js_o-cookies-dialog__setting--statistic o-cookies-dialog__setting" data-c-statistic="off"></span>
                                </div>
                                <p class="o-cookies-dialog__why">Statistické cookies nám pomáhají pochopit, jak uživatelé používají náš web. Sbírají anonymní data, které pak můžeme analyzovat.</p>
                            </div>

                            <div class="o-cookies-dialog__item">
                                <div class="o-cookies-dialog__header">
                                    <h5 class="o-cookies-dialog__type">Marketingové <br><i class="o-cookies-dialog__type-name">(ad_storage)</i></h5>
                                    <span class="js_o-cookies-dialog__setting--marketing o-cookies-dialog__setting"  data-c-marketing="off"></span>
                                </div>
                                <p class="o-cookies-dialog__why">Marketingové cookies používáme pro zobrazování a vyhodnocování reklamy na základě aktivity na webu. Cílem je zobrazit relevantní reklamy pro naše návštěvníky (bez toho, abychom znali skutečnou identitu uživatelů).</p>
                            </div>
                        </div>
                    </div>
                    <div class="o-cookies-dialog__buttons">
                        <a class="js_o-cookies-dialog__button--technical o-cookies-dialog__button o-cookies-dialog__button--technical">Povolit pouze nezbytné</a>
                        <a class="js_o-cookies-dialog__button--select o-cookies-dialog__button o-cookies-dialog__button--select">Povolit vybrané</a>
                        <a class="js_o-cookies-dialog__button--all o-cookies-dialog__button">Přijmám vše</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PopupCookies'
    }
</script>