// Selecionar elementos do DOM
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let resultSpan = document.getElementById("result");


// Adicionar listener de evento dos botões

// Função para somar
function add() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 + num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
addButton.addEventListener("click", add);

// Função para subtrair
function subtract(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2) && num1 > num2){
        let result = num1 - num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
subtractButton.addEventListener("click", subtract);

// Função para multiplicar
function multiply(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if  (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 * num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
multiplyButton.addEventListener("click", multiply);

// Função para dividir
function divide(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2) && num1 > num2 && num1 > num2){
        let result = num1 / num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
divideButton.addEventListener("click", divide);

