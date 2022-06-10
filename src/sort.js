export default function sortedObject(obj, sort) {
  const sortObj = [];
  /* eslint-disable-next-line */
  for (const prop of sort) {
    sortObj.push({ key: prop, value: obj[prop] });
  }
  /* eslint-disable-next-line */
  for (const prop of Object.keys(obj)
    .filter((key) => !sort.includes(key))
    .sort((a, b) => obj[b] - obj[a])) {
    sortObj.push({ key: prop, value: obj[prop] });
  }

  return sortObj;
}
