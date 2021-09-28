function quicksort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  let leftSort = quicksort(left);
  let rightSort = quicksort(right);
  return [...leftSort, pivot, ...rightSort];
}

function oddEvenSort(arr) {
  let odds = [];
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) odds.push(arr[i]);
    else evens.push(arr[i]);
  }

  sortOdds = quicksort(odds);
  sortEvens = quicksort(evens);
  return [...sortOdds, ...sortEvens];
}

function validAnagrams(s, t) {
  if (quicksort(s).join("") === quicksort(t).join("")) return true;
  return false;
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    if (baseA === baseB) return a - b;
    if (baseA > baseB) return -1;
    else return 1;
  })
}

function frequencySort(arr) {

  let obj = {};
  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    if (!obj[num]) obj[num] = 1;
    else obj[num] += 1;
  }
  return arr.sort((a,b) =>{
    return (obj[a] - obj[b]) || b-a
  })
}

function ageSort(users) {
  // Fill this in
  return users.sort((a,b) => a.age - b.age)
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
                  frequencySort, ageSort];
