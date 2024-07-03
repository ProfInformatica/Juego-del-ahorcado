window.onload = function() {
    const inputText = document.getElementById('text');
    const buttonJugar = document.getElementById('boton');

    buttonJugar.addEventListener('click', function() {
        // Obtener el valor del input
        const valorInput = inputText.value;

        // Convertir el valor a número (si es posible)
        const numero = parseInt(valorInput);

        // Verificar si el número es igual a 2
        if (numero === 2) {
            alert('¡Felicidades! El número es 2.');
        }else{
            alert('Incorrecto');
        }
    });
};
