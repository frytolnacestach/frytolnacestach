<template>
    <div class="o-alerts">
        <div class="o-alerts__outer">
            <div class="o-alerts__inner">
                <div class="o-alerts__items">
                    <div :class="'o-alerts__item -' + alert.type" v-for="alert in alerts" :key="alert.date_create">
                        <span class="o-alerts__name">{{ alert.name }}</span>
                        <p class="o-alerts__text">{{ alert.text }}</p>
                        <div class="o-alerts__dates">
                            <span class="o-alerts__date -start" v-if="alert.date_start">Platí od: {{ formatDate(alert.date_start) }}<br></span>
                            <span class="o-alerts__date -end" v-if="alert.date_end">Platí do: {{ formatDate(alert.date_end) }}<br></span>
                            <span class="o-alerts__date -create" v-if="alert.date_create">Přidáno: {{ formatDate(alert.date_create) }}<br></span>
                            <span class="o-alerts__date -update" v-if="alert.date_update && alert.date_update !== alert.date_create">Upraveno: {{ formatDate(alert.date_update) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoAlertComponent',
        
        props: {
            alerts: {
                type: Array,
                required: true
            }
        },

        methods: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        }
    })
</script>