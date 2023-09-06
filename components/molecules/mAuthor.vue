<template>
    <i class="m-author">zdroj. <nuxtLink class="m-author__link" :to="`/cestovatel/${user[0].slug}`" v-if="user[0]">{{ user[0].nickname }}</nuxtLink></i>
</template>

<script>
    export default {
        name: 'OrganismsmAutorComponent',

        props: {
            author: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                user: []
            }
        },

        async mounted() {
            let success = false
            let data = null

            while (!success) {
                try {
                    const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-id/${this.author}`)

                    data = { user }

                    success = true
                } catch (error) {
                    console.log(`API ERROR - M AUTHOR`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        }
    }
</script>