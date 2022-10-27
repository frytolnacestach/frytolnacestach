<template>
   <div class="o-article-list">
        <div class="o-article-list__outer">
            <div class="o-article-list__items">
                <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                    <div class="o-article-list__item-inner">
                        <div class="o-article-list__image">
                            <div class="o-article-list__image-file" v-bind:style="{ 'background-image': 'url(' + post.imageList + ')'}">
                                <router-link class="o-article-list__image-link" :to="'/clanky/' + post.idname"></router-link>
                            </div>
                        </div>
                        <div class="o-article-list__text">
                            <h3 class="o-article-list__title">
                                <router-link class="o-article-list__title-link" :to="'/clanky/' + post.idname">{{ post.name }}</router-link>
                            </h3>
                            <p class="o-article-list__perex">
                                <router-link class="o-article-list__perex-link" :to="'/clanky/' + post.idname">{{ post.perex }}</router-link>
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
        name: 'SectionArticlelist',
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