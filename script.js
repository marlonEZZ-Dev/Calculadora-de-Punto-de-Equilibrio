// script.js
// (function (){
// 	console.dir(document.getElementById("cbxTime"));
// 	const m = periodos.get("month")
// 	console.log(`value 0: ${m[0]} value 1: ${m[1]}`);
// }
// )();

function calcular() {
		// Obtener los valores de los campos del formulario
		const precio = document.getElementById("txfPrice").value;
		
		const costoProduccion = document.getElementById("txfCostProduction").value;
		
		const costoFijo = document.getElementById("txfCostFixed").value;
		
		const tiempo = document.getElementById("cbxTime").value
		const periodoTiempo = periodos.get(tiempo);
		
		const MENSAJE = 'Por favor, Ingrese los números separados por ";"\nademás los números ingresados deben ser positivos';
	
		// Validar los datos		
		validaNumero({
			numero: precio, 
			mensaje: 'Por favor, ingrese un valor numérico positivo para el ingreso por unidad.'
		});
		
		validaNumero({
			numero: obtenSuma(costoProduccion),
			mensaje: MENSAJE
		});
		
		validaNumero({
			numero: obtenSuma(costoFijo),
			mensaje: MENSAJE
		});
	
		// Calcular el punto de equilibrio
		const puntoEquilibrioUnidades = costoFijo / (precio - costoProduccion);
		const puntoEquilibrioValor = puntoEquilibrioUnidades * precio;
	
		// Mostrar el resultado
		document.getElementById("showUnities").textContent = `${(puntoEquilibrioUnidades/periodoTiempo[0]).toFixed(2)}`;

		document.getElementById('showValue').textContent = `$${(puntoEquilibrioValor/periodoTiempo[0]).toFixed(2)} en un lapso de ${periodoTiempo[1]}`;
		
		// Crear el gráfico
		const ctx = document.getElementById('myChart').getContext('2d');
	
		const unidades = Array.from({length: puntoEquilibrioUnidades}, (_, i) => i + 1);
		const ingresos = unidades.map(unidad => unidad * precio);
		const costosTotales = unidades.map(unidad => costoFijo + (costoProduccion * unidad));
		
		const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: unidades,
			datasets: [
			{
				label: 'Ingresos',
				data: ingresos,
				borderColor: 'blue',
				borderWidth: 2,
				fill: false
			},
			{
				label: 'Costos Totales',
				data: costosTotales,
				borderColor: 'red',
				borderWidth: 2,
				fill: false
			}
			]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}
