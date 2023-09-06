<template>
    <div class="o-follower-button">
        <!-- SECTION - FlashMassages -->
        <oFlashMessages :text="errorForm" styleThema=" -error" />
        <oFlashMessages :text="successForm" styleThema=" -success" />
        <!-- SECTION - FlashMassages END -->

        <div class="o-follower-button__outer">
            <div class="o-follower-button__inner">
                <div class="o-follower-button__items">
                    <div class="o-follower-button__item">
                        <span class="o-follower-button__button" :class="{ '-active': status === 1 }" @click="editFollower(1)">{{ status === 1 ? 'Sleduji' : 'Sledovat' }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsoFollowerButtonComponent',

        components: {
            oFlashMessages
        },

        data() {
            return {
                errorForm: '',
                successForm: '',
                status: 0,
                email: this.email,
                passwordHash: this.passwordHash
            }
        },

        props: {
            user: {
                type: Number,
                required: true
            }
        },

        methods: {

            async follower() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-follower-id-follower?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}&id_follower=${encodeURIComponent(this.user)}`, {
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
                        //this.successForm = "Záznam načten"
                    } else if (response.status === 404) {
                        console.log("Uživatel neexistuje")
                        //this.errorForm = "Uživatel neexistuje"
                    } else if (response.status === 405) {
                        console.log("Místo uživatel nemá uložené")
                        //this.errorForm = "Místo uživatel nemá uložené"
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

            async editFollower(newStatus) {
                try {
                    this.status = newStatus
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-follower-edit`, {
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
                                'id_follower': this.user,
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
                    console.log(err);
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

            this.follower()
        }
    }
</script>