<template>
    <div class="o-form-registration">
        <div class="o-form-registration__outer">
            <div class="o-form-registration__inner">

                <div class="o-form-registration__messages">
                    <!-- SECTION - FlashMassages -->
                    <oFlashMessages :text="errorForm" styleThema=" -error" />
                    <oFlashMessages :text="successForm" styleThema=" -success" />
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
                            <input class="a-input-checkbox" type="checkbox" id="terms" v-model="termsAccepted" required>
                            <label class="m-label" for="terms">Souhlasím s <NuxtLink to="/conditions-user" target="_blank">Obchodními podmínkami</NuxtLink> (pro uživatelský účet):</label>
                        </div>
                    </div>
                    <div class="o-form-registration__buttons mt-1">
                        <div class="o-form-registration__button">
                            <div class="m-butto -bluen">
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
            errorForm: '',
            successForm: '',
            email: '',
            password: '',
            nickname: '',
            termsAccepted: false
        };
    },
  
    methods: {
        async register() {
            if (!this.termsAccepted) {
                alert('Musíte souhlasit s obchodními podmínkami pro uživatelský účet.');
                return;
            }

            try {

                
                await this.createForm();
                console.log('Data byla odeslaná');
            } catch (error) {
                console.log(error);
                this.errorForm = "Nastala chyba při odeslání vaších udajů.";
            }
        },
  
        async createForm() {
            try {
                const response = await fetch(`https://frytolnacestach-api.vercel.app/api/user-registration`, {
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
                    })
                });

                if (response.ok) {
                    console.log("Registrace úspěšná");
                    this.successForm = "Registrace úspěšná";
                    await this.$router.push('/ucet/registrace-dokoncena');
                } else if (response.status === 201) {
                    console.log("Účet vytvořen, registrační e-mail odeslán.");
                    this.succes = "Účet vytvořen, registrační e-mail odeslán.";
                    await this.$router.push('/ucet/registrace-dokoncena');
                } else if (response.status === 400) {
                    console.log("Uživatel s touto e-mailovou adresou již existuje.");
                    this.errorForm = "Uživatel s touto e-mailovou adresou již existuje.";
                } else if (response.status === 401) {
                    console.log("Uživatel s touto přezdívkou již existuje.");
                    this.errorForm = "Uživatel s touto přezdívkou již existuje.";
                } else {
                    console.log("Chyba při komunikaci s API");
                    this.errorForm = "Chyba při komunikaci s API";
                }
            } catch (err) {
                console.log(err);
                this.errorForm = "Chyba připojení k API";
                throw err;
            }
        },
    }
};
</script>