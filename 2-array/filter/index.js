function chooseMultiplesOfThree(collection) {
  return collection.filter(item => item % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((value, index, self) => self.indexOf(value) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
