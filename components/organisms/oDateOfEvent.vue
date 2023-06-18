<template>
    <div class="o-date-of-event">
        <div class="o-date-of-event__outer">
            <div class="o-date-of-event__inner">
                <div class="o-date-of-event__start"><span class="o-date-of-event__label">Začátek:</span>{{ formatDate(dateStart) }}</div>
                <div class="o-date-of-event__end"><span class="o-date-of-event__label">Konec:</span>{{ formatDate(dateEnd) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoDateOfEventComponent',

        props: {
            dateStart: {
                type: String,
                required: true
            },
            dateEnd: {
                type: String,
                required: true
            },
        },

        methods: {
            formatDate(date) {
                const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
                return new Date(date).toLocaleDateString('cs', options);
            }
        }
    }
</script>