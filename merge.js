function merge(arr1, arr2) {

    const answerArr = [];

    if (arr1.length > arr2.length){
        [arr1, arr2] = [arr2, arr1];
    }

    let arr1idx = 0;
    let arr2idx = 0;

    while (arr1idx < arr1.length){
      if (arr1[arr1idx] > arr2[arr2idx]){
        answerArr.push(arr2[arr2idx]);
        arr2idx++;
      } else {
        answerArr.push(arr1[arr1idx]);
        arr1idx++;
      }
    }
    answerArr.push(...arr2.slice(arr2idx, arr2.length));

    console.log("answerArr : ", answerArr)
    return answerArr;
}

function mergeSort(arr, arr2 = []) {
  if (arr.length <= 1) return merge(arr, arr2);

  // splitting in half
  arr1 = arr.slice(0, Math.floor(arr.length/2));
  arr2 = arr.slice(Math.floor(arr.length/2), arr.length);

  


  // merge
}

module.exports = { merge, mergeSort};