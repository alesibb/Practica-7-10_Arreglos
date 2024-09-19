document.addEventListener('DOMContentLoaded', () => {
    crearInputs('matriz1');
    crearInputs('matriz2');
});

function crearInputs(id) {
    const matrizDiv = document.getElementById(id);
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = Math.floor(Math.random() * 10); 
            matrizDiv.appendChild(input);
        }
    }
}

function obtenerValores(matrizId) {
    const inputs = document.getElementById(matrizId).getElementsByTagName('input');
    const matriz = [[], []];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            matriz[i][j] = parseFloat(inputs[i * 2 + j].value);
        }
    }

    return matriz;
}

function realizarOperaciones() {
    const matriz1 = obtenerValores('matriz1');
    const matriz2 = obtenerValores('matriz2');

    const suma = operarMatrices(matriz1, matriz2, (a, b) => a + b);
    const resta = operarMatrices(matriz1, matriz2, (a, b) => a - b);
    const producto = operarMatrices(matriz1, matriz2, (a, b) => a * b);
    const division = operarMatrices(matriz1, matriz2, (a, b) => (b !== 0 ? (a / b).toFixed(2) : '∞'));

    mostrarResultado('suma', suma);
    mostrarResultado('resta', resta);
    mostrarResultado('producto', producto);
    mostrarResultado('division', division);
}

function operarMatrices(matriz1, matriz2, operacion) {
    const resultado = [[], []];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            resultado[i][j] = operacion(matriz1[i][j], matriz2[i][j]);
        }
    }
    return resultado;
}

function mostrarResultado(id, resultado) {
    const div = document.getElementById(id);
    div.innerHTML = ''; 
    resultado.forEach(fila => {
        div.innerHTML += fila.join(' ') + '<br>';
    });
}
