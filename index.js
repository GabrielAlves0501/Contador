const contador = document.getElementById('contador');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let valor = 0;

increase.addEventListener("click", function(){   
    valor++;
    contador.textContent = valor;
})

reset.addEventListener("click", function(){
    valor = 0;
    contador.textContent = valor;
})

decrease.addEventListener("click", function(){
    if(valor > 0){
        valor--;
        contador.textContent = valor;
    }    
})