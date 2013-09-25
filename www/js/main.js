function yes_coming() {
	var show_good = function() {
		$("#message p").text("! GREAT :) We'll meet you there for a great time");
	}
	hide_images(show_good);
}

function not_coming() {
	var show_bad = function() {
		$("#message p").text(":( We are sad you couln't make it, but your place is here for next time");
	}
	hide_images(show_bad);
}

function hide_images(callback) {
	$("#details img").animate({
		left: -300,
		top: -300
	}, 1000);
	callback();
	$("#message").css("visibility","visible");
	$("#message").animate({ top: 0 }, 500);
}