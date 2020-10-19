var w = document.querySelector("nav").style.width;
var open = w !== 0;
function nav() {
	if (window.innerHeight > window.innerWidth) {
		if (open) {
			document.querySelector("nav").style.width = "0";
		}
		else {
			document.querySelector("nav").style.width = "fit-content";
		}
		open = !open;
	}
}