import {deviationChecker, requestUrl, avg} from './helper';
import superagent from 'superagent';

describe('Dices distribution', () => {
    const rollsNum = process.env.ROLLS_NUM || 10000;
    it('1 dice distribution', async () => {
        let min = 1;
        let max = 6;
        console.log(`Roll with parameters: number of rolls [${rollsNum}], count of dices [1]`);
        const res = await superagent.get(requestUrl(rollsNum, min, max));
        const resArray = res.text.split(`\n`).filter(Boolean);
        deviationChecker(resArray, avg(rollsNum, min, max));
    });

    it('2 dices distribution', async () => {
        let min = 2;
        let max = 12;
        console.log(`Roll with parameters: number of rolls [${rollsNum}], count of dices [2]`);
        const res = await superagent.get(requestUrl(rollsNum, min, max));
        const resArray = res.text.split(`\n`).filter(Boolean);
        deviationChecker(resArray, avg(rollsNum, min, max));
    });
});