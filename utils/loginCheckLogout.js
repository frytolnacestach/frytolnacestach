export async function loginCheckLogout($router) {
    const localStorageEmail = localStorage.getItem('userEmail')
    const localStoragePasswordHash = localStorage.getItem('userPasswordHash')
    const localStorageStatus = localStorage.getItem('userStatus')
    const localStorageNickname = localStorage.getItem('userNickname')

    if (localStorageEmail && localStorageEmail != "undefined") {
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
                    'email': localStorageEmail,
                    'password': localStoragePasswordHash,
                    'status': localStorageStatus,
                    'nickname': localStorageNickname
                })
            });

            if (response.ok) {
                console.log("Přihlášení stále aktivní");
                //Cookies - set expires
                var now = new Date();
                now.setMonth(now.getMonth() + 1);
                let expires = "expires=" + now;
                //Nastavení localStorage
                localStorage.setItem("userEmail",localStorageEmail)
                localStorage.setItem("userPasswordHash",localStoragePasswordHash)
                localStorage.setItem("userStatus",localStorageStatus)
                localStorage.setItem("userNickname",localStorageNickname)
                //Cookies - write
                document.cookie = "FNCuserEmail=" + localStorageEmail + ";" + expires;
                document.cookie = "FNCuserPasswordHash=" + localStoragePasswordHash + ";" + expires;
                document.cookie = "FNCuserStatus=" + localStorageStatus + ";" + expires;
                document.cookie = "FNCuserNickname=" + localStorageNickname + ";" + expires;
            } else if (response.status === 401) {
                console.log("Nesprávné přihlašovací údaje");
                //Nastavení localStorage
                localStorage.setItem("userEmail","undefined")
                localStorage.setItem("userPasswordHash","undefined")
                localStorage.setItem("userStatus","undefined")
                localStorage.setItem("userNickname","undefined")
                //Delete cookies
                document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
            } else if (response.status === 404) {
                console.log("Uživatel nenalezen");
                //Nastavení localStorage
                localStorage.setItem("userEmail","undefined")
                localStorage.setItem("userPasswordHash","undefined")
                localStorage.setItem("userStatus","undefined")
                localStorage.setItem("userNickname","undefined")
                //Delete cookies
                document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
            } else {
                console.log("Chyba při komunikaci s API");
                //Nastavení localStorage
                localStorage.setItem("userEmail","undefined")
                localStorage.setItem("userPasswordHash","undefined")
                localStorage.setItem("userStatus","undefined")
                localStorage.setItem("userNickname","undefined")
                //Delete cookies
                document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                $router.push('/ucet/prihlaseni')
            }
        } catch (err) {
            console.log(err);
            //Nastavení user-info
            localStorage.setItem("userEmail","undefined")
            localStorage.setItem("userPasswordHash","undefined")
            localStorage.setItem("userStatus","undefined")
            localStorage.setItem("userNickname","undefined")
            //Delete cookies
            document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            $router.push('/ucet/prihlaseni')
            throw err;
        }
    } else {
        console.log("Uživatel odhlášen");
        //Nastavení user-info
        localStorage.setItem("userEmail","undefined")
        localStorage.setItem("userPasswordHash","undefined")
        localStorage.setItem("userStatus","undefined")
        localStorage.setItem("userNickname","undefined")
        //Delete cookies
        document.cookie = "FNCuserEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        document.cookie = "FNCuserPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        document.cookie = "FNCuserStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        document.cookie = "FNCuserNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        $router.push('/ucet/prihlaseni')
    }
}