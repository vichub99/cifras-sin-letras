const SMALL_NUMBERS = [1,2,3,4,5,6,7,8,9,10]
const BIG_NUMBERS = [25,50,75,100]
let DATA = {
    'numbers':[0,0,0,0,0,0],
    'result': 0,
}
let btnNewSmallNumber
let btnNewBigNumber
let btnResult
let btnReinit

document.addEventListener('DOMContentLoaded', function () {
    console.info('APP INICIADA: CIFRAS SIN LETRAS')
    btnNewSmallNumber = document.getElementById('btnNewSmallNumber')
    btnNewBigNumber = document.getElementById('btnNewBigNumber')
    btnResult = document.getElementById('btnResult')
    btnReinit = document.getElementById('btnReinit')

    btnNewSmallNumber.addEventListener('click', function(e){clickNumber(e)})
    btnNewBigNumber.addEventListener('click', function(e){clickNumber(e)})
    btnResult.addEventListener('click', function(e){clickResult(e)})
    btnReinit.addEventListener('click', function(e){reinit()})

  });


function generateResult() {
    return Math.floor(Math.random() * (999 - 101 + 1)) + 101;
}

// Función para obtener números aleatorios
function getRandomNumbers(array, count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomElement = array[randomIndex]
        result.push(randomElement);
    }

    return result;
}

function clickNumber(event) {
    // pequeño o grande ?
    const numbers = event.target.id.includes('Small') ? SMALL_NUMBERS : BIG_NUMBERS
    
    // generar numero random
    let randomNumber = getRandomNumbers(numbers, 1)[0];

    // meterlo en el array DATA donde corresponda
    let index0 = DATA.numbers.indexOf(0)
    DATA.numbers[index0] = randomNumber

    // meterlo en la caja que le corresponde
    let boxValue = document.querySelector(`.box-${index0} .value`)
    boxValue.textContent = randomNumber

    // comprobamos si ya estan todos los numeros de entrada
    if (!DATA.numbers.some(num => num == 0)) {
        btnNewSmallNumber.disabled = true
        btnNewBigNumber.disabled = true
        btnResult.disabled = false
        console.log(DATA.numbers)
    }
}

function clickResult(event) {
    if (!DATA.numbers.some(num => num == 0)) {
        let randomNumber = generateResult();
        let resultValue = document.querySelector(`.result`)
        resultValue.textContent = randomNumber
    }
    else {
        alert('Error, recarga la página')
    }
}

function reinit() {
    document.querySelectorAll(`.value`).forEach(el => el.textContent = '');
    document.querySelector(`.result`).textContent = ''
    btnNewSmallNumber.disabled = false
    btnNewBigNumber.disabled = false
    btnResult.disabled = true
    DATA = {
        'numbers':[0,0,0,0,0,0],
        'result': 0,
    }
}