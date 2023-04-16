<template>
    <div class="o-transport">
        <div class="o-transport__outer">
            <div class="o-transport__inner">
                <h2 class="o-transport__title">{{ title }}</h2>
                <div class="o-transport__items">
                    <div class="o-transport__item" v-for="item in items" v-bind:key="item.name">
                        <div class="o-transport__icon">
                            <div :class="'o-transport__icon-file -' + item.icon"></div>
                        </div>
                        <div class="o-transport__text">
                            <h4 class="o-transport__name">{{ item.name }}</h4>
                            <p class="o-transport__text">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>