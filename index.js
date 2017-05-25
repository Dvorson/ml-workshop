const Perceptron = require('./perceptron');
const set = [
  {
    inputs: [32, 175],
    expected: 1
  },
  {
    inputs: [24, 170],
    expected: 1
  },
  {
    inputs: [20, 50],
    expected: 1
  },
  {
    inputs: [30, 10],
    expected: 0
  },
  {
    inputs: [24, 340],
    expected: 1
  },
  {
    inputs: [64, 250],
    expected: 0
  },
  {
    inputs: [34, 120],
    expected: 0
  }
];

const perceptron = new Perceptron();
const maxX = Math.max(...set.map(({ inputs }) => inputs[0]));
const maxY = Math.max(...set.map(({ inputs }) => inputs[1]));
const trainSet = set.map(({ inputs, expected }) => ({
  inputs: [inputs[0]/maxX, inputs[1]/maxY],
  expected
}));
const testSet = set.map(({ inputs }) => [inputs[0]/maxX, inputs[1]/maxY]);

perceptron.learn(() => {
  testSet.forEach((test) => {
    console.log(test, perceptron.predict(test));
  });
}, trainSet);
