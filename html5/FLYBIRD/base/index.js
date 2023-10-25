//对象
var obj = {
    name:'冷少',
    age:18,
    girlFriend:'高圆圆',
    health:100,
    smoke:function(){
        console.log('i am smoking,cool!');
        this.health--
    },
    drink:function(){
        console.log('it is cool!');
        this.health++
    }
}

// obj.girlFriend = '刘亦菲'

// delete obj.girlFriend

obj.smoke()
console.log(obj.smoke())
console.log(obj.health)