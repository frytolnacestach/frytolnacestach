<template>
    <div class="m-user-header">
        <div class="m-user-header__outer">
            <div class="m-user-header__inner">
                <div class="m-user-header__image">
                    <div class="m-user-header__image-file">

                    </div>
                </div>
                <div class="m-user-header__text">
                    <span class="m-user-header__nickname">{{ user[0].nickname }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoleculesmUserHeaderComponent',

        props: {
            user: {
                type: Array,
                required: true
            }
        }
    }
</script>