<template>
    <div class="o-update-information">
        <div class="o-update-information__outer">
            <div class="o-update-information__inner">
                <div class="o-update-information__text">
                    <p class="o-update-information__perex">
                        Informace jsou platné k {{ formatDate(date) }}. Jestli tu najdete informaci, která již není platná budu rád za nahlašení na email <a href="mailto:frytolnacestach@gmail.com" target="_blank">frytolnacestach@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoUpdateInformationComponent',

        props: {
            date: {
                type: String,
                required: true
            }
        },

        methods:{
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        }
    }
</script>