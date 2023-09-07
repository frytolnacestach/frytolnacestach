<template>
    <div class="skeleton-o-cover-item">
        <div class="skeleton-o-cover-item__outer">
            <div class="skeleton-o-cover-item__items">
                <div v-for="index in 20" :key="index" class="skeleton-o-cover-item__item">
                    <div class="skeleton-o-cover-item__content">
                        <div :class="`skeleton-o-cover-item__image loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoCoverItemComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>