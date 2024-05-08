<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonoFollowerList styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
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
                                                <aImage 
                                                    :alt="user.nickname ? user.nickname : 'Cestovatel'"  
                                                    :author="images.find(image => image.id === user.id_image_cover).author"
                                                    :lazy=true
                                                    :imageSource="images.find(image => image.id === user.id_image_cover).source"
                                                    :imageName="images.find(image => image.id === user.id_image_cover).name"
                                                    :sizes=imageSizes
                                                    :srcSet=imageSizesMedia
                                                    cssClassComponent="o-follower-list"
                                                />
                                                <NuxtLink class="o-follower-list__image-link" :to="`/cestovatel/${user.slug}`" :aria-label="`Čti více o cestovateli ${user.nickname}`"></NuxtLink>
                                            </div>
                                            <div v-else class="o-follower-list__image-lazyload loading-image -blue">
                                                <aImage 
                                                    :alt="user.nickname ? user.nickname : 'Cestovatel'" 
                                                    :lazy=true
                                                    imageSource="/_default/"
                                                    imageName="no-image"
                                                    :sizes=imageSizes
                                                    :srcSet=imageSizesMedia
                                                    cssClassComponent="o-follower-list"
                                                />
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
        <!-- SHOW - client END -->

        <!-- SHOW - client -->
        <client-only v-if="users.length === 0 && !skeleton">
            <p v-if="type==='account'">
                Zatím nikoho nesleduješ
            </p>
            <p v-else>
                Cestovatel zatím nikoho nesleduje.
            </p>
        </client-only>
        <!-- SHOW - client END -->

    </section>
</template>

<script>
    import skeletonoFollowerList from '~/components/skeleton/skeletonoFollowerList.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoFollowerListComponent',

        components: {
            skeletonoFollowerList,
            aImage
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
                users: [],
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 160
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 172
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 186
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 216
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 274
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 230
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 224
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 220
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 256
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 360
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 160,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 172,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 186,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 216,
                        "imageWidth": 230,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 274,
                        "imageWidth": 274,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 230,
                        "imageWidth": 230,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 224,
                        "imageWidth": 230,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 220,
                        "imageWidth": 230,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 256,
                        "imageWidth": 256,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 360,
                        "imageWidth": 360,
                        "orientation": "s-"
                    }
                ]
            }
        },

        methods: {
            async fetchData() {
                if (this.type === "account") {
                    if (this.account && this.account.length !== 0) {
                        if (process.client) {
                            // API - GET - Followers
                            const responseFollowers = await fetch(`https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=${this.account[0].id}`)
                            this.followers = await responseFollowers.json()
                            // API - GET - User
                            if (this.followers && this.followers.length !== 0) {
                                const usersFollowersIDS = this.followers.map(follower => follower.id_follower).filter(id => id !== null && id !== '')
                                const responseUsers = await fetch(`https://api.frytolnacestach.cz/api/users-ids?id=${usersFollowersIDS.join(',')}`)
                                this.users = await responseUsers.json()
                            }

                            // FINAL
                            this.skeleton = false
                        }
                    }
                } else {
                    if (process.client) {
                        // API - GET - Followers
                        const responseFollowers = await fetch(`https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=${this.idUser}`)
                        this.followers = await responseFollowers.json()
                        // API - GET - User
                        if (this.followers && this.followers.length !== 0) {
                            const usersFollowersIDS = this.followers.map(follower => follower.id_follower).filter(id => id !== null && id !== '')
                            const responseUsers = await fetch(`https://api.frytolnacestach.cz/api/users-ids?id=${usersFollowersIDS.join(',')}`)
                            this.users = await responseUsers.json()
                        }

                        // FINAL
                        this.skeleton = false
                    }
                }
            }
        },

        watch: {
            account: {
                handler: 'fetchData',
                immediate: true
            }
        }
    })
</script>