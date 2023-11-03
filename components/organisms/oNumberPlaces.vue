<template>
    <div class="o-number-places" v-if="achievements[0]">
        <div class="o-number-places__outer">
            <div class="o-number-places__inner">
                <div class="o-number-places__items">
                    <div class="o-number-places__item">
                        <div class="o-number-places__content">
                            <h3 class="o-number-places__headline">Kontinentů</h3>
                            <span class="o-number-places__number">{{ achievements[0].continent }}</span>
                        </div>
                    </div>
                    <div class="o-number-places__item">
                        <div class="o-number-places__content">
                            <h3 class="o-number-places__headline">Států</h3>
                            <span class="o-number-places__number">{{ achievements[0].state }}</span>
                        </div>
                    </div>
                    <div class="o-number-places__item">
                        <div class="o-number-places__content">
                            <h3 class="o-number-places__headline">Regionů</h3>
                            <span class="o-number-places__number">{{ achievements[0].region }}</span>
                        </div>
                    </div>
                    <div class="o-number-places__item">
                        <div class="o-number-places__content">
                            <h3 class="o-number-places__headline">Měst</h3>
                            <span class="o-number-places__number">{{ achievements[0].city }}</span>
                        </div>
                    </div>
                    <div class="o-number-places__item">
                        <div class="o-number-places__content">
                            <h3 class="o-number-places__headline">Míst</h3>
                            <span class="o-number-places__number">{{ achievements[0].spot }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoNumberPlacesComponent',

        data() {
            return {
                email: null,
                passwordHash: null,
                loginCheck: false,
                account: [],
                achievements: [],
                users: []
            }
        },

        async mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')
                this.email = localStorageEmail
                this.passwordHash = localStoragePasswordHash
            }
            
            let success = false
            let data = null

            while (!success) {
                try {
                    let account = null
                    let achievements = null
                    let users = null

                    if (process.client) {
                        if (this.email !== null) {
                            // Account
                            account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)

                            this.loginCheck = true

                            // Achievements
                            if (account !== null) {
                                achievements = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-achievements?id_user=${account[0].id}`)
                            }
                        } else {
                            this.loginCheck = true
                        }
                    } else {
                        this.loginCheck = false
                    }

                    data = { account, achievements, users }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - POČET NAVŠTÍVENÝCH MÍST`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        }
    }
</script>