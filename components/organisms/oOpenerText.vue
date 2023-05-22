<template>
    <div class="o-opener-text">
        <p class="o-opener-text__perex">
            {{ text }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoOpenerTextComponent',

        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>