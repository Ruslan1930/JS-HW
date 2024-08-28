const USD = 85;
const EURO = 92;
const YEN = 0.55;
const RUB = 1;

function convertToEuro(amount, currency, targetCurrency) {
    if (currency === 'usd'){
        const total = amount*USD;
        if(targetCurrency === 'euro'){
            return total/EURO;
        } else if( targetCurrency === 'yen'){
            return total/YEN;
        } else if (targetCurrency === 'rub'){
            return null;
        }
    }
}

console.log(convertToEuro(1000, 'usd', 'euro'));


// Второй способ (использование switch метода)
function convertToUSD (amount, currency, targetCurrency) {
    switch (true){
        case currency === 'euro':
           const total =  amount*EURO;
        case targetCurrency === 'usd':
            return total/USD;
        case targetCurrency === 'yen':
            return total/YEN;
        default:
        return null;
    }   
}

console.log(convertToUSD(1000, 'euro', 'usd'))

function convertRub(amount, currency, targetCurrency){
    switch (true) {
        case currency === 'rub':
            const total = amount*RUB;
        case targetCurrency === 'usd':
            return total/USD;
        case targetCurrency === 'yen':
            return total/YEN;
        default:
            return null;
    }
}
console.log(convertRub(100, 'rub','usd'));