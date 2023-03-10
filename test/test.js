import {deviationChecker, roll} from './helper';
import config from "../env/config";

const {baseDiceCount, baseRollsNum} = config;

describe('Dices', () => {
    const diceCount = process.env.DICE_COUNT || baseDiceCount;
    const rollsNum = process.env.ROLLS_NUM || baseRollsNum;
    const avg = rollsNum / 6;

    console.log('Count of dices', diceCount)

    it(`${diceCount} dices`, async () => {
        console.log(`Roll with parameters: number of rolls [${rollsNum}], count of dices [${diceCount}]`);

        const resArray = await roll(diceCount, rollsNum);

        deviationChecker(resArray, avg);
    });
});