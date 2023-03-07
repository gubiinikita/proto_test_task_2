# Test task DICE ROLLS
## Main objective:
Create tests(using REST API by https://www.npmjs.com/package/superagent) for:

GET: https://www.random.org/integers/?num=1&min=1&max=1&col=1&base=10&format=plain&rnd=new

To create test which check the following hypothesis:
"For large number of rolls (number of rolls > 1000)
distribution of dice points strives to uniform distribution."
## Requirements:
* Language: JS
* Tests should check that maximum deviation of dice results
  is within 5% First test: for 1 dice Second test:
  for 2 dices (total roll points is a sum of 2 dices)
## How to run this test:
Install all packages
```
npm install
```
You can run command with default params (number of rolls = 10,
count of dices = 1)
```
npm run test
```
Or you can run command with params e.g count
of dices(diceCount) or num of rolls (rollsNum)
```
ROLLS_NUM=5000 DICE_COUNT=2 npm run test
```
## Results analysis
If maximum deviation of dice results
is within 5% test will return true, if more test will return false