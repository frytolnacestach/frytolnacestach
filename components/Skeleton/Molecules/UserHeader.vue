<template>
    <div class="skeleton-m-user-header">
        <div class="skeleton-m-user-header__outer">
            <div class="skeleton-m-user-header__inner">
                <div class="skeleton-m-user-header__image">
                    <div :class="`skeleton-m-user-header__image-file loading-image`+ styleThema"></div>
                </div>
                <div class="skeleton-m-user-header__text">
                    <span :class="`skeleton-m-user-header__nickname loading-image`+ styleThema"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonmUserHeaderComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>