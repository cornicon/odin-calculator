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