<template>
    <section class="t-section my-2 -p0">
        <div class="t-section__inner">

            <!-- SECTION - mHeadline -->
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="myReview.length === 0 && numberReviews !== 0 && account.length !== 0 && newReview === false" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ale nejdříve se musíš přihlásit ke svému účtu." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && account.length === 0 && newReview === false" />
            <mHeadline title="Napiš recenzi" perex="Ještě nikdo tu nenapsal recenzi, buď první." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && account.length !== 0 && newReview === false" />
            <mHeadline title="Napiš recenzi" perex="Ale nejdříve se musíš přihlásit ke svému účtu." styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="numberReviews === 0 && account.length === 0 && newReview === false" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - mHeadline -->
            <mHeadline title="Recenze" perex="Super, napsal jsi recenzi jako první! Děkujeme."  styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="reviews.length === 0 && newReview === true" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Form Review -->
            <oFormReviewItem :IDplace="IDplace" :type="type" :newReview="newReview" v-if="myReview.length === 0 && account.length !== 0" @update="addReviewUpdate" />
            <!-- SECTION - Form Review END -->

            <!-- SECTION - mHeadline -->
            <mHeadline title="Recenze" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="reviews.length !== 0" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Review -->
            <oReviewItemList :IDplace="IDplace" :reviews="reviews" :type="type" :account="account" v-if="reviews.length !== 0 && loginCheck === true" />
            <!-- SECTION - Review END -->
        </div>
    </section>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oFormReviewItem from '~/components/organisms/oFormReviewItem.vue'
    import oReviewItemList from '~/components/organisms/oReviewItemList.vue'

    export default {
        name: 'OrganismsoReviewItemComponent',

        components: {
            mHeadline,
            oFormReviewItem,
            oReviewItemList
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
                email: null,
                passwordHash: null,
                loginCheck: false,
                account: [],
                reviews: [],
                myReview: [],
                numberReviews: 0,
                newReview: false
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
                    // Reviews
                    const reviews = await this.$axios.$get(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&type=${this.type}`)

                    let account = null
                    let myReview = []
                    if (process.client) {
                        if (this.email !== null) {
                            // Account
                            account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)

                            // myReviews
                            myReview = await this.$axios.$get(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&id_user=${account[0].id}&type=${this.type}`)

                            this.loginCheck = true
                        } else {
                            this.loginCheck = true
                        }
                    } else {
                        this.loginCheck = false
                    }

                    
                    this.numberReviews = reviews.length;


                    data = { reviews, account, myReview }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - UŽIVATELKÉ RECENZE`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data);
        },

        methods: {
            addReviewUpdate(newValue) {
                this.newReview = newValue;
            }
        }
    }
</script>