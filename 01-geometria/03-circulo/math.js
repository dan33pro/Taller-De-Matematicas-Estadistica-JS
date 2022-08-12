let calcular = document.querySelector('.btn');
let entrada = document.querySelector('#radio');
let salida = document.querySelector('.resultado');
let radio = 0;
let diametro = 0;

entrada.addEventListener('change', updateLado);
calcular.addEventListener('click', calc);

function calc() {
    salida.innerHTML = '';
    let myP = document.createElement('p');
    myP.innerText = 'Circunferencia: ' + (diametro*Math.PI).toFixed(3) + ' cm';
    
    let myA = document.createElement('p');
    myA.innerText = 'Area: ' + ((radio**2)*Math.PI).toFixed(3) + ' cm^2';

    salida.append(myP);
    salida.append(myA);
}

function updateLado() {
    radio = parseInt(entrada.value, 10);
    diametro = radio*2;
}