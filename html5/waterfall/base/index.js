var arr = ['a','b','c','d']
var arr2 = [1,2,3]

// arr.forEach(function(a,b,c){//回调
//     console.log(a,b,c)
// })

// var newArr = arr.map(function(item,index,arr){//map 可以返回一个新的数组
//     return item+2
// })
// console.log(newArr);

console.log(arr.lastIndexOf('b'));//lastIndex不能加第二个参数
console.log(arr.indexOf('b',2));//从下标2开始找

console.log(arr.concat(arr2));//将arr2拼接到arr
//console.log([].concat(arr,arr2));效果同上
