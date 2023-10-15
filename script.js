let calculo = 0
let inicio = Number(0)

let inputCalculo = document.getElementById("inputCalculadora")

inputCalculo.oninput = () => {
   let calculo = inputCalculo.value * 2
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
<p id="informacion">Impuestos calculados al 100% (actual)</p>
<p id="informacion2">El doble papi no es tan difícil</p>
`
   contenedorCalculos.append(mostrarCalculo)
}
