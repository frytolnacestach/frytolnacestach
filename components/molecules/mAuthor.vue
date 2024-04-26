<template>
    <i class="m-author">
        <nuxtLink class="m-author__link" :to="`/cestovatel/${user[0].slug}`" v-if="user[0]">
            {{ user[0].surname && (user[0].setting_author_name === 1 || user[0].setting_author_name === 2) ? (user[0].surname + ' ') : '' }}
            {{ user[0].lastname && (user[0].setting_author_name === 1 || user[0].setting_author_name === 2) ? (user[0].lastname + ' ') : '' }}
            {{ user[0].nickname && user[0].setting_author_name === 1 ? ('(' + user[0].nickname + ')') : '' }}
            {{ user[0].nickname && user[0].setting_author_name === 3 ? user[0].nickname : '' }}
        </nuxtLink>
    </i>
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
                    // API - GET
                    const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-id/${this.author}`)
                    
                    // DATA
                    data = { user }

                    // FINAL
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