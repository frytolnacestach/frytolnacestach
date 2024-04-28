<template>
    <div class="o-donate">
        <div class="o-donate__outer">
            <div class="o-donate__inner">
                <h2 class="o-donate__title" v-if="showHeadline === true">Jak mě podpořit</h2>
                <p class="o-donate__perex">{{ base[0].donate }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoDonateComponent',
        
        props: {
            showHeadline: {
                type: Boolean,
                required: false
            }
        },

        data() {
            return {
                base: this.base
            }
        },

        async fetch() {
            // API - GET - Base
            this.base = await fetch("https://api.frytolnacestach.cz/api/base").then((res) => res.json())
        }
    }
</script>