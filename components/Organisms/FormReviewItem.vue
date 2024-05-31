<template>
    <div class="o-form-review-item">
        <div class="o-form-review-item__outer">
            <div class="o-form-review-item__inner">

                <!-- SECTION - FlashMassages -->
                <div class="o-form-review-item__messages" v-if="showCreateForm">
                    <OrganismsFlashMessages :dataMessages="flashMessage" />
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
                            <textarea class="a-textarea -green" name="text" v-model="text" placeholder="Podělte se o pocity z tohoto místa."></textarea>
                        </div>
                    </div>
                    <div class="o-form-review-item__buttons mt-1">
                        <div class="o-form-review-item__button">
                            <div class="m-button -green" :class="{'-notactive': selectRating === null}">
                                <button class="m-button__input"  :disabled="selectRating === null ? true : false" type="submit">ZVEŘEJNIT</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- FORM END -->

                <div class="o-review-item-list" v-if="account && showReviewNew">
                    <div class="o-review-item-list__outer">
                        <div class="o-review-item-list__inner">
                            <div class="o-review-item-list__items">
                                <div class="o-review-item-list__item">
                                    <div class="o-review-item-list__content">
                                        <div class="o-review-item-list__image loading-image -green">
                                            <div class="o-review-item-list__image-lazyload">
                                                <AtomsImage 
                                                    :alt="account[0].nickname ? account[0].nickname : 'úživatel'" 
                                                    :lazy=true
                                                    imageSource="/_default/"
                                                    imageName="no-image"
                                                    :sizes=imageSizes
                                                    :srcSet=imageSizesMedia
                                                    cssClassComponent="o-review-item-list"
                                                />
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

            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoFormReviewItemComponent',

        props: {
            account: {
                type: Array,
                required: true
            },
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
            async addReview() {
                try {
                    // API - POST
                    const response = await fetch(`https://api.frytolnacestach.cz/api/review-create`, {
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
                            message: "Recenze byla přidána"
                        })

                        this.updateParentVariable()
                        this.reviewShowReviewNew()
                    } else if (response.status === 201) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Recenze byla přidána"
                        })

                        this.updateParentVariable()
                        this.reviewShowReviewNew()
                    } else if (response.status === 404) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Uživatel neexistuje nebo nejste přihlášen"
                        })
                    } else if (response.status === 405) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Tady už uživatel hodnocení napsal"
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

            async editReview() {
                try {
                    // API - POST
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
                        this.reviewShowReview()
                    } else if (response.status === 201) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Recenze byla upravena"
                        })
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

            async reviewShowCreate() {
                this.showReviewNew = false
                this.showCreateForm = true
            },

            async reviewShowReviewNew() {
                this.showCreateForm = false
                this.showReviewNew = true
            },

            async reviewShowEdit() {
                this.showReview = false
                this.showEditForm = true
            },

            async reviewShowReview() {
                this.showEditForm = false
                this.showReview = true
            },

            updateParentVariable() {
                const newValue = true
                this.$emit('update', newValue)
            }
        }
    })
</script>