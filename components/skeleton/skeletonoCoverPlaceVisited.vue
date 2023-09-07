<template>
    <div class="skeleton-o-cover-place-visited">
        <div class="skeleton-o-cover-place-visited__outer">
            <div class="o-cover-place-visited__items">
                <div v-for="index in 5" :key="index" class="skeleton-o-cover-place-visited__item">
                    <div class="skeleton-o-cover-place-visited__content">
                        <div :class="`skeleton-o-cover-place-visited__image loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoCoverPlaceVisitedComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>