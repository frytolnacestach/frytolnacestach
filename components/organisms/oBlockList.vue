<template>
    <div :class="'o-block-list'">
        <div class="o-block-list__outer">
            <div class="o-block-list__inner">
                <div class="o-block-list__list">
                    <ul class="o-block-list__list-ul">
                        <li class="o-block-list__list-li" v-for="item in items" v-bind:key="item.name">
                            <div class="o-block-list__list-content">
                                <div class="o-block-list__list-text">
                                    <h3 class="o-block-list__list-h3">{{ item.name }}</h3> 
                                    <span class="o-block-list__list-span">{{ item.value }} {{ perexListItemValueSubfix }}</span>
                                </div>
                                <i class="o-block-list__list-info">({{ formatDate(item.date_update) }})</i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoBlockListComponent',

        props: {
            items: {
                type: Array,
                required: false
            },
            perexListItemValueSubfix: {
                type: String,
                required: false
            },
        },

        methods:{
            formatDate(date) {
                const [month, year] = date.split('-');
                const formattedDate = new Date(`${year}-${month}-01`);
                const options = { month: 'long', year: 'numeric' };
                return formattedDate.toLocaleDateString('cs', options);
            }
        },
    }
</script>