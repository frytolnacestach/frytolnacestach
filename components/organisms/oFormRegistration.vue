<template>
    <div class="o-form-registration">
        <div class="o-form-registration__outer">
            <div class="o-form-registration__inner">

                <div class="o-form-registration__messages">
                    <!-- SECTION - FlashMassages -->
                    <oFlashMessages :dataMessages="flashMessage"/>
                    <!-- SECTION - FlashMassages END -->
                </div>

                <!-- SECTION - Form -->
                <form class="o-form-registration__form" @submit.prevent="register">
                    <div class="o-form-registration__items">
                        <div class="o-form-registration__item">
                            <label class="m-label" for="email">Email:</label>
                            <input class="a-input -blue" type="email" id="email" v-model="email" required>
                        </div>
                        <div class="o-form-registration__item">
                            <label class="m-label" for="password">Heslo:</label>
                            <input class="a-input -blue" type="password" id="password" v-model="password" required>
                        </div>
                        <div class="o-form-registration__item">
                            <label class="m-label" for="nickname">Přezdívka:</label>
                            <input class="a-input -blue" type="text" id="nickname" v-model="nickname" required>
                        </div>
                        <div class="o-form-registration__item">
                            <div class="m-input-checkbox -blue">
                                <label class="m-input-checkbox__label">
                                    <input class="m-input-checkbox__input" type="checkbox" id="terms" v-model="termsAccepted" required />
                                    <span class="m-input-checkbox__checkbox"></span>
                                    <span class="m-input-checkbox__text" for="terms">Souhlasím s <NuxtLink to="/conditions-user" target="_blank" rel="noopener">Obchodními podmínkami</NuxtLink> (pro uživatelský účet)</span>
                                </label>
                            </div>
                        </div>
                        <div class="o-form-registration__item">
                            <div class="m-input-checkbox -blue">
                                <label class="m-input-checkbox__label">
                                    <input class="m-input-checkbox__input" type="checkbox" id="agreement_mail" v-model="agreementMail" />
                                    <span class="m-input-checkbox__checkbox"></span>
                                    <span class="m-input-checkbox__text" for="agreement_mail">Souhlasím se zasíláním marketingových emailů</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="o-form-registration__buttons mt-1">
                        <div class="o-form-registration__button">
                            <div class="m-button -blue">
                                <button class="m-button__input" type="submit">Registrovat se</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- SECTION - Form END -->

            </div>
        </div>
    </div>
</template>
  
<script>
import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
  
export default {
    name: 'OrganismsoFormRegistrationComponent',
  
    components: {
        oFlashMessages
    },
  
    data() {
        return {
            flashMessage: [
                {
                    status: "",
                    message: ""
                }
            ],
            email: '',
            password: '',
            nickname: '',
            termsAccepted: false,
            agreementMail: false
        }
    },
  
    methods: {
        async register() {
            if (!this.termsAccepted) {
                alert('Musíte souhlasit s obchodními podmínkami pro uživatelský účet.')
                return
            }

            try {
                await this.createForm()
            } catch (error) {
                this.flashMessage.push({
                    date: new Date().getTime(),
                    duration: 5000,
                    status: "error",
                    message: "Nastala chyba při odeslání vaších udajů."
                })
            }
        },
  
        async createForm() {
            try {
                // API - GET - User
                const response = await fetch(`https://api.frytolnacestach.cz/api/user-registration`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        'email': this.email,
                        'password': this.password,
                        'nickname': this.nickname,
                        'agreement_mail': this.agreementMail
                    })
                })

                if (response.ok) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "success",
                        message: "Registrace úspěšná"
                    })
                    await this.$router.push('/ucet/registrace-dokoncena')
                } else if (response.status === 201) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "success",
                        message: "Účet vytvořen, registrační e-mail odeslán."
                    })
                    await this.$router.push('/ucet/registrace-dokoncena')
                } else if (response.status === 400) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Uživatel s touto e-mailovou adresou již existuje."
                    })
                } else if (response.status === 401) {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Uživatel s touto přezdívkou již existuje."
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