<template>
    <div class="o-wiki">
        <div class="o-wiki__outer">
            <div class="o-wiki__inner">
                <h2 class="o-wiki__title">Wikipedia</h2>
                <div class="o-wiki__perex text-align-center-mobile text-align-left-desktop">
                    <div class="o-wysiwyg" v-html="wysiwyg"></div>
                    <div class="o-wiki__author">
                        <i class="m-author">zdroj. <a class="m-author__link" :href="source" target="_blank">Wikipedia</a></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            wysiwyg: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: true
            }
        }
    }
</script>