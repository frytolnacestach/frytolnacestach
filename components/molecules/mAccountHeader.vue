<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonmAccountHeader styleThema=" -skeleton-dark-blue" v-if="nickname === null" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="nickname !== null">
            <div class="m-account-header">
                <div class="m-account-header__outer">
                    <div class="m-account-header__inner">
                        <div class="m-account-header__image">
                            <div class="m-account-header__image-file"></div>
                        </div>
                        <div class="m-account-header__text">
                            <span class="m-account-header__nickname">{{ nickname }}</span>
                            <span class="m-account-header__email">{{ email }}</span>
                        </div>
                        <div class="m-account-header__nav" :class="{'-open': parentVariable}" @click="updateParentVariable()">
                            <span class="m-account-header__nav-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonmAccountHeader from '~/components/skeleton/skeletonmAccountHeader.vue'

    export default {
        name: 'MoleculesmAccountHeaderComponent',

        components: {
            skeletonmAccountHeader
        },

        data() {
            return {
                nickname: null,
                email: null,
                parentVariable: false
            }
        },

        methods: {
            updateParentVariable() {
                this.parentVariable = !this.parentVariable
                const newValue = this.parentVariable
                this.$emit('update', newValue)
            }
        },

        mounted() {
            if (process.client) {
                const localStorageNickname = localStorage.getItem('userNickname')
                const localStorageEmail = localStorage.getItem('userEmail')
                this.nickname = localStorageNickname
                this.email = localStorageEmail
            }
        }
    }
</script>