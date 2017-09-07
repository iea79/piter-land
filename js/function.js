$(document).ready(function() {

    if (!('flex' in document.documentElement.style)) {
		var not_flex = true;
    }

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	dateReplace()
	$(window).resize(function(){
		setHeiHeight();
		dateReplace();
	}); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

    if (not_flex) {
		setEqualHeight();
    }

});

function setEqualHeight() {
	var tallestcolumn = 0;
	var columns = $('.comand .grid__item');
	columns.each( function() {
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn) {
			tallestcolumn = currentHeight;
		}
	});
	columns.css({
		minHeight: tallestcolumn
	});
}

function dateReplace() {
	if ($(window).width() < 768 ) {
		$('.first__screen_right').insertAfter('.first__screen_center');
	} else {
		$('.first__screen_right').insertBefore('.first__screen_center');
	}
}
