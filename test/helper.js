const expect = require('chai').expect;
import superagent from "superagent";
import config from "../env/config";

const {baseUrl} = config;

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
        const isDeviationWithinMargin = deviation <= 1.025 && deviation >= 0.975;
        if (!isDeviationWithinMargin) {
            isTestFailed = true;
            deviationNumbers[number] = count;
        }
    });

    if (isTestFailed == true) {
        console.log(`Maximum deviation of dice results isn't within 5%. Deviation numbers ${JSON.stringify(deviationNumbers, null, 1)}`)
    } else {
        console.log(`Maximum deviation of dice results is within 5%`);
    }

    expect(isTestFailed).to.be.false;
}

export const roll = async (diceCount, rollsCount) => {
    const requestUrl = `${baseUrl}/integers/?num=${rollsCount}&min=1&max=6&col=1&base=10&format=plain&rnd=new`;
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