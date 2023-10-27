<template>
    <div class="skeleton-o-achievements">
        <div class="skeleton-o-achievements__outer">
            <div class="skeleton-o-achievements__inner">
                <div class="skeleton-o-achievements__items">
                    <div v-for="index in 9" :key="index" class="skeleton-o-achievements__item">
                        <div :class="`skeleton-o-achievements__content loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoAchievementsListComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>