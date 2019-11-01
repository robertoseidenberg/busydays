mode   = "modemedium"
lastid = "sunbath"
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
	//setTimeout(function() { confetti(); }, 5000);

	$(".themeitem").click(function(){

		if ((this.id == "modelight") || (this.id == "modedark") || (this.id == "modemedium")) {
			Cookies.set('mode', this.id);
			updateMode(this.id);

		}

		updateThemeItems(lastid, mode);
		updateFeatureItems(lastfeatureid, mode, lastid);
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

	updateBlackbar()
});

$(window).on('resize', function(){
      updateBlackbar(false);
});

function updateBlackbar(isHidden) {

	var phone = $("#phoneimage");
	var top = phone.offset().top;
	var height = phone.height();
	var topbar = height * 0.283;


	if (isHidden) {
		$(".blackbar").css("background-color", "white");
	} else {
		$(".blackbar").css("background-color", "#fafafa");
	}


	$(".blackbar").css("left", 0);
	$(".blackbar").css("width", window.innerWidth);
	$(".blackbar").css("height", top + topbar);
	$(".blackbar").css("z-index", -1);

}

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
}

function updateMode(mode) {
	if      (mode == "modelight" ) { updateBlackbar(false); }
	else if	(mode == "modedark"  ) { updateBlackbar(true);  }
	else if (mode == "modemedium") { updateBlackbar(false); }

}

function updateThemeItems(id, mode) {

	$("#phoneimage").attr("src", heropath(id, mode));

	["#sunbath", "#toychest", "#paintpot", "#pencilbox", "#chalkhill", "#keep", "#finedust", "#coalmine"].forEach(function (item, index) {
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
	} else if (id == "keep") {
		$('#succinct')	  .css("backgroundColor", "#f28b84").css("color", "#444");
		$('#frictionless').css("backgroundColor", "#cdff90").css("color", "#444");
		$('#ubiquitous')  .css("backgroundColor", "#aec9fa").css("color", "#444");
		$('#friendly')	  .css("backgroundColor", "#fff476").css("color", "#444");
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
	return "assets/hero/" + mode + "/" + name + ".png";
}

function featurepath(name, mode, theme) {
	return "assets/features/" + name + "/" + mode + "/" + theme + ".jpg";
}

var onlyOnKonami = false;

function confetti() {
  // Globals
  var $window = $(window)
    , random = Math.random
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    , pointer = 0;

  var particles = 150
    , spread = 160
    , sizeMin = 3
    , sizeMax = 6 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function() {
      return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
    }, function() {
      var black = 200 * random()|0; return color(200, black, black);
    }, function() {
      var black = 200 * random()|0; return color(black, 200, black);
    }, function() {
      var black = 200 * random()|0; return color(black, black, 200);
    }, function() {
      return color(200, 100, 200 * random()|0);
    }, function() {
      return color(200 * random()|0, 200, 200);
    }, function() {
      var black = 256 * random()|0; return color(black, black, black);
    }, function() {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function() {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function() {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgba(' + r + ',' + g + ',' + b + ', .5)';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1-cos(PI*t))/2 * (b-a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1/eccentricity, radius2 = radius+radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i+1], interval = b-a;
        if (dart < measure+interval) {
          spline.push(dart += a-measure);
          break;
        }
        measure += interval;
      }
      c = dart-radius, d = dart+radius;

      // Update the domain
      for (i = domain.length-1; i > 0; i -= 2) {
        l = i-1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i+1]-domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top      = '0';
  container.style.left     = '0';
  container.style.width    = '100%';
  container.style.height   = '0';
  container.style.overflow = 'visible';
  container.style.zIndex   = '-1';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width  = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top  = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function(height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top  = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height+deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random()|0 : 0]
        , count = 0;
      (function addConfetto() {
        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length-1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function(event) {
    pointer = konami[pointer] === event.which
      ? pointer+1
      : +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
}

