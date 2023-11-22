<template>
    <section class="t-section my-2 -p0 hidden-print">
        <div class="t-section__inner">
            <!-- SECTION - mHeadline -->
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="myReview.length === 0 && numberReviews !== 0 && user && user.length !== 0 && newReview === false && user[0].status === 3"/>
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ale nejdříve se musíš přihlásit ke svému účtu." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && user && user.length === 0 && newReview === false && user[0].status === 3" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ale nejdříve si musíš aktivovat účet." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews !== 0 && user && user.length !== 0 && newReview === false && user[0].status === 2" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ještě nikdo tu nenapsal recenzi, buď první." styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && user && user.length !== 0 && newReview === false && user[0].status === 3" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ale nejdříve se musíš přihlásit ke svému účtu." styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="numberReviews === 0 && user && user.length === 0 && newReview === false" />
            <mHeadline title="Byl jsi tu? Tak napiš recenzi." perex="Ještě nikdo tu nenapsal recenzi, buď první ale nejdříve si aktivuj svůj účet" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="numberReviews === 0 && user && user.length !== 0 && newReview === false && user[0].status === 2" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - mHeadline -->
            <mHeadline title="Recenze" perex="Super, napsal jsi recenzi jako první! Děkujeme."  styleAlign=" -p-left" styleThema=" -world" styleGap=" mb-2" v-if="reviews.length === 0 && newReview === true" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Form Review -->
            <oFormReviewItem :IDplace="IDplace" :type="type" :newReview="newReview" v-if="myReview.length === 0 && user && user.length !== 0 && user[0].status === 3" @update="addReviewUpdate" />
            <!-- SECTION - Form Review END -->

            <!-- SECTION - mHeadline -->
            <mHeadline title="Recenze" styleAlign=" -p-left" styleThema=" -world" styleGap="" v-if="reviews.length !== 0" />
            <!-- SECTION - mHeadline END -->

            <!-- SECTION - Review -->
            <oReviewItemList :IDplace="IDplace" :reviews="reviews" :type="type" :account="user" v-if="user && reviews.length !== 0" />
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
            user: {
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

                    let myReview = []

                    if (process.client) {
                        if (this.user && this.user.length !== 0) {
                            // myReviews
                            myReview = await this.$axios.$get(`https://api.frytolnacestach.cz/api/reviews-id-place?id_place=${this.IDplace}&id_user=${this.user[0].id}&type=${this.type}`)
                        }
                    }

                    
                    this.numberReviews = reviews.length


                    data = { reviews, myReview }

                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - UŽIVATELKÉ RECENZE`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        },

        methods: {
            addReviewUpdate(newValue) {
                this.newReview = newValue
            }
        }
    }
</script>