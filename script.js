let calculo = 0
let inicio = Number(0)

let inputCalculo = document.getElementById("inputCalculadora")

inputCalculo.oninput = () => {
   let calculo = inputCalculo.value * 1382.4
   if (Number.isNaN(calculo)) {
      calculo = 0
   }
   renderizarCalculo(calculo)
}

function renderizarCalculo(calculo) {
   contenedorCalculos.innerHTML = ""
   let mostrarCalculo = document.createElement("div")
   mostrarCalculo.className = "producto"
   mostrarCalculo.innerHTML = `
<h2 id="resultadoCalculadora">${calculo} ARS$</h2>
<p id="informacion">Impuestos calculados al Dólar tarjeta</p>
<p id="informacion2">$1382.40 (6/3/24)</p>
<div><iframe id="cotiza" style="margin-top:40px;display:flex;justify-content:center;" src="https://dolarhoy.com/i/cotizaciones/dolar-tarjeta" frameborder="0"></iframe></div>
`
   contenedorCalculos.append(mostrarCalculo)
}
