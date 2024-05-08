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
                                        <span class="o-organization-list__list-info">Vstup: {{ item.date_add_to_organization }}</span>
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
    export default defineComponent({
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
        }
    })
</script>