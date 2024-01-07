<template>
    <section class="t-section my-2 -p0 hidden-print">
        <div class="t-section__inner">

            <!-- SECTION - mHeadline -->
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="myReview.length === 0 && numberReviews !== 0 && account && account.length !== 0 && newReview === false && account[0].status === 3"/>
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." :perex="`Ale nejdříve se musíš <a href='/ucet/prihlaseni'>přihlásit</a> ke svému účtu.`" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && account && account.length === 0 && newReview === false" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ale nejdříve si musíš aktivovat účet." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && account && account.length !== 0 && newReview === false && account[0].status === 2" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ještě nikdo tu nenapsal recenzi, buď první." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && account && account.length !== 0 && newReview === false && account[0].status === 3" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." :perex="`Ale nejdříve se musíš <a href='/ucet/prihlaseni'>přihlásit</a> ke svému účtu.`" styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="numberReviews === 0 && account && account.length === 0 && newReview === false" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ještě nikdo tu nenapsal recenzi, buď první ale nejdříve si aktivuj svůj účet" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && account && account.length !== 0 && newReview === false && account[0].status === 2" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - mHeadline -->
            <mHeadline title="Recenze" perex="Super, napsal jsi recenzi jako první! Děkujeme."  styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="reviews.length === 0 && newReview === true" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Form Review -->
            <oFormReviewItem :account="account" :IDplace="IDplace" :type="type" :newReview="newReview" v-if="myReview.length === 0 && account && account.length !== 0 && account[0].status === 3" @update="addReviewUpdate" />
            <!-- SECTION - Form Review END -->

            <!-- SECTION - mHeadline -->
            <mHeadline title="Recenze" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="reviews.length !== 0" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Review -->
            <oReviewItemList :IDplace="IDplace" :reviews="reviews" :type="type" :account="account" v-if="account && reviews.length !== 0" />
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

        async mounted() {
            let success = false
            let data = null

            while (!success) {
                try {
                    // Reviews
                    const reviews = await this.$axios.$get(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&type=${this.type}`)
                    this.numberReviews = reviews.length

                    data = { reviews }

                    success = true
                } catch (error) {
                    console.log(`API ERROR - MOJE UŽIVATELKÁ RECENZE`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        },

        methods: {
            async fetchMyReview() {
                try {
                    // My reviews
                    let myReview = []

                    if (process.client) {
                        myReview = await this.$axios.$get(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&id_user=${this.account[0].id}&type=${this.type}`)
                    }

                    this.myReview = myReview
                } catch (error) {
                    console.log(`API ERROR - UŽIVATELKÉ RECENZE`)
                    console.error(error)
                }
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

    }
</script>