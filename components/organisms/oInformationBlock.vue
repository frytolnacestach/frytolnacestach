<template>
    <div :class="'o-information-block' + (styleThema ? styleThema : '')">
        <div class="o-information-block__outer">
            <div class="o-information-block__inner">

                <h2 class="o-information-block__title" :class="{ '-m0': subtitle }" v-if="title">{{ title }}</h2>

                <span class="o-information-block__title-info" v-if="subtitle">{{ subtitle}}</span>

                <div class="o-information-block__perex">

                    <div class="o-information-block__wysiwyg" v-html="perexWysiwyg" v-if="perexWysiwyg"></div>

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
                        <i class="m-author">zdroj. <a class="m-author__link" :href="authorLink" :target="authorTarget" v-if="authorLink">{{ authorName }}</a><span class="m-author__span" v-else>{{ authorName }}</span></i>
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