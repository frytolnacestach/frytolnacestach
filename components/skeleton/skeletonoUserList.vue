<template>
    <div class="skeleton-o-user-list">
        <div class="skeleton-o-user-list__outer">
            <div class="skeleton-o-user-list__items">
                <div v-for="index in 20" :key="index" class="skeleton-o-user-list__item">
                    <div class="skeleton-o-user-list__content-outer">
                        <div class="skeleton-o-user-list__content-inner">
                            <div :class="`skeleton-o-user-list__image loading-image`+ styleThema"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoUserListComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>