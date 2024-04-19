<template>
    <section class="t-section my-2 -p0" v-if="reviews && reviews.length > 0">
        <div class="t-section__inner">            
            <section class="t-component-skeleton">
                <!-- skeleton -->
                <skeletonoReviewItemList styleThema=" -skeleton-green" v-if="reviews === null" />
                <!-- skeleton END -->

                <!-- client -->
                <client-only v-if="reviews !== null">
                    <div class="o-review-item-list">
                        <div class="o-review-item-list__outer">
                            <div class="o-review-item-list__inner">
                                <div class="o-review-item-list__items">
                                    <div class="o-review-item-list__item print-section" v-for="review in reviews" :key="review.id">
                                        <div class="o-review-item-list__content">
                                            <div class="o-review-item-list__image loading-image -green" v-if="users && users.find(user => user.id === review.id_user)">
                                                <div class="o-review-item-list__image-lazyload">
                                                    <aImage 
                                                        :alt="users.find(user => user.id === review.id_user).nickname ? users.find(user => user.id === review.id_user).nickname : 'úživatel'" 
                                                        :lazy=true
                                                        imageSource="/storage/_default/"
                                                        imageName="no-image"
                                                        :sizes=imageSizes
                                                        :srcSet=imageSizesMedia
                                                        cssClassComponent="o-review-item-list"
                                                    />
                                                </div>
                                                <NuxtLink class="o-review-item-list__image-link" :to="`/cestovatel/${users.find(user => user.id === review.id_user).slug}`" :aria-label="`Přejít na profil uživatele ${users.find(user => user.id === review.id_user).nickname}`"></NuxtLink>
                                            </div>
                                            <div class="o-review-item-list__text">
                                                <!-- SECTION - FlashMassages -->
                                                <div class="o-form-review-item__messages">
                                                    <oFlashMessages :dataMessages="flashMessage" />
                                                </div>
                                                <!-- SECTION - FlashMassages END -->

                                                <div class="o-review-item-list__review" v-if="showReview">
                                                    <div class="o-review-item-list__stars">
                                                        <div class="o-review-item-list__star" :class="{'-active': review.rating > 0}"></div>
                                                        <div class="o-review-item-list__star" :class="{'-active': review.rating > 1}"></div>
                                                        <div class="o-review-item-list__star" :class="{'-active': review.rating > 2}"></div>
                                                        <div class="o-review-item-list__star" :class="{'-active': review.rating > 3}"></div>
                                                        <div class="o-review-item-list__star" :class="{'-active': review.rating > 4}"></div>
                                                    </div>
                                                    <div class="o-review-item-list__setting" v-if="account && account.length !== 0 && account[0].id === review.id_user" @click="selectRating = review.rating, text = review.text, reviewShowEdit()"></div>
                                                    <h3 class="o-review-item-list__name" v-if="users && users.find(user => user.id === review.id_user)">
                                                        <NuxtLink class="o-review-item-list__name-link" :to="`/cestovatel/${users.find(user => user.id === review.id_user).slug}`" :aria-label="`Přejít na profil uživatele ${users.find(user => user.id === review.id_user).nickname}`">{{ users.find(user => user.id === review.id_user).nickname }}</NuxtLink>
                                                    </h3>
                                                    <p class="o-review-item-list__perex">{{ review.text }}</p>
                                                </div>

                                                <!-- FORM -->
                                                <div class="o-form-review-item -edit" v-if="showEditForm">
                                                    <div class="o-form-review-item__outer">
                                                        <div class="o-form-review-item__inner">
                                                            <form class="o-form-review-item__form" @submit.prevent="editReview">
                                                                <div class="o-form-review-item__items">
                                                                    <div class="o-form-review-item__item -notmargin">
                                                                        <div class="m-radio-star__stars">
                                                                            <div class="m-radio-star__star" v-for="rating in 5">
                                                                                <label class="m-radio-star__label" :key="rating" @click="selectRating = rating">
                                                                                    <input
                                                                                        class="m-radio-star__input -blue"
                                                                                        type="radio"
                                                                                        name="rating"
                                                                                        :value="rating"
                                                                                        :checked="selectRating === rating"
                                                                                        v-model="selectRating"
                                                                                        required
                                                                                    />
                                                                                    <div class="m-radio-star__star-icon" :class="{'-active': selectRating > (rating - 1)}"></div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="o-form-review-item__close" v-if="account[0].id === review.id_user" @click="reviewShowReview()"></div>
                                                                    </div>
                                                                    <h3 class="o-review-item-list__name" v-if="users && users.find(user => user.id === review.id_user)">
                                                                        <NuxtLink class="o-review-item-list__name-link" :to="`/cestovatel/${users.find(user => user.id === review.id_user).slug}`" :aria-label="`Přejít na profil uživatele ${users.find(user => user.id === review.id_user).nickname}`">{{ users.find(user => user.id === review.id_user).nickname }}</NuxtLink>
                                                                    </h3>
                                                                    <div class="o-form-review-item__item -notmargin">
                                                                        <textarea class="a-textarea -green2" name="text" v-model="text" placeholder="Podělte se o pocity z tohoto místa."></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="o-form-review-item__buttons">
                                                                    <div class="o-form-review-item__button mt-1">
                                                                        <div class="m-button -green" :class="{'-notactive': selectRating === null}">
                                                                            <button class="m-button__input" :disabled="selectRating === null ? true : false" type="submit">UPRAVIT</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- FORM END -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </client-only>
                <!-- client END -->
            </section>
        </div>
    </section>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import skeletonoReviewItemList from '~/components/skeleton/skeletonoReviewItemList.vue'

    export default {
        name: 'OrganismsoReviewItemListComponent',

        components: {
            aImage,
            oFlashMessages,
            skeletonoReviewItemList
        },

        props: {
            account: {
                type: Array,
                required: true
            },
            IDplace: {
                type: Number,
                required: true
            },
            reviews: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                flashMessage: [],
                showEditForm: false,
                showReview: true,
                users: this.users,
                selectRating: null,
                text: '',
                flashMessage: [],
                showCreateForm: true,
                showReviewNew: false,
                showEditForm: false,
                showReview: true,
                selectRating: null,
                text: '',
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 40
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 50
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 70
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 40,
                        "imageWidth": 40,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 50,
                        "imageWidth": 50,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 70,
                        "imageWidth": 70,
                        "orientation": "s-"
                    }
                ]
            }
        },

        methods: {
            async editReview() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/review-edit`, {
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
                            'id_place': this.IDplace,
                            'type': this.type,
                            'rating': this.selectRating,
                            'text': this.text
                        })
                    })

                    if (response.ok) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Recenze byla upravena"
                        })

                        const reviewIndex = this.reviews.findIndex(review => review.id_user === this.account[0].id)
                        if (reviewIndex !== -1) {
                            this.reviews[reviewIndex].text = this.text
                            this.reviews[reviewIndex].rating = this.selectRating
                        }

                        this.reviewShowReview()
                    } else if (response.status === 201) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Recenze byla upravena"
                        })

                        const reviewIndex = this.reviews.findIndex(review => review.id_user === this.account[0].id)
                        if (reviewIndex !== -1) {
                            this.reviews[reviewIndex].text = this.text
                            this.reviews[reviewIndex].rating = this.selectRating
                        }

                        this.reviewShowReview()
                    } else if (response.status === 404) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Uživatel neexistuje nebo nejste přihlášen"
                        })
                    } else if (response.status === 406) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Neplatné hodnoty u hodnocení"
                        })
                    } else {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Chyba při komunikaci s API"
                        })
                    }
                } catch (err) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Chyba připojení k API"
                    })
                    throw err
                }
            },

            async reviewShowEdit() {
                this.showReview = false
                this.showEditForm = true
            },

            async reviewShowReview() {
                this.showEditForm = false
                this.showReview = true
            }
        },

        async mounted() {
            let success = false
            let data = null

            while (!success) {
                try {
                    // Users
                    const usersReviewsIDS = this.reviews.map(review => review.id_user).filter(id => id !== null && id !== '')
                    const users = await this.$axios.$get(`https://api.frytolnacestach.cz/api/users-ids?id=${usersReviewsIDS.join(',')}`)


                    data = {
                        users
                    }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - UŽIVATELSKÉ RECENZE`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        }
    }
</script>