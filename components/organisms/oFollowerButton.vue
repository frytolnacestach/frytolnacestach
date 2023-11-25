<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoFollowerButton styleThema=" -skeleton-blue" v-if="skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="skeleton === false">
            <div class="o-follower-button">
                <!-- SECTION - FlashMassages -->
                <oFlashMessages :dataMessages="flashMessage" />
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
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoFollowerButton from '~/components/skeleton/skeletonoFollowerButton.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsoFollowerButtonComponent',

        components: {
            skeletonoFollowerButton,
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
            user: {
                type: Number,
                required: true
            }
        },

        methods: {

            async follower() {
                if (this.account && this.account.length !== 0) {
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-follower-id-follower?email=${encodeURIComponent(this.account[0].email)}&password_hash=${encodeURIComponent(this.account[0].password)}&id_follower=${encodeURIComponent(this.user)}`, {
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

            async editFollower(newStatus) {
                if (this.account && this.account.length !== 0) {
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
                                    this.flashMessage.push({
                                        status: "success",
                                        message: "Záznam uložen"
                                    })
                                } else if (response.status === 200) {
                                    this.flashMessage.push({
                                        status: "success",
                                        message: "Záznam odebrán"
                                    })
                                    this.status = 0
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
            this.follower()
        }
    }
</script>