# Test task DICE ROLLS
## Main objective:
To create test which check the following hypothesis:
"For large number of rolls (number of rolls > 1000)
distribution of dice points strives to uniform distribution."
## Requirements:
Tests should check that maximum deviation of dice results
is within 5% First test: for 1 dice Second test:
for 2 dices (total roll points is a sum of 2 dices)
## How to run this test:
You can run command with default params (number of rolls = 10000,
count of dices = 1)
```
npm run test
```
Or you can run command with params e.g count
of dices(DICE_COUNT) or num of rolls (ROLLS_NUM)
```
ROLLS_NUM=5000 DICE_COUNT=2 npm run test
```
## Results analysis
If maximum deviation of dice results
is within 5% test will return true, if more test will return false