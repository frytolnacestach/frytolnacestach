<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonmUserHeader styleThema=" -skeleton-dark-blue" v-if="user === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="user !== null && skeleton !== true">
            <div class="m-user-header">
                <div class="m-user-header__outer">
                    <div class="m-user-header__inner">
                        <div class="m-user-header__image">
                            <div class="m-user-header__image-file"></div>
                        </div>
                        <div class="m-user-header__text">
                            <span class="m-user-header__nickname">{{ user[0].nickname }}</span>
                        </div>
                        <div class="m-user-header__nav" :class="{'-open': parentVariable}" @click="updateParentVariable()">
                            <span class="m-user-header__nav-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonmUserHeader from '~/components/skeleton/skeletonmUserHeader.vue'

    export default {
        name: 'MoleculesmUserHeaderComponent',

        components: {
            skeletonmUserHeader
        },

        props: {
            user: {
                type: Array,
                required: true
            },
            skeleton: {
                type: Boolean,
                required: false
            }
        },

        data() {
            return {
                parentVariable: false
            }
        },

        methods: {
            updateParentVariable() {
                this.parentVariable = !this.parentVariable
                const newValue = this.parentVariable
                this.$emit('update', newValue)
            }
        }
    }
</script>
