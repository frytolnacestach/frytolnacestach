export async function loginCheckLogout($router) {
    const loacalStorageEmail = localStorage.getItem('email')
    const loacalStoragePasswordHash = localStorage.getItem('password_hash')
    const loacalStorageStatus = localStorage.getItem('status')
    const loacalStorageNickname = localStorage.getItem('nickname')

    if (loacalStorageEmail && loacalStorageEmail != "undefined") {
        try {
            const response = await fetch(`https://api.frytolnacestach.cz/api/user-login-check`, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                },
                method: 'POST',
                body: JSON.stringify({
                    'email': loacalStorageEmail,
                    'password': loacalStoragePasswordHash,
                    'status': loacalStorageStatus,
                    'nickname': loacalStorageNickname
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
                localStorage.setItem("password_hash",loacalStoragePasswordHash)
                localStorage.setItem("status",loacalStorageStatus)
                localStorage.setItem("nickname",loacalStorageNickname)
                //Cookies - write
                document.cookie = "FNCemail=" + loacalStorageEmail + ";" + expires;
                document.cookie = "FNCpass=" + loacalStoragePasswordHash + ";" + expires;
                document.cookie = "FNCstatus=" + loacalStorageStatus + ";" + expires;
                document.cookie = "FNCnickname=" + loacalStorageNickname + ";" + expires;
            } else if (response.status === 401) {
                console.log("Nesprávné přihlašovací údaje");
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("password_hash","undefined")
                localStorage.setItem("status","undefined")
                localStorage.setItem("nickname","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
            } else if (response.status === 404) {
                console.log("Uživatel nenalezen");
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("password_hash","undefined")
                localStorage.setItem("status","undefined")
                localStorage.setItem("nickname","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
            } else {
                console.log("Chyba při komunikaci s API");
                //Nastavení localStorage
                localStorage.setItem("email","undefined")
                localStorage.setItem("password_hash","undefined")
                localStorage.setItem("status","undefined")
                localStorage.setItem("nickname","undefined")
                //Delete cookies
                document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
            }
        } catch (err) {
            console.log(err);
            //Nastavení user-info
            localStorage.setItem("email","undefined")
            localStorage.setItem("password_hash","undefined")
            localStorage.setItem("status","undefined")
            localStorage.setItem("nickname","undefined")
            //Delete cookies
            document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            $router.push('/ucet/prihlaseni')
            throw err;
        }
    } else {
        console.log("Uživatel odhlášen");
        //Nastavení user-info
        localStorage.setItem("email","undefined")
        localStorage.setItem("password_hash","undefined")
        localStorage.setItem("status","undefined")
        //Delete cookies
        document.cookie = "FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        document.cookie = "FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        document.cookie = "FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        document.cookie = "FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        $router.push('/ucet/prihlaseni')
    }
}