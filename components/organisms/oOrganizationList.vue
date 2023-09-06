<template>
    <section class="t-section -px-world mb-2">
        <div class="t-section__inner">
            <div :class="'o-organization-list'">
                <div class="o-organization-list__outer">
                    <div class="o-organization-list__inner">
                        <div class="o-organization-list__list">
                            <ul class="o-organization-list__list-ul">
                                <li class="o-organization-list__list-li" v-for="item in items" v-bind:key="item.name">
                                    <div class="o-organization-list__list-content">
                                        <div class="o-organization-list__list-text">
                                            <h3 class="o-organization-list__list-h3">{{ item.name }}</h3> 
                                            <p class="o-organization-list__list-p" v-if="item.description">{{ item.description }}</p>
                                            <a class="o-organization-list__list-a" :href="item.url" :alt="item.name" v-if="item.url">Odkaz</a>
                                        </div>
                                        <span class="o-organization-list__list-info">Vstup: {{ formatDate(item.date_update) }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OrganismsoOrganizationListComponent',

        props: {
            items: {
                type: Array,
                required: true
            },
            headline: {
                type: String,
                required: true
            }
        },

        methods:{
            formatDate(date) {
                const [year, month, day] = date.split('-')
                const formattedDate = new Date(`${year}-${month}-${day}`)
                const options = { day: 'numeric', month: 'long', year: 'numeric' }
                return formattedDate.toLocaleDateString('cs', options)
            }
        }
    }
</script>