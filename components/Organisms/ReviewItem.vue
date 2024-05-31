<template>
    <section class="t-section my-2 -p0 hidden-print">
        <div class="t-section__inner">

            <!-- SECTION - mHeadline -->
            <MoleculesHeadline title="Byl jsi tu? Tak napiš recenzi." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="myReview.length === 0 && numberReviews !== 0 && account && account.length !== 0 && newReview === false && account[0].status === 3"/>
            <MoleculesHeadline title="Byl jsi tu? Tak napiš recenzi." :perex="`Ale nejdříve se musíš <a href='/ucet/prihlaseni'>přihlásit</a> ke svému účtu.`" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && account && account.length === 0 && newReview === false" />
            <MoleculesHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ale nejdříve si musíš aktivovat účet." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && account && account.length !== 0 && newReview === false && account[0].status === 2" />
            <MoleculesHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ještě nikdo tu nenapsal recenzi, buď první." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && account && account.length !== 0 && newReview === false && account[0].status === 3" />
            <MoleculesHeadline title="Byl jsi tu? Tak napiš recenzi." :perex="`Ale nejdříve se musíš <a href='/ucet/prihlaseni'>přihlásit</a> ke svému účtu.`" styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="numberReviews === 0 && account && account.length === 0 && newReview === false" />
            <MoleculesHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ještě nikdo tu nenapsal recenzi, buď první ale nejdříve si aktivuj svůj účet" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && account && account.length !== 0 && newReview === false && account[0].status === 2" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - mHeadline -->
            <MoleculesHeadline title="Recenze" perex="Super, napsal jsi recenzi jako první! Děkujeme."  styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="reviews.length === 0 && newReview === true" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Form Review -->
            <OrganismsFormReviewItem :account="account" :IDplace="IDplace" :type="type" :newReview="newReview" v-if="myReview.length === 0 && account && account.length !== 0 && account[0].status === 3" @update="addReviewUpdate" />
            <!-- SECTION - Form Review END -->

            <!-- SECTION - mHeadline -->
            <MoleculesHeadline title="Recenze" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="reviews.length !== 0" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Review -->
            <OrganismsReviewItemList :IDplace="IDplace" :reviews="reviews" :type="type" :account="account" v-if="account && reviews.length !== 0" />
            <!-- SECTION - Review END -->

        </div>
    </section>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoReviewItemComponent',

        props: {
            IDplace: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            account: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                email: null,
                passwordHash: null,
                reviews: [],
                myReview: [],
                numberReviews: 0,
                newReview: false
            }
        },

        mounted() {
            this.fetchData()
        },

        methods: {
            async fetchData() {
                if (this.authorID) {
                    // API - GET - Reviews
                    const responseReviews =await fetch(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&type=${this.type}`)

                    // DATA
                    this.reviews = await responseReviews.json()
                    this.numberReviews = reviews.length
                }
            },

            async fetchMyReview() {
                let myReview = []

                // API - GET - Reviews
                if (process.client) {
                    responseMyReview = await fetch(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&id_user=${this.account[0].id}&type=${this.type}`)
                    myReview = await responseMyReview.json()
                }

                // FINAL
                this.myReview = myReview
            },

            addReviewUpdate(newValue) {
                this.newReview = newValue
            }
        },

        watch: {
            account: {
                deep: true,
                immediate: true,
                handler(newValue, oldValue) {
                    if (newValue && newValue.length !== 0 && this.numberReviews !== 0) {
                        this.fetchMyReview()
                    }
                }
            }
        }

    })
</script>