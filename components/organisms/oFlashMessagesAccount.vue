<template>
    <div class="flex flex-full" v-if="account && account.length !== 0 && account[0].status === 2">
        <!-- SECTION - FlashMassages -->
        <oFlashMessages :dataMessages="flashMessage" />
        <!-- SECTION - FlashMassages END -->

        <div class="o-flash-messages-account">
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

        props: {
            account: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                flashMessage: [
                    {
                        status: "",
                        message: ""
                    }
                ]
            }
        },

        methods: {
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
                            'email': this.account[0].email,
                            'code_activation': this.account[0].code_activation
                        })
                    })

                    if (response.ok) {
                        this.flashMessage.push({
                            status: "success",
                            message: "Aktivační email byl odeslán"
                        })
                    } else if (response.status === 201) {
                        this.flashMessage.push({
                            status: "success",
                            message: "Aktivační email byl odeslán"
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
            }
        }
    }
</script>