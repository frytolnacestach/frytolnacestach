<template>
    <section class="t-section my-2 -p0" v-if="reviews && reviews.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="headline" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-review-item-list">
                <div class="o-review-item-list__outer">
                    <div class="o-review-item-list__inner">
                        <div class="o-review-item-list__items">
                            <div class="o-review-item-list__item" v-for="review in reviews" :key="review.id">
                                <div class="o-review-item-list__content">
                                    <div class="o-review-item-list__image loading-image -green" v-if="users && users.find(user => user.id === review.id_user)">
                                        <div class="o-review-item-list__image-lazyload">
                                            <img class="o-review-item-list__image-file lazyload-file"
                                                data-sizes="(max-width: 374px) 345px, 390px"
                                                :data-srcset="`
                                                    https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w
                                                    https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w
                                                    `"
                                                :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                                :alt="users.find(user => user.id === review.id_user).nickname"
                                                v-lazy>
                                        </div>
                                        <NuxtLink class="o-review-item-list__image-link" :to="`/cestovatel/${users.find(user => user.id === review.id_user).slug}`" :aria-label="`Přejít na profil uživatele ${users.find(user => user.id === review.id_user).nickname}`"></NuxtLink>
                                    </div>
                                    <div class="o-review-item-list__text">
                                        <!-- SECTION - FlashMassages -->
                                        <div class="o-form-review-item__messages">
                                            <oFlashMessages :text="errorForm" styleThema=" -error" />
                                            <oFlashMessages :text="successForm" styleThema=" -success" />
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
                                            <div class="o-review-item-list__setting" v-if="account[0].id === review.id_user" @click="selectRating = review.rating, text = review.text, reviewShowEdit()"></div>
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
                                                                <textarea class="a-textarea -green2" name="text" v-model="text" placeholder="Text recenze"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="o-form-review-item__buttons">
                                                            <div class="o-form-review-item__button mt-1">
                                                                <div class="m-button -green" :class="{'-notactive': selectRating === null}">
                                                                    <button class="m-button__input" :disabled="selectRating === null ? true : false" type="submit">Uložit úpravy</button>
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
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OrganismsoReviewItemListComponent',

        props: {
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
            },
            account: {
                type: Array,
                required: true
            },
        },

        data() {
            return {
                errorForm: '',
                successForm: '',
                localStorageEmail: '',
                localStoragePasswordHash: '',
                showEditForm: false,
                showReview: true,
                users: this.users,
                selectRating: null,
                text: ''
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
                            'email': this.localStorageEmail,
                            'password_hash': this.localStoragePasswordHash,
                            'id_place': this.IDplace,
                            'type': this.type,
                            'rating': this.selectRating,
                            'text': this.text
                        })
                    });

                    if (response.ok) {
                        console.log("Recenze byla upravena");
                        this.successForm = "Recenze byla upravena";

                        const reviewIndex = this.reviews.findIndex(review => review.id_user === this.account[0].id);
                        if (reviewIndex !== -1) {
                            this.reviews[reviewIndex].text = this.text
                            this.reviews[reviewIndex].rating = this.selectRating
                        }

                        this.reviewShowReview()
                    } else if (response.status === 201) {
                        console.log("Recenze byla upravena");
                        this.successForm = "Recenze byla upravena";

                        const reviewIndex = this.reviews.findIndex(review => review.id_user === this.account[0].id);
                        if (reviewIndex !== -1) {
                            this.reviews[reviewIndex].text = this.text
                            this.reviews[reviewIndex].rating = this.selectRating
                        }

                        this.reviewShowReview()
                    } else if (response.status === 404) {
                        console.log("Uživatel neexistuje nebo nejste přihlášen");
                        this.errorForm = "Uživatel neexistuje nebo nejste přihlášen";
                    } else if (response.status === 406) {
                        console.log("Neplatné hodnoty u hodnocení");
                        this.errorForm = "Neplatné hodnoty u hodnocení";
                    } else {
                        console.log("Chyba při komunikaci s API");
                        this.errorForm = "Chyba při komunikaci s API";
                    }
                } catch (err) {
                    console.log(err);
                    this.errorForm = "Chyba připojení k API";
                    throw err;
                }
            },

            async reviewShowEdit() {
                this.showReview = false;
                this.showEditForm = true;
            },

            async reviewShowReview() {
                this.showEditForm = false;
                this.showReview = true;
            },
        },

        async mounted() {
            if (process.client) {
                this.localStorageEmail = localStorage.getItem('email');
                this.localStoragePasswordHash = localStorage.getItem('password_hash');
            }

            let success = false;
            let data = null;

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

            Object.assign(this, data);
        }
    }
</script>