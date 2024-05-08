<template>
    <div class="o-form-login">
        <div class="o-form-login__outer">
            <div class="o-form-login__inner">

                <!-- SECTION - FlashMassages -->
                <oFlashMessages :dataMessages="flashMessage" />
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
    
    export default defineComponent({
        name: 'OrganismsoFormLoginComponent',
    
        components: {
            oFlashMessages
        },
    
        data() {
            return {
                flashMessage: [],
                email: '',
                password: '',
                nickname: '',
                loginStatus: null,
                account: [],
                accountData: useAccountData().accountData
            }
        },
    
        methods: {  
            async login() {
                try {
                    // API - POST
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
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "success",
                            message: "Přihlášení úspěšné"
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

                        // Add to data
                        const localStorageEmail = localStorage.getItem("accountEmail")
                        const localStoragePasswordHash = localStorage.getItem("accountPasswordHash")
                        const localStorageStatus = localStorage.getItem("accountStatus")
                        const localStorageNickname = localStorage.getItem("accountNickname")
                        this.loginStatus = 1
                        this.accountEmail = localStorageEmail
                        this.accountPasswordHash = localStoragePasswordHash
                        this.accountStatus = localStorageStatus
                        this.accountNickname = localStorageNickname
                        
                        try {
                            // API - GET - User
                            const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile/${localStorageEmail}`)

                            // DATA
                            if (response.ok) {
                                this.account = await response.json()
                            } else {
                                this.account = []
                            }
                        } catch {
                            // DATA
                            this.account = []
                        }

                        // Emit
                        this.$emit('accountData', {
                            loginStatus: 1,
                            account: this.account
                        })
                        useAccountData().setAccountData(this.account)

                        await this.$router.push('/ucet/profil')
                    } else if (response.status === 401) {
                        this.flashMessage.push({
                            date: new Date().getTime(),
                            duration: 5000,
                            status: "error",
                            message: "Nesprávné přihlašovací údaje"
                        })
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
            }
        }
    })
</script>