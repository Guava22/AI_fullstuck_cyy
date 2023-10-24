
//基本数据类型
var str = 'holle world' // string 字符串    var 关键字  用来声明变量
var num = 123 // number 数字
var flag = false // boolean 布尔
var un = undefined // 有变量但是没有值
var n = null // 没有变量

//引用类型  对象
var obj = {
    name:'洋洋',
    age:18,
    like:{
        item1: 'eat'
    }
}

// console.log(obj.name);

var arr = ['a','b',2,'d']
// arr[0] = 'aa'
// arr[5] = 'true'
// arr.push(true)//往数组末尾增加一个数据
// arr.pop()//删除数组最后一位  不用传参数
// arr.unshift('hello')//往数组头部增加一个数据
// arr.shift()//往头部删除一位
// arr.splice(2,1)//从哪个下标删除，删除几位  若只写个2，则下标2之后全删除
// arr.splice(2,0,'false')//从下标2开始不删，增加false到下标2

// console.log(arr[0]);
// console.log(arr);

function test(){
    //xxxxx
}
test ()//函数的调用

for (var i = 0; i < arr.length; i++) {//遍历
    arr[i]=arr[i]+1

}
// console.log(arr);
arr.forEach(function(item, index, arr){//回调
    arr[index] = item + 1;
    // console.log(item,index);
})
console.log(arr);


var arr = new Array(4)//调用得到空数组  与arr = [] 相同，但与之相比，可以先内定数组长度
var arr = new Array(4).fill(1)//填充4个1

var arr = [
    [1,2,3,41],
    [1,2,3,42],
    [1,2,3,43],
    [1,2,3,44]
]
console.log(arr[1][3])//读取42

arr.includes(1)//是否存在1
arr.includes(2)//返回值2的下标
  