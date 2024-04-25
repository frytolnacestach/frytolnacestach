<template>
    <section class="t-section -px-world my-2" v-if="items && items !== null">
        <div class="t-section__inner">
            <div class="o-sidebar-parking">
                <div class="o-sidebar-parking__outer">
                    <div class="o-sidebar-parking__inner">
                        <h3 class="o-sidebar-parking__header">Parkování</h3>
                        <div class="o-sidebar-parking__items">
                            <div class="o-sidebar-parking__item" v-for="item in items" :key="item.name">
                                <h4 class="o-sidebar-parking__name">
                                    {{ item.name }}
                                </h4>
                                <p class="o-sidebar-parking__description" v-html="item.description"></p>
                                <span class="o-sidebar-parking__content">
                                    <span class="o-sidebar-parking__content-time">
                                        <strong>Časy:</strong>
                                        <br>
                                        <span v-html="item.pay_time"></span>
                                    </span>
                                    <span class="o-sidebar-parking__content-price">
                                        <strong>Cena:</strong>
                                        <br>
                                        <span v-html="item.price"></span>
                                    </span>
                                </span>
                                <div class="o-sidebar-parking__link">
                                    <a class="o-sidebar-parking__link-item" :href="item.url" :alt="item.name">Odkaz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OrganismsoSidebarLinkComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>