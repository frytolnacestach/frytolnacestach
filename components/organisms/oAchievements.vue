<template>
    <div class="o-achievements">
        <div class="o-achievements__outer">
            <div class="o-achievements__inner">
                <div class="o-achievements__items">
                    
                    <div class="o-achievements__item -type-world -value-bronze">
                        <div class="o-achievements__content">
                            <div class="o-achievements__medal"></div>
                            <div class="o-achievements__text">
                                <h2 class="o-achievements__name">Světový cestovatel (Bronzový)</h2>
                                <p class="o-achievements__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div class="o-achievements__progress">
                                <span class="o-achievements__progress-number"><span class="o-achievements__progress-number-actual">10</span>/<span class="o-achievements__progress-number-need">10</span></span>
                                <div class="o-achievements__progress-line">
                                    <div class="o-achievements__progress-line-full" style="width: 100%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="o-achievements__item -type-world -value-silver">
                        <div class="o-achievements__content">
                            <div class="o-achievements__medal"></div>
                            <div class="o-achievements__text">
                                <h2 class="o-achievements__name">Světový cestovatel (Stříbrný)</h2>
                                <p class="o-achievements__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div class="o-achievements__progress">
                                <span class="o-achievements__progress-number"><span class="o-achievements__progress-number-actual">16</span>/<span class="o-achievements__progress-number-need">25</span></span>
                                <div class="o-achievements__progress-line">
                                    <div class="o-achievements__progress-line-full" style="width: 64%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="o-achievements__item -type-world -value-gold">
                        <div class="o-achievements__content">
                            <div class="o-achievements__medal"></div>
                            <div class="o-achievements__text">
                                <h2 class="o-achievements__name">Světový cestovatel (Zlatý)</h2>
                                <p class="o-achievements__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div class="o-achievements__progress">
                                <span class="o-achievements__progress-number"><span class="o-achievements__progress-number-actual">16</span>/<span class="o-achievements__progress-number-need">125</span></span>
                                <div class="o-achievements__progress-line">
                                    <div class="o-achievements__progress-line-full" style="width: 12.8%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="o-achievements__item -type-world -value-diamond">
                        <div class="o-achievements__content">
                            <div class="o-achievements__medal"></div>
                            <div class="o-achievements__text">
                                <h2 class="o-achievements__name">Světový cestovatel (Diamontový)</h2>
                                <p class="o-achievements__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div class="o-achievements__progress">
                                <span class="o-achievements__progress-number"><span class="o-achievements__progress-number-actual">16</span>/<span class="o-achievements__progress-number-need">249</span></span>
                                <div class="o-achievements__progress-line">
                                    <div class="o-achievements__progress-line-full" style="width: 6.4%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="o-achievements__item -type-world">
                        <div class="o-achievements__content">
                            <div class="o-achievements__medal"></div>
                            <div class="o-achievements__text">
                                <h2 class="o-achievements__name">Světový cestovatel (Diamontový)</h2>
                                <p class="o-achievements__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div class="o-achievements__progress">
                                <span class="o-achievements__progress-number"><span class="o-achievements__progress-number-actual">16</span>/<span class="o-achievements__progress-number-need">249</span></span>
                                <div class="o-achievements__progress-line">
                                    <div class="o-achievements__progress-line-full" style="width: 6.4%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoAchievementsListComponent',

        props: {
            type: {
                type: String,
                required: true
            },
            idUser: {
                type: Number,
                required: false
            }
        },

        data() {
            return {
                email: null,
                passwordHash: null,
                loginCheck: false,
                account: [],
                followers: [],
                users: []
            }
        },

        async mounted() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email');
                const localStoragePasswordHash = localStorage.getItem('password_hash');
                this.email = localStorageEmail;
                this.passwordHash = localStoragePasswordHash;
            }
            
            let success = false;
            let data = null;

            while (!success) {
                try {
                    let account = null
                    let followers = null
                    let users = null

                    if (this.type === "account") {
                        if (process.client) {
                            if (this.email !== null) {
                                // Account
                                account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)

                                this.loginCheck = true

                                // Followers
                                if (account !== null) {
                                    followers = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=${account[0].id}`)

                                    if (followers !== null) {
                                        // Users
                                        const usersFollowersIDS = followers.map(follower => follower.id_follower).filter(id => id !== null && id !== '')
                                        users = await this.$axios.$get(`https://api.frytolnacestach.cz/api/users-ids?id=${usersFollowersIDS.join(',')}`)
                                    }
                                }
                            } else {
                                this.loginCheck = true
                            }
                        } else {
                            this.loginCheck = false
                        }

                        data = { account, followers, users }
                    } else {
                        if (process.client) {
                                // Followers
                                followers = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=${this.idUser}`)

                                if (followers !== null) {
                                    // Users
                                    const usersFollowersIDS = followers.map(follower => follower.id_follower).filter(id => id !== null && id !== '')
                                    users = await this.$axios.$get(`https://api.frytolnacestach.cz/api/users-ids?id=${usersFollowersIDS.join(',')}`)
                                }
                        }

                        data = { account, followers, users }
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - SLEDUJI`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data);
        }
    }
</script>