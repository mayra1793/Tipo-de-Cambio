window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var cambio = parseFloat(document.getElementById("cambio").value);
		var soles = parseInt(document.getElementById("soles").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<h3>Tu cambio es " + multiplicar(cambio,soles) + "</h3>";
	});

	function multiplicar(cambio, soles) {
		return (cambio * soles).toFixed(2);
	}
});