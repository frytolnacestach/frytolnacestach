<template>
    <div class="o-whoiam">
        <div class="o-whoiam__outer">
            <div class="o-whoiam__inner">
                <div class="o-whoiam__image mt-2">
                    <div class="o-whoiam__image-ring">
                        <div class="o-whoiam__image-file"></div>
                    </div>
                    <div class="o-whoiam__text mt-2">
                        <div class="o-whoiam__perex">
                            {{ base[0].iam }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SectionWhoiam',
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