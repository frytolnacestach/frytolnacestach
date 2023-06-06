<template>
    <div class="o-visited-button">
        <!-- SECTION - FlashMassages -->
        <oFlashMessages :text="errorForm" styleThema=" -error" />
        <oFlashMessages :text="successForm" styleThema=" -success" />
        <!-- SECTION - FlashMassages END -->

        <div class="o-visited-button__outer">
            <div class="o-visited-button__inner">
                <div class="o-visited-button__items">
                    <div class="o-visited-button__item">
                        <span class="o-visited-button__button -future">Chci navštívit</span>
                    </div>
                    <div class="o-visited-button__item">
                        <span class="o-visited-button__button -visited">Navštívil(a) jsem</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsoTransportComponent',

        components: {
            oFlashMessages
        },

        data() {
            return {
                status: 0
            };
        },

        props: {
            place: {
                type: Number,
                required: true
            },
            placeType: {
                type: String,
                required: true
            }
        },

        methods: {
            async addVisited() {
                try {
                    const response = await fetch(`https://frytolnacestach-api.vercel.app/api/user-visited-place`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_place': this.place,
                            'type': this.placeType,
                            'status': this.status,
                        })
                    });

                    if (response.ok) {
                        console.log("Záznam uložen");
                        this.successForm = "Záznam uložen";
                    } else {
                        console.log("Chyba při komunikaci s API");
                        this.errorForm = "Chyba při komunikaci s API";
                    }
                } catch (err) {
                    console.log(err);
                    this.errorForm = "Chyba připojení k API";
                    throw err;
                }
            }
        }
    }
</script>