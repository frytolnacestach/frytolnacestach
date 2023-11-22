export async function loginCheckLogoutInfo($router) {
    const localStorageEmail = localStorage.getItem("accountEmail")
    const localStoragePasswordHash = localStorage.getItem("accountPasswordHash")
    const localStorageStatus = localStorage.getItem("accountStatus")
    const localStorageNickname = localStorage.getItem("accountNickname")

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
                localStorage.setItem("accountEmail",localStorageEmail)
                localStorage.setItem("accountPasswordHash",localStoragePasswordHash)
                localStorage.setItem("accountStatus",localStorageStatus)
                localStorage.setItem("accountNickname",localStorageNickname)
                //Cookies - write
                document.cookie = "FNCaccountEmail=" + localStorageEmail + ";" + expires;
                document.cookie = "FNCaccountPasswordHash=" + localStoragePasswordHash + ";" + expires;
                document.cookie = "FNCaccountStatus=" + localStorageStatus + ";" + expires;
                document.cookie = "FNCaccountNickname=" + localStorageNickname + ";" + expires;
                return true;
            } else if (response.status === 401) {
                console.log("Nesprávné přihlašovací údaje");
                //Nastavení localStorage
                localStorage.setItem("accountEmail","undefined")
                localStorage.setItem("accountPasswordHash","undefined")
                localStorage.setItem("accountStatus","undefined")
                localStorage.setItem("accountNickname","undefined")
                //Delete cookies
                document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            } else if (response.status === 404) {
                console.log("Uživatel nenalezen");
                //Nastavení localStorage
                localStorage.setItem("accountEmail","undefined")
                localStorage.setItem("accountPasswordHash","undefined")
                localStorage.setItem("accountStatus","undefined")
                localStorage.setItem("accountNickname","undefined")
                //Delete cookies
                document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            } else {
                console.log("Chyba při komunikaci s API");
                //Nastavení localStorage
                localStorage.setItem("accountEmail","undefined")
                localStorage.setItem("accountPasswordHash","undefined")
                localStorage.setItem("accountStatus","undefined")
                localStorage.setItem("accountNickname","undefined")
                //Delete cookies
                document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }
        } catch (err) {
            console.log(err);
            //Nastavení user-info
            localStorage.setItem("accountEmail","undefined")
            localStorage.setItem("accountPasswordHash","undefined")
            localStorage.setItem("accountStatus","undefined")
            localStorage.setItem("accountNickname","undefined")
            //Delete cookies
            document.cookie = "FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            throw err;
        }
    }
}