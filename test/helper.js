import superagent from "superagent";
const expect = require('chai').expect;

export const deviationChecker = (numbersArray, avg) => {
    const numbersCount = {}
    numbersArray.forEach(number => {
        if(numbersCount[number]){
            numbersCount[number]++
        } else {
            numbersCount[number] = 1
        }
    });
    console.log(`Distribution ${JSON.stringify(numbersCount, null, 1)}`);
    const result = Object.values(numbersCount).every(count => {
        const deviation = count / avg
        return deviation <= 1.05 && deviation >= 0.95
    });
    expect(result).to.be.true;
    console.log(`Is maximum deviation of dice results is within 5%? ${result.toString()}`);
}
export const roll = async (diceCount, rollsCount) => {
    const requestUrl = `https://www.random.org/integers/?num=${rollsCount}&min=1&max=6&col=1&base=10&format=plain&rnd=new`;
    const promiseArray = [];
    for (let i = 0; i < diceCount; i++) {
        promiseArray.push(superagent.get(requestUrl));
    }
    const responses = await Promise.all(promiseArray);
    const resArray = responses.map(res => res.text.split(`\n`).filter(Boolean));
    return resArray.reduce((accumulator, currentValue) => {
        return accumulator.map((number, index) => {
            return Number(number) + Number(currentValue[index]);
        });
    });
};