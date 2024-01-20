<template>
    <div class="o-sidebar-information">
        <div class="o-sidebar-information__outer">
            <div class="o-sidebar-information__inner">
                <div class="o-sidebar-information__items">
                    <div class="o-sidebar-information__item" v-for="item in items" :key="item.type">
                        <h4 class="o-sidebar-information__type">
                            {{ item.type }}
                        </h4>
                        <p class="o-sidebar-information__value" v-html="item.value"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoSidebarInformationComponent',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>