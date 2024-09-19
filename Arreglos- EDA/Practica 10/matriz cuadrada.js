function generarCuadro() {
    const tamaño = parseInt(document.getElementById('tamaño').value);
    const cuadroDiv = document.getElementById('cuadro');
    cuadroDiv.innerHTML = '';  

    if (isNaN(tamaño) || tamaño < 2) {
        alert('Por favor, ingrese un tamaño válido para la matriz.');
        return;
    }
    const matriz = new Array(tamaño).fill(0).map(() => new Array(tamaño).fill(0));
    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            matriz[i][j] = (i === j) ? 1 : 0; 
        }
    }
    cuadroDiv.style.gridTemplateColumns = `repeat(${tamaño}, 1fr)`; 

    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'cuadro-input';
            input.value = matriz[i][j]; 
            cuadroDiv.appendChild(input);
        }
    }

    document.getElementById('resultado').textContent = 'Matriz generada correctamente con 1\'s en la diagonal y 0\'s en las demás posiciones.';
}
