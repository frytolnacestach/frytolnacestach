<template>
    <div class="o-account-banner-big" v-if="account && account.length === 0">
        <div class="o-account-banner-big__outer">
            <div class="o-account-banner-big__inner">
                <div class="o-account-banner-big__content">
                    <h3 class="o-account-banner-big__headline">{{ headline }}</h3>
                    <p class="o-account-banner-big__description">{{ perex }}</p>
                    <div class="o-account-banner-big__buttons">
                        <AtomsButtonFill target="internal" url="/ucet/registrace" text="Registace" styleThema=" -green-inverse" styleSize=" -medium" />
                        <AtomsButtonFill target="internal" url="/ucet/prihlaseni" text="Přihlášení" styleThema=" -blue-inverse" styleSize=" -medium" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoAccountBannerBigComponent',

        props: {
            account: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                headline: "Ty tu ještě nemáš účet?",
                perex: "Založ si účet a otevři dveře k nezapomenutelným dobrodružstvím. Získej výhody jako označování svých cest, sbírání cestovatelských úspěchů a psaní recenzí. Staň se součástí naší cestovatelské komunity."
            }
        }
    })
</script>