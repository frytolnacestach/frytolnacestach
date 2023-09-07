<template>
    <div class="skeleton-o-time-place">
        <div class="skeleton-o-time-place__outer">
            <div class="skeleton-o-time-place__items">
                <div v-for="index in 20" :key="index" class="skeleton-o-time-place__item">
                    <div class="skeleton-o-time-place__content">
                        <div :class="`skeleton-o-time-place__image loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoTimePlaceComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>