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
            account: {
                type: Array,
                required: true
            },
            placeID: {
                type: Number,
                required: true
            },
            placeType: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                flashMessage: []
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
                                'email': this.account[0].email,
                                'password_hash': this.account[0].password,
                                'id_place': this.placeID, 
                                'type': this.placeType,
                                'status': 1
                            })
                        })

                        if (response.ok) {
                            if (response.status === 201) {
                                this.flashMessage.push({
                                    date: new Date().getTime(),
                                    duration: 5000,
                                    status: "success",
                                    message: "Místo bylo přidáno mezi navštívené"
                                })
                                this.searchQuery = ''
                                this.emitRemoveNewPlaceEvent(this.placeID)
                            } else if (response.status === 200) {
                                this.flashMessage.push({
                                    date: new Date().getTime(),
                                    duration: 5000,
                                    status: "success",
                                    message: "Záznam odebrán"
                                })
                            }
                        } else if (response.status === 404) {
                            this.flashMessage.push({
                                date: new Date().getTime(),
                                duration: 5000,
                                status: "error",
                                message: "Vypadá to, že nejsi přihlášen ke svému účtu."
                            })
                        } else {
                            this.flashMessage.push({
                                date: new Date().getTime(),
                                duration: 5000,
                                status: "error",
                                message: "Chyba při komunikaci s API"
                            })
                        }
                    } catch (err) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Chyba připojení k API"
                        })
                        throw err
                    }
                } catch (err) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Nastala chyba"
                    })
                }
            },

            emitRemoveNewPlaceEvent(placeID) {
                this.$emit('remove-place', placeID)
            }
        }
    }
</script>