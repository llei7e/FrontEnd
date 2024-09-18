const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mult = (a,b) => a * b;
const divide = (a,b) => a / b;

function calculate(funcao){
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const result = document.getElementById('result');
    
    if(isNaN(n1) || isNaN(n2)){
        result.innerHTML = "Favor informar valores validos";
        return;
    }
    const resultado = funcao(n1, n2);
    result.innerHTML = `Resultado =  ${resultado}`;
}
