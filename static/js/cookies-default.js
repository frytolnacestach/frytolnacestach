/* Cookies */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

if (document.cookie.indexOf("cookiesDialog=1") == -1) {
    gtag('consent', 'default', {
        'functionality_storage': 'granted',
        'security_storage': 'granted',
        'personalization_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
    });
}
/* END - Cookies */