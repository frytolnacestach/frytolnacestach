window.addEventListener("load", mIconSearch);

function mIconSearch() {
	var iconSearch = document.querySelector(".js_m-icon-search__icon");
	var iconSearchClose = document.querySelector(".js_o-popup-search__close");

	iconSearch.addEventListener("click", function() {
		document.querySelector(".js_o-popup-search").classList.add("open");
		document.documentElement.classList.add("no-scroll");
		document.body.classList.add("no-scroll");
	});

	iconSearchClose.addEventListener("click", function() {
		document.querySelector(".js_o-popup-search").classList.remove("open");
		document.documentElement.classList.remove("no-scroll");
		document.body.classList.remove("no-scroll");
	});
}