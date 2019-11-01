mode   = "mode_light"
lastid = "theme_solarsystem"
lastfeatureid = "monthlycalendar"
lastsimplefeatureid = "widget"

$(document).ready(function() {

	w = screen.width
	h = screen.height

	dh = h * window.devicePixelRatio;
	aa = h * 0.7
	// $("img").css("height", h * 0.7);

	if (w < 400) {
		$("#phoneimage").css("height", h * 0.8);
	 	updateCSSForMobile();
	}

	_mode   = Cookies.get('mode');
	_lastid = Cookies.get('lastid');
	if (_mode   !== undefined) { mode   = _mode;   }
	if (_lastid !== undefined) { lastid = _lastid; }

	confetti();

	$(".themeitem").click(function(){

		if ((this.id == "mode_light") || (this.id == "mode_dark") || (this.id == "mode_medium")) {
			Cookies.set('mode', this.id);
      mode = this.id;
      updateMode(this.id);
		} else {
      lastid = this.id
    }

		updateThemeItems(lastid, mode);
    return false;
	});

	$(".featureitem").click(function(){
		lastfeatureid = this.id;
		updateFeatureItems(lastfeatureid, mode, lastid);
    	return false;
	});

	$(".simplefeatureitem").click(function(){
		lastsimplefeatureid = this.id;
		updateSimpleFeatureItems(lastsimplefeatureid);
    	return false;
	});

	updateMode(mode);
	updateThemeItems(lastid, mode);
	updateFeatureItems(lastfeatureid, mode, lastid);
	updateSimpleFeatureItems(lastsimplefeatureid);
});

$(window).on('resize', function(){
});

function updateCSSForMobile() {

	$("body").css("font-size", "24px");
	$("h3").css("font-size", "28px")
	$("h4").css("font-size", "24px").css("font-weight", 400);
	$("#navrow").addClass("techfeatureitem");

	$(".row").css("flex-flow", "column");
	$(".spacerrow").css("height", "0px");
	$(".rightheaderitem").css("margin-left", "0px")
	$(".themeitem").css("min-width", "30vw");

	$("#homelink").css("font-size", "28px").css("padding-bottom", "0px");
}

function updateMode(mode) {
	var phone = $("#phoneimage");
  var top = phone.offset().top;
  var height = phone.height();
  var topbar = height * 0.283;

  ["mode_light", "mode_dark", "mode_medium"].forEach(function (item, index) {
    $("#"+item).css("border", "1px solid #EDEDED");
  });

  $("#"+mode).css("border", "1px dashed #DD4C4F");

  $(".blackbar").css("left", 0);
  $(".blackbar").css("width", window.innerWidth);
  $(".blackbar").css("height", top + topbar);
  $(".blackbar").css("z-index", -1);
}

function updateThemeItems(id, mode) {

	$("#phoneimage").attr("src", heropath(id, mode));


	["theme_solarsystem", "theme_wallpaper", "theme_textmarker", "theme_icecream", "theme_stickynote", "theme_dust"].forEach(function (item, index) {
		$("#"+item).css("border", "1px solid #EDEDED");
	});

	$("#"+id).css("border", "1px dashed #DD4C4F");

	if (id == "theme_solarsystem") {
		$('#succinct')	  .css("backgroundColor", "#ff414c").css("color", "white");
		$('#frictionless').css("backgroundColor", "#7da00e").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#7e5ab7").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#fc6602").css("color", "white");
	} else if (id == "theme_wallpaper"  ) {
		$('#succinct')	  .css("backgroundColor", "#ef7457").css("color", "white");
		$('#frictionless').css("backgroundColor", "#2f5b7e").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#e6c35a").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#236969").css("color", "white");
	} else if (id == "theme_textmarker") {
		$('#succinct')	  .css("backgroundColor", "#f39831").css("color", "white");
		$('#frictionless').css("backgroundColor", "#62aa58").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#d77d9e").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#5883af").css("color", "white");
	} else if (id == "theme_icecream") {
		$('#succinct')	  .css("backgroundColor", "#9977b4").css("color", "white");
		$('#frictionless').css("backgroundColor", "#f497aa").css("color", "white");
		$('#ubiquitous')  .css("backgroundColor", "#f9b48a").css("color", "white");
		$('#friendly')	  .css("backgroundColor", "#87b8e1").css("color", "white");
	} else if (id == "theme_stickynote") {
		$('#succinct')	  .css("backgroundColor", "#f28b84").css("color", "#444");
		$('#frictionless').css("backgroundColor", "#cdff90").css("color", "#444");
		$('#ubiquitous')  .css("backgroundColor", "#aec9fa").css("color", "#444");
		$('#friendly')	  .css("backgroundColor", "#fff476").css("color", "#444");
	} else if (id == "theme_dust") {
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

function updateFeatureItems(id, mode, theme) {

	$("#featurephoneimage").attr("src", featurepath(id, mode, theme));

	["monthlycalendar", "timer", "tasks", "projects", "clients"].forEach(function (item, index) {
		$("#" + item).css("border", "1px solid #EDEDED");
	});

	$("#"+id).css("border", "1px dashed #DD4C4F");
}

function updateSimpleFeatureItems(id) {

	console.log("assets/features/" + id + "/phone.jpg")

	$(".simlefeature").attr("src", "assets/features/" + id + "/phone.jpg");

	["widget", "timesheets", "backup", "print", "export"].forEach(function (item, index) {
		$("#" + item).css("border", "1px solid #EDEDED");
	});

	$("#"+id).css("border", "1px dashed #DD4C4F");
}

function heropath(name, mode) {
	return "assets/hero/" + mode.substr(5) + "_" + name.substr(6) + ".png";
}

function featurepath(name) {
	return "assets/features/" + name + ".jpg";
}