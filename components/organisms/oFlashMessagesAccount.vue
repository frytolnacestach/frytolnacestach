<template>
    <div class="flex flex-full">
        <!-- SECTION - FlashMassages -->
        <oFlashMessages :text="errorForm" styleThema=" -error" />
        <oFlashMessages :text="successForm" styleThema=" -success" />
        <!-- SECTION - FlashMassages END -->

        <div class="o-flash-messages-account" v-if="needActivation">
            <div class="o-flash-messages-account__items">
                <div :class="'o-flash-messages-account__item -error'">
                    <div class="o-flash-messages-account__outer">
                        <div class="o-flash-messages-account__inner">
                            <span class="o-flash-messages-account__text">
                                Účet je potřeba Aktivovat. Do emailu by vám při registraci měl přijít aktivační odkaz.<br>
                                <a href="#" @click="resendActivationEmail">Znovu zaslat aktivační email</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsoFlashMessagesAccountComponent',

        components: {
            oFlashMessages
        },

        data() {
            return {
                profile: null,
                errorForm: '',
                successForm: '',
                needActivation: false,
                email: this.email,
                code_activation: ''

            }
        },

        async mounted() {
            if (process.client) {
                const localStorageStatus = localStorage.getItem('userStatus')
                if (localStorageStatus === '2') {
                    this.needActivation = true
                }

                const localStorageEmail = localStorage.getItem('userEmail')
                this.email = localStorageEmail
            }

            await this.fetchProfile()

            if (this.profile && this.profile[0]) {
                this.code_activation = this.profile[0].code_activation
            }
        },

        methods: {
            async fetchProfile() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile/${this.email}`)
                    if (response.ok) {
                        this.profile = await response.json()
                    } else {
                        console.log("Chyba při komunikaci s API")
                        this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            },

            async resendActivationEmail() {
                await this.mailActivation()
            },

            async mailActivation() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-activation-email`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'email': this.email,
                            'code_activation': this.code_activation
                        })
                    })

                    if (response.ok) {
                        console.log("Aktivační email byl odeslán")
                        this.successForm = "Aktivační email byl odeslán"
                    } else if (response.status === 201) {
                        console.log("Aktivační email byl odeslán")
                        this.successForm = "Aktivační email byl odeslán"
                    } else {
                        console.log("Chyba při komunikaci s API")
                        this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            }
        }
    }
</script>