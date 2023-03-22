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
let calcNumber1 = '';
let calcNumber2 = '';
let calcOperator = '';

function Input(button)
{
    let input = calculatorInput.innerHTML;

    // Minus needs to change the number from + to -
    if(button === '-')
    {
        input = Number(input).toString();
        if(input.includes('-'))
        {
            // remove the negative if it is already negative
            input = input.slice(1);
        }
        else
        {
            input = '-' + input;
        }

        if(Number(input) === 0)
        {
            isFirstInput = true;
        }
        else
        {
            isFirstInput = false;
        }
    }
                
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
    
    let regexValidation = new RegExp("^-?(?!0{2,})[0-9?]*\.?[0-9?]*$");
    if(regexValidation.test(input) === false)
        return;

    if(input === '')
        input = '0';
    
    calculatorInput.innerHTML = input;
}

function Clear()
{
    isFirstInput = true;
    calculatorInput.innerHTML = 0;
    calcNumber1 = '';
    calcNumber2 = '';
    calcOperator = ''
}

function HandleOperator(opButton)
{
    if(opButton === 'delete')
    {
        //remove the last character in the string
        let input = calculatorInput.innerHTML;
        input = input.substring(0, input.length-1);
        if(input === '')
            input = '0';

        calculatorInput.innerHTML = input;
    }

    if(opButton === 'equals')
    {
        if(calcNumber1 === '')
            calcNumber1 = Number(calculatorInput.innerHTML);
        if(calcOperator != '')
        {
            calcNumber2 = Operate(calcOperator, calcNumber2, calcNumber1);
            calculatorInput.innerHTML = calcNumber2.toString();
        }
        isFirstInput = true;
    }

    if(opButton === 'add')
    {   
        calcNumber2 = Number(calculatorInput.innerHTML);
        calcOperator = 'add';
        isFirstInput = true;
        calcNumber1 = '';
    }

    if(opButton === 'subtract')
    {   
        calcNumber2 = Number(calculatorInput.innerHTML);
        calcOperator = 'subtract';
        isFirstInput = true;
        calcNumber1 = '';
    }

    if(opButton === 'multiply')
    {   
        calcNumber2 = Number(calculatorInput.innerHTML);
        calcOperator = 'multiply';
        isFirstInput = true;
        calcNumber1 = '';
    }

    if(opButton === 'divide')
    {   
        calcNumber2 = Number(calculatorInput.innerHTML);
        calcOperator = 'divide';
        isFirstInput = true;
        calcNumber1 = '';
    }
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    //var code = event.code;
    let regExDigits = new RegExp("[0-9.]");
    if(regExDigits.test(name))
        Input(name);
    else if(name === 'Backspace')
        HandleOperator('delete');
    else if(name === '+')
        HandleOperator('add');
    else if(name === '-')
        HandleOperator('subtract');
    else if(name === '*')
        HandleOperator('multiply');
    else if(name === '/')
        HandleOperator('divide')
    else if(name === '=' || name === 'Enter')
        HandleOperator('equals');
    else if(name === 'Escape')
        Clear();
    //alert(name);
    // Need to look into Event.preventDefault().
    // Something blocking +-/*=
    event.preventDefault();
});