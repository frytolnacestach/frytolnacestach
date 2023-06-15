<template>
    <div>
        <!-- skeleton -->
        <div v-if="nickname === null">
            <div class="skeleton-m-account-header">
                <div class="skeleton-m-account-header__outer">
                    <div class="skeleton-m-account-header__inner">
                        <div class="skeleton-m-account-header__image">
                            <div class="skeleton-m-account-header__image-file loading-image -skeleton-dark-blue">

                            </div>
                        </div>
                        <div class="skeleton-m-account-header__text">
                            <span class="skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"></span>
                            <span class="skeleton-m-account-header__email loading-image -skeleton-dark-blue"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- skeleton END -->

        <client-only v-if="nickname !== null">
            <div class="m-account-header">
                <div class="m-account-header__outer">
                    <div class="m-account-header__inner">
                        <div class="m-account-header__image">
                            <div class="m-account-header__image-file">

                            </div>
                        </div>
                        <div class="m-account-header__text">
                            <span class="m-account-header__nickname">{{ nickname }}</span>
                            <span class="m-account-header__email">{{ email }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmAccountHeaderComponent',

        data() {
            return {
                nickname: null,
                email: null
            }
        },

        methods: {

        },

        mounted() {
            if (process.client) {
                const localStorageNickname = localStorage.getItem('nickname');
                const localStorageEmail = localStorage.getItem('email');
                this.nickname = localStorageNickname;
                this.email = localStorageEmail;
            }
        },
    }
</script>