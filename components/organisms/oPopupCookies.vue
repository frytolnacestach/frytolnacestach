<template>
    <div class="js_o-popup-cookies o-popup-cookies hidden-print" tabindex="-1" role="alertdialog" aria-modal="true" aria-labelledby="cookiesTitle" aria-describedby="cookiesDesc" data-nosnippet="true" style="visibility: hidden;">
        <div class="o-popup-cookies__outer">
            <div class="o-popup-cookies__inner">
                <div class="js_o-popup-cookies__page--welcome o-popup-cookies__page -welcome open">
                    <div class="o-popup-cookies__text">
                        <span class="o-popup-cookies__headline" id="cookiesTitle">Tato webová stránka používá cookies</span>
                        <p class="o-popup-cookies__perex" id="cookiesDesc">Cookies nám pomáhají zlepšovat uživatelskou zkušenost našeho webu. Používáme je k anonymní analýze návštěvnosti a chování na webu, personalizaci obsahu, nebo cílení reklamy. Data o využívání našeho webu můžeme s Vaším souhlasem posílat i do systémů našich partnerů, abychom mohli plně využívat jejich nástroje. Partneři tyto údaje mohou zkombinovat s dalšími informacemi, které jste jim poskytli nebo které získali v důsledku toho, že používáte jejich služby. Více informací najdete v našich <NuxtLink to="/conditions">zásadách ochrany osobních údajů</NuxtLink> a <NuxtLink to="/cookies">zásadách cookies</NuxtLink>.</p>
                    </div>
                    <div class="o-popup-cookies__buttons">
                        <a class="js_o-popup-cookies__button--setting o-popup-cookies__button -setting" href="#" rel="nofollow">Upravit preference</a>
                        <a class="js_o-popup-cookies__button--all o-popup-cookies__button" href="#" rel="nofollow">Přijímám vše</a>
                    </div>
                </div>
                <div class="js_o-popup-cookies__page--setting o-popup-cookies__page -setting">
                    <div class="o-popup-cookies__form">
                        <div class="o-popup-cookies__items">
                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <span class="o-popup-cookies__type">Nezbytné <br><i class="o-popup-cookies__type-name">(functionality_storage, security_storage)</i></span>
                                    <span class="o-popup-cookies__setting -active"></span>
                                </div>
                                <p class="o-popup-cookies__why">Nezbytné cookies pomáhají, aby byla webová stránka použitelná tak, že umožní základní funkce jako navigace stránky nebo zobrazení správného obsahu. Webová stránka nemůže správně fungovat bez těchto cookies.</p>
                            </div>

                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <span class="o-popup-cookies__type">Preferenční <br><i class="o-popup-cookies__type-name">(personalization_storage)</i></span>
                                    <span class="js_o-popup-cookies__setting--user o-popup-cookies__setting" data-c-user="off"></span>
                                </div>
                                <p class="o-popup-cookies__why">Preferenční cookies umožňují, aby si webová stránka zapamatovala informace, které mění, jak se webová stránka chová nebo jak vypadá. Je to například preferovaný jazyk nebo region, kde se nacházíte.</p>
                            </div>

                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <span class="o-popup-cookies__type">Statistické <br><i class="o-popup-cookies__type-name">(AD_PERSONALIZATION)</i></span>
                                    <span class="js_o-popup-cookies__setting--statistic o-popup-cookies__setting" data-c-statistic="off"></span>
                                </div>
                                <p class="o-popup-cookies__why">Statistické cookies nám pomáhají pochopit, jak uživatelé používají náš web. Sbírají anonymní data, které pak můžeme analyzovat.</p>
                            </div>

                            <div class="o-popup-cookies__item">
                                <div class="o-popup-cookies__header">
                                    <span class="o-popup-cookies__type">Marketingové <br><i class="o-popup-cookies__type-name">(AD_USER_DATA)</i></span>
                                    <span class="js_o-popup-cookies__setting--marketing o-popup-cookies__setting"  data-c-marketing="off"></span>
                                </div>
                                <p class="o-popup-cookies__why">Marketingové cookies používáme pro zobrazování a vyhodnocování reklamy na základě aktivity na webu. Cílem je zobrazit relevantní reklamy pro naše návštěvníky (bez toho, abychom znali skutečnou identitu uživatelů).</p>
                            </div>
                        </div>
                    </div>
                    <div class="o-popup-cookies__buttons">
                        <a class="js_o-popup-cookies__button--technical o-popup-cookies__button -technical" href="#" rel="nofollow">Povolit pouze nezbytné</a>
                        <a class="js_o-popup-cookies__button--select o-popup-cookies__button -select" href="#" rel="nofollow">Povolit vybrané</a>
                        <a class="js_o-popup-cookies__button--all-detail o-popup-cookies__button" href="#" rel="nofollow">Přijímám vše</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoPopupCookiesComponent',

        mounted() {
            // Cookies default
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            if (document.cookie.indexOf("cookiesDialog=1") == -1) {
                gtag('consent', 'default', {
                    'functionality_storage': 'granted',
                    'security_storage': 'granted',
                    'personalization_storage': 'denied',
                    'AD_PERSONALIZATION': 'denied',
                    'AD_USER_DATA': 'denied'
                });
            }
            // Cookies default END

            // Cookies change
            // Vytvoření cookies
            function cookiesCreate() {
                var now = new Date();
                now.setMonth(now.getMonth() + 1);
                var expires = "expires=" + now.toUTCString();
                document.cookie = "FNCcookiesDialog=1;" + expires;
            }

            // Vytvoření cookies s typem
            function cookiesCreateType(type) {
                var now = new Date();
                now.setMonth(now.getMonth() + 1);
                var expires = "expires=" + now.toUTCString();
                document.cookie = "FNCcookies" + type + "=1;" + expires;
            }

            // Smazání cookies s typem
            function cookiesDeleteType(type) {
                document.cookie = "FNCcookies" + type + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }

            // Zobrazení dialogového okna cookies
            function cookiesDialog() {
                if (document.cookie.indexOf("FNCcookiesDialog=1") == -1) {
                    var popupCookies = document.querySelector(".js_o-popup-cookies");
                    popupCookies.classList.add("open");
                }
            }


            // Ovládání vlastních cookies
            // Function
            function cookiesCustom() {
                var number = 0;
                var status1 = document.querySelector(".js_o-popup-cookies__setting--user").getAttribute("data-c-user");
                if (status1 == "on") {
                    number++;
                }
                var status2 = document.querySelector(".js_o-popup-cookies__setting--statistic").getAttribute("data-c-statistic");
                if (status2 == "on") {
                    number++;
                }
                var status3 = document.querySelector(".js_o-popup-cookies__setting--marketing").getAttribute("data-c-marketing");
                if (status3 == "on") {
                    number++;
                }

                if (number == 0) {
                    var buttonSelect = document.querySelector(".js_o-popup-cookies__button--select");
                    buttonSelect.classList.remove("show");
                    var buttonTechnical = document.querySelector(".js_o-popup-cookies__button--technical");
                    buttonTechnical.classList.add("show");
                } else {
                    var buttonTechnical = document.querySelector(".js_o-popup-cookies__button--technical");
                    buttonTechnical.classList.remove("show");
                    var buttonSelect = document.querySelector(".js_o-popup-cookies__button--select");
                    buttonSelect.classList.add("show");
                }
            }

            //Initialization
            if (document.cookie.indexOf("FNCcookiespersonalization_storage=1") == -1) {
                document.querySelector(".js_o-popup-cookies__setting--user").setAttribute('data-c-user', 'off');
                document.querySelector(".js_o-popup-cookies__setting--user").classList.add('off');
            } else {
                document.querySelector(".js_o-popup-cookies__setting--user").setAttribute('data-c-user', 'on');
                document.querySelector(".js_o-popup-cookies__setting--user").classList.add('on');
            }

            if (document.cookie.indexOf("FNCcookiesAD_PERSONALIZATION=1") == -1) {
                document.querySelector(".js_o-popup-cookies__setting--statistic").setAttribute('data-c-statistic', 'off');
                document.querySelector(".js_o-popup-cookies__setting--statistic").classList.add('off');
            } else {
                document.querySelector(".js_o-popup-cookies__setting--statistic").setAttribute('data-c-statistic', 'on');
                document.querySelector(".js_o-popup-cookies__setting--statistic").classList.add('on');
            }

            if (document.cookie.indexOf("FNCcookiesAD_USER_DATA=1") == -1) {
                document.querySelector(".js_o-popup-cookies__setting--marketing").setAttribute('data-c-marketing', 'off');
                document.querySelector(".js_o-popup-cookies__setting--marketing").classList.add('off');
            } else {
                document.querySelector(".js_o-popup-cookies__setting--marketing").setAttribute('data-c-marketing', 'on');
                document.querySelector(".js_o-popup-cookies__setting--marketing").classList.add('on');
            }
            cookiesDialog();
            cookiesCustom();

            //Přijímám vše
            document.querySelector(".js_o-popup-cookies__button--all").addEventListener('click', function() {
                document.querySelector(".js_o-popup-cookies").classList.remove('open');
                document.querySelector("html").classList.remove('no-scroll-bg');
                document.querySelector("body").classList.remove('no-scroll-bg');
                document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
                document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');

                let buttonChangeUser = document.querySelector('.js_o-popup-cookies__setting--user');
                buttonChangeUser.dataset.cUser = 'on';
                buttonChangeUser.classList.add('on');

                let buttonChangeStatistic = document.querySelector('.js_o-popup-cookies__setting--statistic');
                buttonChangeStatistic.dataset.cStatistic = 'on';
                buttonChangeStatistic.classList.add('on');

                let buttonChangeMarketing = document.querySelector('.js_o-popup-cookies__setting--marketing');
                buttonChangeMarketing.dataset.cMarketing = 'on';
                buttonChangeMarketing.classList.add('on');

                gtag('consent', 'update', {
                    'functionality_storage': 'granted',
                    'security_storage': 'granted',
                    'personalization_storage': 'granted',
                    'AD_PERSONALIZATION': 'granted',
                    'AD_USER_DATA': 'granted'
                });
                cookiesCreateType("personalization_storage");
                cookiesCreateType("AD_PERSONALIZATION");
                cookiesCreateType("AD_USER_DATA");

                cookiesCreate();
            });

            //Přijímám vše-detail
            document.querySelector(".js_o-popup-cookies__button--all-detail").addEventListener('click', function() {
                document.querySelector(".js_o-popup-cookies").classList.remove('open');
                document.querySelector("html").classList.remove('no-scroll-bg');
                document.querySelector("body").classList.remove('no-scroll-bg');
                document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
                document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');

                let buttonChangeUser = document.querySelector('.js_o-popup-cookies__setting--user');
                buttonChangeUser.dataset.cUser = 'on';
                buttonChangeUser.classList.add('on');

                let buttonChangeStatistic = document.querySelector('.js_o-popup-cookies__setting--statistic');
                buttonChangeStatistic.dataset.cStatistic = 'on';
                buttonChangeStatistic.classList.add('on');

                let buttonChangeMarketing = document.querySelector('.js_o-popup-cookies__setting--marketing');
                buttonChangeMarketing.dataset.cMarketing = 'on';
                buttonChangeMarketing.classList.add('on');
                
                gtag('consent', 'update', {
                    'functionality_storage': 'granted',
                    'security_storage': 'granted',
                    'personalization_storage': 'granted',
                    'AD_PERSONALIZATION': 'granted',
                    'AD_USER_DATA': 'granted'
                });
                cookiesCreateType("personalization_storage");
                cookiesCreateType("AD_PERSONALIZATION");
                cookiesCreateType("AD_USER_DATA");

                cookiesCreate();
            });

            //Upravit preference
            document.querySelector(".js_o-popup-cookies__button--setting").addEventListener('click', function() {
                document.querySelector(".js_o-popup-cookies__page--welcome").classList.remove('open');
                document.querySelector(".js_o-popup-cookies__page--setting").classList.add('open');
                this.dataset.cookiesSetting = 'visible';
                document.querySelector("html").classList.add('no-scroll-bg');
                document.querySelector("body").classList.add('no-scroll-bg');
            });

            // Povolit pouze nezbytné
            document.querySelector(".js_o-popup-cookies__button--technical").addEventListener("click", function() {
                document.querySelector(".js_o-popup-cookies").classList.remove('open');
                document.querySelector("html").classList.remove('no-scroll-bg');
                document.querySelector("body").classList.remove('no-scroll-bg');
                document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
                document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');

                gtag('consent', 'update', {
                    'functionality_storage': 'granted',
                    'security_storage': 'granted',
                    'personalization_storage': 'denied',
                    'AD_PERSONALIZATION': 'denied',
                    'AD_USER_DATA': 'denied'
                });

                cookiesCreate();
            });

            // Povolit vybrané
            document.querySelector(".js_o-popup-cookies__button--select").addEventListener("click", function() {
                document.querySelector(".js_o-popup-cookies").classList.remove('open');
                document.querySelector("html").classList.remove('no-scroll-bg');
                document.querySelector("body").classList.remove('no-scroll-bg');
                document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
                document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');
            });


            // Form - Preferenční
            document.querySelectorAll('.js_o-popup-cookies__setting--user').forEach(function(el) {
                el.addEventListener('click', function() {
                    var status = el.getAttribute('data-c-user');
                    if (status == "off") {
                        el.setAttribute('data-c-user', 'on');
                        el.classList.add('on');
                        gtag('consent', 'update', {
                            'personalization_storage': 'granted'
                        });
                        cookiesCreateType('personalization_storage');
                    } else {
                        el.setAttribute('data-c-user', 'off');
                        el.classList.remove('on');
                        gtag('consent', 'update', {
                            'personalization_storage': 'denied'
                        });
                        cookiesDeleteType('personalization_storage');
                    }
                    cookiesCustom();
                    cookiesCreate();
                });
            });


            //Form - Statistické
            document.querySelector(".js_o-popup-cookies__setting--statistic").addEventListener("click", function() {
                var status = this.getAttribute("data-c-statistic");

                if (status == "off") {
                    this.setAttribute("data-c-statistic", "on");
                    this.classList.add("on");
                    gtag('consent', 'update', {
                        'AD_PERSONALIZATION': 'granted'
                    });
                    cookiesCreateType("AD_PERSONALIZATION");
                } else {
                    this.setAttribute("data-c-statistic", "off");
                    this.classList.remove("on");
                    gtag('consent', 'update', {
                        'AD_PERSONALIZATION': 'denied'
                    });
                    cookiesDeleteType("AD_PERSONALIZATION");
                }

                cookiesCustom();
                cookiesCreate();
            });


            //Form - Marketingové
            document.querySelector(".js_o-popup-cookies__setting--marketing").addEventListener("click", function() {
                var status = this.getAttribute("data-c-marketing");

                if (status == "off") {
                    this.setAttribute("data-c-marketing", "on");
                    this.classList.add("on");
                    gtag("consent", "update", {
                        "AD_USER_DATA": "granted"
                    });
                    cookiesCreateType("AD_USER_DATA");
                } else {
                    this.setAttribute("data-c-marketing", "off");
                    this.classList.remove("on");
                    gtag("consent", "update", {
                        "AD_USER_DATA": "denied"
                    });
                    cookiesDeleteType("AD_USER_DATA");
                }

                cookiesCustom();
                cookiesCreate();
            });

            //Cookies edit
            document.querySelector(".js_cookies-edit").addEventListener("click", function() {
                document.querySelector(".js_o-popup-cookies").classList.add("open");
            });
            // Cookies change END
        },
    }
</script>