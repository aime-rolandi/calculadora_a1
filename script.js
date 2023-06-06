function calculadora() {
    let url = "./calculadora/calculadora.html"
    window.open(url, "_blanck");
}

let resultado = document.getElementById('resultado');

function agregarNumero(numero) {
    resultado.value += numero;
}

function agregarOperador(operador) {
    resultado.value += operador;
}

function agregarDecimal(float) {
    resultado.value += float;
}

function calcularResultado() {
    try {
        // resultado.value = eval(resultado.value);
        let expression = resultado.value;

        // Reemplaza los símbolos de porcentaje (%) con una multiplicación por 0.01
        expression = expression.replace(/%/g, '*0.01');

        resultado.value = eval(expression);
    } catch(error) {
        resultado.value = 'Error';
    }
}

function borrarUltimoCaracter() {
    const valorActual = resultado.value;
    resultado.value = valorActual.slice(0, -1);
}

function borrar() {
    resultado.value = '';
}

document.addEventListener('keydown', function(event){
    const tecla = event.key;
    const numerosPermitidos = ['0','1','2','3','4','5','6','7','8','9'];
    const operadoresPermitidos = ['+','-','*','/','%'];
    const resultadoPermitido = ['=', 'Enter'];
    const borrarCaracter = ['Backspace'];
    const borrarTodo = ['c','Delete'];
    const decimales = ['.'];

    if (numerosPermitidos.includes(tecla)) {
        agregarNumero(tecla);
    } else if (operadoresPermitidos.includes(tecla)) {
        agregarOperador(tecla);
    } else if (resultadoPermitido.includes(tecla)) {
        calcularResultado(tecla);
    } else if (borrarCaracter.includes(tecla)) {
        borrarUltimoCaracter(tecla);
    } else if (borrarTodo.includes(tecla)) {
        borrar(tecla);
    } else if (decimales.includes(tecla)) {
        agregarDecimal(tecla);
    }
        
});