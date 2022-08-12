let calcular = document.querySelector('.btn');
let entrada1 = document.querySelector('#price');
let entrada2 = document.querySelector('#discount');
let salida = document.querySelector('.resultado');

calcular.addEventListener('click', calc);

let price = 0;
let discount = 0;
let newPrice = 0;

function calc() {
    salida.innerHTML = '';

    let myP = document.createElement('p');
    price = parseInt(entrada1.value);
    discount = parseInt(entrada2.value);
    newPrice = (price * (100 - discount)) / 100;

    console.log(newPrice, discount);
    if (newPrice && discount <= 100 && discount >= 0) {
        myP.innerText = 'El nuevo precio es: $' + newPrice;
    } else {
        myP.innerText = 'El nuevo precio es: $' + 0;
    }
    salida.append(myP);
}
