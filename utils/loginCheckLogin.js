export async function loginCheckLogin($router) {
    const loacalStorageEmail = localStorage.getItem('email')
    const loacalStoragePassworldHash = localStorage.getItem('passworld_hash')
    const loacalStorageStatus = localStorage.getItem('status')

    if (loacalStorageEmail && loacalStorageEmail != "undefined") {
        try {
            const response = await fetch(`https://frytolnacestach-api.vercel.app/api/user-login-check/${loacalStorageEmail}/${loacalStoragePassworldHash}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                },
                method: 'POST',
                body: JSON.stringify({
                    'email': loacalStorageEmail,
                    'password': loacalStoragePassworldHash,
                    'status': loacalStorageStatus
                })
            });

            if (response.ok) {
                console.log("Přihlášení stále aktivní");
                //Cookies - set expires
                var now = new Date();
                now.setMonth(now.getMonth() + 1);
                let expires = "expires=" + now;
                //Nastavení localStorage
                localStorage.setItem("email",loacalStorageEmail)
                localStorage.setItem("passworld_hash",loacalStoragePassworldHash)
                localStorage.setItem("status",loacalStorageStatus)
                //Cookies - write
                document.cookie = "FNCemail=" + loacalStorageEmail + ";" + expires;
                document.cookie = "FNCpass=" + loacalStoragePassworldHash + ";" + expires;
                document.cookie = "FNCpass=" + loacalStorageStatus + ";" + expires;
                $router.push('/ucet/profil')
            } else if (response.status === 401) {
                console.log("Nesprávné přihlašovací údaje");
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("passworld_hash","undefined")
                localStorage.setItem("status","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            } else if (response.status === 404) {
                console.log("Uživatel nenalezen");
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("passworld_hash","undefined")
                localStorage.setItem("status","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            } else {
                console.log("Chyba při komunikaci s API");
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("passworld_hash","undefined")
                localStorage.setItem("status","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }
        } catch (err) {
            console.log(err);
            //Nastavení user-info
            localStorage.setItem("email","undefined")
            localStorage.setItem("passworld_hash","undefined")
            localStorage.setItem("status","undefined")
            //Delete cookies
            document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            throw err;
        }
    }
}