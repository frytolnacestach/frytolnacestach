<template>
    <main class="t-main -pt-menu">

        <!-- SECTION - Hero -->
		<section class="t-section -p0">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section t-section--wysiwyg py-4">
            <div class="t-section__inner">
                <div class="o-wysiwyg">
                    <p>Ochranu osobních údajů bereme velmi vážně. Níže najdete veškeré informace o tom, jaké údaje máme k dispozici a jak s nimi nakládáme. Ochrana osobních údajů se řídí nařízením GDPR (formálně nařízení Evropského parlamentu Rady č. 2016/679 ze dne 27. 4. 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES).</p>

                    <h2>Kdo jsem a jak mě můžete kontaktovat:</h2>
                    <p>
                    Michal Fryč<br>
                    Vrchlického 995,<br>
                    Roudnice nad Labem<br>
                    413 01<br>
                    TEL: +420 722 678 090<br>
                    IČO: 04521587<br>
                    Fyzická osoba podnikající dle živnostenského zákona nezapsaná v obchodním rejstříku od 29. října 2015
                    </p>
                    
                    <h2>Zpracováváme tyto osobní údaje:</h2>
                    <p>Žádné</p>

                    <h2>Účel a doba zpracování:</h2>
                    <p>Zatím nic nezpracováváme pouze v rámci cookies a třetích stran</p>
                    
                    <h2>Zpracovatelé:</h2>
                    <p>Abychom vám nabízeli špičkové služby, využíváme služby třetích stran. Níže najdete jejich jmenovitý seznam. Využíváme i zpracovatele mimo evropskou unii, konkrétně využíme software u USA. Předání údajů proběhne na základě ověření zpracovatele platformou Privacy Shield. (Tato platforma kontroluje, zda je americký software v souladu s evropskou legislativou.)</p>
                    <ul>
                        <li>Poskytovatel softwaru Google LLC.</li>
                        <li>Poskytovatel hostingu FORPSI provozovatel INTERNET CZ, a. s.,</li>
                        <li>Případně další poskytovatelé zpracovatelských softwarů, služeb a aplikací, které však v současné době společnost nevyužívá.</li>
                    </ul>
                    
                    <h2>Cookies</h2>
                    <p>Na webových stránkách využíváme cookies. Analytické cookies, které měří návštěvnost těchto stránek, považujeme za nás oprávněný zájem. Cookies pro cílení reklamy zpracováváme jen na základě vašeho souhlasu. Používání cookies můžete na svém počítači zakázat. Více o fungování cookies najdete zde.</p>

                    <h2>Zabezpečení a ochrana osobních údajů</h2>
                    <p>Přijímáme veškerá technická a organizační opatření k zabezpečení ochrany osobních údajů způsobem uvedeným v Zákoně nebo v jiných závazných právních předpisech a k vyloučení možnosti neoprávněného nebo nahodilého přístupu k osobním údajům, k jejich změně, zničení či ztrátě, neoprávněným přenosům, k jejich jinému neoprávněnému zpracování, jakož i k jinému zneužití osobních údajů. Tato povinnost platí i po ukončení zpracování osobních údajů.</p>

                    <p>Veškerá elektronická data uložená chráníme zabezpečeným protokolem (HTTPS šifrovaný pomocí TLS), který chrání spojení vašeho webového prohlížeče a našeho serveru před odposloucháváním a podvrhy dat.</p>

                    <h2>Vaše práva:</h2>
                    <p>Na základě nařízení GDPR máte tato práva:</p>
                    <ul>
                        <li>vzít souhlas kdykoli zpět;</li>
                        <li>požadovat po nás informace o zpracování osobních údajů;</li>
                        <li>požadovat po nás přístup k osobním údajům;</li>
                        <li>požadovat po nás opravu nepřesných osobních údajů, jejich doplnění či aktualizaci;</li>
                        <li>požadovat po nás bezodkladný výmaz osobních údajů;</li>
                        <li>požadovat po nás omezení zpracování osobních údajů;</li>
                        <li>požádat nás o přenos osobních údajů ve strojově čitelném formátu;</li>
                        <li>v případě pochybností o zákonnost zpracování vašich osobních údajů máte právo obrátit se na Úřad pro ochranu osobních údajů.</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import oHero from '../components/organisms/oHero.vue'

    export default {
        name: 'PageConditions',

        components: {
            oHero
        },

        data() {
            return {
                headline: "Obchodní podmínky a zásady ochrany osobních údajů"
            }
        },

        head: {
            title: 'Obchodní podmínky a zásady ochrany osobních údajů | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        }
    }
</script>