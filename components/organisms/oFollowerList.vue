<template>
    <div class="o-follower-list">
        <div class="o-follower-list__outer">
            <div class="o-follower-list__items">
                <div v-for="user in users" :key="user.id" class="o-follower-list__item">
                    <div class="o-follower-list__content">
                        <div class="o-follower-list__image loading-image -blue">
                            <div v-if="images && images.find(image => image.id === user.id_image_cover)" class="o-follower-list__image-lazyload">
                                <img class="o-follower-list__image-file lazyload-file"
                                    data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-186.webp 160w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-186.webp 172w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-186.webp 186w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-230.webp 216w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-274.webp 274w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-230.webp 230w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-230.webp 224w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-230.webp 220w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-256.webp 256w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-360.webp 360w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-372-2x.webp 320w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-372-2x.webp 344w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-372-2x.webp 372w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-460-2x.webp 432w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-548-2x.webp 548w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-460-2x.webp 460w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-460-2x.webp 448w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-460-2x.webp 440w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-512-2x.webp 512w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + 's-' + images.find(image => image.id === user.id_image_cover).name}-720-2x.webp 720w 

                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === user.id_image_cover).source + images.find(image => image.id === user.id_image_cover).name}.webp`"
                                    :alt="user.nickname"
                                    v-lazy>
                            </div>
                            <div v-else class="o-follower-list__image-lazyload">
                                <img class="o-follower-list__image-file lazyload-file"
                                    data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 160w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 216w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 230w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 224w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 220w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 320w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 432w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 460w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 448w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 440w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,
                                        https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w 
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="user.nickname"
                                    v-lazy>
                            </div>
                        </div>
                        <h2 class="o-follower-list__name">
                            {{ user.nickname }}
                        </h2>
                        <NuxtLink class="o-follower-list__link" :to="`/cestovatel/${user.slug}`" :aria-label="`Čti více o cestovateli ${user.nickname}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoFollowerListComponent',

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