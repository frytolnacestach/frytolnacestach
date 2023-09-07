<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoVisitedButton styleThema=" -skeleton-green" v-if="skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="skeleton === false">
            <div class="o-visited-button">
                <!-- SECTION - FlashMassages -->
                <oFlashMessages :text="errorForm" styleThema=" -error" />
                <oFlashMessages :text="successForm" styleThema=" -success" />
                <!-- SECTION - FlashMassages END -->

                <div class="o-visited-button__outer">
                    <div class="o-visited-button__inner">
                        <div class="o-visited-button__items">
                            <div class="o-visited-button__item">
                                <span class="o-visited-button__button -future" :class="{ '-active': status === 2 }" @click="editVisited(2)" >Chci navštívit</span>
                            </div>
                            <div class="o-visited-button__item">
                                <span class="o-visited-button__button -visited" :class="{ '-active': status === 1 }" @click="editVisited(1)">Navštívil(a) jsem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoVisitedButton from '~/components/skeleton/skeletonoVisitedButton.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsoVisitedButtonComponent',

        components: {
            skeletonoVisitedButton,
            oFlashMessages
        },

        data() {
            return {
                errorForm: '',
                successForm: '',
                skeleton: true,
                status: 0,
                email: this.email,
                passwordHash: this.passwordHash
            }
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
            async visited() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}&id_place=${encodeURIComponent(this.place)}&type=${this.placeType}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'GET'
                    })

                    if (response.ok) {
                        console.log("Záznam načten")
                        const data = await response.json()
                        this.status = data.message[0].status
                        this.skeleton = false
                    } else if (response.status === 404) {
                        console.log("Uživatel neexistuje")
                        //this.errorForm = "Uživatel neexistuje"
                        this.skeleton = false
                    } else if (response.status === 405) {
                        console.log("Místo uživatel nemá uložené")
                        //this.errorForm = "Místo uživatel nemá uložené"
                        this.skeleton = false
                    } else {
                        console.log("Chyba při komunikaci s API")
                        //this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            },

            async editVisited(newStatus) {
                try {
                    this.status = newStatus
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place-edit`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "http://localhost:3000",
                                "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                            },
                            method: 'POST',
                            body: JSON.stringify({
                                'email': this.email,
                                'password_hash': this.passwordHash,
                                'id_place': this.place,
                                'type': this.placeType,
                                'status': this.status
                            })
                        })

                        if (response.ok) {
                            if (response.status === 201) {
                                console.log("Záznam uložen")
                                this.successForm = "Záznam uložen"
                            } else if (response.status === 200) {
                                console.log("Záznam odebrán")
                                this.successForm = "Záznam odebrán"
                                this.status = 0
                            }
                        } else if (response.status === 404) {
                            console.log("Vypadá to že nejsi přihlášen ke svému účtu.")
                            this.status = 0
                            this.errorForm = "Vypadá to, že nejsi přihlášen ke svému účtu."
                        } else {
                            console.log("Chyba při komunikaci s API")
                            this.errorForm = "Chyba při komunikaci s API"
                        }
                    } catch (err) {
                        console.log(err)
                        this.errorForm = "Chyba připojení k API"
                        throw err
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Nastala chyba"
                }
            }
        },

        mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')

                this.email = localStorageEmail
                this.passwordHash = localStoragePasswordHash
            }

            this.visited()
        }
    }
</script>