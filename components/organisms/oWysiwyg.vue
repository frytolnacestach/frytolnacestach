<template>
    <div class="o-wysiwyg" v-html="text"></div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoWysiwygComponent',
    
        props: {
            text: {
                type: String,
                required: true
            }
        }
    })
</script>