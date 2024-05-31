<template>
    <div class="o-donate" v-if="base && base.length > 0">
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

        methods: {
            async fetchData() {
                // API - GET - Base
                const responseBase = await fetch("https://api.frytolnacestach.cz/api/base")
                this.base = await responseBase.json()
            }
        },

        mounted() {
            // GET Data
            this.fetchData()
        }
    }
</script>