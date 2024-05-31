<template>
    <div class="o-hot-info">
        <div class="o-hot-info__outer">
            <div class="o-hot-info__inner">
                <div class="o-hot-info__items">
                    <div class="o-hot-info__item" v-for="location in locations" v-bind:key="location.type">
                        <span class="o-hot-info__title">{{ location.type }}</span>
                        <span class="o-hot-info__value">{{ location.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoHotInfoComponent',

        props: {
            locations: {
                type: Array,
                required: true
            }
        }
    })
</script>