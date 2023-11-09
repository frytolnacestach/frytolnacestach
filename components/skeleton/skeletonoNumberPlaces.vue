<template>
    <div class="skeleton-o-number-places">
        <div class="skeleton-o-number-places__outer">
            <div class="skeleton-o-number-places__inner">
                <div class="skeleton-o-number-places__items">
                    <div v-for="index in 5" :key="index" class="skeleton-o-number-places__item">
                        <div :class="`skeleton-o-number-places__content loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoNumberPlacesComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>