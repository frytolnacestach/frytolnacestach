/*list js class for cookies dialog*/
//js_cookies-edit
//js_o-popup-cookies
//js_o-popup-cookies__button--setting
//js_o-popup-cookies__button--all
//js_o-popup-cookies__button--technical
//js_o-popup-cookies__button--select
//js_o-popup-cookies__setting--user
//js_o-popup-cookies__setting--statistic
//js_o-popup-cookies__setting--marketing
//js_o-popup-cookies__page--welcome
//js_o-popup-cookies__page--setting



//--------------
//FUNCTIONS

// Vytvoření cookies
function cookiesCreate() {
	var now = new Date();
	now.setMonth(now.getMonth() + 1);
	var expires = "expires=" + now.toUTCString();
	document.cookie = "FNCcookiesDialog=1;" + expires;
}

// Vytvoření cookies s typem
function cookiesCreateType(type) {
	var now = new Date();
	now.setMonth(now.getMonth() + 1);
	var expires = "expires=" + now.toUTCString();
	document.cookie = "FNCcookies" + type + "=1;" + expires;
}

// Smazání cookies s typem
function cookiesDeleteType(type) {
	document.cookie = "FNCcookies" + type + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

// Zobrazení dialogového okna cookies
function cookiesDialog() {
	if (document.cookie.indexOf("FNCcookiesDialog=1") == -1) {
		var popupCookies = document.querySelector(".js_o-popup-cookies");
		popupCookies.classList.add("open");
	}
}


// Ovládání vlastních cookies
function cookiesCustom() {
	var number = 0;
	var status1 = document.querySelector(".js_o-popup-cookies__setting--user").getAttribute("data-c-user");
	if (status1 == "on") {
		number++;
	}
	var status2 = document.querySelector(".js_o-popup-cookies__setting--statistic").getAttribute("data-c-statistic");
	if (status2 == "on") {
		number++;
	}
	var status3 = document.querySelector(".js_o-popup-cookies__setting--marketing").getAttribute("data-c-marketing");
	if (status3 == "on") {
		number++;
	}

	if (number == 0) {
		var buttonSelect = document.querySelector(".js_o-popup-cookies__button--select");
		buttonSelect.classList.remove("show");
		var buttonTechnical = document.querySelector(".js_o-popup-cookies__button--technical");
		buttonTechnical.classList.add("show");
	} else {
		var buttonTechnical = document.querySelector(".js_o-popup-cookies__button--technical");
		buttonTechnical.classList.remove("show");
		var buttonSelect = document.querySelector(".js_o-popup-cookies__button--select");
		buttonSelect.classList.add("show");
	}
}



//--------------
//INITIALIZATION

//Initialization
if (document.cookie.indexOf("FNCcookiespersonalization_storage=1") == -1) {
	document.querySelector(".js_o-popup-cookies__setting--user").setAttribute('data-c-user', 'off');
	document.querySelector(".js_o-popup-cookies__setting--user").classList.add('off');
} else {
	document.querySelector(".js_o-popup-cookies__setting--user").setAttribute('data-c-user', 'on');
	document.querySelector(".js_o-popup-cookies__setting--user").classList.add('on');
}

if (document.cookie.indexOf("FNCcookiesanalytics_storage=1") == -1) {
	document.querySelector(".js_o-popup-cookies__setting--statistic").setAttribute('data-c-statistic', 'off');
	document.querySelector(".js_o-popup-cookies__setting--statistic").classList.add('off');
} else {
	document.querySelector(".js_o-popup-cookies__setting--statistic").setAttribute('data-c-statistic', 'on');
	document.querySelector(".js_o-popup-cookies__setting--statistic").classList.add('on');
}

if (document.cookie.indexOf("FNCcookiesad_storage=1") == -1) {
	document.querySelector(".js_o-popup-cookies__setting--marketing").setAttribute('data-c-marketing', 'off');
	document.querySelector(".js_o-popup-cookies__setting--marketing").classList.add('off');
} else {
	document.querySelector(".js_o-popup-cookies__setting--marketing").setAttribute('data-c-marketing', 'on');
	document.querySelector(".js_o-popup-cookies__setting--marketing").classList.add('on');
}

cookiesDialog();
cookiesCustom();



//--------------
//ACTIONS

//Přijmám vše
document.querySelector(".js_o-popup-cookies__button--all").addEventListener('click', function() {
	document.querySelector(".js_o-popup-cookies").classList.remove('open');
	document.querySelector("html").classList.remove('no-scroll-bg');
	document.querySelector("body").classList.remove('no-scroll-bg');
	document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
	document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');

	let buttonChangeUser = document.querySelector('.js_o-popup-cookies__setting--user');
	buttonChangeUser.dataset.cUser = 'on';
	buttonChangeUser.classList.add('on');

	let buttonChangeStatistic = document.querySelector('.js_o-popup-cookies__setting--statistic');
	buttonChangeStatistic.dataset.cStatistic = 'on';
	buttonChangeStatistic.classList.add('on');

	let buttonChangeMarketing = document.querySelector('.js_o-popup-cookies__setting--marketing');
	buttonChangeMarketing.dataset.cMarketing = 'on';
	buttonChangeMarketing.classList.add('on');

	gtag('consent', 'update', {
		'functionality_storage': 'granted',
		'security_storage': 'granted',
		'personalization_storage': 'granted',
		'analytics_storage': 'granted',
		'ad_storage': 'granted'
	});
	cookiesCreateType("personalization_storage");
	cookiesCreateType("analytics_storage");
	cookiesCreateType("ad_storage");

	cookiesCreate();
});

//Přijmám vše-detail
document.querySelector(".js_o-popup-cookies__button--all-detail").addEventListener('click', function() {
	document.querySelector(".js_o-popup-cookies").classList.remove('open');
	document.querySelector("html").classList.remove('no-scroll-bg');
	document.querySelector("body").classList.remove('no-scroll-bg');
	document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
	document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');

	let buttonChangeUser = document.querySelector('.js_o-popup-cookies__setting--user');
	buttonChangeUser.dataset.cUser = 'on';
	buttonChangeUser.classList.add('on');

	let buttonChangeStatistic = document.querySelector('.js_o-popup-cookies__setting--statistic');
	buttonChangeStatistic.dataset.cStatistic = 'on';
	buttonChangeStatistic.classList.add('on');

	let buttonChangeMarketing = document.querySelector('.js_o-popup-cookies__setting--marketing');
	buttonChangeMarketing.dataset.cMarketing = 'on';
	buttonChangeMarketing.classList.add('on');
	
	gtag('consent', 'update', {
		'functionality_storage': 'granted',
		'security_storage': 'granted',
		'personalization_storage': 'granted',
		'analytics_storage': 'granted',
		'ad_storage': 'granted'
	});
	cookiesCreateType("personalization_storage");
	cookiesCreateType("analytics_storage");
	cookiesCreateType("ad_storage");

	cookiesCreate();
});

//Upravit preference
document.querySelector(".js_o-popup-cookies__button--setting").addEventListener('click', function() {
	document.querySelector(".js_o-popup-cookies__page--welcome").classList.remove('open');
	document.querySelector(".js_o-popup-cookies__page--setting").classList.add('open');
	this.dataset.cookiesSetting = 'visible';
	document.querySelector("html").classList.add('no-scroll-bg');
	document.querySelector("body").classList.add('no-scroll-bg');
});

// Povolit pouze nezbytné
document.querySelector(".js_o-popup-cookies__button--technical").addEventListener("click", function() {
	document.querySelector(".js_o-popup-cookies").classList.remove('open');
	document.querySelector("html").classList.remove('no-scroll-bg');
	document.querySelector("body").classList.remove('no-scroll-bg');
	document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
	document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');

	gtag('consent', 'update', {
		'functionality_storage': 'granted',
		'security_storage': 'granted',
		'personalization_storage': 'denied',
		'analytics_storage': 'denied',
		'ad_storage': 'denied'
	});

	cookiesCreate();
});

// Povolit vybrané
document.querySelector(".js_o-popup-cookies__button--select").addEventListener("click", function() {
	document.querySelector(".js_o-popup-cookies").classList.remove('open');
	document.querySelector("html").classList.remove('no-scroll-bg');
	document.querySelector("body").classList.remove('no-scroll-bg');
	document.querySelector(".js_o-popup-cookies__page--setting").classList.remove('open');
	document.querySelector(".js_o-popup-cookies__page--welcome").classList.add('open');
});


// Form - Preferenční
document.querySelectorAll('.js_o-popup-cookies__setting--user').forEach(function(el) {
	el.addEventListener('click', function() {
		var status = el.getAttribute('data-c-user');
		if (status == "off") {
			el.setAttribute('data-c-user', 'on');
			el.classList.add('on');
			gtag('consent', 'update', {
				'personalization_storage': 'granted'
			});
			cookiesCreateType('personalization_storage');
		} else {
			el.setAttribute('data-c-user', 'off');
			el.classList.remove('on');
			gtag('consent', 'update', {
				'personalization_storage': 'denied'
			});
			cookiesDeleteType('personalization_storage');
		}
		cookiesCustom();
		cookiesCreate();
	});
});


//Form - Statistické
document.querySelector(".js_o-popup-cookies__setting--statistic").addEventListener("click", function() {
	var status = this.getAttribute("data-c-statistic");

	if (status == "off") {
		this.setAttribute("data-c-statistic", "on");
		this.classList.add("on");
		gtag('consent', 'update', {
			'analytics_storage': 'granted'
		});
		cookiesCreateType("analytics_storage");
	} else {
		this.setAttribute("data-c-statistic", "off");
		this.classList.remove("on");
		gtag('consent', 'update', {
			'analytics_storage': 'denied'
		});
		cookiesDeleteType("analytics_storage");
	}

	cookiesCustom();
	cookiesCreate();
});


//Form - Marketingové
document.querySelector(".js_o-popup-cookies__setting--marketing").addEventListener("click", function() {
	var status = this.getAttribute("data-c-marketing");

	if (status == "off") {
		this.setAttribute("data-c-marketing", "on");
		this.classList.add("on");
		gtag("consent", "update", {
			"ad_storage": "granted"
		});
		cookiesCreateType("ad_storage");
	} else {
		this.setAttribute("data-c-marketing", "off");
		this.classList.remove("on");
		gtag("consent", "update", {
			"ad_storage": "denied"
		});
		cookiesDeleteType("ad_storage");
	}

	cookiesCustom();
	cookiesCreate();
});

//Cookies edit
document.querySelector(".js_cookies-edit").addEventListener("click", function() {
    document.querySelector(".js_o-popup-cookies").classList.add("open");
});