// Carga la primera (IMG+Bolita)
$(document).ready(function() {
	$('#slide-1').show();
	$('#nav-1').addClass('active-cd');
// Al pulsar el botón next	
$('.next').click(function() {
	var actual = $('.slides li:visible');
	var siguiente = actual.next();
	var circuloActual = $('.active-cd');
	var siguienteCirculo = circuloActual.next();
		// Si llega a la primera posición vuelve a la inicial (IMG+Bolita)
		if (siguiente.length == 0) {
			siguiente = $('#slide-1');
		}

		if (siguienteCirculo.length == 0) {
			siguienteCirculo = $('#nav-1');
		}

		actual.hide();
		circuloActual.removeClass('active-cd');
		siguiente.show();
		siguienteCirculo.addClass('active-cd');
	});

//Definir un intervalo de tiempo para qu ejecute la función next

function siguienteSlide(){
	var actual = $('.slides li:visible');
	var siguiente = actual.next();
	var circuloActual = $('.active-cd');
	var siguienteCirculo = circuloActual.next();

	if (siguiente.length == 0) {
		siguiente = $('#slide-1');
	}

	if (siguienteCirculo.length == 0) {
		siguienteCirculo = $('#nav-1');
	}

	actual.fadeOut();
	circuloActual.removeClass('active-cd');
	siguiente.fadeIn();
	siguienteCirculo.addClass('active-cd');
}

var intervalo = setInterval(siguienteSlide, 2000);

//detener el slideshow al pasar el ratón por encima "mouseenter"
$('.slideshow').mouseenter(function(){
	clearInterval(intervalo);
});

$('.slideshow').mouseleave (function() {
	intervalo=setInterval(siguienteSlide,2000);
});


// Al pulsar el botón previo
$('.prev').click(function() {
	var actual = $('.slides li:visible');
	var anterior = actual.prev();
	var circuloActual = $('.active-cd');
	var anteriorCirculo = circuloActual.prev();
		// Si llega a la primera posición vuelve a la final (IMG+Bolita)
		if (anterior.length == 0) {
			anterior = $('#slide-4');
		}
		if (anteriorCirculo.length ==0) {
			anteriorCirculo = $ ('#nav-4');
		}

		actual.hide();
		circuloActual.removeClass('active-cd');
		anterior.show();
		anteriorCirculo.addClass('active-cd');
	});
// Al hacer clic sobre la bolas cambia la imagen
$('.nav li').click(function() {
	$('.active-cd').removeClass('active-cd');
	$('.slides li:visible').hide();
	$(this).addClass('active-cd');
	var indice = $(this).data('cd');
	$('.slides li[data-n='+indice+']').show();
});

});








