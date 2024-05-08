<template>
    <div class="skeleton-m-account-header">
        <div class="skeleton-m-account-header__outer">
            <div class="skeleton-m-account-header__inner">
                <div class="skeleton-m-account-header__image">
                    <div :class="`skeleton-m-account-header__image-file loading-image`+ styleThema"></div>
                </div>
                <div class="skeleton-m-account-header__text">
                    <span :class="`skeleton-m-account-header__nickname loading-image`+ styleThema"></span>
                    <span :class="`skeleton-m-account-header__email loading-image`+ styleThema"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonmAccountHeaderComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>