<template>
    <div class="o-recipe">
        <div class="o-recipe__outer">
            <div class="o-recipe__inner">
                <div class="o-recipe__items">
                    <div class="o-recipe__item" v-for="item in items" :key="item.step">
                        <span class="o-recipe__step">{{ item.step }}</span>
                        <span class="o-recipe__name">{{ item.name }}</span>
                        <span class="o-recipe__text">{{ item.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoRecipeComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>