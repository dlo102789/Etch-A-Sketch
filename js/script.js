var numSquares = prompt("Enter a number between 16 and 64")

$(document).ready(function() {
	drawGrid(numSquares);
	var drawColor = 'grey'
	draw(drawColor)

	$('#colors').on('change', function() {
		$('.tile').css("background-color","white").removeClass("grey black blue red yellow").off()
		drawColor = $('#colors option:selected').val()
		console.log(drawColor)
		switch(drawColor) {
			case 'black':
				draw('black')
				break
			case 'blue':
				draw('blue')
				break
			case 'red':
				draw('red')
				break
			case 'yellow':
				draw('yellow')
				break
		}
	})

	$('#pickSize').on("click", function() {
		$('.container').empty()
		numSquares = prompt("Enter a number between 16 and 64")
		drawGrid(numSquares)
		draw(drawColor)
	})

})

var draw = function(color) {
	$('.tile').mouseenter(function() {
		$(this).addClass(color)
	})
}

var drawGrid = function(num) {

	for(var i = 0; i < num*num; i++) {
		$('.container').append('<div class="tile"></div>')
	}

	$('.tile').css({
		'width': $('.container').width()/num,
		'height': $('.container').height()/num
	})
}

