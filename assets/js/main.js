$(document).ready(function () {
	function fisttwolines (element, lines) {
		$(element).each(function () {
			var lineheight = parseInt($(this).css("line-height"));
			var lineCount = lines;
			lineheight *= lineCount;
			$(this).css("height", lineheight + "px");
		})
	}
	fisttwolines('.justline-2', 2);
	function showDropdown (element) {
		$(element).each(function () {
			$(this).mouseenter(function () {
				$(this).addClass('open');
			})
			$(this).mouseleave(function () {
				$(this).removeClass('open');
			})
		})
	}
	showDropdown('.dropdown')
})