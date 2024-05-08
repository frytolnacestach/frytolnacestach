<template>
    <div class="o-author-sidebar">
        <div class="o-author-sidebar__outer">
            <div class="o-author-sidebar__inner">
                <h2 class="o-author-sidebar__headline">Autor</h2> 
                <NuxtLink :to="`/cestovatel/${user[0].slug}`" class="o-author-sidebar__name" v-if="user[0]">
                    {{ user[0].surname && (user[0].setting_author_name === 1 || user[0].setting_author_name === 2) ? (user[0].surname + ' ') : '' }}
                    {{ user[0].lastname && (user[0].setting_author_name === 1 || user[0].setting_author_name === 2) ? (user[0].lastname + ' ') : '' }}
                    <br v-if="user[0].setting_author_name === 1">
                    {{ user[0].nickname && user[0].setting_author_name === 1 ? ('(' + user[0].nickname + ')') : '' }}
                    {{ user[0].nickname && user[0].setting_author_name === 3 ? user[0].nickname : '' }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoAutorSidebarComponent',

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