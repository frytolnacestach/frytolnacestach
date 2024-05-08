<template>
    <div class="skeleton-o-top-place">
        <div class="skeleton-o-top-place__outer">
            <div class="skeleton-o-top-place__items">
                <div v-for="index in 20" :key="index" class="skeleton-o-top-place__item">
                    <div class="skeleton-o-top-place__content">
                        <div :class="`skeleton-o-top-place__image loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoTopPlaceComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>