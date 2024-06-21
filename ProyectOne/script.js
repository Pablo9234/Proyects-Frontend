const pantalla = document.getElementById('pantalla');

let resultado = '';
let operador = '';
let operando1 = '';;
let operando2 = '';;

document.querySelector('.botones').addEventListener('click', function (event) {
    const valor = event.target.textContent;  //Obtengo el valor de cada boton

    if (!isNaN(valor)) {
        if (operador === '') {   
            operando1 += valor;
            pantalla.textContent = operando1;  //Imprime el valor de cada valor en pantalla
        }
        else {
            operando2 += valor;
            pantalla.textContent = operando2;
        }
    } else if (valor === 'C') { //Clean borra todo
        resultado = '';
        operador = '';
        operando1 = '';
        operando2 = '';
        pantalla.textContent = '0';
    } else if (valor === '=') {
        if (operando1 !== '' && operando2 !== '' && operador !== '') { 

            operando1 = parseFloat(operando1);  //convierto cadenas a Floats
            operando2 = parseFloat(operando2);

            switch (operador) {    //De acuerdo al operador hace el switch

                case '+':
                    resultado = operando1 + operando2;
                    break;
                case '-':
                    resultado = operando1 - operando2;
                    break;
                case '*':
                    resultado = operando1 * operando2;
                    break;
                case '/':
                    resultado = operando1 / operando2;
                    break;
            }
        }
        pantalla.textContent = resultado; //Imprime el resultado en pantalla
        operando1 = resultado;
        operando2 = '';;
        operador = '';;
    } else {
        if (operando1 !== '') {
            operador = valor;
        }
    }
});

