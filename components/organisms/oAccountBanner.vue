<template>
    <div :class="`o-account-banner`+ styleThema" v-if="account.length === 0">
        <div class="o-account-banner__outer">
            <div class="o-account-banner__inner">
                <h3 class="o-account-banner__headline">Ty tu ještě nemáš účet?</h3>
                <p class="o-account-banner__description">
                    Založ si účet a otevři dveře k nezapomenutelným dobrodružstvím. Získej výhody jako označování svých cest, sbírání cestovatelských úspěchů a psaní recenzí. Staň se součástí naší cestovatelské komunity.
                </p>
                <div class="o-account-banner__buttons">
                    <aButtonFill url="/ucet/registrace" text="Registace" styleThema=" -small -green" target="internal" />
                    <aButtonFill url="/ucet/prihlaseni" text="Přihlášení" styleThema=" -small -blue" target="internal" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFill from '~/components/atoms/aButtonFill.vue'

    export default {
        name: 'OrganismsoAccountBanneComponent',

        components: {
            aButtonFill
        },

        props: {
            styleThema: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                email: null,
                passwordHash: null,
                loginCheck: false,
                account: []
            }
        },

        async mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')
                const localStorageStatus = localStorage.getItem('status')

                this.email = localStorageEmail
                this.passwordHash = localStoragePasswordHash

                if (localStorageStatus !== null) {
                    this.statusAccount = parseInt(localStorageStatus)
                }
            }
            
            let success = false
            let data = null

            while (!success) {
                try {
                    let account = []

                    if (process.client) {
                        if (this.email !== null) {
                            // Account
                            account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)

                            this.loginCheck = true
                        } else {
                            this.loginCheck = true
                        }
                    } else {
                        this.loginCheck = false
                    }


                    data = { account }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - Account banner`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        },
    }
</script>