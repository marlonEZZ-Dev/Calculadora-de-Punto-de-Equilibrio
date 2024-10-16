// script.js
const validaNumero = ({numero, mensaje}) => {
    if (isNaN(numero) || numero <= 0) {
        alert(mensaje);
        return;
    }
    return
}

const validaRestaNatural = ({a=1,b=0,mensaje="No hay mensaje"}) => {
    if(a < b){
        alert(mensaje)
        return
    }
    return
}

const obtenSuma = texto => {
    const arr = []
    texto = texto.trim()
    if(texto.includes(";")){
        arr = texto.join(";")
        arr.forEach(element => {
            element = parseFloat(element)
        });
        return arr.reduce((acc,curr) => acc + curr, 0)
    }
    return parseFloat(texto)
}

function calcular() {
    const periodosTiempo = new Map()
    periodoTiempo.set("month",30)
    periodoTiempo.set("trimester",90)
    periodoTiempo.set("semester",123)
    periodoTiempo.set("yearly",365)
    // Obtener los valores de los campos del formulario
    const form = document.forms[0]
    const precio = form.elements["txfPrice"]
    const costoProduccion = form.elements["txfCostProduction"]
    const costoFijo = form.elements["txfCostFixed"]
    const periodoTiempo = periodosTiempo.get(form.elements["cbxTime"])
    const MENSAJE = 'Por favor, Ingrese los números separados por ";"\nademás los números ingresados deben ser positivos'
    
    // Validar los datos
    validaNumero({
        numero: precio, 
        mensaje: 'Por favor, ingrese un valor numérico positivo para el ingreso por unidad.'
        })
    validaNumero({
        numero: obtenSuma(costoProduccion),
        mensaje: MENSAJE
    })
    validaNumero({
        numero: obtenSuma(costoFijo),
        mensaje: MENSAJE
    })

    // Calcular el punto de equilibrio
    const puntoEquilibrioUnidades = costoFijo / (precio - costoProduccion);
    const puntoEquilibrioValor = puntoEquilibrioUnidades * precio;

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `El punto de equilibrio es de ${puntoEquilibrioUnidades.toFixed(2)} unidades o $${puntoEquilibrioValor.toFixed(2)}`;

    // Crear el gráfico
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        
    });
}