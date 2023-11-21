<!--
    loginStatus
    0 - Uživatel není přihlášen
    1 - Uživatel je přihlášen
-->
<template></template>
<script>
    export default {
        name: 'ComponentLoginComponent',

        data() {
            return {
                loginStatus: null,
                user: []
            }
        },

        async beforeMount() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem('userEmail')
                const localStoragePasswordHash = localStorage.getItem('userPasswordHash')
                const localStorageStatus = localStorage.getItem('userStatus')
                const localStorageNickname = localStorage.getItem('userNickname')

                if (localStorageEmail && localStoragePasswordHash) {
                    const response = await fetch(`https://api.frytolnacestach.cz/api/user-login-check`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'email': localStorageEmail,
                            'password': localStoragePasswordHash,
                            'status': localStorageStatus,
                            'nickname': localStorageNickname
                        })
                    })

                    if (response.ok) {
                        console.log("[USER] Přihlášení stále aktivní");
                        // Cookies - set expires
                        var now = new Date();
                        now.setMonth(now.getMonth() + 1)
                        let expires = "expires=" + now;
                        // Nastavení localStorage
                        localStorage.setItem("userEmail",localStorageEmail)
                        localStorage.setItem("userPasswordHash",localStoragePasswordHash)
                        localStorage.setItem("userStatus",localStorageStatus)
                        localStorage.setItem("userNickname",localStorageNickname)
                        // Cookies - write
                        document.cookie = "FNCuserEmail=" + localStorageEmail + ";" + expires
                        document.cookie = "FNCuserPasswordHash=" + localStoragePasswordHash + ";" + expires
                        document.cookie = "FNCuserStatus=" + localStorageStatus + ";" + expires
                        document.cookie = "FNCuserNickname=" + localStorageNickname + ";" + expires
                        // Add to data
                        this.loginStatus = 1
                        this.userEmail = localStorageEmail
                        this.userPasswordHash = localStoragePasswordHash
                        this.userStatus = localStorageStatus
                        this.userNickname = localStorageNickname
                        
                        // Get user data
                        try {
                            const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile/${localStorageEmail}`)
                            if (response.ok) {
                                this.user = await response.json()
                            } else {
                                this.user = []
                            }
                        } catch {
                            this.user = []
                        }

                        // Emit
                        this.$emit('userData', {
                            loginStatus: 1,
                            user: this.user
                        })
                        this.$store.commit('setUser', this.user)

                    } else if (response.status === 401) {
                        console.log("[USER] Nesprávné přihlašovací údaje")
                        // Nastavení localStorage
                        localStorage.setItem("userEmail","undefined")
                        localStorage.setItem("userPasswordHash","undefined")
                        localStorage.setItem("userStatus","undefined")
                        localStorage.setItem("userNickname","undefined")
                        // Delete cookies
                        document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        // Add to data
                        this.loginStatus = 0
                        // Emit
                        this.$emit('userData', {
                            loginStatus: 0,
                            user: []
                        })
                        this.$store.commit('setUser', this.user)
                    } else if (response.status === 404) {
                        console.log("[USER] Uživatel nenalezen")
                        // Nastavení localStorage
                        localStorage.setItem("userEmail","undefined")
                        localStorage.setItem("userPasswordHash","undefined")
                        localStorage.setItem("userStatus","undefined")
                        localStorage.setItem("userNickname","undefined")
                        // Delete cookies
                        document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        // Add to data
                        this.loginStatus = 0
                        // Emit
                        this.$emit('userData', {
                            loginStatus: 0,
                            user: []
                        })
                        this.$store.commit('setUser', this.user)
                    } else {
                        console.log("[USER] Chyba při komunikaci s API")
                        // Nastavení localStorage
                        localStorage.setItem("userEmail","undefined")
                        localStorage.setItem("userPasswordHash","undefined")
                        localStorage.setItem("userStatus","undefined")
                        localStorage.setItem("userNickname","undefined")
                        // Delete cookies
                        document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        // Add to data
                        this.loginStatus = 0
                        // Emit
                        this.$emit('userData', {
                            loginStatus: 0,
                            user: []
                        })
                        this.$store.commit('setUser', this.user)
                    }
                } else {
                    console.log("[USER] Uživatel není přihlášen")
                    // Nastavení localStorage
                    localStorage.setItem("userEmail","undefined")
                    localStorage.setItem("userPasswordHash","undefined")
                    localStorage.setItem("userStatus","undefined")
                    localStorage.setItem("userNickname","undefined")
                    // Delete cookies
                    document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    // Add to data
                    this.loginStatus = 0
                    // Emit
                    this.$emit('userData', {
                        loginStatus: 0,
                        user: []
                    })
                    this.$store.commit('setUser', this.user)
                }
            }
        }
    }
</script>