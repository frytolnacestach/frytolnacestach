<template>
    <div class="o-form-password-change">
        <div class="o-form-password-change__outer">
            <div class="o-form-password-change__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :text="errorForm" styleThema=" -error" />
                <oFlashMessages :text="successForm" styleThema=" -success" />
                <!-- SECTION - FlashMassages END -->

                <form class="o-form-password-change__form" @submit.prevent="passwordChange">
                    <div class="o-form-password-change__items">
                        <div class="o-form-password-change__item">
                            <input class="a-input -blue" type="password" name="password" v-model="password" placeholder="Aktuální heslo"/>
                        </div>
                        <div class="o-form-password-change__item">
                            <input class="a-input -blue" type="password" name="password_new" v-model="passwordNew" placeholder="Nové heslo"/>
                        </div>
                        <div class="o-form-password-change__item">
                            <input class="a-input -blue" type="password" name="password_new_check" v-model="passwordNewCheck" placeholder="Nové heslo (kontrola)"/>
                        </div>
                    </div>
                    <div class="o-form-password-change__buttons mt-1">
                        <div class="o-form-password-change__button">
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
        name: 'OrganismsoFormPasswordChangeComponent',
    
        components: {
            oFlashMessages
        },
    
        data() {
            return {
                errorForm: '',
                successForm: '',
                email: '',
                password: '',
                passwordNew: '',
                passwordNewCheck: '',
                passwordCheck: false
            }
        },
    
        methods: {  
            async passwordChange() {
                if (this.passwordCheck) {
                    this.email =  localStorage.getItem('email')

                    try {
                        const response = await fetch(`https://api.frytolnacestach.cz/api/user-password-change`, {
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
                                'password_new': this.passwordNew
                            })
                        })

                        if (response.ok) {
                            const data = await response.json()
                            console.log("Změna hesla byla úspěšná")
                            this.successForm = "Změna hesla byla úspěšná"

                            //Cookies - localStorage
                            localStorage.setItem("email", data.message[0].email)
                            localStorage.setItem("password_hash", data.message[0].password)
                            localStorage.setItem("status", data.message[0].status)
                            localStorage.setItem("nickname", data.message[0].nickname)
                            //Cookies - set expires
                            var now = new Date()
                            now.setMonth(now.getMonth() + 1)
                            let expires = "expires=" + now
                            //Cookies - write
                            document.cookie = "FNCemail=" + data.message[0].email + ";" + expires
                            document.cookie = "FNCpass=" + data.message[0].password + ";" + expires
                            document.cookie = "FNCstatus=" + data.message[0].status + ";" + expires
                            document.cookie = "FNCnickname=" + data.message[0].nickname + ";" + expires
                        } else if (response.status === 401) {
                            console.log("Nesprávné aktuální heslo")
                            this.errorForm = "Nesprávné aktuální heslo"
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