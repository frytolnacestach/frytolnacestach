<template>
    <div class="o-ingredients">
        <div class="o-ingredients__outer">
            <div class="o-ingredients__inner">
                <div class="o-ingredients__items">
                    <div class="o-ingredients__item" v-for="item in items" :key="item.name">
                        <span class="o-ingredients__amount">
                            <span class="o-ingredients__value">{{ item.value }}</span>
                            <span class="o-ingredients__unit">{{ item.unit }}</span>
                        </span>
                        <span class="o-ingredients__name">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoIngredientsComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>