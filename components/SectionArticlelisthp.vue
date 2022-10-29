<template>
   <div class="o-article-list-hp">
        <div class="o-article-list-hp__outer">
            <div class="o-article-list-hp__items">
                <div v-for="post in posts" :key="post.id" class="o-article-list-hp__item">
                    <div class="o-article-list-hp__item-inner">
                        <div class="o-article-list-hp__image">
                            <div class="o-article-list-hp__image-file" v-bind:style="{ 'background-image': 'url(' + post.imageList + ')'}">
                                <NuxtLink class="o-article-list-hp__image-link" :to="'/clanky/' + post.idname"></NuxtLink>
                            </div>
                        </div>
                        <div class="o-article-list-hp__text">
                            <h3 class="o-article-list-hp__title">
                                <NuxtLink class="o-article-list-hp__title-link" :to="'/clanky/' + post.idname">{{ post.name }}</NuxtLink>
                            </h3>
                            <p class="o-article-list-hp__perex">
                                <NuxtLink class="o-article-list-hp__perex-link" :to="'/clanky/' + post.idname">{{ post.perex }}</NuxtLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'SectionArticlelisthp',
        data() {
            return {
                posts: []
            }
        },
        methods() {

        }, 
        created() {
            axios.get('https://api.npoint.io/043202fb7002160460f2')
            .then(response => {
                this.posts = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
</script>