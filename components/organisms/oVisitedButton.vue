<template>
    <section class="t-component-skeleton hidden-print">
        <!-- skeleton -->
        <skeletonoVisitedButton styleThema=" -skeleton-green" v-if="skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="skeleton === false">
            <div class="o-visited-button">
                <!-- SECTION - FlashMassages -->
                <oFlashMessages :dataMessages="flashMessage" />
                <!-- SECTION - FlashMassages END -->

                <div class="o-visited-button__outer">
                    <div class="o-visited-button__inner">
                        <div class="o-visited-button__items">
                            <div class="o-visited-button__item">
                                <span class="o-visited-button__button -future" :class="{ '-active': status === 2 }" @click="editVisited(2)">Chci navštívit</span>
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
                flashMessage: [],
                skeleton: true,
                status: 0
            }
        },

        props: {
            account: {
                type: Array,
                required: true
            },
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
                if (this.account && this.account.length !== 0) {
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place?email=${encodeURIComponent(this.account[0].email)}&password_hash=${encodeURIComponent(this.account[0].password)}&id_place=${encodeURIComponent(this.place)}&type=${this.placeType}`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "http://localhost:3000",
                                "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                            },
                            method: 'GET'
                        })

                        if (response.ok) {
                            const data = await response.json()
                            this.status = data.message[0].status
                            this.skeleton = false
                        } else if (response.status === 404) {
                            this.skeleton = false
                        } else if (response.status === 405) {
                            this.skeleton = false
                        } else {
                            this.skeleton = false
                        }
                    } catch (err) {
                        this.flashMessage.push({
                            status: "error",
                            message: "Chyba připojení k API"
                        })
                        throw err
                    }
                } else {
                    this.skeleton = false
                }
            },

            async editVisited(newStatus) {
                if (this.account && this.account.length !== 0) {
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
                                    'email': this.account[0].email,
                                    'password_hash': this.account[0].password,
                                    'id_place': this.place,
                                    'type': this.placeType,
                                    'status': this.status
                                })
                            })

                            if (response.ok) {
                                if (response.status === 201) {
                                    this.flashMessage.push({
                                        status: "success",
                                        message: "Záznam uložen"
                                    })
                                } else if (response.status === 200) {
                                    this.status = 0
                                    this.flashMessage.push({
                                        status: "success",
                                        message: "Záznam odebrán"
                                    })
                                }
                            } else if (response.status === 404) {
                                this.status = 0
                                this.flashMessage.push({
                                    status: "error",
                                    message: "Vypadá to, že nejsi přihlášen ke svému účtu."
                                })
                            } else {
                                this.flashMessage.push({
                                    status: "error",
                                    message: "Chyba při komunikaci s API"
                                })
                            }
                        } catch (err) {
                            this.flashMessage.push({
                                status: "error",
                                message: "Chyba připojení k API"
                            })
                            throw err
                        }
                    } catch (err) {
                        this.flashMessage.push({
                            status: "error",
                            message: "Nastala chyba"
                        })
                    }
                } else {
                    this.status = 0
                    this.flashMessage.push({
                        status: "error",
                        message: "Vypadá to, že nejsi přihlášen ke svému účtu."
                    })
                }
            }
        },

        mounted() {
            this.visited()
        }
    }
</script>