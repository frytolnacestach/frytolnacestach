<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoFormProfile styleThema=" -skeleton-blue" v-if="profile === null" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="profile !== null">
            <div class="o-form-profile">
                <div class="o-form-profile__outer">
                    <div class="o-form-profile__inner">

                        <!-- SECTION - FlashMassages -->
                        <div class="o-form-profile__messages">
                            <oFlashMessages :text="errorForm" styleThema=" -error" />
                            <oFlashMessages :text="successForm" styleThema=" -success" />
                        </div>
                        <!-- SECTION - FlashMassages END -->

                        <!-- FORM -->
                        <form class="o-form-profile__form" @submit.prevent="editProfile">
                            <div class="o-form-profile__items">
                                <div class="o-form-profile__item">
                                    <input class="a-input -blue" type="text" name="surname" v-model="surname" placeholder="Jméno"/>
                                </div>
                                <div class="o-form-profile__item">
                                    <input class="a-input -blue" type="text" name="lastname" v-model="lastname" placeholder="Příjmení"/>
                                </div>

                                <div class="m-input-checkbox -blue">
                                    <label class="m-input-checkbox__label">
                                        <input class="m-input-checkbox__input" type="checkbox" id="agreement_mail" v-model="agreementMail" />
                                        <span class="m-input-checkbox__checkbox"></span>
                                        <span class="m-input-checkbox__text" for="agreement_mail">Souhlasím se zasíláním marketingových emailů</span>
                                    </label>
                                </div>

                                <div class="o-form-profile__group">
                                    <label class="o-form-profile__label">Odkazy:</label>
                                    <div class="o-form-profile__item -flex" v-for="(item, index) in urls" :key="index">
                                        <input class="a-input -blue" type="text" v-model="urls[index].url" />
                                        <div class="m-button-remove -blue">
                                            <button class="m-button-remove__input" type="button" @click="removeUrlInput(index)">
                                                Odstranit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="o-form-profile__buttons mt-1">
                                    <div class="o-form-profile__button">
                                        <div class="m-button-add -blue">
                                            <button class="m-button-add__input" type="button" @click="addUrlInput" v-if="urls.length < 32">Přidat odkaz</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="o-form-profile__buttons mt-1">
                                <div class="o-form-profile__button">
                                    <div class="m-button -blue">
                                        <button class="m-button__input" type="submit">Upravit údaje</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- FORM END -->

                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>
  
<script>
    import skeletonoFormProfile from '~/components/skeleton/skeletonoFormProfile.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    
    export default {
        name: 'OrganismsoFormProfileComponent',
    
        components: {
            skeletonoFormProfile,
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
                lastname: '',
                agreementMail: '',
                urls: [
                    {
                        url: ""
                    }
                ]
            }
        },
    
        methods: {
            async fetchProfile() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile/${this.localStorageEmail}`)
                    if (response.ok) {
                        this.profile = await response.json()
                    } else {
                        console.log("Chyba při komunikaci s API")
                        this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            },

            async editProfile() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile-edit/${this.localStorageEmail}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'surname': this.surname,
                            'lastname': this.lastname,
                            'agreement_mail': this.agreementMail,
                            'urls': this.urls
                        })
                    })

                    if (response.ok) {
                        console.log("Změny byly uložené")
                        this.successForm = "Změny byly uložené"
                    } else {
                        console.log("Chyba při komunikaci s API")
                        this.errorForm = "Chyba při komunikaci s API"
                    }
                } catch (err) {
                    console.log(err)
                    this.errorForm = "Chyba připojení k API"
                    throw err
                }
            },

            addUrlInput() {
                if (this.urls.length < 32) {
                    this.urls.push({ url: "" })
                }
            },

            removeUrlInput(index) {
                this.urls.splice(index, 1)
            }

        },

        async mounted() {
            if (process.client) {
                this.localStorageEmail = localStorage.getItem('email')
            }

            await this.fetchProfile()

            if (this.profile) {
                this.surname = this.profile[0].surname
                this.lastname = this.profile[0].lastname
                this.urls = this.profile[0].urls
                this.agreementMail = this.profile[0].agreement_mail
            }
        }
    }
</script>