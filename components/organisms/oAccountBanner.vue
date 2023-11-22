<template>
    <div :class="`o-account-banner`+ styleThema" v-if="account && account.length === 0">
        <div class="o-account-banner__outer">
            <div class="o-account-banner__inner">
                <h3 class="o-account-banner__headline">Ty tu ještě nemáš účet?</h3>
                <p class="o-account-banner__description">
                    Založ si účet a otevři dveře k nezapomenutelným dobrodružstvím. Získej výhody jako označování svých cest, sbírání cestovatelských úspěchů a psaní recenzí. Staň se součástí naší cestovatelské komunity.
                </p>
                <div class="o-account-banner__buttons">
                    <aButtonFill target="internal" url="/ucet/registrace" text="Registace" styleThema=" -green" styleSize=" -small" />
                    <aButtonFill target="internal" url="/ucet/prihlaseni" text="Přihlášení" styleThema=" -blue" styleSize=" -small" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFill from '~/components/atoms/aButtonFill.vue'

    export default {
        name: 'OrganismsoAccountBanneComponent',

        components: {
            aButtonFill
        },

        props: {
            styleThema: {
                type: String,
                required: true
            },
            account: {
                type: Array,
                required: true
            }
        }
    }
</script>