function open_nav(e) {
	e.classList.toggle("show");

	var nav = document.getElementById('header'),
	Style = window.getComputedStyle(nav),
	left = Style.getPropertyValue("width");

	if(left == '0px'){
		nav.style.width = "50%";
	} else {
		nav.style.width = "0px";
	}
} 
