// eslint-disable-next-line
const pluckValue = ([k, v]) => parseInt(v, 10);

export default function countTypesNumber(source) {
  return Object.entries(source)
    .map(pluckValue)
    .reduce((sum, curr) => sum + curr);
}
