
function calcularPromedios() {
    // Para HTML
    const nota1_1 = parseFloat(prompt("Ingrese la nota 1 para HTML", 0));
    document.getElementById("nota1_1").value = nota1_1;

    const nota2_1 = parseFloat(prompt("Ingrese la nota 2 para HTML", 0));
    document.getElementById("nota2_1").value = nota2_1;

    const nota3_1 = parseFloat(prompt("Ingrese la nota 3 para HTML", 0));
    document.getElementById("nota3_1").value = nota3_1;

    const promedio_1 = (nota1_1 + nota2_1 + nota3_1) / 3;
    document.getElementById("promedio_1").textContent = promedio_1.toFixed(2);

    // Para CSS
    const nota1_2 = parseFloat(prompt("Ingrese la nota 1 para CSS", 0));
    document.getElementById("nota1_2").value = nota1_2;

    const nota2_2 = parseFloat(prompt("Ingrese la nota 2 para CSS", 0));
    document.getElementById("nota2_2").value = nota2_2;

    const nota3_2 = parseFloat(prompt("Ingrese la nota 3 para CSS", 0));
    document.getElementById("nota3_2").value = nota3_2;

    const promedio_2 = (nota1_2 + nota2_2 + nota3_2) / 3;
    document.getElementById("promedio_2").textContent = promedio_2.toFixed(2);

    // Para JavaScript
    const nota1_3 = parseFloat(prompt("Ingrese la nota 1 para JavaScript", 0));
    document.getElementById("nota1_3").value = nota1_3;

    const nota2_3 = parseFloat(prompt("Ingrese la nota 2 para JavaScript", 0));
    document.getElementById("nota2_3").value = nota2_3;

    const nota3_3 = parseFloat(prompt("Ingrese la nota 3 para JavaScript", 0));
    document.getElementById("nota3_3").value = nota3_3;

    const promedio_3 = (nota1_3 + nota2_3 + nota3_3) / 3;
    document.getElementById("promedio_3").textContent = promedio_3.toFixed(2);
}
