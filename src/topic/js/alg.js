let arr = [
  [
    ['1-7', '2-6'],
    '4-6',
    [
      ['2-0', '1-4'],
      ['3-9'],
      '4-5',
    ],
  ]
]

// Q1: 完成数组 flat 函数
let newArr=[];
function flat(arr) {
  // code
  arr.forEach(v=>{
    Array.isArray(v)?flat(v):newArr.push(v)
  })

  return newArr
}

arr = flat(arr);
console.log(arr);

// Q2: 计算 arr 中所有的值：'1-7' => 1 * 7 = 7， 返回一个数字组成的数组
function calc(arr) {
  // code
  return arr.map(v=>{
    let vArr=v.split('-');
    return vArr[0]*vArr[1]
  })
  // return arr;
}

arr = calc(arr);
console.log(arr);

// Q3: 对这个数组排序和去重

function sortAndReduce(arr) {
  // code
  let len=arr.length
  for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
      if(arr[i]>arr[j]){
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
      }
      if(arr[i]===arr[j]){
        arr.splice(j,1)
      }
    }
  }
  return arr;
}

/*算法：快速排序*/
function sortAndReduce1(arr) {
  if(arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0]; // 基准值
    const lowArr= []; // 小的放左边
    const hightArr = []; // 大的放右边
    arr.forEach(current => {
      if(current > pivot) hightArr.push(current);
      else if(current < pivot) lowArr.push(current);
    })
    return sortAndReduce(lowArr).concat(pivot, sortAndReduce(hightArr));
  }
}

arr = sortAndReduce(arr);
console.log(arr);

arr = sortAndReduce1(arr);
console.log(arr);