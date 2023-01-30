import {deviationChecker, roll} from './helper';

describe('Dices', () => {
    const diceCount = process.env.DICE_COUNT || 1;
    const rollsNum = process.env.ROLLS_NUM || 10000;
    const avg = rollsNum / 6;

    console.log('Count of dices', diceCount)

    it(`${diceCount} dices`, async () => {
        console.log(`Roll with parameters: number of rolls [${rollsNum}], count of dices [${diceCount}]`);
        const resArray = await roll(diceCount, rollsNum);
        deviationChecker(resArray, avg);
    });
});