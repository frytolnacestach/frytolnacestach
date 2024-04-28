<template>
    <div class="js_o-hot-info-hero o-hot-info-hero" :class="styleCol ? styleCol : ''">
        <div class="o-hot-info-hero__outer">
            <div class="o-hot-info-hero__inner">
                <div class="o-hot-info-hero__items">
                    <div class="o-hot-info-hero__item" :class="item.url ? '-link' : ''" v-for="item in data" :key="item.id" v-if="item.url !== '_ODKAZ_'">
                        <div class="o-hot-info-hero__container">
                            <div class="o-hot-info-hero__content">
                                <NuxtLink class="o-hot-info-hero__link" :to="item.url" v-if="item.url">
                                    <div class="o-hot-info-hero__text">
                                        <span class="o-hot-info-hero__title">{{ item.title }}</span>
                                        <span class="o-hot-info-hero__value" v-if="item.type === 'number'">
                                            {{ item.name !== 0 && item.name !== null ? item.name.toLocaleString('cs-CZ') : item.name === null ? 0 : item.name }}
                                            <span class="o-hot-info-hero__value-subfix">{{ item.subfix }}</span>
                                        </span>
                                        <span class="o-hot-info-hero__value" v-if="item.type === 'string'">
                                            {{ item.name }}
                                            <span class="o-hot-info-hero__value-subfix">{{ item.subfix }}</span>
                                        </span>
                                    </div>
                                </NuxtLink>
                                <div class="o-hot-info-hero__text" v-if="!item.url">
                                    <span class="o-hot-info-hero__title">{{ item.title }}</span>
                                    <span class="o-hot-info-hero__value" v-if="item.type === 'number'">
                                        {{ item.name !== 0 && item.name !== null ? item.name.toLocaleString('cs-CZ') : item.name === null ? 0 : item.name }}
                                        <span class="o-hot-info-hero__value-subfix">{{ item.subfix }}</span>
                                    </span>
                                    <span class="o-hot-info-hero__value" v-if="item.type === 'string'">
                                        {{ item.name }}
                                        <span class="o-hot-info-hero__value-subfix">{{ item.subfix }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoHotInfoHeroComponent',

        props: {
            data: {
                type: Array,
                required: true
            },
            styleCol: {
                type: String,
                required: true
            }
        }
    }
</script>