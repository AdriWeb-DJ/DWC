function calcular() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const oper = document.getElementById('operacion').value;

    let resultado;
    switch (oper) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operacion invalida";
    }

    document.getElementById('resultado').textContent = resultado;
}