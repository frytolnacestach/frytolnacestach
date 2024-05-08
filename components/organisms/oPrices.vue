<template>
    <div class="o-prices">
        <div class="o-prices__outer">
            <div class="o-prices__inner">
                <div class="o-prices__items">
                    <div class="o-prices__item" v-for="item in items" v-bind:key="item.name">
                        <div class="o-prices__content">
                            <h4 class="o-prices__name">{{ item.name }}</h4>
                            <span class="o-prices__perex"> {{ item.perex }}</span>
                            <span class="o-prices__value">{{ item.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoPricesComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    })
</script>