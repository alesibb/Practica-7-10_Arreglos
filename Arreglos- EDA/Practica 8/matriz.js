let matriz = [];

function generarCuadro() {
    const tamaño = parseInt(document.getElementById('tamaño').value);
    const cuadroDiv = document.getElementById('cuadro');
    cuadroDiv.innerHTML = '';

    if (isNaN(tamaño) || tamaño < 2) {
        alert('Por favor, ingrese un tamaño válido para el cuadro mágico.');
        return;
    }

    matriz = new Array(tamaño).fill(null).map(() => new Array(tamaño).fill(0)); 

    cuadroDiv.style.gridTemplateColumns = `repeat(${tamaño}, 1fr)`;

    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'cuadro-input';
            input.dataset.row = i;
            input.dataset.col = j;
            input.addEventListener('input', (event) => {
                const fila = event.target.dataset.row;
                const col = event.target.dataset.col;
                matriz[fila][col] = parseInt(event.target.value) || 0; 
            });
            cuadroDiv.appendChild(input);
        }
    }
}

function verificarCuadro() {
    const tamaño = matriz.length;

    if (esCuadroMagico(matriz, tamaño)) {
        const constanteMagica = tamaño * (tamaño * tamaño + 1) / 2;
        document.getElementById('resultado').innerHTML = `Es un cuadro mágico.<br>Constante mágica: ${constanteMagica}`;
    } else {
        document.getElementById('resultado').textContent = 'No es un cuadro mágico.';
    }
}

function esCuadroMagico(matriz, tamaño) {
    const constanteMagica = tamaño * (tamaño * tamaño + 1) / 2;

    // Sumar filas
    for (let i = 0; i < tamaño; i++) {
        let sumaFila = 0;
        for (let j = 0; j < tamaño; j++) {
            sumaFila += matriz[i][j];
        }
        if (sumaFila !== constanteMagica) return false;
    }

    // Sumar columnas
    for (let j = 0; j < tamaño; j++) {
        let sumaColumna = 0;
        for (let i = 0; i < tamaño; i++) {
            sumaColumna += matriz[i][j];
        }
        if (sumaColumna !== constanteMagica) return false;
    }

    // Sumar diagonal principal
    let sumaDiagonalPrincipal = 0;
    for (let i = 0; i < tamaño; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
    }
    if (sumaDiagonalPrincipal !== constanteMagica) return false;

    // Sumar diagonal secundaria
    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < tamaño; i++) {
        sumaDiagonalSecundaria += matriz[i][tamaño - i - 1];
    }
    if (sumaDiagonalSecundaria !== constanteMagica) return false;

    return true;
}