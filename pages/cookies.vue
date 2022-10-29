<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section t-section--wysiwyg py-4">
            <div class="t-section__inner">
                <div class="o-wysiwyg">
                    <p>Na webu frytolnacestach.cz jsou v souladu se zákony používány cookies</p>
                    
                    <h2>Co je to cookies?</h2>
                    <p>Jako cookie (anglicky koláček, oplatka, sušenka) se v protokolu HTTP označuje malé množství dat, která WWW server pošle prohlížeči, který je uloží na počítači uživatele. Při každé další návštěvě téhož serveru pak prohlížeč tato data posílá zpět serveru. Cookies běžně slouží k rozlišování jednotlivých uživatelů, ukládají se do nich uživatelské předvolby apod., a zjednodušují tak používání webů.</p>

                    <p>Cookies se ukládají na straně klienta (uživatele) jako krátké textové soubory.</p>

                    <p>Cookies neznamenají žádné nebezpečí pro počítač jako takový. Přesto mají cookies význam pro ochranu soukromí. Navštívený web si totiž může ukládat do cookies jakékoliv informace, které o návštěvníkovi zjistí, a může tak postupně zjišťovat zájmy konkrétního návštěvníka. V žádném případě však nelze cookies použít pro zjištění totožnosti návštěvníků.</p>

                    <p>Informací z cookies se dá posléze využívat pro cílenou reklamu, statistické vyhodnocování chování návštěvníků apod. Tyto informace však lze získávat i bez cookies, proto toto jejich využití nemůže být považováno za zvlášť nebezpečné.</p>

                    <i>Volně čerpáno z <a href="https://cs.wikipedia.org/wiki/HTTP_cookie" target="_blank">Wikipedie</a>.</i>

                    <h2>Jak cookies používáme?</h2>
                    <h3>Naše vlastní cookies</h3>
                    <p>Slouží pro funkčnost webů. Může jít například o evidenci toho, jaké komentáře pod článkem uživatel viděl a jaké jsou pro něj nové nebo o udržování informací o přihlášení.</p>

                    <h3>Cookies třetích stran</h3>
                    <p>Používáme i nejrůznější služby našich partnerů, kteří rovněž používají cookies. Tyto cookies jsou řízeny třetími stranami a my nemáme přístup ke čtení nebo zápisu těchto dat.</p>

                    <p>Jde zejména o systémy pro doručování reklamy nebo analýzy návštěvnosti.</p>

                    <span>Našimi partnery jsou:</span>
                    <ul>
                        <li>
                            Google Analytics – podrobnosti o tomto nástoji najdete <a href="https://www.google.com/intl/cs_ALL/analytics/index.html" target="_blank">zde</a>
                        </li>
                        <li>
                            Google – bližší informace o pravidlech společnosti najdete <a href="https://policies.google.com/technologies/ads?hl=cs-cz" target="_blank">zde</a>
                        </li>
                        <li>
                            Sklik – bližší informace o pravidlech systému najdete <a href="https://www.sklik.cz/" target="_blank">zde</a>
                        </li>
                        <li>
                            Facebook – bližší informace o pravidlech systému najdete <a href="https://www.facebook.com/about/privacy" target="_blank">zde</a>
                        </li>
                    </ul>

                    <p>Z používání určitých cookies se můžete odhlásit na výše uvedených stránkách nebo na adrese <a href="http://www.youronlinechoices.com/cz/vase-volby" target="_blank">http://www.youronlinechoices.com/cz/vase-volby</a></p>

                    <h3>Souhlas s ukládáním cookies</h3>
                    <p>Většina prohlížečů cookies automaticky akceptuje, pokud není prohlížeč nastaven jinak. Používáním našich webů souhlasíte s ukládáním souborů cookies.</p>

                    <p>Použití cookies můžete omezit nebo zablokovat v nastavení svého webového prohlížeče.</p>

                    <h3>Jak zkontrolovat nastavení cookies v různých prohlížečích</h3>
                    <p>Informace o nastavení konkrétního prohlížeče naleznete na těchto uvedených adresách:</p>
                    
                    <ul>
                        <li>
                            <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=cs" target="_blank">Chrome</a>
                        </li>
                        <li>
                            <a href="https://support.microsoft.com/cs-cz/windows/microsoft-edge-data-o-proch%C3%A1zen%C3%AD-a-ochrana-soukrom%C3%AD-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank">Egde</a>
                        </li>
                        <li>
                            <a href="https://support.mozilla.org/cs/kb/vymazani-cookies-dat-stranek?redirectslug=vymazani-cookies&redirectlocale=cs" target="_blank">Mozilla Firefox</a>
                        </li>
                        <li>
                            <a href="https://support.microsoft.com/cs-cz/windows/odstran%C4%9Bn%C3%AD-a-spr%C3%A1va-soubor%C5%AF-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">Internet Explorer</a>
                        </li>
                        <li>
                            <a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank">Safari</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'

    export default {
        name: 'PageConditions',
        components: {
            SectionHero
        },
        data() {
            return {
                headline: "Zásady Cookies"
            }
        }
    }
</script>