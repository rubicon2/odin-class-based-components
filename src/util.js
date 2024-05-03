export function getNextKey(arr) {
  let highestKey = 0;
  for (const i in arr) {
    const item = arr[i];
    if (item.key > highestKey) highestKey = item.key;
  }
  return highestKey + 1;
}
