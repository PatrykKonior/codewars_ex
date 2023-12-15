function mergeArrays(arr1, arr2) {
    let newArray = arr1.concat(arr2)
    function removeDuplicates(data) {
      return data.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc,curr], []);
    } 
    if (arr1 == [] && arr2 == []) {
      return []
    } return removeDuplicates(newArray).sort(function(a, b){return a - b})
  } 
  