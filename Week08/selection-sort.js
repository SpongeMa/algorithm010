//选择排序
function selectionSort(oldArr){
  let arr = [...oldArr];
  let newArr = [];
  for(let i=0;i<oldArr.length;i++){
    let smallIndex = findSmallest(arr);
    newArr.push(arr.splice(smallIndex,1));
    console.log("newArr",newArr);
  }
  return newArr;
}
//找出最小值
function findSmallest(arr){
  let smallest = arr[0];
  let smallIndex = 0;
  for(let i = 1;i<arr.length;i++){
    console.log("compare",smallest,arr[i])
    if(smallest>arr[i]){
      smallest = arr[i];
      smallIndex = i;
    }
  }
  return smallIndex;
}
console.log(selectionSort([5,3,6,2,7]));