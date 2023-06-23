<template>
    <div class="o-form-review-item">
        <div class="o-form-review-item__outer">
            <div class="o-form-review-item__inner">

                <!-- SECTION - FlashMassages -->
                <div class="o-form-review-item__messages" v-if="showCreateForm">
                    <oFlashMessages :text="errorForm" styleThema=" -error" />
                    <oFlashMessages :text="successForm" styleThema=" -success" />
                </div>
                <!-- SECTION - FlashMassages END -->

                <!-- FORM -->
                <form class="o-form-review-item__form" @submit.prevent="addReview" v-if="showCreateForm">
                    <div class="o-form-review-item__items">
                        <div class="o-form-review-item__item">
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
                        </div>
                        <div class="o-form-review-item__item">
                            <textarea class="a-textarea -green" name="text" v-model="text" placeholder="Text recenze"></textarea>
                        </div>
                    </div>
                    <div class="o-form-review-item__buttons mt-1">
                        <div class="o-form-review-item__button">
                            <div class="m-button -green" :class="{'-notactive': selectRating === null}">
                                <button class="m-button__input"  :disabled="selectRating === null ? true : false" type="submit">Odeslat</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- FORM END -->

                <div class="o-review-item-list" v-if="showReviewNew">
                    <div class="o-review-item-list__outer">
                        <div class="o-review-item-list__inner">
                            <div class="o-review-item-list__items">
                                <div class="o-review-item-list__item">
                                    <div class="o-review-item-list__content">
                                        <div class="o-review-item-list__image loading-image -green">
                                            <div class="o-review-item-list__image-lazyload">
                                                <img class="o-review-item-list__image-file lazyload-file"
                                                    data-sizes="(max-width: 374px) 345px, 390px"
                                                    :data-srcset="`
                                                        https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w
                                                        https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w
                                                        `"
                                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                                    :alt="account[0].nickname"
                                                    v-lazy>
                                            </div>
                                            <NuxtLink class="o-review-item-list__image-link" :to="`/cestovatel/${account[0].slug}`" :aria-label="`Přejít na profil uživatele ${account[0].nickname}`"></NuxtLink>
                                        </div>
                                        <div class="o-review-item-list__text">
                                            <div class="o-review-item-list__review" v-if="showReview">
                                                <div class="o-review-item-list__stars">
                                                    <div class="o-review-item-list__star" :class="{'-active': selectRating > 0}"></div>
                                                    <div class="o-review-item-list__star" :class="{'-active': selectRating > 1}"></div>
                                                    <div class="o-review-item-list__star" :class="{'-active': selectRating > 2}"></div>
                                                    <div class="o-review-item-list__star" :class="{'-active': selectRating > 3}"></div>
                                                    <div class="o-review-item-list__star" :class="{'-active': selectRating > 4}"></div>
                                                </div>
                                                <div class="o-review-item-list__setting" @click="reviewShowEdit()"></div>
                                                <h3 class="o-review-item-list__name">
                                                    <NuxtLink :to="`/cestovatel/${account[0].slug}`" :aria-label="`Přejít na profil uživatele ${account[0].nickname}`">{{ account[0].nickname }}</NuxtLink>
                                                </h3>
                                                <p class="o-review-item-list__perex">{{ text }}</p>
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
                                                                    <div class="o-form-review-item__close" @click="reviewShowReview()"></div>
                                                                </div>
                                                                <h3 class="o-review-item-list__name">
                                                                    <NuxtLink :to="`/cestovatel/${account[0].slug}`" :aria-label="`Přejít na profil uživatele ${account[0].nickname}`">{{ account[0].nickname }}</NuxtLink>
                                                                </h3>
                                                                <div class="o-form-review-item__item">
                                                                    <textarea class="a-textarea -green" name="text" v-model="text" placeholder="Text recenze"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="o-form-review-item__buttons mt-1">
                                                                <div class="o-form-review-item__button">
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
        </div>
    </div>
</template>

<script>
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'

    export default {
        name: 'OrganismsoFormReviewItemComponent',

        components: {
            oFlashMessages
        },

        props: {
            IDplace: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            newReview: {
                type: Boolean,
                required: true
            }
        },

        data() {
            return {
                errorForm: '',
                successForm: '',
                email: null,
                passwordHash: null,
                loginCheck: false,
                showCreateForm: true,
                showReviewNew: false,
                showEditForm: false,
                showReview: true,
                selectRating: null,
                account: [],
                text: ''
            }
        },

        methods: {
            async addReview() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/review-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'email': this.email,
                            'password_hash': this.passwordHash,
                            'id_place': this.IDplace,
                            'type': this.type,
                            'rating': this.selectRating,
                            'text': this.text
                        })
                    });

                    if (response.ok) {
                        console.log("Hodnocení bylo přidáno");
                        this.successForm = "Hodnocení bylo přidáno";

                        this.updateParentVariable()
                        this.reviewShowReviewNew()
                    } else if (response.status === 201) {
                        console.log("Hodnocení bylo přidáno");
                        this.successForm = "Hodnocení bylo přidáno";

                        this.updateParentVariable()
                        this.reviewShowReviewNew()
                    } else if (response.status === 404) {
                        console.log("Uživatel neexistuje nebo nejste přihlášen");
                        this.errorForm = "Uživatel neexistuje nebo nejste přihlášen";
                    } else if (response.status === 405) {
                        console.log("Tady už uživatel hodnocení napsal");
                        this.errorForm = "Tady už uživatel hodnocení napsal";
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
                            'email': this.email,
                            'password_hash': this.passwordHash,
                            'id_place': this.IDplace,
                            'type': this.type,
                            'rating': this.selectRating,
                            'text': this.text
                        })
                    });

                    if (response.ok) {
                        console.log("Hodnocení bylo přidáno");
                        this.successForm = "Hodnocení bylo upraveno";
                        this.reviewShowReview()
                    } else if (response.status === 201) {
                        console.log("Hodnocení bylo přidáno");
                        this.successForm = "Hodnocení bylo upraveno";
                        this.reviewShowReview()
                    } else if (response.status === 404) {
                        console.log("Uživatel neexistuje nebo nejste přihlášen");
                        this.errorForm = "Uživatel neexistuje nebo nejste přihlášen";
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

            async reviewShowCreate() {
                console.log("kliknuti na reviewShowEdit");
                this.showReviewNew = false;
                this.showCreateForm = true;
            },

            async reviewShowReviewNew() {
                console.log("kliknuti na reviewShowReview");
                this.showCreateForm = false;
                this.showReviewNew = true;
            },

            async reviewShowEdit() {
                this.showReview = false;
                this.showEditForm = true;
            },

            async reviewShowReview() {
                this.showEditForm = false;
                this.showReview = true;
            },

            updateParentVariable() {
                const newValue = true;
                this.$emit('update', newValue);
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
                    console.log(`API ERROR - PŘIDÁNÍ HODNOCENÍ`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data);
        },
    }
</script>