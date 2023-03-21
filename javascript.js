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
let isFirstInput = true;
let calcNumber1 = 0;
let calcOperator = '';

function Input(button)
{
    let input = calculatorInput.innerHTML;
    if(isFirstInput === true)
    {
        input = '';
        isFirstInput = false;
    }
    // evaluate the calculator display as a number and then change it back to a string
    // has problems with number then . then more than 1 zero
    // Maybe use regex ^[0-9]*\.?[0-9]*$
    // if(input.charAt(input.length-1) != '.')
    //     input = Number(calculatorInput.innerHTML).toString();

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
        input += '.';
    // Minus needs to change the number from + to -
    if(button === '-')
        if(input.includes('-'))
            input = input.slice(1);
        else
            input = '-' + input;
    
    let regexValidation = new RegExp("^-?[0-9?]*\.?[0-9?]*$");
    if(regexValidation.test(input) === false)
        return;

    calculatorInput.innerHTML = input;
}

function Clear()
{
    isFirstInput = true;
    calculatorInput.innerHTML = 0;
    calcNumber1 = '0';
    calcOperator = ''
}

function HandleOperator(opButton)
{
    if(calcOperator != '') // if pending operation
    {
        let calcNumber2 = Number(calculatorInput.innerHTML);
        calcNumber1 = Operate(calcOperator, calcNumber1, calcNumber2);
        calcOperator = '';
        calculatorInput.innerHTML = calcNumber1.toString();
    }

    if(opButton === 'delete')
    {
        //remove the last character in the string
        let input = calculatorInput.innerHTML;
        calculatorInput.innerHTML = input.substring(0, input.length-1);
    }

    if(opButton === 'equals')
    {
        isFirstInput = true;
    }

    if(opButton === 'add')
    {   
        calcNumber1 = Number(calculatorInput.innerHTML);
        calcOperator = 'add';
        isFirstInput = true;
    }

    if(opButton === 'subtract')
    {   
        calcNumber1 = Number(calculatorInput.innerHTML);
        calcOperator = 'subtract';
        isFirstInput = true;
    }

    if(opButton === 'multiply')
    {   
        calcNumber1 = Number(calculatorInput.innerHTML);
        calcOperator = 'multiply';
        isFirstInput = true;
    }

    if(opButton === 'divide')
    {   
        calcNumber1 = Number(calculatorInput.innerHTML);
        calcOperator = 'divide';
        isFirstInput = true;
    }
        
}