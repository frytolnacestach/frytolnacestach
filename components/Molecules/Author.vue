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
    export default defineComponent({
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

        methods: {
            async fetchData() {
                if (this.author !== null) {
                    // API - GET
                    const responseUser = await fetch(`https://api.frytolnacestach.cz/api/user-id/${this.author}`)
                    this.user = await responseUser.json() || []
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>