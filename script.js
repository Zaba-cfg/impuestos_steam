let calculo = 0
let inicio = Number(0)

let inputCalculo = document.getElementById("inputCalculadora")

inputCalculo.oninput = () => {
   let calculo = inputCalculo.value * 1.75
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
<h2 id= "resultadoCalculadora">${calculo} ARS$</h2>
<p>Impuestos calculados al 75% (actual)</p>
`
   contenedorCalculos.append(mostrarCalculo)
}
