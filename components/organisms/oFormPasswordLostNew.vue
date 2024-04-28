<template>
    <div class="o-form-password-lost-new">
        <div class="o-form-password-lost-new__outer">
            <div class="o-form-password-lost-new__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :dataMessages="flashMessage" />
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
                flashMessage: [],
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
                        // API - POST
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
                            this.flashMessage.push({
                                date: new Date().getTime(),
                                duration: 5000,
                                status: "success",
                                message: "Změna hesla proběhla v pořádku"
                            })

                            //Cookies - localStorage
                            localStorage.setItem("accountEmail", data.message[0].email)
                            localStorage.setItem("accountPasswordHash", data.message[0].password)
                            localStorage.setItem("accountStatus", data.message[0].status)
                            localStorage.setItem("accountNickname", data.message[0].nickname)
                            //Cookies - set expires
                            var now = new Date()
                            now.setMonth(now.getMonth() + 1)
                            let expires = "expires=" + now
                            //Cookies - write
                            document.cookie = "FNCaccountEmail=" + data.message[0].email + ";" + expires
                            document.cookie = "FNCaccountPasswordHash=" + data.message[0].password + ";" + expires
                            document.cookie = "FNCaccountStatus=" + data.message[0].status + ";" + expires
                            document.cookie = "FNCaccountNickname=" + data.message[0].nickname + ";" + expires

                            await this.$router.push('/ucet/heslo-obnoveno')
                        } else if (response.status === 404) {
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
                } else {
                    this.flashMessage.push({
                        date: new Date().getTime(),
                        duration: 5000,
                        status: "error",
                        message: "Nové heslo se neshoduje"
                    })
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