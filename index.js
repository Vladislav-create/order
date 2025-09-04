const elemOutput = document.getElementById("rangeValue")
const elemInput = document.getElementById("myRange")
elemInput.addEventListener("input", ()=>{elemOutput.textContent = elemInput.value + " %"})