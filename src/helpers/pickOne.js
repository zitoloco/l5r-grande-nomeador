import random from './random'

const pickOne = (values) => {
  const maxNumber = values.length;
  return values[random(maxNumber)];
}

export default pickOne;