function Add(term1, term2)
{
    return term1 + term2;
}

function Subtract(minuend, subtrahend)
{
    return minuend - subtrahend;
}

function Multiply(multiplier, multiplicand)
{
    return multiplier * multiplicand;
}

function Divide(numerator, denominator)
{
    return numerator / denominator;
}

function Operate(operator, number1, number2)
{
    if(operator === 'add')
        return Add(number1, number2);
    if(operator === 'subtract')
        return Subtract(number1, number2);
    if(operator === 'multiply')
        return Multiply(number1, number2);
    if(operator === 'divide')
        return Divide(number1, number2);
    else
        return 'INVALID OPERATION';
}

const calculatorInput = document.querySelector('.calculator-display');

function Input(button)
{
    let input = calculatorInput.innerHTML;
    // evaluate the calculator display as a number and then change it back to a string
    // has problems with number then . then more than 1 zero
    // Maybe use regex ^[0-9]*\.?[0-9]*$
    if(input.charAt(input.length-1) != '.')
        input = Number(calculatorInput.innerHTML).toString();

    if(button === '1')
        input += '1';
    if(button === '2')
        input += '2';
    if(button === '3')
        input += '3';
    if(button === '4')
        input += '4';
    if(button === '5')
        input += '5';
    if(button === '6')
        input += '6';
    if(button === '7')
        input += '7';
    if(button === '8')
        input += '8';
    if(button === '9')
        input += '9';
    if(button === '0')
        input += '0';
    // Need a flag so only 1 dot allowed
    if(button === '.')
        if(!input.includes('.'))
            input += '.';
    // Minus needs to change the number from + to -
    if(button === '-')
        if(input.includes('-'))
            input = input.slice(1);
        else
            input = '-' + input;

    calculatorInput.innerHTML = input;
}