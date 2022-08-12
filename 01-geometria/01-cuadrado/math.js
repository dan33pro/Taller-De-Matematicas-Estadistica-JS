let calcular = document.querySelector('.btn');
let entrada = document.querySelector('#lado');
let salida = document.querySelector('.resultado');
let lado = 0;

entrada.addEventListener('change', updateLado);
calcular.addEventListener('click', calc);

function calc() {
    salida.innerHTML = '';
    let myP = document.createElement('p');
    myP.innerText = 'Perimetro: ' + lado*4;
    
    let myA = document.createElement('p');
    myA.innerText = 'Area: ' + lado*lado;

    salida.append(myP);
    salida.append(myA);
}

function updateLado() {
    lado = parseInt(entrada.value, 10);
}