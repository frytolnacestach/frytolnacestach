<template>
    <div class="o-ad-seznam-sidebar mt-2 hidden-print">
        <div class="o-ad-seznam-sidebar__outer">
            <div class="o-ad-seznam-sidebar__inner">
                <div class="o-ad-seznam-sidebar__content">
                    <!--
                    následující element nebo elementy reprezentují každý jednu reklamní plochu (zónu);
                    vložte je prosím jednotlivě na místa ve stránce, kde chcete zobrazit reklamu odpovídajících
                    rozměrů (parametry width [maximální šířka] a height [maximální výška] jsou uvedeny v definici
                    reklamních zón níže); element s konkrétním ID smí být na stránce vždy jen jednou
                    -->
                    <div ref="adContainer"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoAdSeznamSidebarComponent',

        mounted() {
            const adContainer = this.$refs.adContainer

            // Vytvoření elementu pro reklamu
            const adElement = document.createElement('div')
            adElement.id = 'ssp-zone-302431'

            // Vložení reklamního elementu do kontejneru
            adContainer.appendChild(adElement)

            // Načtení externího skriptu sssp.js
            const script = document.createElement('script')
            script.src = 'https://ssp.seznam.cz/static/js/ssp.js'
            script.async = true
            script.onload = this.initAdCode

            // Přidání skriptu do hlavičky dokumentu
            document.head.appendChild(script)
        },

        methods: {
            initAdCode() {
                // Metoda getAds() zajišťuje získání reklamy z reklamního systému a její vykreslení do stránky.
                // Parametry jednotlivých zón jsou definované v níže uvedeném poli, které je argumentem této metody.
                sssp.getAds([
                    {
                        "zoneId": 302431,        // Unikátní identifikátor reklamní zóny
                        "id": "ssp-zone-302431", // ID elementu, do kterého se vypisuje reklama
                        "width": 300,            // Maximální šířka reklamy v zóně
                        "height": 600            // Maximální výška reklamy v zóně
                    }
                ])
            }
        }
    }
</script>