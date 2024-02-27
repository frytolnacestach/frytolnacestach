<template>
    <div class="o-account-banner-big" v-if="account && account.length === 0">
        <div class="o-account-banner-big__outer">
            <div class="o-account-banner-big__inner">
                <div class="o-account-banner-big__content">
                    <h3 class="o-account-banner-big__headline">Ty tu ještě nemáš účet?</h3>
                    <p class="o-account-banner-big__description">
                        Založ si účet a otevři dveře k nezapomenutelným dobrodružstvím. Získej výhody jako označování svých cest, sbírání cestovatelských úspěchů a psaní recenzí. Staň se součástí naší cestovatelské komunity.
                    </p>
                    <div class="o-account-banner-big__buttons">
                        <aButtonFill target="internal" url="/ucet/registrace" text="Registace" styleThema=" -green" styleSize=" -small" />
                        <aButtonFill target="internal" url="/ucet/prihlaseni" text="Přihlášení" styleThema=" -blue" styleSize=" -small" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aButtonFill from '~/components/atoms/aButtonFill.vue'

    export default {
        name: 'OrganismsoAccountBannerBigComponent',

        components: {
            aButtonFill
        },

        props: {
            account: {
                type: Array,
                required: true
            }
        }
    }
</script>