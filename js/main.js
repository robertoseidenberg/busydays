mode   = "dark"
lastid = "sunbath"

$(document).ready(function() {

	w = screen.width
	h = screen.height

	dh = h * window.devicePixelRatio;
	aa = h * 0.7
	$("img").css("height", h * 0.7);

	if (w < 400) {
		$("img").css("height", h * 0.8);
	 	updateCSSForMobile();
	}


	_mode   = Cookies.get('mode');
	_lastid = Cookies.get('lastid');
	if (_mode   !== undefined) { mode   = _mode;   }
	if (_lastid !== undefined) { lastid = _lastid; }

	$(".themeitem").click(function(){

		if (this.id == "mode") {
			mode == "light" ? mode = "dark" : mode = "light";
			Cookies.set('mode', mode);
			updateMode(mode);

		} else {
			lastid = this.id
			Cookies.set('lastid', lastid);
		}

		updateItems(lastid, mode);
    	return false;
	});

	updateMode(mode)
	updateItems(lastid, mode);
});

function updateCSSForMobile() {

	$("body").css("font-size", "24px");
	$("h3").css("font-size", "28px").css("text-align", "center").css("padding-left","0");
	$("h4").css("font-size", "24px").css("font-weight", 400);
	$("#navrow").addClass("techfeatureitem");

	$(".row").css("flex-flow", "column");
	$(".spacerrow").css("height", "0px");
	$(".rightheaderitem").css("margin-left", "0px")
	$(".themeitem").css("min-width", "30vw");

	$("#homelink").css("font-size", "28px").css("padding-bottom", "0px");

	$("#hero").html("A <b>straightforward</b> and <b>frictionless time tracker</b><br> that is <b>fun to use</b><br>and handles the<br>chores for you");
}

function updateMode(mode) {
	if (mode == "dark") { $("#mode").text("🌚 Dark mode") .css("background-color", "#FBFAFA"); }
	else				{ $("#mode").text("🌝 Light mode").css("background-color", "#FBFAFA"); }
}

function updateItems(id, mode) {

	$("#phoneimage").attr("src", path(id, mode));

	["#sunbath", "#toychest", "#paintpot", "#pencilbox", "#chalkhill", "#finedust", "#coalmine"].forEach(function (item, index) {
		$(item).css("border", "1px solid #EDEDED");
	});

	$("#"+id).css("border", "1px dashed #DD4C4F");

	if (id == "sunbath") {
		$('#succinct')	  .css("backgroundColor", "#ff414c").css("color", "white");
		$('#frictionless').css("backgroundColor", "#7da00e").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#7e5ab7").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#fc6602").css("color", "white");
	} else if (id == "toychest"  ) {
		$('#succinct')	  .css("backgroundColor", "#ef7457").css("color", "white");
		$('#frictionless').css("backgroundColor", "#2f5b7e").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#e6c35a").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#236969").css("color", "white");
	} else if (id == "paintpot") {
		$('#succinct')	  .css("backgroundColor", "#81bf40").css("color", "white");
		$('#frictionless').css("backgroundColor", "#67a3bc").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#d0915a").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#c697c0").css("color", "white");
	} else if (id == "pencilbox") {
		$('#succinct')	  .css("backgroundColor", "#f39831").css("color", "white");
		$('#frictionless').css("backgroundColor", "#62aa58").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#d77d9e").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#5883af").css("color", "white");
	} else if (id == "chalkhill") {
		$('#succinct')	  .css("backgroundColor", "#9977b4").css("color", "white");
		$('#frictionless').css("backgroundColor", "#f497aa").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#f9b48a").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#87b8e1").css("color", "white");
	} else if (id == "finedust") {
		$('#succinct')	  .css("backgroundColor", "#ae6177").css("color", "white");
		$('#frictionless').css("backgroundColor", "#7096a7").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#c6a476").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#7e9880").css("color", "white");
	} else if (id == "coalmine" ) {
		$('#succinct')	  .css("backgroundColor", "#222222").css("color", "white");
		$('#frictionless').css("backgroundColor", "#444444").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#444444").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#777777").css("color", "white");
	}
}

function path(name, mode) {
	return "assets/phone_" + name + "_" + mode + ".jpg";
}