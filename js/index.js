const display = document.querySelector('.display')

//DIGITS
document.querySelectorAll('.digits button') // we found digits with class selector
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev){
    const digit = ev.target.innerText;
    display.value += digit;
}

//OPERS
document.querySelectorAll('.opers button') // we found opers with class selector
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev){
    const oper = ev.target.innerText;
    display.value += oper;
}

document.querySelector('.eq').addEventListener('click', eqPressed);       //event that ve can add to a func()

function eqPressed(){
    display.value = eval(display.value);
}