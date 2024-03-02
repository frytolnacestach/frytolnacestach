<template>
    <div :class="'o-information-block' + (styleThema ? styleThema : '')">
        <div class="o-information-block__outer">
            <div class="o-information-block__inner">

                <h2 class="o-information-block__title" :class="{ '-m0': subtitle }" v-if="title">{{ title }}</h2>

                <span class="o-information-block__title-info" v-if="subtitle">{{ subtitle}}</span>

                <div class="o-information-block__perex">

                    <div :class="'o-information-block__wysiwyg o-wysiwyg' + (styleThema ? styleThema : '')" v-html="perexWysiwyg" v-if="perexWysiwyg"></div>

                    <div class="o-information-block__list" v-if="perexList">
                        <ul class="o-information-block__list-ul">
                            <li class="o-information-block__list-li" v-for="item in perexList" v-bind:key="item.name">
                                <h3 class="o-information-block__list-h3">{{ item.name }}</h3> 
                                <span class="o-information-block__list-span">{{ item.value }} {{ perexListItemValueSubfix }}</span>
                                <i class="o-information-block__list-info">({{ formatDate(item.date_update) }})</i>
                            </li>
                        </ul>
                    </div>

                    <i class="o-information-block__info" v-if="perexInfo">{{ perexInfo }}</i>

                    <div class="o-information-block__author" v-if="authorName">
                        <i class="m-author">
                            <a class="m-author__link" :href="authorLink" :target="authorTarget" v-if="authorLink">{{ authorName }}</a>
                            <span class="m-author__span" v-else>{{ authorName }}</span>
                        </i>
                    </div>

                    <div class="o-information-block__author" v-if="authorID">
                        <i class="m-author">
                            <nuxtLink class="m-author__link" :to="`/cestovatel/${user[0].slug}`" v-if="user[0]">
                                {{ user[0].surname && (user[0].setting_author_name === 1 || user[0].setting_author_name === 2) ? (user[0].surname + ' ') : '' }}
                                {{ user[0].lastname && (user[0].setting_author_name === 1 || user[0].setting_author_name === 2) ? (user[0].lastname + ' ') : '' }}
                                {{ user[0].nickname && user[0].setting_author_name === 1 ? ('(' + user[0].nickname + ')') : '' }}
                                {{ user[0].nickname && user[0].setting_author_name === 3 ? user[0].nickname : '' }}
                            </nuxtLink>
                        </i>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoInformationBlockComponent',

        props: {
            styleThema: {
                type: String,
                required: false
            },
            title: {
                type: String,
                required: false
            },
            subtitle: {
                type: String,
                required: false
            },
            perexWysiwyg: {
                type: String,
                required: false
            },
            perexList: {
                type: Array,
                required: false
            },
            perexListItemValueSubfix: {
                type: String,
                required: false
            },
            perexInfo: {
                type: String,
                required: false
            },
            authorName: {
                type: String,
                required: false
            },
            authorLink: {
                type: String,
                required: false
            },
            authorTarget: {
                type: String,
                required: false
            },
            authorID: {
                type: Number,
                required: false
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

            if (this.authorID) {
                while (!success) {
                    try {
                        const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-id/${this.authorID}`)

                        data = { user }

                        success = true
                    } catch (error) {
                        console.log(`API ERROR - AUTHOR`)
                        console.error(error)

                        await new Promise(resolve => setTimeout(resolve, 1000))
                    }
                }

                Object.assign(this, data)
        }
        },

        methods:{
            formatDate(date) {
                const [month, year] = date.split('-')
                const formattedDate = new Date(`${year}-${month}-01`)
                const options = { month: 'long', year: 'numeric' }
                return formattedDate.toLocaleDateString('cs', options)
            }
        }
    }
</script>