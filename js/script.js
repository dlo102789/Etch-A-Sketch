var numSquares = prompt("Enter a number between 16 and 64")

$(document).ready(function() {
	for(var i = 0; i < numSquares*numSquares; i++) {
		$('.container').append('<div class="tile"></div>')
	}

	$('.tile').css({
		'width': $('.container').width()/numSquares,
		'height': $('.container').height()/numSquares
	})

	$('.tile').mouseenter(function() {
		$(this).addClass("grey")
	})

})

