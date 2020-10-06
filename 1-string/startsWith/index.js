export default function collectCarNumberCount(collection) {
  return collection.filter(item => item.startsWith('粤A')).length;
}
