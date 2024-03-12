function mostrarPromedio(idPromedio, filaIndex) {
    var notaElement1 = document.getElementById('nota1_' + filaIndex);
    var notaElement2 = document.getElementById('nota2_' + filaIndex);
    var notaElement3 = document.getElementById('nota3_' + filaIndex);
    var promedioElement = document.getElementById('promedio_' + filaIndex);

    var nota1 = parseFloat(notaElement1.value);
    var nota2 = parseFloat(notaElement2.value);
    var nota3 = parseFloat(notaElement3.value);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        var promedio = calcularPromedio(nota1, nota2, nota3);

        // Actualiza el promedio
        promedioElement.innerText = promedio.toFixed(2);

        // Agrega y luego quita la clase 'animate' después de cierto tiempo
        promedioElement.classList.add('animate');
        setTimeout(function () {
            promedioElement.classList.remove('animate');
        }, 10);
    } else {
        alert("Ingresa valores numéricos válidos para las notas");
    }
}

