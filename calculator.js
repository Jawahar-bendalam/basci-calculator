let display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText.length > 1 ?  display.innerText.charAt(-1) = '' : clearDisplay();
}

function appendOperator(operator) {
  display.innerText += operator;
}

function appendNumber(number) {
  display.innerText == 0
    ? (display.innerText = number)
    : (display.innerText += number);
}

function calculate() {
    if(display.innerText.includes('+')){
        display.innerText = display.innerText.split('+').reduce((a, b) => Number(a)+Number(b));
    }else if(display.innerText.includes('-')){
        display.innerText = display.innerText.split('-').reduce((a, b) => Number(a)-Number(b));
    }else if (display.innerText.includes('*')){
        display.innerText = display.innerText.split('*').reduce((a, b) => Number(a)*Number(b));
    }else if(display.innerText.includes('/')){
        display.innerText = display.innerText.split('/').reduce((a, b) =>  Number(a)/Number(b));
    }
}
