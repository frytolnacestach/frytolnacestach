<template>
    <div class="o-form-login">
        <div class="o-form-login__outer">
            <div class="o-form-login__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :text="errorForm" styleThema=" -error" />
                <oFlashMessages :text="successForm" styleThema=" -success" />
                <!-- SECTION - FlashMassages END -->

                <form class="o-form-login__form" @submit.prevent="login">
                    <div class="o-form-login__items">
                        <div class="o-form-login__item">
                            <input class="a-input -blue" type="text" name="email" v-model="email" placeholder="E-mail"/>
                        </div>
                        <div class="o-form-login__item">
                            <input class="a-input -blue" type="password" name="password" v-model="password" placeholder="Heslo"/>
                        </div>
                        <nuxt-link to="/ucet/zapomenute-heslo">Zapomenuté heslo</nuxt-link>
                    </div>
                    <div class="o-form-login__buttons mt-1">
                        <div class="o-form-login__button">
                            <div class="m-button -blue">
                                <button class="m-button__input" type="submit">Přihlásit se</button>
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
        name: 'OrganismsoFormLoginComponent',
    
        components: {
            oFlashMessages
        },
    
        data() {
            return {
                errorForm: '',
                successForm: '',
                email: '',
                password: '',
                nickname: ''
            }
        },
    
        methods: {  
            async login() {
                try {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-login`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'email': this.email,
                            'password': this.password
                        })
                    })

                    if (response.ok) {
                        const data = await response.json()
                        console.log("Přihlášení úspěšné")
                        this.successForm = "Přihlášení úspěšné"

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

                        await this.$router.push('/ucet/profil')
                    } else if (response.status === 401) {
                        console.log("Nesprávné přihlašovací údaje")
                        this.errorForm = "Nesprávné přihlašovací údaje"
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
            }
        }
    }
</script>