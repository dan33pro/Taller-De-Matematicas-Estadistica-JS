let calcular = document.querySelector('.btn');
let entrada1 = document.querySelector('#lado1');
let entrada2 = document.querySelector('#lado2');
let entrada3 = document.querySelector('#base');
let salida = document.querySelector('.resultado');

let lado1 = 0;
let lado2 = 0;
let base = 0;
let altura = 0;

let perimetro = 0;
let area = 0;
let semiP = 0;


entrada1.addEventListener('change', updateLado);
entrada2.addEventListener('change', updateLado);
entrada3.addEventListener('change', updateLado);
calcular.addEventListener('click', calc);

function calc() {
    salida.innerHTML = '';

    let myP = document.createElement('p');
    perimetro = lado1 + lado2 + base;
    myP.innerText = 'Perimetro: ' + perimetro + ' cm';

    let myA = document.createElement('p');
    myA.innerText = 'Area: ' + calcArea() + ' cm^2';

    let myH = document.createElement('p');
    calcH();
    myH.innerText = 'Altura: ' + altura.toFixed(3) + ' cm';

    salida.append(myH);
    salida.append(myP);
    salida.append(myA);
}

function updateLado(e) {
    let elemet = e.currentTarget;
    let valor = elemet.getAttribute('option');
    switch (valor) {
        case '1':
            lado1 = parseInt(elemet.value, 10);
            break;
        case '2':
            lado2 = parseInt(elemet.value, 10);
            break;
        case '3':
            base = parseInt(elemet.value, 10);
            break;
    }
}

function calcArea() {
    if (lado1 && lado2 && base) {
        semiP = perimetro / 2;

        area = Math.sqrt((semiP*(semiP-base)*(semiP-lado1)*(semiP-lado2))); 
        return area.toFixed(3);
    }
}

function calcH() {
    {
        // if ( lado1 == base || lado1 != lado2) {
        //     altura = (2/base)*area;
        // } else {
        //     altura = Math.sqrt((lado1**2)-(lado2**2)/4);
        // }
    }
    altura = (2/base)*area;
}