<template>
    <div class="o-form-password-lost">
        <div class="o-form-password-lost__outer">
            <div class="o-form-password-lost__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :dataMessages="flashMessage" />
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
                flashMessage: [],
                email: ''
            }
        },
    
        methods: {  
            async passwordLost() {
                try {
                    // API - POST
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
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Email byl odeslán"
                        })
                        this.email = ''
                    } else if (response.status === 400) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Uživatel nenalezen"
                        })
                    } else {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Chyba při komunikaci s API"
                        })
                    }
                } catch (err) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Chyba připojení k API"
                    })
                    throw err
                }
            }
        }
    }
</script>