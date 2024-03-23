<template>
    <div class="o-youtube">
        <div class="o-youtube__outer">
            <div class="o-youtube__inner">
                <div class="o-youtube__video">
                    <iframe class="o-youtube__video-iframe" :src="'https://www.youtube.com/embed/' + getSlugURL(url)" frameborder="0" allowfullscreen title="video"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoYoutubeComponent',

        props: {
            url: {
                type: String,
                required: true
            }
        },

        methods:{
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "")
                return url.replace(" ", "")
            }
        }
    }
</script>