<template>
    <div class="skeleton-o-form-profile">
        <div class="skeleton-o-form-profile__outer">
            <div class="skeleton-o-form-profile__inner">
                <div class="skeleton-o-form-profile__form">
                    <div class="skeleton-o-form-profile__items">
                        <div class="skeleton-o-form-profile__item">
                            <div :class="`skeleton-a-input loading-image`+ styleThema"></div>
                        </div>
                        <div class="skeleton-o-form-profile__item">
                            <div :class="`skeleton-a-input loading-image`+ styleThema"></div>
                        </div>
                    </div>
                    <div class="skeleton-o-form-profile__buttons mt-1">
                        <div class="skeleton-o-form-profile__button">
                            <div class="skeleton-m-button -blue">
                                <div :class="`skeleton-m-button__input loading-image`+ styleThema"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoFormProfileComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>