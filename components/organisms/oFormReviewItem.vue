<template>
    <div class="o-form-review-item">
        <div class="o-form-review-item__outer">
            <div class="o-form-review-item__inner">

                <!-- SECTION - FlashMassages -->
                <div class="o-form-review-item__messages">
                    <oFlashMessages :text="errorForm" styleThema=" -error" />
                    <oFlashMessages :text="successForm" styleThema=" -success" />
                </div>
                <!-- SECTION - FlashMassages END -->

                <!-- FORM -->
                <form class="o-form-review-item__form" @submit.prevent="addReview">
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
            }
        },

        data() {
            return {
                errorForm: '',
                successForm: '',
                localStorageEmail: '',
                localStoragePasswordHash: '',
                selectRating: null,
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
                            'email': this.localStorageEmail,
                            'password_hash': this.localStoragePasswordHash,
                            'id_place': this.IDplace,
                            'type': this.type,
                            'rating': this.selectRating,
                            'text': this.text
                        })
                    });

                    if (response.ok) {
                        console.log("Hodnocení bylo přidáno");
                        this.successForm = "Hodnocení bylo přidáno";
                    } else if (response.status === 201) {
                        console.log("Hodnocení bylo přidáno");
                        this.successForm = "Hodnocení bylo přidáno";
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
        },

        async mounted() {
            if (process.client) {
                this.localStorageEmail = localStorage.getItem('email');
                this.localStoragePasswordHash = localStorage.getItem('password_hash');
            }
        }
    }
</script>