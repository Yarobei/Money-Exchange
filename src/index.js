// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coinValues = [50, 25, 10, 5, 1];
    const coinSymbols = ['H', 'Q', 'D', 'N', 'P'];
    const coinQuantity = [];
    const exchangeObj = {};

    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        const len = coinValues.length;
        for (let i = 0; i < len; i++) {
            if (coinValues[i] <= currency) {
                coinQuantity.push( Math.floor(currency / coinValues[i]) );
                if (coinQuantity[i] != 0) {
                    exchangeObj[coinSymbols[i]] = coinQuantity[i];
                }
                currency -= (coinQuantity[i] * coinValues[i]);
            } else {
                coinQuantity.push(0);
            }
        }
    }
    return exchangeObj;
}
