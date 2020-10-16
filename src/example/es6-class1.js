// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPosition = function(){
//     return [this.x,this.y]
// }

// var p1 = new Point(1,2)

// class Point {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     getPosition() {
//         return [this.x,this.y]
//     }
// }
// const p1 = new Point(1,2);

class Info {
    constructor(age){
        this._age = age;
    }
    set age (newAge) {
        this._age = newAge;
    }
    get age(){
        return thius._age
    }
}
const infos = new Info(18)
infos.age = 17;

// 类的表达式定义
// const infos = class c {

// }

class Point {
    // z
    constructor(x,y){
        this.x = x;
        this.y = y;
        // z
    }

    getPosition() {
        return [this.x,this.y]
    }
    // static y = 2 // 提案还没有通过
    // #ownProp = 12// 私有属性
    // 只有静态方法
    static getClassName() {
        return Point.name
    }
    // 一般这样定义私有方法，一般不给其他人用
    _func(){

    }
}
Point.y = 2 // 静态属性
const p = new Point(1,2);
console.log(Point.getClassName())

const _func2 = ()=>{

}
class Point1 {
    func1(){
        _func2.call(this)
    }
}
const o = new Point1();
console.log(p._func2)// 找不到

/* 利用symbol 让别人拿不到该方法
// a.js
const func1 = Symbol('func1')
class Point2 {
    static [func1] (){

    }
}

// b.js
import Point2 from './a.js'
const p = new Point2();
console.log(p)
*/

// new.target
function Point3(){
    console.log(new.target === arguments.callee)
}
const p3 = new Point3();

class Point4 {
    constructor() {
        console.log(new.target,arguments)
    }
}
const p4 = new Point4(1,2,3);

const obj = {name:'jkl'}
let haha = obj && obj.name
console.log(haha)


