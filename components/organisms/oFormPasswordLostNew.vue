<template>
    <div class="o-form-password-lost-new">
        <div class="o-form-password-lost-new__outer">
            <div class="o-form-password-lost-new__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :text="errorForm" styleThema=" -error" />
                <oFlashMessages :text="successForm" styleThema=" -success" />
                <!-- SECTION - FlashMassages END -->

                <form class="o-form-password-lost-new__form" @submit.prevent="passwordLostNew">
                    <div class="o-form-password-lost-new__items">
                        <div class="o-form-password-lost-new__item">
                            <input class="a-input -blue" type="password" name="password_new" v-model="passwordNew" placeholder="Nové heslo"/>
                        </div>
                        <div class="o-form-password-lost-new__item">
                            <input class="a-input -blue" type="password" name="password_new_check" v-model="passwordNewCheck" placeholder="Nové heslo (kontrola)"/>
                        </div>
                    </div>
                    <div class="o-form-password-lost-new__buttons mt-1">
                        <div class="o-form-password-lost-new__button">
                            <div class="m-button -blue">
                                <button class="m-button__input" type="submit">Změnit heslo</button>
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
        name: 'OrganismsoFormPasswordLostNewComponent',
    
        components: {
            oFlashMessages
        },
    
        data() {
            return {
                errorForm: '',
                successForm: '',
                passwordNew: '',
                passwordNewCheck: '',
                passwordCheck: false,
                email: this.$route.query.email || null,
                codePassword: this.$route.query.password_code || null
            }
        },
    
        methods: {  
            async passwordLostNew() {
                if (this.passwordCheck) {
                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-password-lost-new`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "http://localhost:3000",
                                "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                            },
                            method: 'POST',
                            body: JSON.stringify({
                                'email': this.email,
                                'password_new': this.passwordNew,
                                'code_password': this.codePassword
                            })
                        })

                        if (response.ok) {
                            const data = await response.json()
                            console.log("Změna hesla proběhla v pořádku")
                            this.successForm = "Změna hesla proběhla v pořádku"

                            //Cookies - localStorage
                            localStorage.setItem("userEmail", data.message[0].email)
                            localStorage.setItem("userPasswordHash", data.message[0].password)
                            localStorage.setItem("userStatus", data.message[0].status)
                            localStorage.setItem("userNickname", data.message[0].nickname)
                            //Cookies - set expires
                            var now = new Date()
                            now.setMonth(now.getMonth() + 1)
                            let expires = "expires=" + now
                            //Cookies - write
                            document.cookie = "FNCuserEmail=" + data.message[0].email + ";" + expires
                            document.cookie = "FNCuserPasswordHash=" + data.message[0].password + ";" + expires
                            document.cookie = "FNCuserStatus=" + data.message[0].status + ";" + expires
                            document.cookie = "FNCuserNickname=" + data.message[0].nickname + ";" + expires

                            await this.$router.push('/ucet/heslo-obnoveno')
                        } else if (response.status === 404) {
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
                } else {
                    console.log("Nové heslo se neshoduje")
                    this.errorForm = "Nové heslo se neshoduje"
                }
            }
        },

        watch: {
            passwordNew() {
                this.passwordCheck = this.passwordNew === this.passwordNewCheck
            },
            passwordNewCheck() {
                this.passwordCheck = this.passwordNew === this.passwordNewCheck
            }
        }
    }
</script>