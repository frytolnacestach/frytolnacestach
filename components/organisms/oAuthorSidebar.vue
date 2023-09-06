<template>
    <div class="o-author-sidebar">
        <div class="o-author-sidebar__outer">
            <div class="o-author-sidebar__inner">
                <h4 class="o-author-sidebar__headline">Autor</h4> 
                <NuxtLink :to="`/cestovatel/${user[0].slug}`" class="o-author-sidebar__name" v-if="user[0]">{{ user[0].nickname }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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

        async mounted() {
            let success = false
            let data = null

            while (!success) {
                try {
                    const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-id/${this.author}`)

                    data = { user }

                    success = true
                } catch (error) {
                    console.log(`API ERROR - O AUTHOR SIDEBAR`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            Object.assign(this, data)
        }
    }
</script>