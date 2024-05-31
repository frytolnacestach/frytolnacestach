<template>
    <div class="skeleton-o-cover-place">
        <div class="skeleton-o-cover-place__outer">
            <div class="skeleton-o-cover-place__items">
                <div v-for="index in 20" :key="index" class="skeleton-o-cover-place__item">
                    <div class="skeleton-o-cover-place__content">
                        <div :class="`skeleton-o-cover-place__image loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoCoverPlaceComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>