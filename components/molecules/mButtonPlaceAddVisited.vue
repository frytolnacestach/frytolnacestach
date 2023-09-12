<template>
    <div class="m-button-place-add-visited hidden-print" @click="deleteVisited(placeID)">
        <aTooltip text="Už jsem navštívil" />
    </div>
</template>

<script>
    import aTooltip from '@/components/atoms/aTooltip.vue'

    export default {
        name: 'MoleculesmButtonPlaceAddVisitedComponent',

        components: {
            aTooltip
        },
        
        props: {
            placeID: {
                type: Number,
                required: true
            },
            placeType: {
                type: String,
                required: true
            }
        },

        mounted() {
            // user login information
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')

                this.email = localStorageEmail
                this.passwordHash = localStoragePasswordHash
            }
        },

        methods: {
            async deleteVisited(placeID) {
                try {
                    this.placeID = placeID
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
                                'id_place': this.placeID, 
                                'type': this.placeType,
                                'status': 1
                            })
                        })

                        if (response.ok) {
                            if (response.status === 201) {
                                console.log("Místo bylo přidáno mezi navštívené")
                                this.successForm = "Místo bylo přidáno mezi navštívené"
                                this.searchQuery = ''
                                this.emitRemoveNewPlaceEvent(this.placeID)
                            } else if (response.status === 200) {
                                console.log("Záznam odebrán")
                                this.successForm = "Záznam odebrán"
                            }
                        } else if (response.status === 404) {
                            console.log("Vypadá to že nejsi přihlášen ke svému účtu.")
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
            },

            emitRemoveNewPlaceEvent(placeID) {
                this.$emit('remove-place', placeID)
            }
        }
    }
</script>