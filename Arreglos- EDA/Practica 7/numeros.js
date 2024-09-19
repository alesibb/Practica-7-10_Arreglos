function contarCeros() {
    const arreglo = [
        [0, 2, 5, 7, 6],
        [0, 0, 0, 3, 8],
        [2, 9, 6, 3, 4],
        [1, 5, 6, 1, 4],
        [0, 9, 2, 5, 0]
    ];

    let resultado = '';
    
    for (let i = 0; i < arreglo.length; i++) {
        let contadorCeros = 0;
        for (let j = 0; j < arreglo[i].length; j++) {
            if (arreglo[i][j] === 0) {
                contadorCeros++;
            }
        }
        resultado += `Fila ${i + 1}: ${contadorCeros} ceros<br>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}
