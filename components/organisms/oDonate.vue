<template>
    <div class="o-donate">
        <div class="m-headline my-4 text-align-center">
            <h2 class="m-headline__title" v-if="showHeadline === true">Jak mě podpořit</h2>
            <p class="m-headline__perex">{{ base[0].donate }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'oDonate',
        
        props: {
            showHeadline: {
                type: Boolean,
                required: false
            },
        },

        data() {
            return {
                base: this.base
            }
        },

        async fetch() {
            this.base = await fetch("https://frytolnacestach-api.vercel.app/api/base").then((res) => res.json());
        }
    }
</script>