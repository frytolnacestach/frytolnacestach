<template>
    <div class="o-form-profile">
        <div class="o-form-profile__outer">
            <div class="o-form-profile__inner">

                <div class="o-form-profile__messages">
                    <!-- SECTION - FlashMassages -->
                    <oFlashMessages :text="errorForm" styleThema=" -error" />
                    <oFlashMessages :text="successForm" styleThema=" -success" />
                    <!-- SECTION - FlashMassages END -->
                </div>
                <!--test - {{ profile[0].surname }} - test-->
                <form class="o-form-profile__form" @submit.prevent="editProfile">
                    <div class="o-form-profile__items">
                        <div class="o-form-profile__item">
                            <input class="a-input a-input--big" type="text" name="surname" v-model="surname" placeholder="Jméno"/>
                        </div>
                        <div class="o-form-profile__item">
                            <input class="a-input a-input--big" type="text" name="lastname" v-model="lastname" placeholder="Příjmení"/>
                        </div>
                    </div>
                    <div class="o-form-profile__buttons mt-1">
                        <div class="o-form-profile__button">
                            <div class="m-button">
                                <button class="m-button__input" type="submit">Upravit údaje</button>
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
    name: 'OrganismsoFormProfileComponent',
  
    components: {
        oFlashMessages
    },
  
    data() {
        return {
            profile: null,
            localStorageEmail: '',
            errorForm: '',
            successForm: '',
            email: '',
            password: '',
            nickname: '',
            surname: '',
            lastname: ''
        };
    },
  
    methods: {
        async fetchProfile() {
            try {
                const response = await fetch(`https://frytolnacestach-api.vercel.app/api/user-profile/${this.localStorageEmail}`);
                if (response.ok) {
                    this.profile = await response.json();
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
        async editProfile() {
            try {
                const response = await fetch(`https://frytolnacestach-api.vercel.app/api/user-profile-edit/${this.localStorageEmail}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        'surname': this.surname,
                        'lastname': this.lastname
                    })
                });

                if (response.ok) {
                    console.log("Změny byly uložené");
                    this.successForm = "Změny byly uložené";
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
    },

    async mounted() {
        if (process.client) {
            this.localStorageEmail = localStorage.getItem('email');
        }

        await this.fetchProfile();

        if (this.profile) {
            this.surname = this.profile[0].surname;
            this.lastname = this.profile[0].lastname;
        }
    }
};
</script>
  