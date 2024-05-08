<template>
    <div class="skeleton-o-visited-button">
        <div class="skeleton-o-visited-button__outer">
            <div class="skeleton-o-visited-button__inner">
                <div class="skeleton-o-visited-button__items">
                    <div v-for="index in 2" :key="index" class="skeleton-o-visited-button__item">
                        <span :class="`skeleton-o-visited-button__button loading-image`+ styleThema"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoVisitedButtonComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>