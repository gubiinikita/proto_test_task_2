const expect = require('chai').expect;

export const avg = (rollsNum, min, max) => rollsNum / (max - min + 1);
export const requestUrl = (rollsNum, min, max) => `https://www.random.org/integers/?num=${rollsNum}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

export const deviationChecker = (numbersArray, avg) => {
    const numbersCount = {};
    numbersArray.forEach(number => {
        if (numbersCount[number]) {
            numbersCount[number]++
        } else {
            numbersCount[number] = 1
        }
    });
    console.log(`Distribution ${JSON.stringify(numbersCount, null, 1)}`);
    let isTestFailed = false;
    const deviationNumbers = {};
    Object.entries(numbersCount).forEach(([number, count]) => {
        const deviation = count / avg;
        const isDeviationWithinMargin = deviation <= 1.05 && deviation >= 0.95;
        if (!isDeviationWithinMargin) {
            isTestFailed = true;
            deviationNumbers[number] = count;
        }
    });
    if(isTestFailed == true){
        console.log(`Maximum deviation of dice results isn't within 5%. Deviation numbers ${JSON.stringify(deviationNumbers, null, 1)}`)
    } else {
        console.log(`Maximum deviation of dice results is within 5%`);
    }
    expect(isTestFailed).to.be.false;
}