<template>
    <div class="o-wysiwyg" v-html="text"></div>
</template>

<script>
    export default {
        name: 'OrganismsoWysiwygComponent',
    
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>