<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoFormProfile styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="!skeleton">
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
                                    <label class="o-form-profile__label -strong">Odkazy:</label>
                                    <div class="o-form-profile__item -flex" v-for="(item, index) in urls" :key="index" v-if="urls">
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
                                        <div class="m-button-add -blue" v-if="urls">
                                            <button class="m-button-add__input" type="button" @click="addUrlInput" v-if="urls.length < 32">Přidat odkaz</button>
                                        </div>
                                        <div class="m-button-add -blue" v-else="urls">
                                            <button class="m-button-add__input" type="button" @click="addUrlInput">Přidat první odkaz</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="o-form-profile__group">
                                    <label class="o-form-profile__label -strong">Seo Tagy:</label>
                                    <div class="o-form-profile__item -flex" v-for="(item, index) in seo_tags" :key="index" v-if="seo_tags">
                                        <input class="a-input -blue" type="text" v-model="seo_tags[index].tag" />
                                        <div class="m-button-remove -blue">
                                            <button class="m-button-remove__input" type="button" @click="removeTagInput(index)">
                                                Odstranit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="o-form-profile__buttons mt-1">
                                    <div class="o-form-profile__button">
                                        <div class="m-button-add -blue" v-if="seo_tags">
                                            <button class="m-button-add__input" type="button" @click="addTagInput" v-if="seo_tags.length < 5">Přidat tag</button>
                                        </div>
                                        <div class="m-button-add -blue" v-else="seo_tags">
                                            <button class="m-button-add__input" type="button" @click="addTagInput">Přidat první tag</button>
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

        props: {
            account: {
                type: Array,
                required: true
            }
        },
    
        data() {
            return {
                errorForm: '',
                successForm: '',
                skeleton: true,
                profile: null,
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
                ],
                seo_tags: [
                    {
                        tag: ""
                    }
                ]
            }
        },
    
        methods: {
            async fetchProfile() {
                if (this.account && this.account.length !== 0) {
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile/${this.account[0].email}`)
                        if (response.ok) {
                            this.profile = await response.json()

                            this.surname = this.profile[0].surname
                            this.lastname = this.profile[0].lastname
                            this.urls = this.profile[0].urls
                            this.seo_tags = this.profile[0].seo_tags
                            this.agreementMail = this.profile[0].agreement_mail
                            this.skeleton = false
                        } else {
                            console.log("Chyba při komunikaci s API")
                            this.errorForm = "Chyba při komunikaci s API"
                        }
                    } catch (err) {
                        console.log(err)
                        this.errorForm = "Chyba připojení k API"
                        throw err
                    }
                } else {
                    this.skeleton = false
                }
            },

            async editProfile() {
                if (this.account && this.account.length !== 0) {
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile-edit/${this.account[0].email}`, {
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
                                'urls': this.urls,
                                'seo_tags': this.seo_tags
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
                } else {
                    this.errorForm = "Vypadá to že nejsi přihlášen"
                }
            },

            addUrlInput() {
                if (this.urls && this.urls.length < 32) {
                    this.urls.push({ url: "" })
                } else if (!this.urls) {
                    this.urls = [
                        {
                            url: ""
                        }
                    ]
                }
            },

            addTagInput() {
                if (this.seo_tags && this.seo_tags.length < 5) {
                    this.seo_tags.push({ tag: "" })
                } else if (!this.seo_tags) {
                    this.seo_tags = [
                        {
                            tag: ""
                        }
                    ]
                }
            },

            removeUrlInput(index) {
                this.urls.splice(index, 1)
            },

            removeTagInput(index) {
                this.seo_tags.splice(index, 1)
            }
        },

        async mounted() {
            await this.fetchProfile()
        },

        watch: {
            account: {
                handler: 'fetchProfile',
                immediate: true
            }
        }
    }
</script>