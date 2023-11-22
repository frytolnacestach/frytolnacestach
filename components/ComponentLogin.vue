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
                account: []
            }
        },

        async beforeMount() {
            if (process.client) {
                const localStorageEmail = localStorage.getItem("accountEmail")
                const localStoragePasswordHash = localStorage.getItem("accountPasswordHash")
                const localStorageStatus = localStorage.getItem("accountStatus")
                const localStorageNickname = localStorage.getItem("accountNickname")

                if (localStorageEmail && localStoragePasswordHash && localStorageEmail != "undefined" && localStoragePasswordHash != "undefined") {
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
                        localStorage.setItem("accountEmail",localStorageEmail)
                        localStorage.setItem("accountPasswordHash",localStoragePasswordHash)
                        localStorage.setItem("accountStatus",localStorageStatus)
                        localStorage.setItem("accountNickname",localStorageNickname)
                        // Cookies - write
                        document.cookie = "FNCaccountEmail=" + localStorageEmail + ";" + expires
                        document.cookie = "FNCaccountPasswordHash=" + localStoragePasswordHash + ";" + expires
                        document.cookie = "FNCaccountStatus=" + localStorageStatus + ";" + expires
                        document.cookie = "FNCaccountNickname=" + localStorageNickname + ";" + expires
                        // Add to data
                        this.loginStatus = 1
                        this.accountEmail = localStorageEmail
                        this.accountPasswordHash = localStoragePasswordHash
                        this.accountStatus = localStorageStatus
                        this.accountNickname = localStorageNickname
                        
                        // Get user data
                        try {
                            const response = await fetch(`https://api.frytolnacestach.cz/api/user-profile/${localStorageEmail}`)
                            if (response.ok) {
                                this.account = await response.json()
                            } else {
                                this.account = []
                            }
                        } catch {
                            this.account = []
                        }

                        // Emit
                        this.$emit('accountData', {
                            loginStatus: 1,
                            account: this.account
                        })
                        this.$store.commit('setAccount', this.account)

                    } else if (response.status === 401) {
                        console.log("[USER] Nesprávné přihlašovací údaje")
                        // Nastavení localStorage
                        localStorage.setItem("accountEmail","undefined")
                        localStorage.setItem("accountPasswordHash","undefined")
                        localStorage.setItem("accountStatus","undefined")
                        localStorage.setItem("accountNickname","undefined")
                        // Delete cookies
                        document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        // Add to data
                        this.loginStatus = 0
                        // Emit
                        this.$emit('accountData', {
                            loginStatus: 0,
                            account: this.account
                        })
                        this.$store.commit('setAccount', this.account)
                    } else if (response.status === 404) {
                        console.log("[USER] Uživatel nenalezen")
                        // Nastavení localStorage
                        localStorage.setItem("accountEmail","undefined")
                        localStorage.setItem("accountPasswordHash","undefined")
                        localStorage.setItem("accountStatus","undefined")
                        localStorage.setItem("accountNickname","undefined")
                        // Delete cookies
                        document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        // Add to data
                        this.loginStatus = 0
                        // Emit
                        this.$emit('accountData', {
                            loginStatus: 0,
                            account: this.account
                        })
                        this.$store.commit('setAccount', this.account)
                    } else {
                        console.log("[USER] Chyba při komunikaci s API")
                        // Nastavení localStorage
                        localStorage.setItem("accountEmail","undefined")
                        localStorage.setItem("accountPasswordHash","undefined")
                        localStorage.setItem("accountStatus","undefined")
                        localStorage.setItem("accountNickname","undefined")
                        // Delete cookies
                        document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        // Add to data
                        this.loginStatus = 0
                        // Emit
                        this.$emit('accountData', {
                            loginStatus: 0,
                            account: this.account
                        })
                        this.$store.commit('setAccount', this.account)
                    }
                } else {
                    console.log("[USER] Uživatel není přihlášen")
                    // Nastavení localStorage
                    localStorage.setItem("accountEmail","undefined")
                    localStorage.setItem("accountPasswordHash","undefined")
                    localStorage.setItem("accountStatus","undefined")
                    localStorage.setItem("accountNickname","undefined")
                    // Delete cookies
                    document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    // Add to data
                    this.loginStatus = 0
                    // Emit
                    this.$emit('accountData', {
                        loginStatus: 0,
                        account: this.account
                    })
                    this.$store.commit('setAccount', this.account)
                }
            }
        }
    }
</script>