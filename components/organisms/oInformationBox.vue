<template>
    <div :class="'o-information-box'">
        <div class="o-information-box__outer">
            <div class="o-information-box__inner">
                <h2 class="o-information-box__title">{{ data[0].headline.title }}</h2>
                <p class="o-information-box__perex">{{ data[0].headline.perex }}</p>
                <div class="o-information-box__items">
                    <div class="o-information-box__item" v-for="item in data[0].times" v-bind:key="item.name">
                        <h4 class="o-information-box__name">{{ item.name }}<span class="o-information-box__name-sub"> {{ item.subname }}</span></h4>
                        <span class="o-information-box__value">{{ item.value }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoInformationBoxComponent',

        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>