<template>
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
</template>

<script>
    export default {
        name: 'MoleculesmAccountHeaderComponent',

        data() {
            return {
                nickname: this.nickname,
                email: this.email
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