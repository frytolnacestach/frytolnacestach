<template>
    <div class="m-headline my-4 text-align-center">
        <h2 class="m-headline__title" v-if="headline == 1">Jak mě podpořit</h2>
        <p class="m-headline__perex">{{ base[0].donate }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SectionDonate',
        data() {
            return {
                base: []
            }
        },
        async fetch() {
            this.base = await fetch("https://frytolnacestach-api.vercel.app/api/base").then((res) => res.json());
        }
    }
</script>