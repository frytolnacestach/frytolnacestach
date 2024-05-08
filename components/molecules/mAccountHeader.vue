<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonmAccountHeader styleThema=" -skeleton-dark-blue" v-if="!account || account.length === 0" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="account && account.length !== 0">
            <div class="m-account-header">
                <div class="m-account-header__outer">
                    <div class="m-account-header__inner">
                        <div class="m-account-header__image">
                            <div class="m-account-header__image-file"></div>
                        </div>
                        <div class="m-account-header__text">
                            <span class="m-account-header__nickname">{{ account[0].nickname }}</span>
                            <span class="m-account-header__email">{{ account[0].email }}</span>
                        </div>
                        <div class="m-account-header__nav" :class="{'-open': parentVariable}" @click="updateParentVariable()">
                            <span class="m-account-header__nav-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- SHOW - client END -->

    </section>
</template>

<script>
    import skeletonmAccountHeader from '~/components/skeleton/skeletonmAccountHeader.vue'

    export default defineComponent({
        name: 'MoleculesmAccountHeaderComponent',

        components: {
            skeletonmAccountHeader
        },

        props: {
            account: {
                type: Array,
                required: true
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
    })
</script>