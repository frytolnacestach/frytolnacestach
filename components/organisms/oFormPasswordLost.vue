<template>
    <div class="o-form-password-lost">
        <div class="o-form-password-lost__outer">
            <div class="o-form-password-lost__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :text="errorForm" styleThema=" -error" />
                <oFlashMessages :text="successForm" styleThema=" -success" />
                <!-- SECTION - FlashMassages END -->

                <form class="o-form-password-lost__form" @submit.prevent="passwordLost">
                    <div class="o-form-password-lost__items">
                        <div class="o-form-password-lost__item">
                            <input class="a-input -blue" type="text" name="email" v-model="email" placeholder="E-mail"/>
                        </div>
                        <nuxt-link to="/ucet/prihlaseni">Přihlásit se</nuxt-link>
                    </div>
                    <div class="o-form-password-lost__buttons mt-1">
                        <div class="o-form-password-lost__button">
                            <div class="m-button -blue">
                                <button class="m-button__input" type="submit">Poslat email</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
  
<script>
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    
    export default {
        name: 'OrganismsoFormPasswordLostComponent',
    
        components: {
            oFlashMessages
        },
    
        data() {
            return {
                errorForm: '',
                successForm: '',
                email: ''
            }
        },
    
        methods: {  
            async passwordLost() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-password-lost`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'email': this.email
                        })
                    })

                    if (response.ok) {
                        console.log("Email byl odeslán")
                        this.successForm = "Email byl odeslán"
                        this.email = ''
                    } else if (response.status === 400) {
                        console.log("Uživatel nenalezen")
                        this.errorForm = "Uživatel nenalezen"
                    } else {
                        console.log("Chyba při komunikaci s API")
                        this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            }
        }
    }
</script>