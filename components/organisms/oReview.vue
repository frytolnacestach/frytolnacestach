<template>
    <div class="o-review">
        <div class="o-review__outer">
            <div class="o-review__inner">
                <h2 class="o-review__title">Hodnocení</h2>
                <p class="o-review__perex">
                    {{ reviewText }}
                </p>
                <span class="o-review__number">{{ reviewValue }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoReviewComponent',

        props: {
            reviewText: {
                type: String,
                required: true
            },
            reviewValue: {
                type: String,
                required: true
            }
        }
    }
</script>