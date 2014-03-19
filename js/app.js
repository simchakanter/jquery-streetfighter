$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	})
	.mousedown(function() {
		//play hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		// show hadouken and animate to the right side of screen
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		// ryu goes back to steady position
	})
});