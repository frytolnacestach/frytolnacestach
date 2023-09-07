<template>
    <div class="skeleton-o-user-urls">
        <div class="skeleton-o-user-urls__outer">
            <div class="skeleton-o-user-urls__inner">
                <div class="skeleton-o-user-urls__items">
                    <div v-for="index in 3" :key="index" :class="`skeleton-o-user-urls__item loading-image`+ styleThema"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoUserUrlsComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>