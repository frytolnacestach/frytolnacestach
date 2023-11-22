<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoFollowerList styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="!skeleton">
            <div class="o-follower-list">
                <div class="o-follower-list__outer">
                    <div class="o-follower-list__inner">
                        <div class="o-follower-list__items">
                            <div v-for="user in users" :key="user.id" class="o-follower-list__item">
                                <div class="o-follower-list__content-outer">
                                    <div class="o-follower-list__content-inner">
                                        <div class="o-follower-list__image">
                                            <div v-if="images && images.find(image => image.id === user.id_image_cover)" class="o-follower-list__image-lazyload loading-image -blue">
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
                                                <NuxtLink class="o-follower-list__image-link" :to="`/cestovatel/${user.slug}`" :aria-label="`Čti více o cestovateli ${user.nickname}`"></NuxtLink>
                                            </div>
                                            <div v-else class="o-follower-list__image-lazyload loading-image -blue">
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
                                                <NuxtLink class="o-follower-list__image-link" :to="`/cestovatel/${user.slug}`" :aria-label="`Čti více o cestovateli ${user.nickname}`"></NuxtLink>
                                            </div>
                                        </div>
                                        <div class="o-follower-list__text">
                                            <span class="o-follower-list__nickname">
                                                <NuxtLink class="o-follower-list__nickname-link" :to="`/cestovatel/${user.slug}`" :aria-label="`Čti více o cestovateli ${user.nickname}`">{{ user.nickname }}</NuxtLink>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->

        <!-- client -->
        <client-only v-if="users.length === 0 && !skeleton">
            <p v-if="type==='account'">
                Zatím nikoho nesleduješ
            </p>
            <p v-else>
                Cestovatel zatím nikoho nesleduje.
            </p>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoFollowerList from '~/components/skeleton/skeletonoFollowerList.vue'

    export default {
        name: 'OrganismsoFollowerListComponent',

        components: {
            skeletonoFollowerList
        },

        props: {
            account: {
                type: Array,
                required: true
            },
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
                skeleton: true,
                followers: [],
                users: []
            }
        },

        methods: {
            async fetchData() {
                try {
                    if (this.type === "account") {
                        if (this.account && this.account.length !== 0) {
                            if (process.client) {
                                // Followers
                                this.followers = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=${this.account[0].id}`)

                                if (this.followers && this.followers.length !== 0) {
                                    // Users
                                    const usersFollowersIDS = this.followers.map(follower => follower.id_follower).filter(id => id !== null && id !== '')
                                    this.users = await this.$axios.$get(`https://api.frytolnacestach.cz/api/users-ids?id=${usersFollowersIDS.join(',')}`)
                                }

                                this.skeleton = false
                            }
                        }
                    } else {
                        if (process.client) {
                            // Followers
                            this.followers = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=${this.idUser}`)

                            if (this.followers && this.followers.length !== 0) {
                                // Users
                                const usersFollowersIDS = this.followers.map(follower => follower.id_follower).filter(id => id !== null && id !== '')
                                this.users = await this.$axios.$get(`https://api.frytolnacestach.cz/api/users-ids?id=${usersFollowersIDS.join(',')}`)
                            }

                            this.skeleton = false
                        }
                    }
                } catch (error) {
                    console.log(`API ERROR - SLEDUJI`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
        },

        watch: {
            account: {
                handler: 'fetchData',
                immediate: true
            }
        }
    }
</script>